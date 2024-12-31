import express from 'express';
import multer from 'multer';
import nodemailer from 'nodemailer';
import { USER, PASSWORD, SENDER, RECEIVER } from './config/keys.js'; // Add RECEIVER in keys.js for the admin's email
import path from 'path';
import fs from 'fs';
import cors from 'cors';
import { fileURLToPath } from 'url';

// Define __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 8080;

// Enable CORS with preflight support
app.use(cors({
  origin: (origin, callback) => {
    const allowedOrigins = ['http://localhost:5173', 'https://mercycermy.github.io'];
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  preflightContinue: false,
  optionsSuccessStatus: 200,
}));

// Set up multer for file upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 },
});

const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Use JSON parser middleware
app.use(express.json());

// Create transport for nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: USER,
    pass: PASSWORD,
  },
});

// Serve the static folder with images
app.use(express.static('uploads'));

app.post('/send', upload.single('image'), (req, res) => {
  console.log('Request Body:', req.body);  // Log the form data
  console.log('Uploaded File:', req.file); // Log the uploaded file (if any)

  const { name, email, message } = req.body;
  const image = req.file; // image will be undefined if no file is uploaded

  // Check if all required fields are provided
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  const mailOptions = {
    from: `${SENDER} 🐶`,
    to: RECEIVER,
    subject: 'Contact Form Submission 🌟',
    html: `
      <b style='color:red;'>Contact Form Submission</b><br />
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong><br /> ${message}</p>
    `,
  };

  // If an image is provided, add it as an attachment
  if (image) {
    mailOptions.attachments = [
      {
        filename: image.filename,
        path: path.join(__dirname, 'uploads', image.filename),
      },
    ];
  }

  transporter
    .sendMail(mailOptions)
    .then((resp) => {
      // Remove uploaded file after email is sent successfully, only if image was uploaded
      if (image) fs.unlinkSync(path.join(__dirname, 'uploads', image.filename));
      res.json({ message: 'Email sent successfully!', resp });
    })
    .catch((err) => {
      console.error("Error while sending email:", err);
      res.status(500).json({ message: 'Error sending email', error: err.message });
    });
});

// Listen on port
app.listen(PORT, () => console.info(`Server has started on ${PORT}`));
