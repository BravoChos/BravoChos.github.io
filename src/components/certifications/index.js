import "./styles.css";
import { SectionTitle } from "../sectionTitle";
import { Fragment } from "react";

export const Certifications = () => {
  return (
    <Fragment>
      <SectionTitle title={"Certifications"} />
      <div className="certification">- AWS Certified Solutions Architect - Associate</div>
      <div className="certification">- Full Stack Web Developer Nanodegree</div>
    </Fragment>
  );
};
