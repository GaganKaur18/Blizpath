import styles from "./WriteUs.module.css";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
// import styled from "styled-components";
import { AnimationOnScroll } from "react-animation-on-scroll";
import logo from '../../../images/ContactUS.png'
// import useWindowDimensions from '../../../CustomHooks/useWindowDimensions'
// npm i @emailjs/browser
// npm install styled-components

const WriteUs = () => {
  
    const form = useRef();
   const [inputData,setInputData] = useState({
    firstname:'',
    lastname:'',
    company:'',
    email:'',
    phone:'',
    message:''
   })
   const handleChange = (e)=>{
     const name = e.target.name
     const value = e.target.value;
     setInputData({
      ...inputData,
      [name]:value
     })
   }
    const sendEmail = (e) => {
      console.log('Clicked')
      e.preventDefault();
      // const Regex = /[^\s]*@[a-z0-9.-]*/i
     if(inputData.firstname.length<3  || inputData.message.length<1){
        alert('Please Provide Correct information')
     }
     else{
      emailjs
        .sendForm(
          "service_x8r1h2i",
          "template_h9ls4qj",
          form.current,
          "8nLFWb4byAivKhTTp"
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
          firstname:'',
    lastname:'',
    company:'',
    email:'',
    phone:'',
    message:''
        })
      }
    };
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
        <AnimationOnScroll    animateOnce={false}
              offset={150}
              animateIn="animate__fadeInUp">
          
          <h1 className={styles.heading}>Write Us</h1>
          </AnimationOnScroll >
          <AnimationOnScroll    animateOnce={false}
              offset={150}
              duration = {2}
              animateIn="animate__fadeInUp">
          <p>
            Please don't hesitate to contact us via this form or
            email, and we will reply as soon as possible.
          </p>
          </AnimationOnScroll >
          
          <div className={styles.logo}>
            <img src={logo} alt="" />
          </div>
        </div>
        <div className={styles.right}>
          <form action="" ref={form} onSubmit={sendEmail}>
            <div className={styles.formWrapper}>
              <div className={styles.name}>
                <div className={styles.inputDisplayBlock}>
                  <label htmlFor="">First Name</label>
                  <input type="text"  value={inputData.firstname} onChange={handleChange} name ="firstname"/>
                </div>
                <div className={styles.inputDisplayBlock}>
                  <label htmlFor="">Last Name</label>
                  <input type="text"  value={inputData.lastname} onChange={handleChange} name ="lastname"/>
                </div>
              </div>
              {/* <div className={styles.name}> */}
                <div className={styles.inputDisplayBlock}>
                  <label htmlFor="">Company</label>
                  <input type="text"  value = {inputData.company} onChange={handleChange} name="company" />
                {/* </div> */}
               
              </div>
              <div className={styles.inputDisplayBlock}>
                <label htmlFor="">Email</label>
                <input type="email"  value={inputData.email} onChange={handleChange} name ="email" />
              </div>
              <div className={styles.inputDisplayBlock}>
                <label htmlFor="">Phone</label>
                <input type="tel"  value={inputData.phone} onChange={handleChange} name="phone"/>
              </div>
              <div className={styles.inputDisplayBlock}>
                <label htmlFor="">Message</label>
                <textarea  value={inputData.message} onChange={handleChange} name ="message"/>
              </div>
              {/* <div className={styles.checkbox}>
                <input type="checkbox" />
                <label htmlFor="">
                  I agree with the processing of personal data
                </label>
              </div> */}
              <button type="submit" onSubmit={sendEmail}>Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};


export default WriteUs;
