import React, { useState, createContext } from "react";
import { content } from "../constants/content";

const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const switchLang = () => {
    setLanguage("jp");
  };

  return (
    <LanguageContext.Provider value={(language, switchLang)}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
