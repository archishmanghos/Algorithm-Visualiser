import React from "react";
import '../style.css'

export default function Navbar(){
    return (
        <nav className="navbar--container">
            <div className="navbar--logo--container">
                <img src="./assets/algorithm--logo.jpg" alt="Algorithm Logo" className="navbar--logo"/>
                <h5 className="navbar--brand">Visualise It!</h5>
            </div>
            <div className="navbar--options--container">
                <p className="navbar--options--common">Home</p>
                <p className="navbar--options--common">About</p>
                <p className="navbar--options--common">Contact Us</p>
            </div>
        </nav>
    )
}