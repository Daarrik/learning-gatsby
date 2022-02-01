import React, { useState, createContext } from "react";
import { content } from "../constants/content";

export const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(true);

  const switchLang = () => {
    setLanguage(!language);
  };

  return (
    <LanguageContext.Provider
      value={{ language: language ? content.en : content.jp, switchLang }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
