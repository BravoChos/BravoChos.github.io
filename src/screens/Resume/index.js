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

const SectionTitle = ({ title }) => {
  return (
    <div className="section__title">
      {title}
      <span className="period__mark">.</span>
    </div>
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

        <SectionTitle title={"Work Experience"} />

        <div className="resume-card">
          <div className="resume-workplace">
            Humanscape<span className="period__mark">.</span>
            <div className="job-role">
              Backend & DevOps Engineer
              <br />
              Mar 2022 - Current
            </div>
          </div>

          <div className="resume-workExperience">
            <div className="subcard">
              <div className="resume-workplace">
                Virtual Guide
                <span className="period__mark">.</span>
              </div>
              <div className="job-role">2020.09 - Current</div>
              <div className="resume__workplace__subtitle">
                Description<span className="period__mark">.</span>
              </div>
              <div className="resume__workplace__body">
                Currently developing virtual guide service which allows bulter
                to support traveler virtualy through chat. Thanks to our gps
                feature, butler can track traveler's location and other features
                such as sending photos, sharing map, and push notifications
                allow both butler and traveler wonderful user experience.
              </div>
              <div className="resume__workplace__subtitle">
                What did I do<span className="period__mark">.</span>
              </div>
              <div className="resume__workplace__body">
                - Implement authentication to our app using firebase.
                <br />- Social login available such as google, facebook, and
                apple.
                <br />- Add new features for chat service (ex. map, image, and
                editor)
              </div>
              <div className="resume__workplace__subtitle">
                Tech Stack<span className="period__mark">.</span>
              </div>
              <div className="resume__workplace__body">
                React Native, Firebase, Google Cloud API, AWS DynamoDB
              </div>
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
              <div className="job-role">2020.09 - Current</div>
              <div className="resume__workplace__subtitle">
                Description<span className="period__mark">.</span>
              </div>
              <div className="resume__workplace__body">
                Currently developing virtual guide service which allows bulter
                to support traveler virtualy through chat. Thanks to our gps
                feature, butler can track traveler's location and other features
                such as sending photos, sharing map, and push notifications
                allow both butler and traveler wonderful user experience.
              </div>
              <div className="resume__workplace__subtitle">
                What did I do<span className="period__mark">.</span>
              </div>
              <div className="resume__workplace__body">
                - Implement authentication to our app using firebase.
                <br />- Social login available such as google, facebook, and
                apple.
                <br />- Add new features for chat service (ex. map, image, and
                editor)
              </div>
              <div className="resume__workplace__subtitle">
                Tech Stack<span className="period__mark">.</span>
              </div>
              <div className="resume__workplace__body">
                React Native, Firebase, Google Cloud API, AWS DynamoDB
              </div>
            </div>

            <div className="subcard">
              <div className="resume-workplace">
                Spot Service
                <span className="period__mark">.</span>
              </div>
              <div className="job-role">2019.11 - 2020.08</div>
              <div className="resume__workplace__subtitle">
                Description<span className="period__mark">.</span>
              </div>
              <div className="resume__workplace__body">
                Add new feature called spot service to our app. It provides list
                of guides who are active and highly available to traveler based
                on user's current location or destination. Authentication
                process has been upgraded with more features such as reset
                password, phone and email verification etc.
              </div>
              <div className="resume__workplace__subtitle">
                What did I do<span className="period__mark">.</span>
              </div>
              <div className="resume__workplace__body">
                - Implement subscription for deal, booking and chat message
                using aws appsync and lambda.
                <br />- Implement authentication with AWS cognito and lambda.
                <br />- Participated in UX design for authentication, chat, and
                profile features with designers.
              </div>
              <div className="resume__workplace__subtitle">
                Tech Stack<span className="period__mark">.</span>
              </div>
              <div className="resume__workplace__body">
                React Native, AWS Aurora, Cognito, Appsync, Adobe XD, Overflow
              </div>
            </div>
            <div className="subcard">
              <div className="resume-workplace">
                Travut MVP
                <span className="period__mark">.</span>
              </div>
              <div className="job-role">2019.06 - 2019.10</div>
              <div className="resume__workplace__subtitle">
                Description<span className="period__mark">.</span>
              </div>
              <div className="resume__workplace__body">
                Build global travel platforms (ios, android) that connect
                travelers and friendly locals(Guides) who are ready to offer
                special travel experiences according to client needs.
              </div>
              <div className="resume__workplace__subtitle">
                What did I do<span className="period__mark">.</span>
              </div>
              <div className="resume__workplace__body">
                - Developed Travut MVP with React Native(ios, android) and
                AWS-Amplify.
                <br />- Build serverless backend, text editor component, and
                impliment apolloGraphQl state management.
              </div>
              <div className="resume__workplace__subtitle">
                Tech Stack<span className="period__mark">.</span>
              </div>
              <div className="resume__workplace__body">
                React Native, AWS Cognito, Appsync, DynamoDB, ApolloGraphQL
              </div>
            </div>
            <div className="subcard">
              <div className="resume-workplace">
                Travut Prototype
                <span className="period__mark">.</span>
              </div>
              <div className="job-role">2019.03 - 2019.05</div>
              <div className="resume__workplace__subtitle">
                Description<span className="period__mark">.</span>
              </div>
              <div className="resume__workplace__body">
                Established ideation of our app and UI after understanding the
                needs in travel industy, and then degined the system
                architecture with specific features that our app requires.
              </div>
              <div className="resume__workplace__subtitle">
                What did I do<span className="period__mark">.</span>
              </div>
              <div className="resume__workplace__body">
                - Participated in DB Modeling (SQL, NoSQL), UI/UX, analytics
                <br />- Analyze the current most poplar travel application,
                conducted market research, and establishing objectives within a
                timeline
                <br />- Took survery and interviews with foreigners.
              </div>
              <div className="resume__workplace__subtitle">
                Tech Stack<span className="period__mark">.</span>
              </div>
              <div className="resume__workplace__body">
                React Native, Amplify,Firebase
              </div>
            </div>
          </div>
        </div>
        <div className="resume-card">
          <div className="resume-workplace">
            Suhwoo Co<span className="period__mark">.</span>
            <div className="job-role">
              Frontend Developer
              <br />
              Oct 2018-Feb 2019
            </div>
          </div>

          <div className="resume-workExperience">
            <div className="subcard">
              <div className="resume-workplace">
                Developed Web Application for IoT based Smart Farm Web
                Application
                <span className="period__mark">.</span>
              </div>
              <div className="job-role"> Oct 2018-Feb 2019</div>
              <div className="resume__workplace__subtitle">
                Description<span className="period__mark">.</span>
              </div>
              <div className="resume__workplace__body">
                It monitors various equipment sensors and display the current
                status in table form. It can control/update the sensor's setting
                value, and To-do-list alert feature
              </div>
              <div className="resume__workplace__subtitle">
                What did I do<span className="period__mark">.</span>
              </div>
              <div className="resume__workplace__body">
                - Implement authentication to our app using firebase.
                <br />- Social login available such as google, facebook, and
                apple.
                <br />- Add new features for chat service (ex. map, image, and
                editor)
              </div>
              <div className="resume__workplace__subtitle">
                Tech Stack<span className="period__mark">.</span>
              </div>
              <div className="resume__workplace__body">
                React, Node.js, MySql, Naver Cloud Platform
              </div>
            </div>
          </div>
        </div>
        {/*
        <div className="resume-card">
          <div className="resume-workplace">
            TrueShort<span className="period__mark">.</span>
            <div className="job-role">
              Backend Developer Intern
              <br />
              Oct 2018-Mar 2019
            </div>
          </div>

          <div className="resume-workExperience">
            <div className="resume-workplace">
              Developed Web Application for IoT based Smart Farm Web Application
            </div>
            <div className="resume__workplace__subtitle">
              Description<span className="period__mark">.</span>
            </div>
            <div className="resume__workplace__body">
              ⬥ Developed Restful API which provides stock related information.
            </div>
            <div className="resume__workplace__subtitle">
              What did I do<span className="period__mark">.</span>
            </div>
            <div className="resume__workplace__body">
              ⬥ Developed Restful API which provides stock related information.
            </div>
            <div className="resume__workplace__subtitle">
              Tech Stack<span className="period__mark">.</span>
            </div>
            <div className="resume__workplace__body">Flask, MySql</div>
          </div>
        </div>
        <div className="resume-card">
          <div className="resume-workplace">
            KRICT<span className="period__mark">.</span>
            <div className="job-role">
              Backend Developer Intern
              <br />
              Oct 2018-Mar 2019 (5 mos)
            </div>
          </div>

          <div className="resume-workExperience">
            <div className="resume__workplace__body">
              Developed Web Application for IoT based Smart Farm Web Application
            </div>
            <div>Description.</div>
            <div>What did I do.</div>
            <div>Tech Stack.</div>
            <div>
              ⬥ Developed Restful API which provides stock related information.
            </div>
          </div>
        </div>
                */}
      </div>
    </div>
  );
};

export default Resume;
