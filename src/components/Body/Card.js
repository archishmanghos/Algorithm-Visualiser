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
      <div class="card card--main" style={{ width: "18rem" }}>
        <img
          class="card-img-top"
          src={`/assets/${props.coverImg}`}
          alt="Card image cap"
        />
        <div class="card-body">
          <p class="card-text card--text">{props.title}</p>
        </div>
      </div>
    </Link>
  );
}
