import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import instagram from "./images/instagram.png";
import linkdin from "./images/linkdin.png";
import "./App.css";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Careers from "./components/Careers/Careers";
import { ParallaxProvider } from "react-scroll-parallax";
import Contact from "./components/ContactUs/contact";
import Form from './components/Careers/email';
import Service from "./components/Service/Service";
import Customer from "./components/Customer_Stories/Customer"
import Vacancies from "./components/Careers/Vacancies";

// import DayNightToggle from 'react-day-and-night-toggle'
function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [body, setBody] = useState('white');
  const [currentService, setCurrentService] = useState("");
  const [index, setIndex] = useState(0)
  const data = [
    {
      job_description: "Technical Expert",
      qualifications: [
        "Graduate and above - Technical education in computer, operating systems and its usage.",
        "Flawless English communication - English writing skills, correspondence and conversation on a chat-like-platform.",
        "Excellent soft skills will help in handling customers in distress. Ability to deal professionally with irate customers.",
        "Ability to create videos for a quick demonstration on a technical problem resolution commonly faced in PC usage.",
        "Must have experience of 1-5 years as frontline or L1 to support customers on technical questions or problems related to PC break-fix, hardware and software issues, including peripherals such as printers, routers etc.",
        "Microsoft certified resources will have better chances of success. A+ certified resources will be set up a great success with our customers.",
        "Should be willing to take assignments in a 24 x7 work environment.",
      ],
      responsibilities: [
        "Provide technical support for customers on usage of various computer products and its operating systems, associated common software",
        "Assist customers by diagnosing problems on hardware problems and providing resolutions for technical and service issues. Guide customers about possible solutions and options available to resolve software and applications issues including Windows, MS Office, Ubuntu etc",
        "Follow standardized policies and procedures prescribed and updated by Blitzpath.",
        "Provide right solution and demonstrate behaviour to help the customer not only on a specific query but solution at large.",

        "Respect service level agreements in mutually agreed upon schedules.",
        "Responsible for customer satisfaction through effective handling of customer problems and resolution with reduced customer effort, faster response.",
        "Smartly and efficiently handle platform designed to solve customer queries.",
      ],
      requirement: [
        "Seamless network connectivity - Broadband, 4G+ data connectivity on a PC or Laptop.",
      ],
    },
    // {
    //   job_description: "SDE Intern",
    //   responsibilities: [
    //     "Work with developers to design algorithms and flowcharts",
    //     "Produce clean, efficient code based on specifications",
    //     "Integrate software components and third-party programs",
    //     "Verify and deploy programs and systems",
    //     "Troubleshoot, debug and upgrade existing software",
    //     "Gather and evaluate user feedback",
    //     "Recommend and execute improvements",
    //     "Create technical documentation for reference and reporting",
    //   ],
    //   qualifications : ['Bachelor\'s degree in computer science or related degree.','Knowledge of the software development life-cycle.','The desire to work in a fast-paced environment.','Demonstrated knowledge of web technologies, such as HTML, CSS and Javascript','Ability to work independently and multi-task effectively','Flexible and willing to accept a change in priorities as necessary','Maintain and improve the performance of existing software'],
    //   requirement:['Seamless network connectivity - Broadband, 4G+ data connectivity on a PC or Laptop.']
    // },
    {
      job_description: "Senior Technical Expert",
      responsibilities: [
        "Provide technical support for customers on usage of various computer products and its operating systems, associated common software",
        "Assist customers by diagnosing problems on hardware problems and providing resolutions for technical and service issues. Guide customers about possible solutions and options available to resolve software and applications issues including Windows, MS Office, Ubuntu etc",
        "Follow standardized policies and procedures prescribed and updated by Blitzpath.",
        "Provide right solution and demonstrate behaviour to help the customer not only on a specific query but solution at large.",
        "Respect service level agreements in mutually agreed upon schedules.",
        "Responsible for customer satisfaction through effective handling of customer problems and resolution with reduced customer effort, faster response.",
        "Smartly and efficiently handle platform designed to solve customer queries.",
        "Experience in Customer service industry",
        "Experience in handling chat based process",
      ],
      qualifications: [
        "Graduate and above - Technical education in computer, operating systems and its usage.",
        "Flawless English communication - English writing skills, correspondence and conversation on a chat-like-platform.",
        "Excellent soft skills will help in handling customers in distress. Ability to deal professionally with irate customers.",
        "Ability to create videos for a quick demonstration on a technical problem resolution commonly faced in PC usage.",
        "Must have experience of 3-10 years L1/L2 to support customers on technical questions or problems related to PC break-fix, hardware and software issues, including peripherals such as printers, routers etc.",
        "Microsoft certified resources will have better chances of success. A+ certified resources will be set up a great success with our customers.",
      ],
      requirement: [
        "Seamless network connectivity - Broadband, 4G+ data connectivity on a PC or Laptop.",
      ],
    },
  ];
  useEffect(() => {

    
    if(isDarkMode){
      setBody('black')
    }
    else{
      setBody('white')
    }
  }, [isDarkMode])
  
  document.body.style.backgroundColor= body
  return (
    <ParallaxProvider>
      <div className="App">
      
          <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
          
          <div>
            <ul className="social">
              {/* <li><a href=""><img src={facebook} alt="" /></a></li> */}
              <li>
                <a href="https://www.instagram.com/blitzpath_innovations/">
                  <img src={instagram} alt="" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/blitzpath-innovations/">
                  <img src={linkdin} alt="" />
                </a>
              </li>
            </ul>
          </div>
          <Routes>
            <Route exact path="/" element= {<Home isDarkMode={isDarkMode} currentService={currentService} setCurrentService={setCurrentService}/>} />
            <Route  path="/about" element= {<About isDarkMode={isDarkMode}/>} />
            <Route  path="/services" element= {<Service isDarkMode={isDarkMode} currentService={currentService} setCurrentService={setCurrentService}/>} />
            <Route  path="/customer_stories" element= {<Customer isDarkMode={isDarkMode}/>} />
            <Route  path ="/Careers" element = {<Careers index={index} setIndex={setIndex} data={data}/>}/>
            <Route  path = "/ContactUs" element = {<Contact isDarkMode={isDarkMode}/>}/>
            <Route  path = "/apply" element = {<Form isDarkMode={isDarkMode} data={data} index={index}/>}/>
            <Route  path = "/Careers/:id" element = {<Vacancies index={index} data={data}/>}/>
            <Route   element = {<div>Page not found</div>}></Route>
          </Routes>
          <Footer />
      </div>
    </ParallaxProvider>
  );
}

export default App;
