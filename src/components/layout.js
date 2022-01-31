import React from "react";
import "./layout.css";
import Header from "./header";
import LanguageProvider from "./Language";

const Layout = ({ children }) => {
  return (
    <LanguageProvider>
      <Header />
      {children}
    </LanguageProvider>
  );
};

export default Layout;
