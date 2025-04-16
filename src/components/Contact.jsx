import React, { useState, useContext } from "react";
import {
  FaPhone, FaEnvelope, FaMapMarkerAlt,
  FaTelegram, FaFacebook, FaLinkedin, FaTiktok
} from "react-icons/fa";
import ThemeContext from "./contexts/theme";
import LanguageContext from "./contexts/LanguageContext";

const initialState = {
  name: "",
  email: "",
  message: "",
  image: null,
};

const Contact = (props) => {
  const [{ name, email, message, image }, setState] = useState(initialState);
  const { themeName } = useContext(ThemeContext);
  const { languageData } = useContext(LanguageContext);
  const { contact } = languageData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setState((prev) => ({ ...prev, image: e.target.files[0] }));
  };

  const clearState = () => setState(initialState);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);
    if (image) formData.append('image', image);

    try {
      const response = await fetch('https://myprojectemailsender.onrender.com/send/', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        alert("✅ Your message has been sent successfully!");
        clearState();
      } else {
        alert("❌ Failed to send your message. Please try again.");
        console.error(result);
      }
    } catch (error) {
      alert("🚫 An error occurred. Please try again.");
      console.error("Error:", error);
    }
  };

  const labelClass = `block font-bold mb-2 ${themeName === "dark" ? "text-gray-300" : "text-gray-700"}`;
  const inputClass = `w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-${themeName === "dark" ? "white" : "gray-300"}`;

  return (
    <div className={`py-14 mb-10 ${themeName === 'dark' ? 'bg-gray-800' : 'bg-[#f0f7ff]'}`} id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className={`text-4xl font-bold ${themeName === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>{contact.title}</h2>
          <p className={`mt-4 ${themeName === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{contact.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className={`p-6 rounded-lg shadow-lg ${themeName === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-700"}`}>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className={labelClass}>{contact.nameLabel}</label>
                <input type="text" id="name" name="name" value={name} onChange={handleChange} required placeholder={contact.namePlaceholder} className={inputClass} />
              </div>
              <div>
                <label htmlFor="email" className={labelClass}>{contact.emailLabel}</label>
                <input type="email" id="email" name="email" value={email} onChange={handleChange} required placeholder={contact.emailPlaceholder} className={inputClass} />
              </div>
              <div>
                <label htmlFor="message" className={labelClass}>{contact.messageLabel}</label>
                <textarea id="message" name="message" rows="5" value={message} onChange={handleChange} required placeholder={contact.messagePlaceholder} className={inputClass}></textarea>
              </div>
              <div>
                <label htmlFor="image" className={labelClass}>{contact.imageLabel}</label>
                <input type="file" id="image" name="image" accept="image/*" onChange={handleFileChange} className="w-full" />
              </div>
              <div className="mt-6">
                <button type="submit" className="w-full py-3 px-6 bg-secondary text-white rounded-lg hover:bg-secondary-dark focus:outline-none">
                  {contact.submitButton}
                </button>
              </div>
            </div>
          </form>

          {/* Contact Info */}
          <div className="space-y-6 flex flex-col justify-center">
            {[
              { icon: FaMapMarkerAlt, text: props.data?.address || contact.address, link: "https://maps.app.goo.gl/u8rrdEj1sA4bdXpo8" },
              { icon: FaPhone, text: props.data?.phone || "+251 908 77 99 99", link: `tel:${props.data?.phone}` },
              { icon: FaEnvelope, text: props.data?.email || "birukayalew810@gmail.com", link: `mailto:${props.data?.email}` },
              { icon: FaTelegram, text: contact.telegram, link: "https://t.me/Empirepharmacyy" },
              { icon: FaLinkedin, text: contact.linkedin, link: "https://www.linkedin.com/in/empire-health-care-b0783a343" },
              { icon: FaFacebook, text: contact.facebook, link: "https://www.facebook.com/profile.php?id=61571042468592" },
              { icon: FaTiktok, text: contact.tiktok, link: "https://tiktok.com/@empire.pharmacy" },
            ].map(({ icon: Icon, text, link }, i) => (
              <div key={i} className="flex items-center gap-4">
                <Icon className={`text-${themeName === 'dark' ? 'gray-300' : 'secondary'} text-3xl`} />
                <a href={link} target="_blank" rel="noreferrer" className={`${themeName === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  {text}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
