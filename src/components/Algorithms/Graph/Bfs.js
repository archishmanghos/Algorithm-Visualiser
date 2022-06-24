import React from "react";
import Grid from "./Grid";
import "../../../style.css";

export default function Bfs(props) {
  const { startNode, endNode, handleStartNodeChange, handleEndNodeChange } =
    props;

  return (
    <div>
      <form className="light--grey bfs--container">
        <input
          className="bfs--container--form--input"
          type="number"
          placeholder="Start Row Cell"
          name="row"
          value={startNode.row}
          onChange={handleStartNodeChange}
        ></input>
        <input
          className="bfs--container--form--input"
          type="number"
          placeholder="Start Col Cell"
          name="col"
          value={startNode.col}
          onChange={handleStartNodeChange}
        ></input>
        <input
          className="bfs--container--form--input"
          type="number"
          placeholder="End Row Cell"
          name="row"
          value={endNode.row}
          onChange={handleEndNodeChange}
        ></input>
        <input
          className="bfs--container--form--input"
          type="number"
          placeholder="End Col Cell"
          name="col"
          value={endNode.col}
          onChange={handleEndNodeChange}
        ></input>
      </form>
      <Grid startNode={startNode} endNode={endNode} />
    </div>
  );
}
