import React from "react";
import Graphnavbar from "./Graphnavbar";
import Dfs from "./Dfs";
import Bfs from "./Bfs";
import Dijk from "./Dijkstra";

export default function Graph() {
  const [currentAlgo, setCurrentAlgo] = React.useState("None");
  const [num, setNum] = React.useState(0);
  const [startNode, setStartNode] = React.useState({
    row: null,
    col: null,
  });

  const [endNode, setEndNode] = React.useState({
    row: null,
    col: null,
  });

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

  function chooseAlgo() {
    if (currentAlgo === "dfs") return <Dfs />;
    else if (currentAlgo === "bfs")
      return (
        <Bfs
          startNode={startNode}
          endNode={endNode}
          handleStartNodeChange={handleStartNodeChange}
          handleEndNodeChange={handleEndNodeChange}
        />
      );
    else if (currentAlgo === "dijk") return <Dijk />;
  }

  return (
    <div>
      <Graphnavbar
        handleDropDownChange={handleDropDownChange}
        num={num}
        decNum={decNum}
        incNum={incNum}
        handleChange={handleChange}
      />
      {chooseAlgo()}
    </div>
  );
}
