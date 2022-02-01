import React, { useContext } from "react";
import { Link } from "gatsby";
import { LanguageContext } from "./LanguageProvider";
import Nav from "./nav";

const Header = () => {
  const { language, switchLang } = useContext(LanguageContext);

  return (
    <div className="main header">
      <Link to="/" className="test">
        {language.name}
      </Link>
      {/* Move this button somewhere else before final */}
      <button onClick={() => switchLang()}>switch lang</button>
      <Nav />
    </div>
  );
};

export default Header;
