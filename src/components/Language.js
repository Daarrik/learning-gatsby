import React, { useState, createContext } from "react";
import content from "../constants/content";

export const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  return (
    <LanguageContext.Provider value={content.en}>
      {children}
    </LanguageContext.Provider>
  );
};
