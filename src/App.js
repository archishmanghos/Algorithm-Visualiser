import React, { useState } from "react";
import Home from "./components/Home";
import About from "./components/Homepage/Navbar/About";
import Navbar from "./components/Homepage/Navbar";
import Ide from "./components/Homepage/Navbar/Ide";
import Contact from "./components/Homepage/Navbar/Contact";
import Code from "./components/Visualiser/Code";
import Graph from "./components/Algorithms/Graph/Graph";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Algorithm from "./components/Visualiser/Algorithm";
import Sorting from "./components/Algorithms/Sorting/Sorting";
import BSorting from "./components/Algorithms/Sorting/Bubble-Sort/BSorting";
import MainScreen from "./components/Algorithms/Sorting/Selection-Sort/MainScreen";
import InsertionSortVisualizer from "./components/Algorithms/Sorting/Insertion-Sort/ISorting";

export default function App() {
  const [toggle, setToggle] = useState(false);
  const triggerToggle = () => {
    setToggle((prevToggle) => !prevToggle);
  };

  return (
    <Router>
      <Navbar toggle={toggle} triggerToggle={triggerToggle} />
      <Routes>
        <Route path="/" element={<Home toggle={toggle} triggerToggle={triggerToggle} />} />
      </Routes>
      <Routes>
        <Route path="/ide" element={<Ide toggle={toggle}/>}></Route>
      </Routes>
      <Routes>
        <Route path="/about" element={<About toggle={toggle} />} />
      </Routes>
      <Routes>
        <Route path="/contact" element={<Contact toggle={toggle} />} />
      </Routes>
      <Routes>
        <Route path="/algorithm" element={<Algorithm toggle={toggle} />} />
      </Routes>
      <Routes>
        <Route path="/code" element={<Code toggle={toggle} />} />
      </Routes>
      <Routes>
        <Route path="/graph" element={<Graph toggle={toggle} />} />
      </Routes>
      <Routes>
        <Route path="/sort" element={<Sorting toggle={toggle} />} />
      </Routes>
      <Routes>
        <Route path="/bubble-sort" element={<BSorting toggle={toggle} />} />
      </Routes>
      <Routes>
        <Route path="/selection-sort" element={<MainScreen toggle={toggle} />} />
      </Routes>
      <Routes>
        <Route path="/insertion-sort" element={<InsertionSortVisualizer toggle={toggle} />} />
      </Routes>
    </Router>
  );
}
