import React from "react";
import { Link } from "react-router-dom";
import "./Visualiser.css";
import "../../style.css";

export default function AlgorithmCard(props) {
  return (
    <Link
      to={`/${props.route}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div className={`card algorithm--card--container ${props.toggle ? "dark--zero" : "light--one"}`}>
        <h4>{props.name}</h4>
      </div>
    </Link>
  );
}
