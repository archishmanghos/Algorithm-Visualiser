import React from "react";
import "./Graph.css";
import "../../../style.css";
import Select from "react-select";

export default function Graphnavbar() {
  const pathAlgos = [
    {
      label: "Breadth First Search (BFS)",
      value: 1,
    },
    {
      label: "Depth First Search (DFS)",
      value: 2,
    },
    {
      label: "Dijkstra's Algorithm",
      value: 3,
    },
  ];

  const [currentAlgo, setCurrentAlgo] = React.useState("None");
  const [num, setNum] = React.useState(0);

  function handleDropDownChange(data) {
    setCurrentAlgo(data.label);
  }

  function decNum() {
    setNum((prevNum) => prevNum - 1);
  }

  function incNum(event) {
    console.log(event.target);
    setNum((prevNum) => prevNum + 1);
  }

  function handleChange(event) {
    setNum(event.target.value);
  }

  console.log(currentAlgo);

  return (
    <nav className="graphnavbar light--grey">
      <Select
        options={pathAlgos}
        onChange={handleDropDownChange}
        className="graphnavbar--dropdown"
        placeholder="Select Algorithm"
      ></Select>
      <div className="increment-decrement">
        <label className="increment-decrement--label">Speed</label>
        <button
          className="count-btn count-down"
          type="button"
          onClick={decNum}
          disabled={num === 0 ? true : false}
        >
          -
        </button>
        <input
          type="number"
          name="counter"
          className="counter"
          value={num}
          onChange={handleChange}
        />
        <button
          className="count-btn count-up"
          type="button"
          onClick={incNum}
          disabled={num === 10 ? true : false}
        >
          +
        </button>
      </div>
    </nav>
  );
}
