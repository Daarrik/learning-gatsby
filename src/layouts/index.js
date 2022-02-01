import React from "react";
import LanguageProvider from "../components/LanguageProvider";
import "./index.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ChngLang from "../components/ChngLang";

const Layout = ({ children }) => {
  return (
    <LanguageProvider>
      <Header />
      {children}
      <Footer />
      <ChngLang />
    </LanguageProvider>
  );
};

export default Layout;
