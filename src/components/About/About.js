import React ,{useState,useEffect} from "react";
import Section1 from "./Section1/Section1";
import AboutUs from "../Home/AboutUs/AboutUs";
import ParallaxCircles from "./ParallaxSection/ParallaxCicrles";
// import Section3 from './Section3/Section3.js'
import Section2 from './Section2/Section2'
import MobileView from "./Mobileview/MobileView"
import useWindowDimensions from "../../CustomHooks/useWindowDimensions";
function About({isDarkMode}) {
  const [color,setColor] = useState('white');
  const {width} = useWindowDimensions();

  useEffect(() => {
    if(isDarkMode){
      setColor('white')
    }
    else{
      setColor('black')
    }
  }, [isDarkMode])
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div >
      <div id='about'>

      <Section1 />
      </div>
    {/* {console.log(color)} */}
      {width>700 && <ParallaxCircles color={color}/> }
      {width<=700 && <MobileView color={color}/> }

      {/* <Section3/> */}
      <AboutUs color={color}/>
      <Section2 color={color}/>
    </div>
  );
}

export default About;
