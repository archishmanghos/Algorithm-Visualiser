import React from "react";
import AlgorithmCard from "./AlgorithmCard";
import "./Visualiser.css";
import "../../style.css";

export default function Algorithm(props) {
  return (
    <div class={`row ${props.toggle ? "dark--one" : "light--zero"}`}>
      <div class="col">
        <AlgorithmCard name="Sorting Algos" route="sort" toggle={props.toggle} />
      </div>
      <div class="col">
        <AlgorithmCard name="Graph Algos" route="graph" toggle={props.toggle} />
      </div>
      <div class="col">
        <AlgorithmCard name="Searching Algos" route="search" toggle={props.toggle} />
      </div>
      {/* <div class="w-100"></div>
      <div class="col">
        <AlgorithmCard name="Other Algo 1" toggle={props.toggle} />
      </div>
      <div class="col">
        <AlgorithmCard name="Other Algo 2" toggle={props.toggle} />
      </div>
      <div class="col">
        <AlgorithmCard name="Other Algo 3" toggle={props.toggle} />
      </div> */}
    </div>
  );
}
