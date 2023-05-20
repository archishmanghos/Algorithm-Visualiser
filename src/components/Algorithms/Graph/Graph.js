import React from "react";
// import Dfs from "./Dfs";
import { Bfs, findShortestPath } from "./Bfs";
// import Dijk from "./Dijkstra";
import Grid from "./Grid";
import Select from "react-select";
import "../../../style.css";
import "./Graph.css";
import "./Node/Node.css";

export default function Graph(props) {
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
  const [currentAlgo, setCurrentAlgo] = React.useState("None");
  const [num, setNum] = React.useState(1);
  const [startNode, setStartNode] = React.useState({
    row: null,
    col: null,
    distance: 0,
    wall: false,
    visited: false,
    prevNode: null,
  });

  const [endNode, setEndNode] = React.useState({
    row: null,
    col: null,
    distance: Infinity,
    wall: false,
    visited: false,
    prevNode: null,
  });

  let grid = [];
  for (let i = 0; i < 50; i++) {
    let row = [];
    for (let j = 0; j < 52; j++) {
      row.push(createNewNode(i, j));
    }
    grid.push(row);
  }

  function createNewNode(i, j) {
    const newNode = {
      row: i,
      col: j,
      distance: Infinity,
      wall: false,
      visited: false,
      prevNode: null,
    };
    return newNode;
  }

  const handleStartNodeChange = (event) => {
    const { name, value } = event.target;
    setStartNode((prevStartNode) => {
      return {
        ...prevStartNode,
        [name]: parseInt(value),
      };
    });
  };

  const handleEndNodeChange = (event) => {
    const { name, value } = event.target;
    setEndNode((prevEndNode) => {
      return {
        ...prevEndNode,
        [name]: parseInt(value),
      };
    });
  };

  const handleDropDownChange = (data) => {
    let toChange = data.shortHand;
    setCurrentAlgo(toChange);
  };

  const decNum = () => {
    setNum((prevNum) => prevNum - 1);
  };

  const incNum = () => {
    setNum((prevNum) => prevNum + 1);
  };

  const handleChange = (event) => {
    setNum(event.target.value);
  };

  function showAlgoName() {
    if (currentAlgo === "dfs") return "DFS";
    else if (currentAlgo === "bfs") return "BFS";
    else if (currentAlgo === "dijk") return "Dijkstra";
    else return "Algo";
  }

  const handleVisualise = () => {
    const orderedVisitedNodes = Bfs(startNode, endNode, grid);
    const nodesInShortestPathOrder = findShortestPath(endNode, grid);
    animateDijkstra(orderedVisitedNodes, nodesInShortestPathOrder);
  };

  function animateDijkstra(orderedVisitedNodes, findShortestPath) {
    for (let i = 0; i <= orderedVisitedNodes.length; i++) {
      if (i === orderedVisitedNodes.length) {
        setTimeout(() => {
          animateShortesPath(findShortestPath);
        }, (10 - num + 1) * i);
        return;
      }
      setTimeout(() => {
        const curNode = orderedVisitedNodes[i];
        const id = curNode.row * 52 + curNode.col;
        document.getElementById(id).className = "square visited--node";
      }, (10 - num + 1) * i);
    }
  }

  function animateShortesPath(findShortestPath) {
    for (let i = 0; i < findShortestPath.length; i++) {
      setTimeout(() => {
        const curNode = findShortestPath[i];
        const id = curNode.row * 52 + curNode.col;
        console.log(curNode);
        document.getElementById(id).className = "square shortestpath--node";
      }, (10 - num + 1) * 10 * i);
    }
  }

  return (
    <div>
      <nav className={`graphnavbar ${props.toggle ? "dark--one" : "light--zero"}`}>
        <Select
          options={pathAlgos}
          onChange={handleDropDownChange}
          className="graphnavbar--dropdown"
          placeholder="Select Algorithm"
        ></Select>
        <div className={`increment-decrement`}>
          <label className="increment-decrement--label">Speed</label>
          <button
            className="count-btn count-down"
            type="button"
            onClick={decNum}
            disabled={num === 1 ? true : false}
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
      <div>
        <form className={`bfs--container ${props.toggle ? "dark--one" : "light--zero"}`}>
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
          <button
            type="button"
            onClick={() => handleVisualise()}
            disabled={
              startNode.row === null ||
                startNode.col === null ||
                endNode.row === null ||
                endNode.col === null
                ? true
                : false
            }
          >
            Visualise {showAlgoName()}
          </button>
        </form>
      </div>
      <Grid startNode={startNode} endNode={endNode} grid={grid} toggle={props.toggle} />
    </div>
  );
}
