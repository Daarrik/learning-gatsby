import React from "react";
import { Link } from "gatsby";
import { links } from "../constants/links";
import HeaderItem from "./headeritem";

const Header = () => {
  return (
    <div className="main header">
      <Link to="/" className="test">
        ハウク・デリック
      </Link>
      <nav className="center">
        {links.map((link) => (
          <HeaderItem key={link.name} url={link.url} icon={link.icon} />
        ))}
      </nav>
    </div>
  );
};

export default Header;
