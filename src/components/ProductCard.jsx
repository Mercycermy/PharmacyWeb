import React, { useContext } from "react";
import { motion } from "framer-motion";
import { FaPills, FaCapsules, FaSyringe, FaHeart, FaNotesMedical, FaTablets, FaPlusSquare } from "react-icons/fa";
import  ThemeContext  from "./contexts/theme";

const productList = [
 
  {
    id: 1,
    name: "Pain Relief",
    icon: <FaPills />,
    color: "#ff6b6b",
    delay: 0.2,
  },
  {
    id: 2,
    name: "Vitamins & Supplements",
    icon: <FaCapsules />,
    color: "#ffa502",
    delay: 0.3,
  },
  {
    id: 3,
    name: "First Aid",
    icon: <FaSyringe />,
    color: "#1e90ff",
    delay: 0.4,
  },
  {
    id: 4,
    name: "Heart Care",
    icon: <FaHeart />,
    color: "#ff4757",
    delay: 0.5,
  },
  {
    id: 5,
    name: "Prescription Medicines",
    icon: <FaNotesMedical />,
    color: "#3742fa",
    delay: 0.6,
  },
  {
    id: 6,
    name: "Cold & Flu",
    icon: <FaTablets />,
    color: "#2ed573",
    delay: 0.7,
  },
  {
    id: 7,
    name: "Skincare & Wellness",
    icon: <FaPlusSquare />,
    color: "#eccc68",
    delay: 0.8,
  },
  {
    id: 8,
    name: "See All Products",
    icon: <FaPlusSquare />,
    color: "#2f3542",
    delay: 0.9,
  },
];

const ProductCard = () => {
  const { themeName } = useContext(ThemeContext);
  return (
    <>
      <div className="container py-14 md:py-24" id="product">
        {/* Header Section */}
        <div className="space-y-4 p-6 text-center max-w-[600px] mx-auto mb-5">
        <h1 className={`uppercase text-3xl font-semibold ${themeName === "dark" ? "text-[#0066CC]" : "text-primary"}`}
        >
  Our Pharmacy Products
</h1>

          <p className="font-semibold text-2xl">
            Find the Right Products for Your Health
          </p>
        </div>
        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {productList.map((product) => (
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
                {product.icon}
              </div>
              <p className="font-medium text-lg">{product.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductCard;
