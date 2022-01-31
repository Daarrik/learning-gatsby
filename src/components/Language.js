import React, { useState, createContext } from "react";
import { content } from "../constants/content";

export const LanguageContext = createContext({
  language: "en",
  updateLanguage: () => {},
});

const Language = ({ children }) => {
  const [language, setLanguage] = useState({
    language: "en",
  });

  return (
    <LanguageContext.Provider value={content.en}>
      {children}
    </LanguageContext.Provider>
  );
};

export default Language;
