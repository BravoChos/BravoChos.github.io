import { Fragment } from "react";
import { SectionTitle } from "../sectionTitle";
import { Logos } from "../logos";
import "./styles.css";

import SNU_LOGO from "../../assets/img/snu.png";
import UCLA_LOGO from "../../assets/img/ucla.png";

const data = [
  {
    logo: "SNU",
    name: "Seoul National University",
    major: "Chemical and biomedical engineering, master's degree",
    year: "Class of 2014",
  },
  {
    logo: "UCLA",
    name: "University of California, Los Angeles",
    major: "Chemical and biological engineering, bachelor's degree",
    year: "Class of 2012",
  },
];

export const Educations = () => {
  return (
    <Fragment>
      <SectionTitle title={"Education"} />
      <div className="education">
        {data.map((card, index) => {
          const { name, major, year, logo } = card;
          // let logoIcon;
          let file;
          if (logo === "SNU") file = SNU_LOGO;
          if (logo === "UCLA") file = UCLA_LOGO;
          // if (logo === "PCC") logoIcon = <PCC width={120} height={80} />;
          return (
            <div className="education__card" key={"card" + index}>
              <Logos file={file} width={80} height={80} />
              <div className="education__card__content">
                {name}
                <span className="period__mark">.</span>
                <div className="education__card__subcontent">
                  <div>{major}</div>
                  <div>{year}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};
