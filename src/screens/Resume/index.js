import React from "react";
import "./styles.css";

const Resume = (props) => {
  console.log(props);
  console.log("sdlkfjsldfjlskdfjlskdfjlskdjflsk");
  return (
    <div className="resume">
      <p className="resume-title">
        Hello! <br /> I'm Song Cho<span className="period__mark">.</span>
      </p>

      <p className="resume-intro">
        Specialized in AWS, React & React Native and eager to become a
        professional solution architect. 5+ years of experience as a Backend
        Engineer and 3+ years of experience as a react native developer.
        Self-driven, passionate about learning new skills and believe that
        leveraging technology is best way to create social impact. In my free
        time, I often enjoy playing drums and travel around to experience new
        culture.
        <br />
      </p>
    </div>
  );
};

export default Resume;
