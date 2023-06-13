import React, { useState } from "react";

function HeapSortVisualizer() {
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

  async function heapSort() {
    setIsSorting(true);
  
    // Build max heap
    for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
      await heapify(arr, arr.length, i);
    }
  
    // Heap sort
    for (let i = arr.length - 1; i > 0; i--) {
      swap(arr, 0, i);
      setSwappingIndexes([0, i]);
      setArr([...arr]);
      await new Promise((resolve) => setTimeout(resolve, 500));
      await heapify(arr, i, 0);
      setSwappingIndexes([]);
      setArr([...arr]);
      await new Promise((resolve) => setTimeout(resolve, 500));
    }
    setIsSorting(false);
  }
  
  async function heapify(arr, n, i) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;
  
    if (left < n && arr[left] > arr[largest]) {
      largest = left;
    }
  
    if (right < n && arr[right] > arr[largest]) {
      largest = right;
    }
  
    if (largest !== i) {
      swap(arr, i, largest);
      setSwappingIndexes([i, largest]);
      setArr([...arr]);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      await heapify(arr, n, largest);
      setSwappingIndexes([]);
      setArr([...arr]);
      await new Promise((resolve) => setTimeout(resolve, 2000));
    }
  }
  
  function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
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
      heapSort();
    }
  }

  return (
    <div>
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

export default HeapSortVisualizer;