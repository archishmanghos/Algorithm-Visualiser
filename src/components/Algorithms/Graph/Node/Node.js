import React from "react";
import "./Node.css";

export default function Node(props) {
  function checkIfStartCellsMatch() {
    if (
      props.rowIndex === props.startNode.row &&
      props.colIndex === props.startNode.col
    ) {
      return true;
    }
    return false;
  }

  function checkIfEndCellsMatch() {
    if (
      props.rowIndex === props.endNode.row &&
      props.colIndex === props.endNode.col
    )
      return true;
    return false;
  }

  if (checkIfStartCellsMatch()) console.log("matched");
  if (checkIfEndCellsMatch()) console.log("matched");

  return (
    <div className="square">
      {checkIfStartCellsMatch() && <i class="fas fa-play start--icon"></i>}
      {checkIfEndCellsMatch() && <i class="fas fa-stop"></i>}
    </div>
  );
}
