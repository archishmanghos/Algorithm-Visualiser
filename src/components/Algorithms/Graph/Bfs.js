import React from "react";
import Grid from "./Grid";

export default function Bfs() {
  const [cellDetails, setCellDetails] = React.useState({
    id: -1,
    startNode: 0,
    endNode: 217,
  });

  const handleNodeClick = (event) => {
    setCellDetails((prevCellDetails) => {
      return {
        ...prevCellDetails,
        id: event.target.id,
        startNode: event.target.id,
      };
    });
  };

  console.log(cellDetails);

  return (
    <div>
      <Grid handleNodeClick={handleNodeClick} />
    </div>
  );
}
