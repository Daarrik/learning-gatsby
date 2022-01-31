import React, { useState, createContext, useContext } from "react";
import { content } from "../constants/content";

export const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(content.jp);

  const switchLang = () => {
    setLanguage("jp");
  };

  return (
    <LanguageContext.Provider value={{ language, switchLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
