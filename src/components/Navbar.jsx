import React from "react";
import { NavbarMenu } from "./data.jsx";
import { MdComputer, MdMenu } from "react-icons/md";
import { motion } from "framer-motion";
import ResponsiveMenu from "./ResponsiveMenu.jsx";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import Brightness2Icon from "@mui/icons-material/Brightness2";
import { useContext } from "react";
import ThemeContext from "./contexts/theme.jsx";
import LightLogo from "../assets/empire logo.png";
import DarkMode from "../assets/empire logo night mode.png"

const Navbar = () => {
  const { themeName, toggleTheme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
     <motion.div
  className="navbar"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5, delay: 0.5 }}
>
  <div className="container flex justify-between items-center py-6">
    {/* Logo section */}
    <div className="text-2xl flex items-center gap-2 font-bold">
      <img
        src={themeName === 'light' ? LightLogo : DarkMode} // replace with your paths to logos
        alt="Logo"
        className="text-4xl text-secondary w-30 h-12" // smaller size
      />
    </div>

    {/* Menu section */}
    <div className="hidden lg:block">
      <ul className="flex items-center gap-6">
        {NavbarMenu.map((item) => (
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

    {/* Theme Toggle Button */}
    <div className="flex items-center justify-between">
      <div onClick={() => setIsOpen(!isOpen)}>
        <MdMenu className="text-4xl lg:hidden" />
      </div>

      <button
        type="button"
        onClick={toggleTheme}
        className="btn btn--icon nav__theme"
        aria-label="toggle theme"
      >
        {themeName === 'light' ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
      </button>
    </div>
  </div>
</motion.div>


      {/* mobile Sidebar section */}
      <ResponsiveMenu isOpen={isOpen} />
    </>
  );
};

export default Navbar;
