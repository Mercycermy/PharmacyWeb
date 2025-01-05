import React, { useContext } from "react";
import { motion } from "framer-motion";
import { SlideLeft } from "../utility/animation";
import Delivery from "../assets/delivery.png";
import Health from "../assets/healthtracking.png";
import Expert from "../assets/expert-guidance.png";
import  ThemeContext  from "./contexts/theme"; // Assuming you have a ThemeContext
import LanguageContext from "./contexts/LanguageContext";

const getImage = (imageName) => {
  switch (imageName) {
    case 'Delivery':
      return Delivery;
    case 'Health':
      return Health;
    case 'Expert':
      return Expert;
    default:
      return null; // Default case if no matching image is found
  }
};

const WhyChooseUs = () => {
  const { themeName } = useContext(ThemeContext);
  const { languageData, toggleLanguage } = useContext(LanguageContext);
  const { pharmacyServices, whyChooseUs, aboutUs } = languageData;

  return (
    <div className={`app ${themeName}`} id="about">
      {/* About Us Section */}
      <div className="container py-12">
        <div className="text-center space-y-6 max-w-[700px] mx-auto mb-12">
          <h1 className={`uppercase font-bold text-3xl ${themeName === 'dark' ? 'text-[#0066CC]' : 'text-primary'}`}>
          {aboutUs.title}
          </h1>
          <p className="text-lg leading-relaxed">
          {aboutUs.desc}
          </p>
          <a
            href="#"
            className={`inline-flex items-center font-medium hover:underline ${themeName === 'dark' ? 'text-gray' : 'text-primary'}`}
          >
           {aboutUs.more}
          </a>
        </div>
      </div>

      {/* What We Do Section */}
      <div className=" py-12">
        <div className="space-y-4 text-center mb-8">
          <h2 className={`font-semibold text-2xl ${themeName === 'dark' ? 'text-[#0066CC]' : 'text-primary'}`}>{aboutUs.title1}</h2>
        </div>
        <div className="flex flex-wrap gap-12">
          {pharmacyServices.map((service, index) => (
            <motion.div
              key={service.id}
              variants={SlideLeft(service.delay)}
              initial="hidden"
              whileInView="visible"
              className={`w-full flex flex-col sm:flex-row  shadow-md rounded-lg overflow-hidden ${themeName === 'dark' ? 'bg-bg-alt text-white' : 'bg-bg-alt text-gray-700'}`}
            >
              <img
                src={getImage(service.image)}
                alt={service.title}
                className="w-full sm:w-2/3 h-[300px] object-contain "
              />
              <div className="p-6 sm:w-1/3 text-center sm:text-left space-y-3"  key={index}>
                <h3 className={`font-bold text-lg ${themeName === 'dark' ? 'text-white' : 'text-primary'}`}>{service.title}</h3>
                <p className="text-sm">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="container py-12">
        <div className="space-y-4 text-center mb-8">
          <h2 className={`font-semibold text-2xl ${themeName === 'dark' ? 'text-[#0066CC]' : 'text-primary'}`}>{aboutUs.title2}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {whyChooseUs.map((service) => (
            <motion.div
              key={service.id}
              variants={SlideLeft(service.delay)}
              initial="hidden"
              whileInView="visible"
              className={`shadow-md rounded-lg overflow-hidden ${themeName === 'dark' ? 'bg-bg-alt text-white' : 'bg-bg-alt text-gray-700'}`}
            >
              <div className="p-6 text-center space-y-3">
                <h3 className={`font-bold text-lg ${themeName === 'dark' ? 'text-white' : 'text-primary'}`}>{service.title}</h3>
                <p className="text-sm">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
