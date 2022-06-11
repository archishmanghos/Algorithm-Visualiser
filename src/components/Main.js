import React from "react";
import ToggleButton from "./ToggleButton";
import Card from "./Card";

export default function Main(){
    return (
        <div className="main--container">
            <div className="toggle--container"><ToggleButton/></div>
            <div className="card--container">
                <Card
                    coverImg="algo--visualiser--logo.jpg"
                    title="Algorithm Visualiser"
                />
                <Card
                    coverImg="code--visualiser--logo.png"
                    title="Code Visualiser"
                />
            </div>
        </div>
    )
}