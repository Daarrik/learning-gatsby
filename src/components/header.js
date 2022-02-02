import React, { useContext } from "react";
import { LanguageContext } from "./LanguageProvider";
import { Link } from "gatsby";
import Nav from "./Nav";
import Waves from "../assets/waves.svg";

const Header = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="main header">
      <h1 className="name">{language.name}</h1>
      <Nav />
    </div>
  );
};

export default Header;
