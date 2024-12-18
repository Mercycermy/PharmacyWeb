import React, { useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import Brightness2Icon from '@mui/icons-material/Brightness2';
import ThemeContext from './contexts/theme'; // Correctly import the ThemeContext

const ResponsiveMenu = ({ isOpen, toggleTheme }) => {
  const { themeName } = useContext(ThemeContext); // Destructure properly

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
            <li><a href="/">Home</a></li>
              <li><a href="#about"  className="page-scroll">About</a></li>
              <li><a href="#product"  className="page-scroll">Product</a></li>
              <li><a href="#faq"  className="page-scroll">F&A Questions</a></li>
              <li><a href="#contact"  className="page-scroll">Contact</a></li>
            </ul>
           
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
