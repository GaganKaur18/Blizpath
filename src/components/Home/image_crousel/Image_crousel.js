import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import React from "react";
// import Image3 from "../../../images/team.webp";
// import Image2 from "../../../images/IC2_copy.webp";
import Image1 from "../../../images/home.jpg";
// import Image4 from "../../../images/tech.webp";
// import Image5 from "../../../images/IC1_potrait.webp";
// import Image6 from "../../../images/IC2_potrait.webp";
// import Image7 from "../../../images/team_potrait.webp";
// import Image8 from "../../../images/tech_potrait.webp";

import useWindowDimension from '../../../CustomHooks/useWindowDimensions'
const ImageSlider = () => {
  //   console.log(Images)
  const {width} = useWindowDimension()
  let Images = [Image1];
  
  let  ImagesPotrait = [Image1]
  
 
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <>
      <div className="imgslider">
        <Slider {...settings}>
          {width>450?Images.map((item, index) => (
            <div key={index}>
              <div
                className="front_content"
                style={{ display: index === 0 ? "block" : "none" }}
              >
                <div className="front_title">
                  <h1>Transform With Innovation</h1>
                  <div className="front_underline"></div>
                </div>
                <div className="Front_p">
                  <p>
                    Develop a platform integrating people, process & technology
                    to execute IT enabled services from remote locations.
                  </p>
                </div>
              </div>
              {/* <img src={item.src}  alt={item.alt} /> */}
             
              <img src={item} alt="" />
            
            </div>
          )):
          ImagesPotrait.map((item, index) => (
            <div key={index}>
              <div
                className="front_content"
                style={{ display: index === 0 ? "block" : "none" }}
              >
                <div className="front_title">
                  <h1>Transform With Innovation</h1>
                  <div className="front_underline"></div>
                </div>
                <div className="Front_p">
                  <p>
                    Develop a platform integrating people, process & technology
                    to execute IT enabled services from remote locations.
                  </p>
                </div>
              </div>
              {/* <img src={item.src}  alt={item.alt} /> */}
             
              <img src={item} alt="" />
            
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};
export default ImageSlider;
