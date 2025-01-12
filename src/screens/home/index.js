import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

import SNU_LOGO from "../../assets/img/snu.png";
import UCLA_LOGO from "../../assets/img/ucla.png";

function NavigateButton() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-end">
      <button className="text-xs md:text-sm text-right pr-2" onClick={() => navigate("/resume")}>
        last updated 2025.01.01
      </button>
    </div>
  );
}

const Home = () => {
  return (
    <div className="min-h-screen justify-space align-items">
      <div className="h-3 border bg-header-gradient w-full" />
      <div className="w-full max-w-4xl mx-auto p-2">
        <p className="w-full text-4xl sm:text-5xl xl:text-7xl font-bold">
          Hello! <br /> I'm Song Cho<span className="text-custom-blue">.</span>
        </p>

        {/* Technical Skills */}
        <div className="my-4 border-b pb-4">
          <p className="w-full text-2xl sm:text-3xl xl:text-4xl font-bold my-2">
            Technical Skills<span className="text-custom-blue">.</span>
          </p>
          <p className="text-xs sm:text-base xl:text-lg">Language: Javascript, Typescript, Python, Java</p>
          <p className="text-xs sm:text-base xl:text-lg">Framework: Next.js, Next.js, Spring Boot</p>
          <p className="text-xs sm:text-base xl:text-lg">Database: MySQL, MongoDB, AWS RDS, Aurora, DynamoDB</p>
          <p className="text-xs sm:text-base xl:text-lg">Devops: Kubernetes, Docker, Jenkins, AWS lambda, S3</p>
          <p className="text-xs sm:text-base xl:text-lg">Certificates: AWS Solution Architect Professional</p>
        </div>

        {/* About me */}
        <div className="my-2 border-b pb-4">
          <div className="my-2">
            <p className="w-full text-2xl sm:text-3xl xl:text-4xl font-bold">
              Professional Summary<span className="text-custom-blue">.</span>
            </p>
            <div className="my-2">
              <p className="text-xs sm:text-base xl:text-lg">I am a software engineer with over 5+ years of experience.</p>
              <p className="text-xs sm:text-base xl:text-lg">Launched and operated multiple mobile/web apps.</p>
              <p className="text-xs sm:text-base xl:text-lg">Built robust backend systems implement microservices.</p>
              <p className="text-xs sm:text-base xl:text-lg">Strong background in Typescript, React, and Node.js.</p>
            </div>
          </div>

          <p className="text-xs sm:text-base xl:text-lg">As a passionate problem solver, I am excited to bring my skills</p>
          <p className="text-xs sm:text-base xl:text-lg">to make a positive impact through my work.</p>
        </div>

        {/* Work Experiences */}
        <div className="my-4">
          <div className="my-2">
            <p className="w-full text-2xl sm:text-3xl xl:text-4xl font-bold">
              Work Experiences<span className="text-custom-blue">.</span>
            </p>
            {/* Lotte Healthcare */}
            <div className="my-4 border-b pb-4">
              <p className="text-sm lg:text-xl font-bold">Lotte Healthcare, Seoul, South Korea</p>
              <p className="text-xs sm:text-base xl:text-lg">Software Engineer, May 2023 - Aug 2024</p>
              <div className="my-">
                <p className="text-xs sm:text-base xl:text-lg font-bold">
                  Tech Stack<span className="text-custom-blue">.</span>
                </p>
                <p className="text-xs sm:text-base xl:text-lg">Java, Sprint boot, Datadog, Python AWS Airflow, ECS</p>
              </div>
              <div className="my-">
                <p className="text-xs sm:text-base xl:text-lg font-bold">
                  Descriptions<span className="text-custom-blue">.</span>
                </p>
                <p className="text-xs sm:text-base xl:text-lg">
                  - Designed and implemented a scalable Java Spring backend system for a healthcare application, ‘Cazzle’.
                </p>
                <p className="text-xs sm:text-base xl:text-lg">
                  - Developed a high-efficiency crawling batch server using Python, AWS Airflow, and ECS.
                </p>
                <p className="text-xs sm:text-base xl:text-lg">
                  - Built an optimized data-pipeline for e-commerce settlement, reducing processing time by 20%.
                </p>
                <p className="text-xs sm:text-base xl:text-lg">
                  - Collaborated with the devops team to automate existing backend systems using AWS and Github Action.
                </p>
              </div>
            </div>
            {/* Humanscape */}
            <div className="my-4 border-b pb-4">
              <div>
                <p className="text-sm lg:text-xl font-bold">Humanscape, Seoul, South Korea</p>
                <p className="text-xs sm:text-base xl:text-lg">Software Engineer, Mar 2022 - Jan 2023</p>
              </div>
              <div className="my-">
                <p className="text-xs sm:text-base xl:text-lg font-bold">
                  Tech Stack<span className="text-custom-blue">.</span>
                </p>
                <p className="text-xs sm:text-base xl:text-lg">Nest.js, Elasticsearch, AWS RDS, Microservices, Datadog, Next.js</p>
              </div>
              <div className="my-">
                <p className="text-xs sm:text-base xl:text-lg font-bold">
                  Descriptions<span className="text-custom-blue">.</span>
                </p>
                <p className="text-xs sm:text-base xl:text-lg">
                  - Developed distributed, resilient, and high-performing backend services using Nest.js, and Kubernetes.
                </p>
                <p className="text-xs sm:text-base xl:text-lg">
                  - Contributed to growing the user base to 600K cumulatively and achieving 350K MAU.
                </p>
                <p className="text-xs sm:text-base xl:text-lg">
                  - Optimized query performance, reducing response time from 4 seconds to 100ms by leveraging Elasticsearch.
                </p>
              </div>
            </div>
            {/* Redbik */}
            <div className="my-4 border-b pb-4">
              <div>
                <p className="text-sm lg:text-xl font-bold">Redbik, Seoul, South Korea</p>
                <p className="text-xs sm:text-base xl:text-lg">Software Engineer, Mar 2019 - Feb 2022</p>
              </div>
              <div className="my-">
                <p className="text-xs sm:text-base xl:text-lg font-bold">
                  Tech Stack<span className="text-custom-blue">.</span>
                </p>
                <p className="text-xs sm:text-base xl:text-lg">
                  React Native, Fastlane, Codepush, AWS Lambda, Appsync, DynamoDB, Aurora, Cognito
                </p>
              </div>
              <div className="my-">
                <p className="text-xs sm:text-base xl:text-lg font-bold">
                  Descriptions<span className="text-custom-blue">.</span>
                </p>
                <p className="text-xs sm:text-base xl:text-lg">
                  - Launched the Travut mobile application on the Apple App Store and Google Play using React Native.
                </p>
                <p className="text-xs sm:text-base xl:text-lg">
                  - Implemented highly scalable microservices leveraging AWS AppSync, Lambda, and EventBridge.
                </p>
                <p className="text-xs sm:text-base xl:text-lg">
                  - Integrated Fastlane CI/CD and CodePush to enable autonomous application deployment.
                </p>
              </div>
            </div>

            {/* Suhwoo Co. */}
            <div className="my-4 border-b pb-4">
              <div>
                <p className="text-sm lg:text-xl font-bold">Suhwoo Co., Seoul, South Korea</p>
                <p className="text-xs sm:text-base xl:text-lg">Software Engineer, Oct 2018 - Feb 2019</p>
              </div>
              <div className="my-">
                <p className="text-xs sm:text-base xl:text-lg font-bold">
                  Tech Stack<span className="text-custom-blue">.</span>
                </p>
                <p className="text-xs sm:text-base xl:text-lg">React, Node.js, MySQL, Naver Cloud Platform</p>
              </div>

              <div className="my-">
                <p className="text-xs sm:text-base xl:text-lg font-bold">
                  Descriptions<span className="text-custom-blue">.</span>
                </p>
                <p className="text-xs sm:text-base xl:text-lg">- Implement authentication to our app using firebase.</p>
                <p className="text-xs sm:text-base xl:text-lg">
                  - Developed a high-efficiency crawling batch server using Python, AWS Airflow, and ECS.
                </p>
                <p className="text-xs sm:text-base xl:text-lg">- Add new features for chat service. (ex. map, image, and editor)</p>
              </div>
            </div>

            {/* KRICT */}
            <div className="my-4 border-b pb-4">
              <div>
                <p className="text-sm lg:text-xl font-bold">KRICT, Seoul, South Korea</p>
                <p className="text-xs sm:text-base xl:text-lg">Data Analyst, Jul 2014 - Oct 2017</p>
              </div>
              <div className="my-">
                <p className="text-xs sm:text-base xl:text-lg font-bold">
                  Tech Stack<span className="text-custom-blue">.</span>
                </p>
                <p className="text-xs sm:text-base xl:text-lg">Python, Java</p>
              </div>
              <div className="my-">
                <p className="text-xs sm:text-base xl:text-lg font-bold">
                  Descriptions<span className="text-custom-blue">.</span>
                </p>
                <p className="text-xs sm:text-base xl:text-lg">
                  - Conducted mass production process of horticultural granules, and carried out studies on cost reduction and efficient
                  maintenance.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="my-4">
          <p className="w-full text-2xl sm:text-3xl xl:text-4xl font-bold">
            Education<span className="text-custom-blue">.</span>
          </p>
          <div className="flex items-center space-x-2 my-2">
            <img src={UCLA_LOGO} alt="logo" className="w-16 md:w-20 lg:w-24 h-auto " />
            <div className="flex-1 ">
              <div className="text-md lg:text-xl font-bold flex items-center">
                University of California, Los Angeles<span className="text-blue-500">.</span>
              </div>

              <div className="text-xs sm:text-base xl:text-lg mt-1">Chemical and biological engineering, bachelor's degree</div>
              <div className="text-xs sm:text-base xl:text-lg">Class of 2012</div>
            </div>
          </div>
          <div className="flex items-center space-x-2 my-2">
            <img src={SNU_LOGO} alt="logo" className="w-16 md:w-20 lg:w-24 h-auto" />
            <div className="flex-1">
              <div className="text-md lg:text-xl font-bold flex items-center">
                Seoul National University
                <span className="text-blue-500">.</span>
              </div>
              <div className="text-xs sm:text-base xl:text-lg mt-1">Chemical and biomedical engineering, master's degree</div>
              <div className="text-xs sm:text-base xl:text-lg">Class of 2014</div>
            </div>
          </div>
        </div>
      </div>

      <NavigateButton />
    </div>
  );
};

export default Home;
