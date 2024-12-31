import React, { useContext } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaTelegram, FaFacebook, FaLinkedin, FaTiktok } from "react-icons/fa";
import ThemeContext from "./contexts/theme"; // Ensure you have this import if it's not already
import emailjs from 'emailjs-com';


const initialState = {
  name: "",
  email: "",
  message: "",
  image: null, // added to handle image uploads
};

const Contact = (props) => {
  const [{ name, email, message, image }, setState] = React.useState(initialState);
  const { themeName } = useContext(ThemeContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { files } = e.target;
    setState((prevState) => ({ ...prevState, image: files[0] }));
  };

  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    // If there's an image, append it to the form data
    const formData = new FormData(form);
    if (image) {
      formData.append("image", image);
    }

    // Use the form element directly as the third parameter
    emailjs.sendForm("service_g7fj9x1", "template_e04sk69", form, "47W1VeLGBhasjhak1")
      .then(
        (result) => {
          console.log("Email successfully sent:", result.text);
          clearState();
        },
        (error) => {
          console.log("Error sending email:", error.text);
        }
      );
  };



  return (
    <div className={`py-14 mb-10 ${themeName === 'dark' ? 'bg-gray-800' : 'bg-[#f0f7ff]'}`} id="contact">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className={`text-4xl font-bold ${themeName === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>Contact</h2>
          <p className={`text-${themeName === 'dark' ? 'gray-300' : 'gray-600'} mt-4`}>
            Please fill out the form below to reach us, and we will respond as quickly as possible.
          </p>
        </div>

        {/* Contact Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Section - Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className={`text-${themeName === 'dark' ? 'gray-300' : 'secondary'} text-3xl`} />
              <a
                href="https://maps.app.goo.gl/u8rrdEj1sA4bdXpo8"
                target="_blank"
                rel="noreferrer"
                className={`text-${themeName === 'dark' ? 'gray-300' : 'gray-600'}`}
              >
                {props.data?.address || "Empire Health Care- 22, Addis Ababa, Ethiopia"}
              </a>
            </div>

            <div className="flex items-center gap-4">
              <FaPhone className={`text-${themeName === 'dark' ? 'gray-300' : 'secondary'} text-3xl`} />
              <a
                href={`tel:${props.data?.phone || "+251 908 77 99 99"}`}
                className={`text-${themeName === 'dark' ? 'gray-300' : 'gray-600'}`}
              >
                {props.data?.phone || "+251 908 77 99 99"}
              </a>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className={`text-${themeName === 'dark' ? 'gray-300' : 'secondary'} text-3xl`} />
              <a
                href={`mailto:${props.data?.email || "birukayalew810@gmail.com"}`}
                className={`text-${themeName === 'dark' ? 'gray-300' : 'gray-600'}`}
              >
                {props.data?.email || "birukayalew810@gmail.com"}
              </a>
            </div>

            <div className="flex items-center gap-4">
              <FaTelegram className={`text-${themeName === 'dark' ? 'gray-300' : 'secondary'} text-3xl`} />
              <a href="https://t.me/Empirepharmacyy" target="_blank" rel="noopener noreferrer" className={`text-${themeName === 'dark' ? 'gray-300' : 'gray-600'}`}>
                Telegram
              </a>
            </div>
            <div className="flex items-center gap-4">
              <FaLinkedin className={`text-${themeName === 'dark' ? 'gray-300' : 'secondary'} text-3xl`} />
              <a href="https://www.linkedin.com/in/empire-health-care-b0783a343?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className={`text-${themeName === 'dark' ? 'gray-300' : 'gray-600'}`}>
                LinkedIn
              </a>
            </div>
            <div className="flex items-center gap-4">
              <FaFacebook className={`text-${themeName === 'dark' ? 'gray-300' : 'secondary'} text-3xl`} />
              <a href="https://www.facebook.com/profile.php?id=61571042468592&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className={`text-${themeName === 'dark' ? 'gray-300' : 'gray-600'}`}>
                Facebook
              </a>
            </div>
            <div className="flex items-center gap-4">
              <FaTiktok className={`text-${themeName === 'dark' ? 'gray-300' : 'secondary'} text-3xl`} />
              <a href="https://tiktok.com/@empire.pharmacy" target="_blank" rel="noopener noreferrer" className={`text-${themeName === 'dark' ? 'gray-300' : 'gray-600'}`}>
                TikTok
              </a>
            </div>
          </div>

          {/* Right Section - Form */}
          <form onSubmit={handleSubmit} className={`p-6 rounded-lg shadow-lg ${themeName === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-700'}`}>
            <div className="space-y-4">
              <div>
                <label className={`block text-${themeName === 'dark' ? 'gray-300' : 'gray-700'} font-bold mb-2`} htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={handleChange}
                  required
                  className={`w-full p-3 border rounded-lg focus:outline-none focus:ring  focus:ring-${themeName === 'dark' ? 'white' : 'gray-300'} ${themeName === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'
                    }`}
                />
              </div>
              <div>
                <label className={`block text-${themeName === 'dark' ? 'gray-300' : 'gray-700'} font-bold mb-2`} htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleChange}
                  required
                  className={`w-full p-3 border rounded-lg focus:outline-none focus:ring  focus:ring-${themeName === 'dark' ? 'white' : 'gray-300'} ${themeName === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'
                    }`}
                />
              </div>
              <div>
                <label className={`block text-${themeName === 'dark' ? 'gray-300' : 'gray-700'} font-bold mb-2`} htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Your message here"
                  value={message}
                  onChange={handleChange}
                  required
                  className={`w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-${themeName === 'dark' ? 'white' : 'gray-300'} ${themeName === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'
                    }`}
                ></textarea>
              </div>
              <div>
                <label className={`block text-${themeName === 'dark' ? 'gray-300' : 'gray-700'} font-bold mb-2`} htmlFor="image">
                  Attach Image
                </label>
                <input
                  type="file"
                  id="image"

                  name="image"
                  accept="image/*"
                  onChange={handleFileChange}
                  className={`w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-${themeName === 'dark' ? 'secondary' : 'gray-300'}`}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className={`w-full bg-${themeName === 'dark' ? 'secondary' : 'secondary'} text-white font-bold py-3 rounded-lg hover:bg-${themeName === 'dark' ? 'secondary-dark' : 'secondary'}-dark transition duration-300`}
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
