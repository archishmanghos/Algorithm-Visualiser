import React, { useState, useEffect } from "react";
import Button from "../assets/Button";
import './MergeSort.css'

const ARRAYSIZE = 34;

const MergeSort = () => {
  const [primaryArray, setPrimaryArray] = useState([]);
  const [algorithm, setAlgorithm] = useState("mergeSort");
  const [disableOptions, setDisableOptions] = useState(false);

  const randomizeArray = () => {
    for (let i = 0; i < primaryArray.length; i++) {
      let bar = document.getElementById(i).style;
      bar.backgroundColor = "#ff7f50";
    }
    let array = [];
    for (let i = 0; i < ARRAYSIZE; i++) {
      array.push(randomVals(20, 300));
    }

    setPrimaryArray(array);
  };

  const randomVals = (min, max) => {
    let randomVal = Math.floor(Math.random() * (max - min + 1) + min);
    return randomVal;
  };

  useEffect(() => {
    randomizeArray();
  }, []);

  const sleep = (milliSeconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliSeconds));
  };

  const finishedAnimation = async () => {
    for (let i = 0; i < primaryArray.length; i++) {
      let bar = document.getElementById(i).style;
      bar.backgroundColor = "green";
      await sleep(100);
    }
    setDisableOptions(false);
  };

  const handleSorting = () => {
    setDisableOptions(true)
    mergeSort();
  }
  const mergeSort = async () => {
    let currentArr = primaryArray;
    setAlgorithm({ name: "Merge Sort", timeComplexity: "O(n log(n))" });

    await sort(currentArr, 0, currentArr.length - 1);
    finishedAnimation();
  };

  const sort = async (arr, low, high) => {
    if (low < high) {
      let mid = Math.floor((low + high) / 2);
      await sort(arr, low, mid);
      await sort(arr, mid + 1, high);
      await merge(arr, low, mid, high);
    }
  };

  const merge = async (arr, low, mid, high) => {
    let i = low;
    let j = mid + 1;
    let k = 0;
    let tempArr = [];

    while (i <= mid && j <= high) {
      if (arr[i] < arr[j]) {
        tempArr[k] = arr[i];
        i++;
        k++;
      } else {
        tempArr[k] = arr[j];
        j++;
        k++;
      }
      setPrimaryArray([...primaryArray, tempArr]);

      let bar1 = document.getElementById(i).style;
      let bar2 = document.getElementById(j).style;
      bar1.backgroundColor = "#DC143C";
      bar2.backgroundColor = "#6A5ACD";

      await sleep(100);

      bar1.backgroundColor = "#FF7F50";
      bar2.backgroundColor = "#FF7F50";
    }

    while (i <= mid) {
      tempArr[k] = arr[i];

      setPrimaryArray([...primaryArray, tempArr]);

      let bar1 = document.getElementById(i).style;
      let bar2 = document.getElementById(j).style;
      bar1.backgroundColor = "#DC143C";
      bar2.backgroundColor = "#6A5ACD";

      await sleep(100);

      bar1.backgroundColor = "#FF7F50";
      bar2.backgroundColor = "#FF7F50";

      i++;
      k++;
    }

    while (j <= high) {
      tempArr[k] = arr[j];

      setPrimaryArray([...primaryArray, tempArr]);

      let bar1 = document.getElementById(i).style;
      let bar2 = document.getElementById(j).style;
      bar1.backgroundColor = "#DC143C";
      bar2.backgroundColor = "#6A5ACD";

      await sleep(100);

      bar1.backgroundColor = "#FF7F50";
      bar2.backgroundColor = "#FF7F50";

      j++;
      k++;
    }

    for (let i = low; i <= high; i++) {
      arr[i] = tempArr[i - low];
      setPrimaryArray([...primaryArray, arr]);
    }
  };

  return (
    <div>
      <div className='header'>
        <Button
          type='NEWARRAY'
          name='New Array'
          onClick={randomizeArray}
          disabled={disableOptions}
        />
        <Button
          onClick={handleSorting}
          type='SORT'
          name='Sort'
          disabled={disableOptions}
        />
      </div>
      <div className='sortingBars'>
        {primaryArray &&
          primaryArray.map((val, key) => {
            return (
              <div
                className='bars'
                id={key}
                key={key}
                style={{ height: val }}
              ></div>
            )
          })}
      </div>
      {algorithm.name !== undefined && (
        <div className='algoInfo'>
          <div>Algorithm: {algorithm.name}</div>
          <div>Time Complexity: {algorithm.timeComplexity}</div>
        </div>
      )}
    </div>
  )
};

export default MergeSort