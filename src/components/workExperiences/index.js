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

export const WorkExperiences = () => {
  return (
    <Fragment>
      <SectionTitle title={"Work Experiences"} />

      <div className="resume-card">
        <div className="resume-workplace">
          Lotte Healthcare<span className="period__mark">.</span>
          <div className="job-role">
            Software Engineer
            <br />
            May 2023 - Aug 2024
          </div>
        </div>

        <div className="resume-workExperience">
          <div className="subcard">
            <div className="resume-workplace">
              Backend features for 'CAZZLE'
              <span className="period__mark">.</span>
            </div>
            <div className="job-role">Mar 2022 - Aug 2024</div>
            <div className="resume__workplace__subtitle">
              Tech Stack<span className="period__mark">.</span>
            </div>
            <div className="resume__workplace__body">Java Spring, python, AWS (RDS, S3, ECS, Airflow), Jenkins, datadog</div>
          </div>
        </div>
      </div>

      <div className="resume-card">
        <div className="resume-workplace">
          Humanscape<span className="period__mark">.</span>
          <div className="job-role">
            Software Engineer
            <br />
            Mar 2022 - Jan 2023
          </div>
        </div>

        <div className="resume-workExperience">
          <div className="subcard">
            <div className="resume-workplace">
              Backend features for 'MommyTalk'
              <span className="period__mark">.</span>
            </div>
            <div className="job-role">Mar 2022 - Jan 2023</div>
            <div className="resume__workplace__subtitle">
              Tech Stack<span className="period__mark">.</span>
            </div>
            <div className="resume__workplace__body">Node.JS, Socket, AWS RDS (Mysql), Jenkins, AWS, Sentry</div>
          </div>
        </div>
      </div>

      <div className="resume-card">
        <div className="resume-workplace">
          Redbik<span className="period__mark">.</span>
          <div className="job-role">
            Frontend & DevOps Engineer
            <br />
            Mar 2019 - Feb 2022
          </div>
        </div>

        <div className="resume-workExperience">
          <div className="subcard">
            <div className="resume-workplace">
              Virtual Guide
              <span className="period__mark">.</span>
            </div>
            <div className="job-role">Sep 2020 - Current</div>
            <div className="resume__workplace__subtitle">
              Description<span className="period__mark">.</span>
            </div>
            <div className="resume__workplace__body">
              Currently developing virtual guide service which allows bulter to support traveler virtualy through chat. Thanks to our gps
              feature, VUTLER can track traveler's location and other features such as sending photos, sharing map, and push notifications
              allow both VUTLER and traveler wonderful user experience.
            </div>
            <div className="resume__workplace__subtitle">
              What did I do<span className="period__mark">.</span>
            </div>
            <div className="resume__workplace__body">
              - Implement authentication to our app using firebase.
              <br />- Social login available such as google, facebook, and apple.
              <br />- Add new features for chat service (ex. map, image, and editor)
            </div>
            <div className="resume__workplace__subtitle">
              Tech Stack<span className="period__mark">.</span>
            </div>
            <div className="resume__workplace__body">React Native, Firebase, Google Cloud API, AWS DynamoDB</div>
          </div>

          <div className="subcard">
            <div className="resume-workplace">
              Spot Service
              <span className="period__mark">.</span>
            </div>
            <div className="job-role">Nov 2019 - Aug 2020</div>
            <div className="resume__workplace__subtitle">
              Description<span className="period__mark">.</span>
            </div>
            <div className="resume__workplace__body">
              Add new feature called spot service to our app. It provides list of guides who are active and highly available to traveler
              based on user's current location or destination. Authentication process has been upgraded with more features such as reset
              password, phone and email verification etc.
            </div>
            <div className="resume__workplace__subtitle">
              What did I do<span className="period__mark">.</span>
            </div>
            <div className="resume__workplace__body">
              - Implement subscription for deal, booking and chat message using aws appsync and lambda.
              <br />- Implement authentication with AWS cognito and lambda.
              <br />- Participated in UX design for authentication, chat, and profile features with designers.
            </div>
            <div className="resume__workplace__subtitle">
              Tech Stack<span className="period__mark">.</span>
            </div>
            <div className="resume__workplace__body">React Native, AWS Aurora, Cognito, Appsync, Adobe XD, Overflow</div>
          </div>
          <div className="subcard">
            <div className="resume-workplace">
              Travut MVP
              <span className="period__mark">.</span>
            </div>
            <div className="job-role">Jun 2019 - Oct 2019</div>
            <div className="resume__workplace__subtitle">
              Description<span className="period__mark">.</span>
            </div>
            <div className="resume__workplace__body">
              Build global travel platforms (ios, android) that connect travelers and friendly locals(Guides) who are ready to offer special
              travel experiences according to client needs.
            </div>
            <div className="resume__workplace__subtitle">
              What did I do<span className="period__mark">.</span>
            </div>
            <div className="resume__workplace__body">
              - Developed Travut MVP with React Native(ios, android) and AWS-Amplify.
              <br />- Build serverless backend, text editor component, and impliment apolloGraphQl state management.
            </div>
            <div className="resume__workplace__subtitle">
              Tech Stack<span className="period__mark">.</span>
            </div>
            <div className="resume__workplace__body">React Native, AWS Cognito, Appsync, DynamoDB, ApolloGraphQL</div>
          </div>
          <div className="subcard">
            <div className="resume-workplace">
              Travut Prototype
              <span className="period__mark">.</span>
            </div>
            <div className="job-role">Mar 2019 - May 2019</div>
            <div className="resume__workplace__subtitle">
              Description<span className="period__mark">.</span>
            </div>
            <div className="resume__workplace__body">
              Established ideation of our app and UI after understanding the needs in travel industy, and then degined the system
              architecture with specific features that our app requires.
            </div>
            <div className="resume__workplace__subtitle">
              What did I do<span className="period__mark">.</span>
            </div>
            <div className="resume__workplace__body">
              - Participated in DB Modeling (SQL, NoSQL), UI/UX, analytics
              <br />- Analyze the current most poplar travel application, conducted market research, and establishing objectives within a
              timeline
              <br />- Took survery and interviews with foreigners.
            </div>
            <div className="resume__workplace__subtitle">
              Tech Stack<span className="period__mark">.</span>
            </div>
            <div className="resume__workplace__body">React Native, Amplify,Firebase</div>
          </div>
        </div>
      </div>
      <div className="resume-card">
        <div className="resume-workplace">
          Suhwoo Co<span className="period__mark">.</span>
          <div className="job-role">
            Fullstack Developer
            <br />
            Oct 2018-Feb 2019
          </div>
        </div>

        <div className="resume-workExperience">
          <div className="subcard">
            <div className="resume-workplace">
              IoT based Smart Farm Web
              <span className="period__mark">.</span>
            </div>
            <div className="job-role"> Oct 2018-Feb 2019</div>
            <div className="resume__workplace__subtitle">
              Description<span className="period__mark">.</span>
            </div>
            <div className="resume__workplace__body">
              monitors various equipment sensors and display the current status in table form. It can control/update the sensor's setting
              value, and To-do-list alert feature
            </div>
            <div className="resume__workplace__subtitle">
              What did I do<span className="period__mark">.</span>
            </div>
            <div className="resume__workplace__body">
              - Implement authentication to our app using firebase.
              <br />- Social login available such as google, facebook, and apple.
              <br />- Add new features for chat service (ex. map, image, and editor)
            </div>
            <div className="resume__workplace__subtitle">
              Tech Stack<span className="period__mark">.</span>
            </div>
            <div className="resume__workplace__body">React, Node.js, MySql, Naver Cloud Platform</div>
          </div>
        </div>
      </div>
      <div className="resume-card">
        <div className="resume-workplace">
          TrueShort<span className="period__mark">.</span>
          <div className="job-role">
            Backend Developer Intern
            <br />
            Aug 2018 - Oct 2018
          </div>
        </div>

        <div className="resume-workExperience">
          <div className="resume-workplace">
            Trushort Backend API<span className="period__mark">.</span>
          </div>
          <div className="job-role">Aug 2018 - Oct 2018</div>
          <div className="resume__workplace__subtitle">
            Description<span className="period__mark">.</span>
          </div>
          <div className="resume__workplace__body">⬥ Developed Restful API which provides stock related information.</div>
          <div className="resume__workplace__subtitle">
            What did I do<span className="period__mark">.</span>
          </div>
          <div className="resume__workplace__body">⬥ Developed Restful API which provides stock related information.</div>
          <div className="resume__workplace__subtitle">
            Tech Stack<span className="period__mark">.</span>
          </div>
          <div className="resume__workplace__body">Flask, MySql</div>
        </div>
      </div>

      <div className="resume-card">
        <div className="resume-workplace">
          KRICT
          <span className="period__mark">.</span>
          <div className="job-role">
            Researcher & Data Analyst
            <br />
            Jul 2014 - Sep 2017
          </div>
        </div>

        <div className="resume-workExperience">
          <div className="resume-workplace">
            MSDS & Molecular Modeling
            <span modelingspan className="period__mark">
              .
            </span>
          </div>
          <div className="job-role">Jul 2014 - Sep 2017</div>
          <div className="resume__workplace__subtitle">
            Description<span className="period__mark">.</span>
          </div>
          <div className="resume__workplace__body">
            ⬥ Conducted mass production process of horticultural granules, and carried out studies on cost reduction and efficient
            maintenance
          </div>
        </div>
      </div>
    </Fragment>
  );
};
