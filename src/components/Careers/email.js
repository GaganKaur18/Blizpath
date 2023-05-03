import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
// import styled from "styled-components";
import "./email.css"
import career from "../../images/JoinUS.png";
// npm i @emailjs/browser
// npm install styled-components

const Contact = ({data,index}) => {
  console.log(data,index)
  const form = useRef();
 const [inputData,setInputData] = useState({
  name:'',
  email:'',
  contact:'',
  position:`${data[index].job_description}`,
  skills:'',
  experience:'',
  notice_period:'',
  message:''
 })
 const handleChange = (e)=>{

   const name = e.target.name
   const value = e.target.value;
 if(name !== 'position'){
   setInputData({
    ...inputData,
    [name]:value
   })}
 }
  const sendEmail = (e) => {
    e.preventDefault();
    // const Regex = /[^\s]@[a-z0-9.-]/i
   if(inputData.name.length<3  || inputData.message.length<1){
      alert('Please Provide Correct information')
   }
   else{
    emailjs
      .sendForm(
        "service_6wvwdw9",
        "template_3y5p9u7",
        form.current,
        "RBbIpioPG62k7yecV"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Mail was sent Successfully!");
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
      setInputData({
        name:'',
        email:'',
        contact:'',
        skills:'',
        experience:'',
        notice_period:'',
        message:''
      })
    }
  };

  return (
    <div className="form_container">
      <div className="image">
        <img src={career} alt="" />
      </div>
    <div className="form_control">
    {/* <StyledContactForm> */}
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text"   value={inputData.name} onChange={handleChange} name="name"/>
        <label>Email</label>
        <input type="email"  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" value={inputData.email} onChange={handleChange} name="email" />
        <label>Contact</label>
        <input type="tel"  pattern="[789][0-9]{9}" id="phone"   value={inputData.contact} onChange={handleChange} name="contact" />
        <label>Degree</label>
        <select name = "degree" className="dropdown"><option value="Bachelor's">Bachelor's</option>
        <option value="PhD">Phd</option>
        <option value="Post Graduate">Post Graduate</option>
        <option value="Graduate">Graduate</option>
        <option value="High School">High School</option>
        <option value="Other">Other</option>
        </select>
        <label>Year of Graduation</label>
        <input type="date"  name="graduation_year"/>
        <label>Position</label>
        <input type="text" value={inputData.position} name="position"/>
        <label>Skills</label>
        <input type="text" value={inputData.skills} onChange={handleChange} name="skills"/>
        <label>Experience (in years)</label>
        <input type="text" value={inputData.experience} onChange={handleChange} name="experience"/>
        <label>Notice Period</label>
        <select name = "notice_period" className="dropdown"><option value="Immediate Joiner">Immediate Joiner</option>
        <option value="30 Days">30 Days</option>
        <option value="60 Days">60 Days</option>
        <option value="90 Days">90 Days</option>
        
        </select>
        <label>Why you want to join us?</label>
        <textarea name="message" onChange={handleChange}  value={inputData.message}/>
       

        {/* <label>Send Your Resume</label>
        <input type="file" name = "Resume"/> */}
        <input type="submit" value="Apply" />
        
        

      </form>
    {/* </StyledContactForm> */}
    </div>
    </div>
  );
};

export default Contact;

// Styles