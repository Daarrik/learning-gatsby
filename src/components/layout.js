import React from "react";
import LanguageProvider from "./LanguageProvider";
import "./layout.css";
import Header from "./header";
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
