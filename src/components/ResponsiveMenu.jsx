import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import LanguageContext from "./contexts/LanguageContext";
import ThemeContext from './contexts/theme';

const ResponsiveMenu = ({ isOpen, handleClose }) => {
  const { themeName } = useContext(ThemeContext);
  const { languageData } = useContext(LanguageContext);
  const { home } = languageData;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className={`fixed top-20 left-0 w-full h-screen z-[999] lg:hidden ${
            themeName === "dark" ? "bg-[#121212] text-white" : "bg-white text-black"
          }`}
        >
          <div className="text-xl font-semibold uppercase py-10 px-6 rounded-3xl">
            <ul className="flex flex-col justify-center items-center gap-10">
              <li><Link to="/" onClick={handleClose}>{home.homeLink}</Link></li>
              <li><a href="#about" onClick={handleClose}>{home.aboutLink}</a></li>
              <li><a href="#product" onClick={handleClose}>{home.productLink}</a></li>
              <li><a href="#faq" onClick={handleClose}>{home.faqLink}</a></li>
              <li><a href="#contact" onClick={handleClose}>{home.contactLink}</a></li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
