import React from "react";
import "./styles.css";

import { Certification, Education, Experience } from "../../components/Resume";

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
              Backend Engineer
              <br />
              Mar 2022 - Current
            </div>
          </div>

          <div className="resume-workExperience">
            <div className="subcard">
              <div className="resume-workplace">
                Backend features for MamiTalk
                <span className="period__mark">.</span>
              </div>
              <div className="job-role">Mar 2022 - Current</div>
              {/* <div className="resume__workplace__subtitle">
                Description<span className="period__mark">.</span>
              </div>
              <div className="resume__workplace__body">
             #흔치 않은 기술적 챌린지들을 해결하는 경험을 할 수 있어요.
                마미톡은 수십만명의 산모들을 대상으로 쇼핑몰의 타임세일,
                커뮤니티의 타임 이벤트를 진행하고 있는 만큼 수많은 기술적
                챌린지들을 감당하고 해결해 나가야 하는 서비스예요.
                인도네시아에서 수백만명의 산모들이 서비스를 이용하게 될 것인
                만큼, 앞으로 기술적 안정성은 더욱 중요해질 거예요. 이런
                챌린지들에 도전하는 것을 즐기는 분이라면, 폭발적으로 성장할 수
                있어요! #끝내주는 데이터들을 다룰 수 있어요. 마미톡은 주별
                리텐션이 50%나 될 정도로 활성화율이 높은 서비스예요. 그러다 보니
                쇼핑몰 구매 데이터, 커뮤니티 활동 데이터 등 앱 전반적으로
                엄청나게 많은 데이터가 발생하고 있죠. 앱에 저장되는 초음파
                동영상 데이터 역시 매월 수만 건이 쌓이고 있어요. 이런 풍부한
                데이터들을 활용해서 멋진 제품을 만들어 나가는 경험을 할 수
                있어요.
                
              </div>
              <div className="resume__workplace__subtitle">
                What did I do<span className="period__mark">.</span>
              </div>
              <div className="resume__workplace__body">
                • 앱내 WISA 독립몰 유지보수
                <br />• NodeJS 기반 마미톡 자체 쇼핑몰 개발
                <br />• 건강하고 즐거운 개발 문화를 만드는데 기여
              </div> */}
              <div className="resume__workplace__subtitle">
                Tech Stack<span className="period__mark">.</span>
              </div>
              <div className="resume__workplace__body">
                Node.JS, Socket, AWS RDS (Mysql), Jenkins, AWS, Sentry
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
              <div className="job-role">Sep 2020 - Current</div>
              <div className="resume__workplace__subtitle">
                Description<span className="period__mark">.</span>
              </div>
              <div className="resume__workplace__body">
                Currently developing virtual guide service which allows bulter
                to support traveler virtualy through chat. Thanks to our gps
                feature, VUTLER can track traveler's location and other features
                such as sending photos, sharing map, and push notifications
                allow both VUTLER and traveler wonderful user experience.
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
              <div className="job-role">Nov 2019 - Aug 2020</div>
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
              <div className="job-role">Jun 2019 - Oct 2019</div>
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
              <div className="job-role">Mar 2019 - May 2019</div>
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
                monitors various equipment sensors and display the current
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
              ⬥ Conducted mass production process of horticultural granules, and
              carried out studies on cost reduction and efficient maintenance
            </div>
          </div>
        </div>

        <SectionTitle title={"Education"} />
        <Education />
        <SectionTitle title={"Experience"} />
        <Experience />
        <SectionTitle title={"Certification"} />
        <Certification />
      </div>
    </div>
  );
};

export default Resume;
