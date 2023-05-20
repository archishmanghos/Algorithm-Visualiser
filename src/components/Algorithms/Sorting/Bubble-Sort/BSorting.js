//import './App.css';
import React, { Component } from 'react'
import Bar from './Bar';
import BubbleSort from './BubbleSort';
import './Sorting.css';
export default class BSorting extends Component {
    state = {
        array: [],
        steps: [],
        color: [],
        colorKey: [],
        count: 25,
        timeouts: [],
        currentStep: 0,
        delay: 550,
        algorithm: ''
    }
    componentDidMount() {
        this.generateRandomArray();
    }

    handleStart = () => {
        let steps = this.state.steps;
        let color = this.state.color;

        this.clearTimeouts();
        let timeouts = [];

        let i = 0;
        while (i < steps.length - this.state.currentStep) {
            let timeout = setTimeout(() => {
                let currentStep = this.state.currentStep;
                this.setState({
                    array: steps[currentStep],
                    colorKey: color[currentStep],
                    currentStep: currentStep + 1
                });
                timeouts.push(timeout);

            }, this.state.delay * i)
            i++;
        }
        this.setState({
            timeouts: timeouts,
        })
    };
    generateSteps = () => {
        let array = this.state.array.slice();
        let steps = this.state.steps.slice();
        let color = this.state.color.slice();
        BubbleSort(array, 0, steps, color);
        this.setState({
            steps: steps,
            color: color
        });

    }
    generateRandomNumbers = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    }

    clearColorKey = () => {
        let blank = new Array(this.state.count).fill(0);
        this.setState({ colorKey: blank, color: [blank] });
    }

    clearTimeouts = () => {
        this.state.timeouts.forEach(timeout => clearTimeout(timeout));
        this.setState({ timeouts: [] });
    }
    generateRandomArray = () => {
        this.clearTimeouts();
        this.clearColorKey();

        let count = this.state.count;
        let arr = [];
        for (let index = 0; index < count; index++) {
            arr.push(this.generateRandomNumbers(50, 350));
        }

        this.setState({
            array: arr,
            steps: [arr],
            count: count,
            currentSteps: 0
        }, () => this.generateSteps());
        console.log(arr);
    }

    changeArray = (index, value) => {
        let array = this.state.array;
        array[index] = value;
        this.setState({
            array: array,
            steps: [array],
            currentSteps: 0
        });
    }
    render() {
        const bars = this.state.array.map((value, index) => {
            return <Bar
                key={index}
                index={index}
                length={value}
                colorKey={this.state.colorKey[index]}
                changeArray={this.changeArray}
            />
        });
        return (
            <>
                <div>
                    <div className='sorting'>
                        <div className='frame'>
                            <div className="satyajit--card container">{bars}</div>
                        </div>
                        <div className="btn">
                            <button className='btn-class' onClick={this.handleStart}>Visualize BubbleSort </button>
                        </div>
                    </div>
                </div>
            </>



        )
    }
}
