import React, { useEffect, useState, Suspense } from 'react'


import AboutUs from './AboutUs/AboutUs'
// import LastPage from './LastPage/LastPage'
import Services from './services/Services'
// import useWindowDimensions from "../../CustomHooks/useWindowDimensions";
import ImageSlider from "./image_crousel/Image_crousel"
function Home({isDarkMode,currentService,setCurrentService}) {
    // const { height, width } = useWindowDimensions();
    const [color,setColor] = useState('white')
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
    <div className='Home'>
        <ImageSlider/>
        <Services color={color} setCurrentService={setCurrentService} currentService={currentService}/>
        <AboutUs color={color}/>
        {/* <LastPage width={width} color={color}/> */}
    </div>
  )
}

export default Home