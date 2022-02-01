import React from "react";
import "./layout.css";
import Header from "./header";
import LanguageProvider from "./LanguageProvider";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <LanguageProvider>
      <Header />
      {children}
      <Footer />
    </LanguageProvider>
  );
};

export default Layout;
