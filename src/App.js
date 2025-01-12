import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//
// import Resume from "./screens/Resume";
import Home from "./screens/home";
import "./App.css";

const App = () => {
  return (
    <Router>
      <body>
        <Routes>
          {/* <Route exact path="/resume" element={<Resume />} /> */}
          <Route exact path="/" element={<Home />} />
        </Routes>
      </body>
    </Router>
  );
};

export default App;
