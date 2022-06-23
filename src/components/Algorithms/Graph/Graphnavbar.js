import React from "react";
import "./Graph.css";
import "../../../style.css";
import Select from "react-select";

export default function Graphnavbar(props) {
  const pathAlgos = [
    {
      label: "Breadth First Search (BFS)",
      value: 1,
      shortHand: "bfs",
    },
    {
      label: "Depth First Search (DFS)",
      value: 2,
      shortHand: "dfs",
    },
    {
      label: "Dijkstra's Algorithm",
      value: 3,
      shortHand: "dijk",
    },
  ];

  return (
    <nav className="graphnavbar light--grey">
      <Select
        options={pathAlgos}
        onChange={props.handleDropDownChange}
        className="graphnavbar--dropdown"
        placeholder="Select Algorithm"
      ></Select>
      <div className="increment-decrement">
        <label className="increment-decrement--label">Speed</label>
        <button
          className="count-btn count-down"
          type="button"
          onClick={props.decNum}
          disabled={props.num === 0 ? true : false}
        >
          -
        </button>
        <input
          type="number"
          name="counter"
          className="counter"
          value={props.num}
          onChange={props.handleChange}
        />
        <button
          className="count-btn count-up"
          type="button"
          onClick={props.incNum}
          disabled={props.num === 10 ? true : false}
        >
          +
        </button>
      </div>
    </nav>
  );
}
