import React from "react";
import "./Graph.css";
import Node from "./Node/Node";

export default function Grid(props) {
  let grid = [];
  for (let i = 0; i < 50; i++) {
    let row = [];
    for (let j = 0; j < 52; j++) {
      row.push(j);
    }
    grid.push(row);
  }

  const gridElements = grid.map((row, rowIndex) => (
    <tr key={rowIndex}>
      {row.map((colIndex) => (
        <th key={colIndex}>
          <Node
            rowIndex={rowIndex}
            colIndex={colIndex}
            startNode={props.startNode}
            endNode={props.endNode}
          />
        </th>
      ))}
    </tr>
  ));

  return (
    <div className="grid--container">
      <table className="dijkstra--grid">{gridElements}</table>
    </div>
  );
}
