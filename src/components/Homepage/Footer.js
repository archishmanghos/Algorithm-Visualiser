import React from "react";
import "./Homepage.css";
import "../../style.css";

export default function Footer(props) {
  return (
    <div className={`footer--container ${props.toggle ? "dark--two footer--dark" : "light--two"}`}>
      <a
        href="https://twitter.com/ar_chi_es"
        className={`fab fa-twitter brand-icon ${props.toggle ? "icon--dark" : "icon--light"}`}
      ></a>
      <a
        href="https://www.facebook.com/profile.php?id=100011552236202"
        className={`fab fa-facebook brand-icon ${props.toggle ? "icon--dark" : "icon--light"}`}
      ></a>
      <a
        href="https://www.instagram.com/ar_chi_es/"
        className={`fab fa-instagram brand-icon ${props.toggle ? "icon--dark" : "icon--light"}`}
      ></a>
      <a
        href="https://github.com/archishmanghos"
        className={`fab fa-github brand-icon ${props.toggle ? "icon--dark" : "icon--light"}`}
      ></a>
    </div>
  );
}
