import React from "react";
import { Link } from "gatsby";
import { links } from "../constants/links";
import HeaderItem from "./headeritem";

const Header = () => {
  return (
    <div className="header center">
      <Link to="/" className="test">
        Darrik Houck
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
