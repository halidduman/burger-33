import React from "react";
import Logo from "../assets/Burger.svg";
import { NavLink, Link } from "react-router-dom";

const NavrBar = () => {
  return (
    <div className="navbar">
      <div className="leftSide">
        <img className="logo-img" src={Logo} alt="" />
      </div>
      <div className="rightSide">
        <Link to={"/"}>Home</Link>
        <Link to={"/menu"}>Menu</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>
      </div>
    </div>
  );
};

export default NavrBar;
