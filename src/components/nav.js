import React from "react";
import { links } from "../constants/links";
import NavItem from "./NavItem";

const Nav = () => {
  return (
    <nav className="center">
      {links.map((link) => (
        <NavItem key={link.name} url={link.url} icon={link.icon} />
      ))}
    </nav>
  );
};

export default Nav;
