import React from "react";
import { MdComputer, MdMenu } from "react-icons/md";
import { motion } from "framer-motion";
import ResponsiveMenu from "./ResponsiveMenu.jsx";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import Brightness2Icon from "@mui/icons-material/Brightness2";
import LanguageIcon from "@mui/icons-material/Language"; // Language Icon
import { useContext } from "react";
import ThemeContext from "./contexts/theme.jsx";
import LightLogo from "../assets/empire logo.png";
import DarkMode from "../assets/empire logo night mode.png";
import LanguageContext from "./contexts/LanguageContext";

const Navbar = () => {
  const { themeName, toggleTheme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = React.useState(false);
  const { languageData, toggleLanguage } = useContext(LanguageContext);
  const { NavbarMenu, language } = languageData;

  

  return (
    <>
      <motion.div
        className={`navbar fixed top-0 left-0 w-full z-50 shadow-md ${themeName === "dark" ? "bg-[#121212] text-white" : "bg-white text-gray-800"}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="container flex justify-between items-center py-4">
          {/* Logo section */}
          <div className="text-2xl flex items-center gap-2 font-bold">
            <img
              src={themeName === 'light' ? LightLogo : DarkMode}
              alt="Logo"
              className="text-4xl text-secondary w-30 h-12" // smaller size
            />
          </div>

          {/* Menu section */}
          <div className="hidden lg:block">
            <ul className="flex items-center gap-6">
              {NavbarMenu.map((item, index) => (
                <li key={item.id}>
                  <a
                    href={item.link}
                    className="inline-block text-gray-600 text-sm xl:text-base py-1 px-2 xl:px-3 hover:text-secondary transition-all duration-300 font-semibold"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Theme and Language Toggle Buttons */}
          <div className="flex items-center justify-between gap-4">
            {/* Theme Toggle Button */}
            <button
              type="button"
              onClick={toggleTheme}
              className="btn btn--icon nav__theme"
              aria-label="toggle theme"
            >
              {themeName === 'light' ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
            </button>

            {/* Language Toggle Button with label */}
            <button
              type="button"
              onClick={toggleLanguage}
              className="btn btn--icon nav__language"
              aria-label="toggle language"
            >
              <LanguageIcon /> {language.ln}
              
            </button>

            {/* Mobile Menu Toggle */}
            <div onClick={() => setIsOpen(!isOpen)}>
              <MdMenu className="text-4xl lg:hidden" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mobile Sidebar section */}
      <ResponsiveMenu isOpen={isOpen} />
    </>
  );
};

export default Navbar;
