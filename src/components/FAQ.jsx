import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import { FaQuestionCircle } from "react-icons/fa";
import  ThemeContext  from "./contexts/theme"; // Assuming you have a ThemeContext
import LanguageContext from "./contexts/LanguageContext";


const FAQ = () => {
  const { themeName } = useContext(ThemeContext);
  const [expanded, setExpanded] = useState(null);

  const toggleExpanded = (id) => {
    setExpanded(expanded === id ? null : id);
  };
  const { languageData, toggleLanguage } = useContext(LanguageContext);
  const {faq, faqTitle } = languageData;
  return (
    <div className={`app ${themeName} mb-12`} id="faq">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className={`uppercase text-4xl ${themeName === 'dark' ? 'text-[#0066CC]' : 'text-primary'}`}>
            {faqTitle.title}
          </h1>
        </div>
        <div className="space-y-4">
          {faq.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className={`border-b border-gray-200 pb-4 ${themeName === 'dark' ? 'text-white' : 'text-gray-800'}`}
            >
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleExpanded(item.id)}
              >
                <h3 className={`text-lg font-semibold ${themeName === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                  {item.question}
                </h3>
                <FaQuestionCircle className={`text-2xl ${expanded === item.id ? 'text-primary' : 'text-gray-500'}`} />
              </div>
              {expanded === item.id && (
                <p className={`text-sm mt-3 ${themeName === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{item.answer}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
