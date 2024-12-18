import "./styles.css";
import { SectionTitle } from "../sectionTitle";
import { Fragment } from "react";

const experiences = [
  {
    title: "Founder",
    position: "Co-founder and Lead Engineer",
    period: "2020.08. - Current",
    content:
      'Currently, developing the application called "Founder" as a lead engineer. Using strong paring system through answers from user\'s quizzes, Founder finds their users the perfect team/idea for their next future endeavor.',
  },
  {
    title: "Monthly Medium",
    position: "Author",
    period: "2019.01. - Current",
    content:
      'Currently, developing the application called "Founder" as a lead engineer. Using strong paring system through answers from user\'s quizzes, Founder finds their users the perfect team/idea for their next future endeavor.',
  },
];

export const Experiences = () => {
  return (
    <Fragment>
      <SectionTitle title={"Experiences"} />
      {experiences.map((item, index) => {
        const { title, position, period, content } = item;

        return (
          <div className={index === 0 ? "otherexperiences__card pt0" : "otherexperiences__card"} key={index}>
            <div className="otherexperiences__card__title">
              {title}
              <span className="period__mark">.</span>
            </div>
            <div className="card__subtitle">
              {position}
              <br />
              {period}
            </div>
            <div>{content}</div>
          </div>
        );
      })}
    </Fragment>
  );
};
