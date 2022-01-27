import React from "react";
import { Link } from "gatsby";
import { links } from "../constants/links";

const Header = () => {
  return (
    <div className="header center">
      <Link to="/" className="test">
        Darrik Houck
      </Link>
      <nav className="center">
        {links.map((link) => (
          <a
            id={link.name}
            className="center"
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.icon}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Header;
