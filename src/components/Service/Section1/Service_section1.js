import React from "react";
import About_Section1 from "../../../images/ServicesPage.webp";
import "./Service_section1.css";
function Section1() {
  return (
    <div>
      <div className="Service_Container">
        <div className="Service_Image">
          <img src={About_Section1} alt="" />
        </div>
        <div className="content">
          <h1>
          Our specialized IT services are tailored for our clients
We prioritize the unique needs of each individual client
Our expertise spans across various domains
Including Information technology, Consulting, and Analytics
Our user-centric approach ensures optimal solutions.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Section1;
