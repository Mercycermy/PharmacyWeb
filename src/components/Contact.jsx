import React, { useContext, useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaTelegram, FaFacebook, FaLinkedin, FaTiktok } from "react-icons/fa";
import ThemeContext from "./contexts/theme";

const initialState = {
  name: "",
  email: "",
  message: "",
  image: null, // added to handle image uploads
};

const Contact = (props) => {
  const [{ name, email, message, image }, setState] = useState(initialState);
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
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);

    // Only append the image if it's selected
    if (image) {
      formData.append('image', image);
    }

    try {
      const response = await fetch('http://192.168.8.10:8080/send', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      if (response.ok) {
        console.log('Email sent successfully:', result);
        clearState(); // Clear the form if successful
        window.alert("Your message has been sent successfully!");
      } else {
        console.error('Failed to send email:', result);
        window.alert("Failed to send your message. Please try again later.");
      }
    } catch (error) {
      console.error('Error sending email:', error);
      window.alert("An error occurred. Please try again later.");
    }
  };



  return (
    <div className={`py-14 mb-10 ${themeName === 'dark' ? 'bg-gray-800' : 'bg-[#f0f7ff]'}`} id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className={`text-4xl font-bold ${themeName === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>Contact</h2>
          <p className={`text-${themeName === 'dark' ? 'gray-300' : 'gray-600'} mt-4`}>
            Please fill out the form below to reach us, and we will respond as quickly as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
              <a href="https://www.linkedin.com/in/empire-health-care-b0783a343" target="_blank" rel="noopener noreferrer" className={`text-${themeName === 'dark' ? 'gray-300' : 'gray-600'}`}>
                LinkedIn
              </a>
            </div>
            <div className="flex items-center gap-4">
              <FaFacebook className={`text-${themeName === 'dark' ? 'gray-300' : 'secondary'} text-3xl`} />
              <a href="https://www.facebook.com/profile.php?id=61571042468592" target="_blank" rel="noopener noreferrer" className={`text-${themeName === 'dark' ? 'gray-300' : 'gray-600'}`}>
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

          <form onSubmit={handleSubmit} className={`p-6 rounded-lg shadow-lg ${themeName === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-700"}`}>
            <div className="space-y-4">
              <div>
                <label className={`block text-${themeName === "dark" ? "gray-300" : "gray-700"} font-bold mb-2`} htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={handleChange}
                  required
                  className={`w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-${themeName === "dark" ? "white" : "gray-300"}`}
                />
              </div>
              <div>
                <label className={`block text-${themeName === "dark" ? "gray-300" : "gray-700"} font-bold mb-2`} htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleChange}
                  required
                  className={`w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-${themeName === "dark" ? "white" : "gray-300"}`}
                />
              </div>
              <div>
                <label className={`block text-${themeName === "dark" ? "gray-300" : "gray-700"} font-bold mb-2`} htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Your message here"
                  value={message}
                  onChange={handleChange}
                  required
                  className={`w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-${themeName === "dark" ? "white" : "gray-300"}`}
                ></textarea>
              </div>
              <div>
                <label className={`block text-${themeName === "dark" ? "gray-300" : "gray-700"} font-bold mb-2`} htmlFor="image">Attach Image</label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="block w-full"
                />
              </div>
              <div className="mt-6">
                <button type="submit" className="w-full py-3 px-6 bg-secondary text-white rounded-lg hover:bg-secondary-dark focus:outline-none">
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
