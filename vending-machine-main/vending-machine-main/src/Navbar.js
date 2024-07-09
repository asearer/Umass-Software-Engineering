import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="NavBar">
      <NavLink to="/">
        Home
      </NavLink>
      <NavLink to="/CandyBar">
        CandyBar
      </NavLink>
      <NavLink to="/FruitRollup">
        FruitRollup
      </NavLink>
      <NavLink to="/Soda">
        Soda
      </NavLink>
      <NavLink to="/Hotdog">
        Hotdog
      </NavLink>
    </nav>
  );
}

export default NavBar;
