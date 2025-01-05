import React, { useContext } from "react";
import { motion } from "framer-motion";
import { FaPills, FaCapsules, FaSyringe, FaHeart, FaNotesMedical, FaTablets, FaPlusSquare } from "react-icons/fa";
import ThemeContext from "./contexts/theme";
import LanguageContext from "./contexts/LanguageContext";

const ProductCard = () => {
  const { themeName } = useContext(ThemeContext);
  const { languageData } = useContext(LanguageContext);
  const { productList, Product } = languageData;

  // Map the string icons to actual imported React icons
  const iconMap = {
    FaPills,
    FaCapsules,
    FaSyringe,
    FaHeart,
    FaNotesMedical,
    FaTablets,
    FaPlusSquare,
  };

  return (
    <>
      <div className="container py-14 md:py-24" id="product">
        {/* Header Section */}
        <div className="space-y-4 p-6 text-center max-w-[600px] mx-auto mb-5">
          <h1 className={`uppercase text-3xl font-semibold ${themeName === "dark" ? "text-[#0066CC]" : "text-primary"}`}>
            {Product.title1}
          </h1>
          <p className="font-semibold text-2xl">{Product.title2}</p>
        </div>
        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {productList.map((product) => {
            const IconComponent = iconMap[product.icon]; // Get the correct icon component from the map
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  delay: product.delay,
                }}
                className="border rounded-lg border-secondary/20 p-4 flex justify-start items-center gap-4 hover:!scale-105 hover:!shadow-xl duration-200 cursor-pointer"
              >
                <div
                  style={{
                    color: product.color,
                    backgroundColor: product.color + "20",
                  }}
                  className="w-10 h-10 rounded-md flex justify-center items-center"
                >
                  <IconComponent />
                </div>
                <p className="font-medium text-lg">{product.name}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductCard;
