import React, { useState } from "react";

function InsertionSortVisualizer() {
  const [arr, setArr] = useState(generateArray(9));
  const [swappingIndexes, setSwappingIndexes] = useState([]);
  const [isSorting, setIsSorting] = useState(false);

  function generateArray(size) {
    const arr = [];
    for (let i = 0; i < size; i++) {
      arr.push(Math.floor(Math.random() * 10) + 1);
    }
    return arr;
  }

  async function insertionSort() {
    setIsSorting(true);
    for (let i = 1; i < arr.length; i++) {
      let j = i - 1;
      const temp = arr[i];
      while (j >= 0 && arr[j] > temp) {
        arr[j + 1] = arr[j];
        setSwappingIndexes([j + 1, j]);
        setArr([...arr]);
        await new Promise((resolve) => setTimeout(resolve, 500));
        j--;
      }
      arr[j + 1] = temp;
      setSwappingIndexes([]);
      setArr([...arr]);
      await new Promise((resolve) => setTimeout(resolve, 500));
    }
    setIsSorting(false);
  }

  function getBarColor(index) {
    if (swappingIndexes.includes(index)) {
      return "red";
    } else {
      return "gray";
    }
  }

  function regenerateArray() {
    setArr(generateArray(9));
  }

  function isSorted() {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < arr[i - 1]) {
        return false;
      }
    }
    return true;
  }

  function handleSortClick() {
    if (isSorted()) {
      alert("The array is already sorted!");
    } else {
      insertionSort();
    }
  }

  return (
    <div>
      <div textAlign="center" justifyContent="center">
        <h2>Insertion Sort Visualiser</h2>
      </div>
      <button onClick={handleSortClick} disabled={isSorting}>
        {isSorting ? "Sorting..." : "Sort"}
      </button>
      <button onClick={regenerateArray}>Regenerate</button>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {arr.map((value, index) => (
          <div
            key={index}
            style={{
              height: `${value * 30}px`,
              width: "30px",
              backgroundColor: getBarColor(index),
              margin: "0 2px",
              position: "relative"
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-20px",
                left: "0",
                width: "100%",
                textAlign: "center"
              }}
            >
              {value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InsertionSortVisualizer;