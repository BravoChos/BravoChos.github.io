import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//
import Resume from "./screens/resume";
import Home from "./screens/home";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/resume" element={<Resume />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
