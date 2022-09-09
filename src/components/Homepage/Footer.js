import React from "react";
import "./Homepage.css";
import "../../style.css";

export default function Footer(props) {
  return (
    <div className={`footer--container ${props.toggle ? "navbar--dark" : "navbar--light"}`}>
      <a
        href="https://twitter.com/ar_chi_es"
        className="fab fa-twitter brand-icon"
      ></a>
      <a
        href="https://www.facebook.com/profile.php?id=100011552236202"
        className="fab fa-facebook brand-icon"
      ></a>
      <a
        href="https://www.instagram.com/ar_chi_es/"
        className="fab fa-instagram brand-icon"
      ></a>
      <a
        href="https://github.com/archishmanghos"
        className="fab fa-github brand-icon"
      ></a>
    </div>
  );
}
