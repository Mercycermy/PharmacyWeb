import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const initialState = {
  name: "",
  email: "",
  message: "",
};

const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

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
    <div className="py-14 mb-10 bg-[#f0f7ff]">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800">Contact</h2>
          <p className="text-gray-600 mt-4">
            Please fill out the form below to reach us, and we will respond as quickly as possible.
          </p>
        </div>

        {/* Contact Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Section - Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-secondary text-3xl" />
              <p className="text-gray-600">{props.data?.address || "Loading Address"}</p>
            </div>
            <div className="flex items-center gap-4">
              <FaPhone className="text-secondary text-3xl" />
              <p className="text-gray-600">{props.data?.phone || "Loading Phone"}</p>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-secondary text-3xl" />
              <p className="text-gray-600">{props.data?.email || "Loading Email"}</p>
            </div>
          </div>

          {/* Right Section - Form */}
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
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
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-secondary"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
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
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-secondary"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
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
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-secondary"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-secondary text-white font-bold py-3 rounded-lg hover:bg-secondary-dark transition duration-300"
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
