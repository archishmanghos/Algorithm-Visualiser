import React from "react";
import "./Visualiser.css";
import "../../style.css";

export default function Code(props) {
  return (
    <div className={`${props.toggle ? "dark--one" : "light--zero"}`}>
      <h3 className={`code--container`}>
        We will be back with content soon!
      </h3>
    </div>
  );
}
