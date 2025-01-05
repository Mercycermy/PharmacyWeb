import React, { useContext } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { FaTelegramPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import "./Footer.css";
import  ThemeContext  from "./contexts/theme";
import LanguageContext from "./contexts/LanguageContext";


const Footer = ({}) => {
  const parentVariant = {
    view: {
      opacity: [0, 1],
      transition: {
        duration: 0.1,
        when: "beforeChildren",
        staggerChildren: 0.15,
      },
    },
  };

  const childSocialVariant = {
    view: {
      y: [-300, 0],
      opacity: [0, 1],
      transition: {
        opacity: {
          duration: 0.6,
        },
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const childCopyVariant = {
    view: {
      y: [-100, 0],
      opacity: [0, 1],
      transition: {
        opacity: {
          duration: 0.6,
        },
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };
  const { themeName } = useContext(ThemeContext);
  const { languageData, toggleLanguage } = useContext(LanguageContext);
  const { footer } = languageData;
  return (
    <div className={`app__flex app__footer ${themeName === 'dark' ? 'bg-gray-800' : 'bg-[#f0f7ff]'}`}>
      <motion.div
        className="app__footer-contacts app__flex flex-row items-center"
        variants={parentVariant}
        whileInView="view"
      >
        {[{
          href: "https://www.linkedin.com/in/empire-health-care-b0783a343?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          icon: <GrLinkedinOption />,
        }, {
          href: "https://t.me/Empirepharmacyy",
          icon: <FaTelegramPlane />,
        }, {
          href: "https://www.facebook.com/profile.php?id=61571042468592&mibextid=ZbWKwL",
          icon: <FaFacebook />,
        }, {
          href: "https://maps.app.goo.gl/u8rrdEj1sA4bdXpo8",
          icon: <FaMapMarkerAlt />,
        }].map((social, index) => (
          <motion.div
            className="app__flex mb-4"
            key={index}
            variants={childSocialVariant}
            whileInView="view"
          >
            <a
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className={`app__flex text-2xl ${themeName === 'dark' ? 'text-gray-300' : 'text-secondary'}`}
            >
              {social.icon}
            </a>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="app__footer-copyrights"
        variants={parentVariant}
        whileInView="view"
      >
        {[ footer.title1, footer.title2].map((text, index) => (
          <motion.p
            className={`p-text ${themeName === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}
            key={index}
            variants={childCopyVariant}
            whileInView="view"
            dangerouslySetInnerHTML={{ __html: text }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Footer;
