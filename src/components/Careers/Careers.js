import "./Careers.css";
import React , {useEffect} from "react";
// import { Link } from "react-router-dom";
import career from "../../images/career2.webp";
import mobile_career from "../../images/Mobile_Careersmall.webp";
import Job from "./Job/Job";
import useWindowDimensions from "../../CustomHooks/useWindowDimensions";
// import { AnimationOnScroll } from "react-animation-on-scroll";
export default function Careers({ index, setIndex, data }) {
  const {  width } = useWindowDimensions();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="careercontainer">
      <div className="career_image">
        <img src={width < 400 ? mobile_career : career} alt="Job Vacancies" />
      </div>
      <div className="title_career">
        <h1 className="career_heading">
          {/* <span> Welcome to Blitzpath Innovations </span>,<br /> */}
          Great talent resides not just in the major cities but also all around
          the country. Our flexible working model eliminates the need for
          relocation, and our training equips you with the latest technological
          advancements that enable you to be a part of developing innovative
          solutions and deliver on the promise and  making a positive,
          long-lasting impact on the industry. We are looking for passionate
          individuals who share our commitment to excellence and want to be a
          part of something big. Apply now!
        </h1>
        <h1 className="career_heading2">
          We are hiring!
        </h1>
      </div>
      <div className="vacancies">
        <div className="vacancies_heading">
          <h1>Opportunities</h1>

          <hr />
        </div>

        <div className="Card">
          {data.map((ele, id) => {
            return (
              <Job
                key={id}
                index={index}
                id={id}
                setIndex={setIndex}
                job_description={ele.job_description}
                responsibilities={ele.responsibilities}
                qualifications={ele.qualifications}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
