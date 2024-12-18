import React, { useContext } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import ThemeContext from "./contexts/theme"; // Ensure you have this import if it's not already

const initialState = {
  name: "",
  email: "",
  message: "",
};

const Contact = (props) => {
  const [{ name, email, message }, setState] = React.useState(initialState);
  const { themeName } = useContext(ThemeContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_PUBLIC_KEY")
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
              <p className={`text-${themeName === 'dark' ? 'gray-300' : 'gray-600'}`}>{props.data?.address || "Loading Address"}</p>
            </div>
            <div className="flex items-center gap-4">
              <FaPhone className={`text-${themeName === 'dark' ? 'gray-300' : 'secondary'} text-3xl`} />
              <p className={`text-${themeName === 'dark' ? 'gray-300' : 'gray-600'}`}>{props.data?.phone || "Loading Phone"}</p>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className={`text-${themeName === 'dark' ? 'gray-300' : 'secondary'} text-3xl`} />
              <p className={`text-${themeName === 'dark' ? 'gray-300' : 'gray-600'}`}>{props.data?.email || "Loading Email"}</p>
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
                  className={`w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-${themeName === 'dark' ? 'secondary' : 'gray-300'}`}
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
                  className={`w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-${themeName === 'dark' ? 'secondary' : 'gray-300'}`}
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
                  className={`w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-${themeName === 'dark' ? 'secondary' : 'gray-300'}`}
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className={`w-full bg-${themeName === 'dark' ? 'secondary-dark' : 'secondary'} text-white font-bold py-3 rounded-lg hover:bg-${themeName === 'dark' ? 'secondary-dark' : 'secondary'}-dark transition duration-300`}
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
