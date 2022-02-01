import React, { useContext } from "react";
import { LanguageContext } from "./LanguageProvider";
import { Link } from "gatsby";
import Nav from "./Nav";

const Header = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="main header">
      <Link to="/" className="test">
        {language.name}
      </Link>
      <Nav />
    </div>
  );
};

export default Header;
