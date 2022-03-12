import React from "react";
import "./styles.css";

const TitleBar = () => {
  return (
    <div
      style={{
        backgroundImage: "linear-gradient(to right, #4880EC, #39d2fd)",
        height: 10,
      }}
    />
  );
};

const Resume = (props) => {
  return (
    <div>
      <TitleBar />
      <div className="resume__wrapper">
        <p className="resume-title">
          Hello! <br /> I'm Song Cho<span className="period__mark">.</span>
        </p>

        <p className="resume-intro">
          Self-driven, passionate about learning new skills and believe that
          leveraging technology is best way to create social impact. In my free
          time, I often enjoy playing drums and travel around to experience new
          culture.
          <br />
        </p>
      </div>
    </div>
  );
};

export default Resume;
