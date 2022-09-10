import React from "react";
import "./Graph.css";
import Node from "./Node/Node";

export default function Grid(props) {
  const { grid } = props;

  const gridElements = grid.map((row, rowIndex) => (
    <tr key={rowIndex}>
      {row.map((node, colIndex) => {
        const { row, col, distance, wall, visited, prevNode } = node;
        return (
          <th key={colIndex}>
            <Node
              row={row}
              col={col}
              startNode={props.startNode}
              endNode={props.endNode}
              distance={distance}
              wall={wall}
              visited={visited}
              prevNode={prevNode}
            />
          </th>
        );
      })}
    </tr>
  ));

  return (
    <div className={`grid--container ${props.toggle ? "dark--one" : "light--zero"}`}>
      <table className="dijkstra--grid">{gridElements}</table>
    </div>
  );
}
