import React from "react";
import "./styles.css";

import { WorkExperiences } from "../../components/workExperiences";
import { Certifications } from "../../components/certifications";
import { Experiences } from "../../components/experiences";
import { Educations } from "../../components/educations";

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

const SectionTitleDeleteme = ({ title }) => {
  return (
    <div className="section__title">
      {title}
      <span className="period__mark">.</span>
    </div>
  );
};

const CV = (props) => {
  return (
    <div>
      <TitleBar />
      <div className="resume__wrapper">
        <p className="resume-title">
          Hello! <br /> I'm Song Cho<span className="period__mark">.</span>
        </p>

        <p className="resume-intro">
          Over 6 years of experience in software engineering, I have successfully delivered innovative mobile applications and built robust
          backend systems.
          <br />
          <br />
          I have a strong background in Typescript (Javascript) and technologies such as React, Node.js, and AWS with a proven track record
          of optimizing data processing and scaling applications for large user bases. I have also experience in Java Spring and Python
          programming.
          <br />
          <br />
          As a passionate problem solver for learning and continuous improvement, I am excited to bring my skills and experience to new
          challenges and make a positive impact through my work.
          <br />
        </p>

        <WorkExperiences />

        <Educations />
        <Experiences />
        <Certifications />
      </div>
    </div>
  );
};

export default CV;
