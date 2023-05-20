import React from "react";
import "./Homepage.css";
import "../../style.css";
import ToggleButton from "../Body/ToggleButton";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className={`navbar--container ${props.toggle ? "dark--two" : "light--two"}`}>
      <div className="navbar--logo--container">
        <img
          src="./assets/algorithm--logo.jpg"
          alt="Algorithm Logo"
          className="navbar--logo"
        />
        <h5 className="navbar--brand">
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>Visualise It!</Link>
        </h5>
      </div>
      <div className="navbar--options--container">
        <div className="toggle--container">
          <ToggleButton toggle={props.toggle} triggerToggle={props.triggerToggle} />
        </div>
        <p className="navbar--options--common">
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            Home
          </Link>
        </p>
        <p className="navbar--options--common">
          <Link
            to="/about"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            About
          </Link>
        </p>
        <p className="navbar--options--common">
          <Link
            to="/ide"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            IDE
          </Link>
        </p>
        <p className="navbar--options--common">
          <Link
            to="/contact"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Contact Us
          </Link>
        </p>
      </div>
    </nav>
  );
}
