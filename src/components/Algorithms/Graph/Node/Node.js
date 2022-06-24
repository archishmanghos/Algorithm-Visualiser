import React from "react";
import "./Node.css";

export default function Node(props) {
  const { row, col, startNode, endNode } = props;

  function checkIfStartCellsMatch() {
    if (row === startNode.row && col === startNode.col) {
      return true;
    }
    return false;
  }

  function checkIfEndCellsMatch() {
    if (row === endNode.row && col === endNode.col) return true;
    return false;
  }

  let id = row * 52 + col;
  const colourClass = checkIfStartCellsMatch()
    ? "start-node"
    : checkIfEndCellsMatch()
    ? "end-node"
    : "";

  return <div className={`square ${colourClass}`} id={id}></div>;
}
