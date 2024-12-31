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
  origin: 'http://localhost:5173', // Only allow your frontend to make requests
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify the methods you're allowing
  allowedHeaders: ['Content-Type', 'Authorization'], // Specify which headers are allowed
  credentials: true, // Allow cookies if needed
  preflightContinue: false, // Don't send the response to OPTIONS requests manually
  optionsSuccessStatus: 200, // For legacy browser support
}));

// Set up multer for file upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // save the image in the 'uploads' folder
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // give unique name to the file
  },
});
const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // Limit to 5 MB
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

// Endpoint to send email with image attachment
app.post('/send', upload.single('image'), (req, res) => {
  console.log(req.file); // Log the file data to check if it's being uploaded
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  const { name, email, message } = req.body;
  const image = req.file;

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
    attachments: [
      {
        filename: image.filename,
        path: path.join(__dirname, 'uploads', image.filename),
      }
    ]
  };

  transporter
    .sendMail(mailOptions)
    .then((resp) => {
      // Remove uploaded file after email is sent successfully
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
