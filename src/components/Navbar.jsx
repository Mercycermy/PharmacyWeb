import React, { useContext, useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import { motion } from "framer-motion";
import ResponsiveMenu from "./ResponsiveMenu.jsx";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import Brightness2Icon from "@mui/icons-material/Brightness2";
import LanguageIcon from "@mui/icons-material/Language";
import ThemeContext from "./contexts/theme.jsx";
import LanguageContext from "./contexts/LanguageContext";
import LightLogo from "../assets/empire logo.png";
import DarkMode from "../assets/empire logo night mode.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { themeName, toggleTheme } = useContext(ThemeContext);
  const { languageData, toggleLanguage } = useContext(LanguageContext);
  const { NavbarMenu, language } = languageData;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        className={`navbar fixed top-0 left-0 w-full z-50 shadow-md ${themeName === "dark" ? "bg-[#121212] text-white" : "bg-white text-gray-800"}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="container max-w-screen mx-auto flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-2xl flex items-center gap-2 font-bold">
            <img
              src={themeName === "light" ? LightLogo : DarkMode}
              alt="Logo"
              className="w-30 h-12"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <ul className="flex items-center gap-6">
              {NavbarMenu.map((item) => (
                <li key={item.id}>
                  {item.link.startsWith("#") ? (
                    <a
                      href={item.link}
                      className="inline-block text-sm xl:text-base py-1 px-2 xl:px-3 hover:text-secondary transition-all duration-300 font-semibold"
                    >
                      {item.title}
                    </a>
                  ) : (
                    <Link
                      to={item.link}
                      className="inline-block text-sm xl:text-base py-1 px-2 xl:px-3 hover:text-secondary transition-all duration-300 font-semibold"
                    >
                      {item.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Right-side buttons */}
          <div className="flex items-center gap-4">
            <button onClick={toggleTheme} className="btn btn--icon" aria-label="toggle theme">
              {themeName === "light" ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
            </button>

            <button onClick={toggleLanguage} className="btn btn--icon" aria-label="toggle language">
              <LanguageIcon /> {language.ln}
            </button>

            {/* Mobile Menu Toggle */}
            <div onClick={() => setIsOpen(!isOpen)} className="lg:hidden cursor-pointer">
              {isOpen ? <MdClose className="text-4xl" /> : <MdMenu className="text-4xl" />}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mobile Menu Component */}
      <ResponsiveMenu isOpen={isOpen} handleClose={() => setIsOpen(false)} />
    </>
  );
};

export default Navbar;
