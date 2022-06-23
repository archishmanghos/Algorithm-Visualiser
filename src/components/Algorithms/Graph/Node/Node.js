import React from "react";
import "./Node.css";

export default function Node(props) {
  return (
    <div className="square" id={props.rowIndex * 51 + props.colIndex}></div>
  );
}
