import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Resume from "./screens/Resume";
import "./App.css";

const App = () => {
    return (
        <Router>
            <body>
                <Routes>
                    <Route exact path="/" element={<Resume />} />
                </Routes>
            </body>
        </Router>
    );
};

export default App;
