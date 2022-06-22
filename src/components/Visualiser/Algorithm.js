import React from "react";
import AlgorithmCard from "./AlgorithmCard";
import "./Visualiser.css";
import "../../style.css";

export default function Algorithm() {
  return (
    <div class="row light--grey">
      <div class="col">
        <AlgorithmCard name="Sorting Algos" route="sort" />
      </div>
      <div class="col">
        <AlgorithmCard name="Graph Algos" route="graph" />
      </div>
      <div class="col">
        <AlgorithmCard name="Tree Algos" route="tree" />
      </div>
      <div class="w-100"></div>
      <div class="col">
        <AlgorithmCard name="Other Algo 1" />
      </div>
      <div class="col">
        <AlgorithmCard name="Other Algo 2" />
      </div>
      <div class="col">
        <AlgorithmCard name="Other Algo 3" />
      </div>
    </div>
  );
}
