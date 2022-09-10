import React from "react";
import "./Homepage.css";
import "../../style.css";
import Card from "../Body/Card";

export default function Main(props) {
  return (
    <div className={`main--container ${props.toggle ? "dark--one" : "light--zero"}`}>
      <div className="card--container">
        <Card
          coverImg="algo--visualiser--logo.jpg"
          title="Algorithm Visualiser"
          route="algorithm"
          toggle={props.toggle}
          triggerToggle={props.triggerToggle}
        />
        <Card
          coverImg="code--visualiser--logo.png"
          title="Code Visualiser"
          route="code"
          toggle={props.toggle}
          triggerToggle={props.triggerToggle}
        />
      </div>
    </div>
  );
}
