import React, { useContext } from "react";
import { Link } from "gatsby";
import { links } from "../constants/links";
import HeaderItem from "./headeritem";
import { LanguageContext } from "./Language";

const Header = () => {
  const { language, switchLang } = useContext(LanguageContext);

  return (
    <div className="main header">
      <Link to="/" className="test">
        {language.name}
      </Link>
      <nav className="center">
        {links.map((link) => (
          <HeaderItem key={link.name} url={link.url} icon={link.icon} />
        ))}
        <button onClick={() => switchLang()}>test</button>
      </nav>
    </div>
  );
};

export default Header;
