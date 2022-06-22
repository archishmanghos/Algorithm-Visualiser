import React from "react";
import "./Dijkstra.css";
import Node from "../Node/Node";

export default function Dijkstra() {
  let grid = [];
  for (let i = 0; i < 50; i++) {
    let row = [];
    for (let j = 0; j < 55; j++) {
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

  return <div className="dijkstra--grid">{gridElements}</div>;
}
