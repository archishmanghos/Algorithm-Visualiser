import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Code from "./components/Code";
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import Algorithm from "./components/Algorithm";

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
            <Routes>
                <Route path="/algorithm" element={<Algorithm />}/>
            </Routes>
            <Routes>
                <Route path="/code" element={<Code />}/>
            </Routes>
        </Router>
    )
}