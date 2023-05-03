import React,{useEffect,useState} from 'react'
import About_Section1 from "../../../images/Aboutusmain_copy.webp"
import "./Section1.css"
function Section1() {
    const textToType = 'Be world’s most sought after platform to leverage freelance technical talent in delivering value to clients and an outstanding experience to customers.'

    // Set the initial text to an empty string
    // const [currentText, setCurrentText] = useState('');
  
    // // Set the index of the current character to be typed
    // const [currentIndex, setCurrentIndex] = useState(0);
  
    // useEffect(() => {
    //   // Set the interval between typing each character
    //   const typingInterval = setInterval(() => {
    //     // Add the next character to the current text
    //     setCurrentText(text => text + textToType[currentIndex]);
  
    //     // Increment the index of the current character
    //     setCurrentIndex(index => index + 1);
    //   }, 50);
  
    //   // If all characters have been typed, stop the interval
    //   if (currentIndex >= textToType.length) {
    //     // setCurrentIndex(0)
    //     clearInterval(typingInterval);
    //     // setCurrentText('')
    //   }
  
    //   // Cleanup function to clear interval
    //   return () => clearInterval(typingInterval);
    // }, [currentIndex, textToType]);
  
  return (
    <div>
        <div className="aboutUs_Container">
            <div className="aboutUs_Image">
                <img src={About_Section1} alt="" />
            </div>
            <div className="aboutUs_Section1_Content">
                <p className="aboutUs_Typing">{textToType}</p>
            </div>
        </div>
    </div>
  )
}

export default Section1