import React from "react";
import "./layout.css";
import Header from "./header";
import Language from "./Language";

const Layout = ({ children }) => {
  return (
    <Language>
      <div>
        <Header />
        {children}
      </div>
    </Language>
  );
};

export default Layout;
