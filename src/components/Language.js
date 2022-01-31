import React, { useState, createContext } from "react";
import { content } from "../constants/content";

export const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(0);

  const switchLang = () => {
    setLanguage((language+1) % 2);
  };

  return (
    <LanguageContext.Provider
      value={{ language: language === 0 ? content.en : content.jp, switchLang }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
