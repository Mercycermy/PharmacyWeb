import React, { useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LanguageContext from "./contexts/LanguageContext";
import ThemeContext from './contexts/theme'; // Correctly import the ThemeContext

const ResponsiveMenu = ({ isOpen, toggleTheme }) => {
  const { themeName } = useContext(ThemeContext); // Destructure properly
  const { languageData } = useContext(LanguageContext);
  const { home } = languageData;

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="absolute top-20 left-0 w-full h-screen z-20 lg:hidden"
        >
          <div className="text-xl font-semibold uppercase bg-primary text-black py-10 m-6 rounded-3xl">
            <ul className="flex flex-col justify-center items-center gap-10">
            <li><a href="/">{home.homeLink}</a></li>
              <li><a href="#about"  className="page-scroll">{home.aboutLink}</a></li>
              <li><a href="#product"  className="page-scroll">{home.productLink}</a></li>
              <li><a href="#faq"  className="page-scroll">{home.faqLink}</a></li>
              <li><a href="#contact"  className="page-scroll">{home.contactLink}</a></li>
            </ul>
           
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
