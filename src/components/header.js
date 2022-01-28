import React, { useContext } from "react";
import { Link } from "gatsby";
import { links } from "../constants/links";
import HeaderItem from "./headeritem";
import { Language } from "./layout";

const Header = () => {
  const lang = useContext(Language);

  return (
    <div className="header center">
      <Link to="/" className="test">
        {lang.name}
      </Link>
      <nav className="center">
        {links.map((link) => (
          <HeaderItem 
            key={link.name}
            url={link.url}
            icon={link.icon}
          />
        ))}
      </nav>
    </div>
  );
};

export default Header;
