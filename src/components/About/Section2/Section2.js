import React,{useEffect,useState} from "react";
import images from "../../../images/Image";
import "./Section2.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import startupIndia from "../../../images/startupIndia.png";
// import { Link } from "react-router-dom";
import startupCertificate from '../../../images/startupCertificate.pdf'
function Section2() {
  // console.log(images)
  // const [type,setType] = useState(false);
  const openCertificate = ()=>{
    window.open(startupCertificate,'_blank')
  }
  const textToType = 'Blitzpath Innovations is proud to be recognized by Startup India, a flagship initiative of the Government of India, intended to catalyse startup culture and build a strong and inclusive ecosystem for innovation and entrepreneurship in India. This recognition endorses the idea and vision of Blitzpath Innovations to bridge the gap between the global demand for professionals and the vast availability of skilled resources in India.'
  const [current, setCurrent] = useState('');

  // Set the index of the current character to be typed
  const [Index, setIndex] = useState(0);
  
    // Set the initial text to an empty string
  
    useEffect(() => {
      // Set the interval between typing each character
     

        const typingInterval = setInterval(() => {
          // Add the next character to the current text
          setCurrent(text => text + textToType[Index]);
    
          // Increment the index of the current character
          setIndex(index => index + 1);
        }, 50);
    
        // If all characters have been typed, stop the interval
        if (Index >= textToType.length) {
          // setCurrentIndex(0)
          clearInterval(typingInterval);
          // setCurrentText('')
        }
    
        // Cleanup function to clear interval
        return () => clearInterval(typingInterval);
      
    }, [Index, textToType]);
 
  return (
    <section className="Section2_Container">
      <div className="startup">
        <div className="startup_image">
          <img src={startupIndia} alt="startypIndia" />
        </div>
        <div className="startup_content">
          <h1 id='text'>
            {current}
          </h1>
          {/* <p><button onClick={openCertificate}>Certificate</button></p> */}
        </div>
      </div>
      <div className="Section2_Heading">
        <AnimationOnScroll
          animateOnce={false}
          offset={150}
          animateIn="animate__fadeInUp"
        >
          <h1>Our Team</h1>
        </AnimationOnScroll>
      </div>

      <section className="Gallery_Stories">
        <section className="Gallery_section">
          {images.map((ele, index) => {
            return (
              <div className="Gallery-container" key={index}>
                {/* // eslint-disable-next-line */}
                <img src={ele.src} alt="About" />
              </div>
            );
          })}
        </section>
      </section>
    </section>
  );
}

export default Section2;