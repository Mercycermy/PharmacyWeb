import React, { createContext, useState } from "react";
import english from "../../../data/translations/english.json";
import amharic from "../../../data/translations/amharic.json";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("english");
  const languageData = language === "english" ? english : amharic;

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "english" ? "amharic" : "english"));
  };

  return (
    <LanguageContext.Provider value={{ language, languageData, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
