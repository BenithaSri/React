import React from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="Logo" />
      <ul className="nav-menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Me</Link>
        </li>
        <li>
          <Link to="/portfolio">Skills And More!</Link>
        </li>
      </ul>
      <div className="nav-connect">
        <div>
          <Link to="/contact">Contact Me </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
