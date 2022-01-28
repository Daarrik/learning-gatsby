import React, { createContext } from "react";
import "./layout.css";
import Header from "./header";
import { content } from "../constants/content";

export const Language = createContext(content.en);

const Layout = ({ children }) => {
  return (
    <Language.Provider value={content.en}>
      <div>
        <Header />
        {children}
      </div>
    </Language.Provider>
  );
};

export default Layout;
