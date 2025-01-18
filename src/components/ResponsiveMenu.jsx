import React,  { useContext } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { motion, AnimatePresence } from 'framer-motion';
import LanguageContext from "./contexts/LanguageContext";
import ThemeContext from './contexts/theme';

const ResponsiveMenu = ({ isOpen }) => {
  const { themeName } = useContext(ThemeContext);
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
              <li><Link to="/" className="page-scroll">{home.homeLink}</Link></li>
              <li><Link to="#about" className="page-scroll">{home.aboutLink}</Link></li>
              <li><Link to="#product" className="page-scroll">{home.productLink}</Link></li>
              <li><Link to="#faq" className="page-scroll">{home.faqLink}</Link></li>
              <li><Link to="#contact" className="page-scroll">{home.contactLink}</Link></li> {/* Correct link */}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
