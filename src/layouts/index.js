import React from "react";
import LanguageProvider from "../components/LanguageProvider";
import "./index.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
