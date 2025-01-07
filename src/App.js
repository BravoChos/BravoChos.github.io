import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CV from "./screens/cv";
// import Resume from "./screens/resume";
import "./App.css";

// import pdfFile from "./assets/pdf/resume_20241216";

const App = () => {
  return (
    <Router>
      <body>
        <Routes>
          <Route exact path="/" element={<CV />} />
          {/* <Route exact path="/resume" element={<Resume />} /> */}
        </Routes>
      </body>
    </Router>
  );
};

export default App;
