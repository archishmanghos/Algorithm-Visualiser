import React from "react";
import Home from "./Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";

export default function App(){
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home />}/>
            </Routes>
            <Routes>
                <Route path="/about" element={<About />}/>
            </Routes>
            <Routes>
                <Route path="/contact" element={<Contact />}/>
            </Routes>
        </Router>
    )
}