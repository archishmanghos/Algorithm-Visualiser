import React from "react";
import '../style.css'
import {Link} from "react-router-dom";

export default function Navbar(){
    return (
        <nav className="navbar--container">
            <div className="navbar--logo--container">
                <img src="./assets/algorithm--logo.jpg" alt="Algorithm Logo" className="navbar--logo"/>
                <h5 className="navbar--brand">Visualise It!</h5>
            </div>
            <div className="navbar--options--container">
                <p className="navbar--options--common"><Link to="/" style={{ textDecoration: 'none', color:'inherit' }}>Home</Link></p>
                <p className="navbar--options--common"><Link to="/about"style={{ textDecoration: 'none', color:'inherit' }}>About</Link></p>
                <p className="navbar--options--common"><Link to="/contact" style={{ textDecoration: 'none', color:'inherit' }}>Contact Us</Link></p>
            </div>
        </nav>
    )
}