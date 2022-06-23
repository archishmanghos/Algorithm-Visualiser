import React from "react";
import Grid from "./Grid";
import "../../../style.css";

export default function Bfs() {
  const [startNode, setStartNode] = React.useState({
    row: 10,
    col: 13,
  });

  const [endNode, setEndNode] = React.useState({
    row: 30,
    col: 42,
  });

  const handleStartNodeChange = (event) => {
    const { name, value } = event.target;
    setStartNode((prevStartNode) => {
      return {
        ...prevStartNode,
        [name]: value,
      };
    });
  };

  const handleEndNodeChange = (event) => {
    const { name, value } = event.target;
    setEndNode((prevEndNode) => {
      return {
        ...prevEndNode,
        [name]: value,
      };
    });
  };

  return (
    <div>
      <form className="light--grey bfs--container">
        <input
          className="bfs--container--form--input"
          type="text"
          placeholder="Start Row Cell"
          name="row"
          value={startNode.row}
          onChange={handleStartNodeChange}
        ></input>
        <input
          className="bfs--container--form--input"
          type="text"
          placeholder="Start Col Cell"
          name="col"
          value={startNode.col}
          onChange={handleStartNodeChange}
        ></input>
        <input
          className="bfs--container--form--input"
          type="text"
          placeholder="End Row Cell"
          name="row"
          value={endNode.row}
          onChange={handleEndNodeChange}
        ></input>
        <input
          className="bfs--container--form--input"
          type="text"
          placeholder="End Col Cell"
          name="col"
          value={endNode.col}
          onChange={handleEndNodeChange}
        ></input>
        {/* <button>Set Cells</button> */}
      </form>
      <Grid startNode={startNode} endNode={endNode} />
    </div>
  );
}
