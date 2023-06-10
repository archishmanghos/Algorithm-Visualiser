import React, { useState } from 'react';
import './search.css';

const LinearSearch = () => {
    const [array, setArray] = useState(generateArray());
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState('');

    function generateArray() {
        const newArray = [];
        for (let i = 0; i < 30; i++) {
            const value = Math.ceil(Math.random() * 100);
            newArray.push(value);
        }
        return newArray;
    }

    async function linearSearch() {
        setSearchResult('');
        const blocks = document.querySelectorAll('.block');

        // Changing the color of all the blocks to violet
        for (let i = 0; i < blocks.length; i += 1) {
            blocks[i].style.backgroundColor = '#6b5b95';
        }

        let flag = 0;
        // Linear Search Algorithm
        for (let i = 0; i < blocks.length; i += 1) {
            // Changing the color of the current block to red
            blocks[i].style.backgroundColor = '#FF4949';

            // To wait for .1 sec
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, 300)
            );

            // Extracting the value of the current block
            const value = Number(blocks[i].childNodes[0].innerHTML);

            // Comparing block value with the entered value
            if (value === parseInt(searchValue)) {
                flag = 1;
                setSearchResult(`Element Found at Index ${i}`);
                blocks[i].style.backgroundColor = '#13CE66';
                break;
            } else {
                // Changing the color to the previous one
                blocks[i].style.backgroundColor = '#6b5b95';
            }
        }

        // When the element is not found in the array
        if (flag === 0) {
            setSearchResult('Element Not Found');
        }
    }

    return (
        <div className='linearSearchContainer'>
            <br />
            <p className="header">Linear Search</p>
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
                    className="c-fname"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
                <br />
                <br />
                <button id="btn" onClick={linearSearch}>
                    Search
                </button>
                <br />
                <br />
                <div id="text">{searchResult}</div>
            </div>
        </div>
    );
};

export default LinearSearch;
