import React from "react";
import Home from "./components/Home";
import About from "./components/Homepage/Navbar/About";
import Navbar from "./components/Homepage/Navbar";
import Contact from "./components/Homepage/Navbar/Contact";
import Code from "./components/Visualiser/Code";
import Dijkstra from "./components/Algorithms/Graph/Dijkstra/Dijkstra";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Algorithm from "./components/Visualiser/Algorithm";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
      <Routes>
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Routes>
        <Route path="/algorithm" element={<Algorithm />} />
      </Routes>
      <Routes>
        <Route path="/code" element={<Code />} />
      </Routes>
      <Routes>
        <Route path="/graph" element={<Dijkstra />} />
      </Routes>
    </Router>
  );
}
