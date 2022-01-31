import React from "react";
import "./layout.css";
import Header from "./header";
import LanguageProvider from "./Language";

const Layout = ({ children }) => {
  return (
    <div>
      <LanguageProvider>
        <Header />
      </LanguageProvider>
      {children}
    </div>
  );
};

export default Layout;
