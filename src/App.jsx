import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Grid";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
function App() {
  return (
    // <Navbar/>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/search" element={<Search />} />
       </Routes>
     </Router>
  );
}

export default App;

