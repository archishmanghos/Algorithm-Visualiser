import React from "react";
import "./Body.css";
import "../../style.css";
import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <Link
      to={`/${props.route}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div className={`card card--main ${props.toggle ? "dark--zero" : "light--one"}`} style={{ width: "18rem" }}>
        <img
          class="card-img-top"
          src={`/assets/${props.coverImg}`}
          alt="Card  cap"
        />
        <div class="card-body">
          <p class="card-text card--text">{props.title}</p>
        </div>
      </div>
    </Link>
  );
}
