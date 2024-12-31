import React, { useContext } from "react";
import HeroImg from "../assets/hero.png";

import { motion } from "framer-motion";
import { SlideRight } from "../utility/animation";
import ThemeContext from "./contexts/theme";

const Hero = () => {
  const { themeName } = useContext(ThemeContext);
  return (
    <>
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[750px] w-full relative">
        {/* brand info */}
        <div className="flex flex-col justify-center py-14 md:pr-16 xl:pr-40 md:py-0">
          <div className="text-center md:text-left space-y-6">
            
          <motion.h1
              variants={SlideRight(0.6)}
              initial="hidden"
              animate="visible"
              className={`uppercase font-bold text-3xl lg:text-5xl !leading-tight ${
                themeName === "dark" ? "text-[#FFCC00]" : "text-primary"
              }`}
            >
              Find Your Perfect Health Solution
            </motion.h1>
            <motion.p
              variants={SlideRight(0.8)}
              initial="hidden"
              animate="visible"
            >
             Welcome to Empire Pharmacy, where your health and well-being are our top priorities!
            </motion.p>
            {/* button section */}
            <motion.div
              variants={SlideRight(1.0)}
              initial="hidden"
              animate="visible"
              className="flex gap-8 justify-center md:justify-start !mt-8 items-center"
            >
              <button className="primary-btn">
                
               <a href="#about">Learn More</a> </button>
              
            </motion.div>
          </div>
        </div>
        {/* Hero image */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            src={HeroImg}
            alt=""
            className="w-[350px] md:w-[550px] xl:w-[700px]"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;