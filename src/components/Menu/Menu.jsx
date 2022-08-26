import React from "react";
import "./menu.css";
// Router
import { NavLink } from "components/Nav/NavLink/NavLink";

export const Menu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <NavLink text="Home" path="home" onClick={() => setMenuOpen(false)} />
        <NavLink
          text="About Me"
          path="about"
          onClick={() => setMenuOpen(false)}
        />
        <NavLink
          text="Stack"
          path="stack"
          onClick={() => setMenuOpen(false)}
        />
        <NavLink
          text="Portfolio"
          path="portfolio"
          onClick={() => setMenuOpen(false)}
        />
        <NavLink
          text="Contact"
          path="contact"
          onClick={() => setMenuOpen(false)}
        />
      </ul>
    </div>
  );
};
