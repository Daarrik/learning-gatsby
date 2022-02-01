import React from "react";
import LanguageProvider from "../components/LanguageProvider";
import "./index.css";
import Header from "../components/header";
import Footer from "../components/footer";

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
