import React, { useState, useEffect } from 'react';
import './search.css';

const BinarySearch = () => {
    const [array, setArray] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState('');

    useEffect(() => {
        generateArray();
    }, []);

    function generateArray() {
        const newArray = [];
        for (let i = 0; i < 30; i++) {
            const value = Math.ceil(Math.random() * 100);
            newArray.push(value);
        }
        newArray.sort((a, b) => a - b);
        setArray(newArray);
    }

    async function binarySearch() {
        setSearchResult('');
        const blocks = document.querySelectorAll('.block');

        // Coloring all the blocks violet
        for (let i = 0; i < blocks.length; i += 1) {
            blocks[i].style.backgroundColor = '#6b5b95';
        }

        let start = 0;
        let end = 29;
        let flag = 0;
        while (start <= end) {
            // Middle index
            const mid = Math.floor((start + end) / 2);
            blocks[mid].style.backgroundColor = '#15ed68';

            // Value at mid index
            const value = Number(blocks[mid].childNodes[0].innerHTML);

            // To wait for .1 sec
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, 300)
            );

            // Current element is equal to the element entered by the user
            if (value === parseInt(searchValue)) {
                setSearchResult(`Element Found at Index ${mid}`);
                blocks[mid].style.backgroundColor = '#13CE66';
                flag = 1;
                break;
            }
            // Current element is greater than the element entered by the user
            if (value > parseInt(searchValue)) {
                end = mid - 1;
                blocks[mid].style.backgroundColor = '#f54242';
            } else {
                start = mid + 1;
                blocks[mid].style.backgroundColor = '#f54242';
            }
        }
        if (flag === 0) {
            setSearchResult('Element Not Found');
        }
    }

    return (
        <div>
            <br />
            <p className="header">Binary Search</p>
            <div id="array">
                {array.map((value, index) => (
                    <div
                        key={index}
                        className="block"
                        style={{ height: `${value * 3}px`, transform: `translate(${index * 30}px)` }}
                    >
                        <label className="block_id">{value}</label>
                    </div>
                ))}
            </div>
            <br />
            <br />
            <div style={{ textAlign: 'center' }}>
                <label htmlFor="fname">Number to be Searched:</label>
                <input
                    type="text"
                    id="fname"
                    name="fname"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
                <br />
                <br />
                <button id="btn" onClick={binarySearch}>
                    Search
                </button>
                <br />
                <br />
                <div id="text">{searchResult}</div>
            </div>
        </div>
    );
};

export default BinarySearch;
