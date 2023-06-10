import { useState, useEffect } from 'react';
import './Bar.css';
const Bars = ({ index, length, colorKey, changeArray }) => {
    const [len, setLen] = useState(length);
    const color = ['#4248f5', '#15ed68', '#f54242'];
    useEffect(() => {
        setLen(length);
    }, [length])

    let barStyle = {
        background: color[colorKey],
        height: length,
        marginTop: 350 - length,
    }

    let textStyle = {
        width: length,
        top: Math.floor(length / 2) - 10,
        left: -Math.floor(length / 2) + 11,

    }
    let quantityBtnStyle = {
        top: length - 9,

    }
    const handleChange = (e) => {
        let val = e.target.value;
        if (val === '') {
            setLen(0);
            changeArray(index, 0);
        }
        else {
            val = parseInt(val);
            if (val > 350) {
                setLen(350);
                changeArray(index, 350);
            }
            else {
                setLen(val);
                changeArray(index, val);
            }
        }
    }

    const increment = () => {
        if (len < 350) {
            setLen(len + 1);
            changeArray(index, len + 1);
        }

    }
    const decrement = () => {
        if (len > 0) {
            setLen(len - 1);
            changeArray(index, len - 1);
        }

    }
    return (
        <div className="bar" style={barStyle}>
            <input
                className='text'
                type="number"
                value={len}
                style={textStyle}
                onChange={handleChange}
            />
            <div className="quantityNav">
                <div className="quantity-btn quantity-up" style={quantityBtnStyle} onClick={increment}>+</div>
                <div className="quantity-btn quantity-down" style={quantityBtnStyle} onClick={decrement}>-</div>
            </div>
        </div>
    )
}
export default Bars;
