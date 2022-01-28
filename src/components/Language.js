import React, { createContext } from "react";
import { content } from "../constants/content";

export const LanguageContext = createContext(content.en);

const Language = ({ children }) => {
  return (
    <LanguageContext.Provider value={content.en}>
      {children}
    </LanguageContext.Provider>
  );
};

export default Language;
