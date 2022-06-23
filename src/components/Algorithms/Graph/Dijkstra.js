import React from "react";
import "./Graph.css";
import Graphnavbar from "./Graphnavbar";
import Node from "./Node/Node";

export default function Dijkstra() {
  let grid = [];
  for (let i = 0; i < 50; i++) {
    let row = [];
    for (let j = 0; j < 57; j++) {
      row.push(i * 50 + j);
    }
    grid.push(row);
  }

  const gridElements = grid.map((row, index) => (
    <tr key={index}>
      {row.map((cellId) => (
        <th key={cellId}>
          <Node />
        </th>
      ))}
    </tr>
  ));

  return (
    <div className="grid--container">
      <Graphnavbar />
      <div className="dijkstra--grid">{gridElements}</div>
    </div>
  );
}
