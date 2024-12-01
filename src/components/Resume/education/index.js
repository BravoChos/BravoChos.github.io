// import { SNU, UCLA, PCC } from "../../icons";
import "./styles.css";

const data = [
  {
    name: "Seoul National University",
    major: "Master's degree, Chemical Engineering",
    period: "2012.09. - 2014.08.",
    logo: "SNU",
  },
  {
    name: "UCLA",
    major: "Bachelor's degree, Chemical Engineering",
    period: "2010.09. - 2012.08.",
    logo: "UCLA",
  },
  {
    name: " Pasadena City College",
    major: "Chemical Engineering",
    period: "2007.01. - 2010.08.",
    logo: "PCC",
  },
];
export const Education = () => {
  return (
    <div className="education">
      {data.map((card, index) => {
        const { name, major, period, logo } = card;
        let logoIcon;

        // if (logo === "SNU") logoIcon = <SNU width={80} height={80} />;
        // if (logo === "UCLA") logoIcon = <UCLA width={80} height={80} />;
        // if (logo === "PCC") logoIcon = <PCC width={120} height={80} />;
        return (
          <div className="education__card" key={"card" + index}>
            {/* <div className="education__card__logo">{logoIcon}</div> */}
            <div className="education__card__content">
              {name}
              <span className="period__mark">.</span>
              <div className="education__card__subcontent">
                {major}
                <br />
                {period}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
