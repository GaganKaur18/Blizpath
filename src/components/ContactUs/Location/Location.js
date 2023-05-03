import styles from "./location.module.css";
import { useEffect } from "react";

import MapImg1 from "../../../images/benguluru.png";
import MapImg2 from "../../../images/jabalpur.png";
import MapImg3 from "../../../images/Dubai.png";
import location from '../../../images/location.png';
import {Link} from 'react-router-dom'
const Location = () => {
  const Location = [
  
    {
      Primary: "Bangalore, India",
      Secondary: "Block 1B, RMZ NXT, EPIP, Whitefield Main Rd, Bengaluru, Karnataka 560066.",
      phone:' Phone: +91-9901705959',
      Email: 'Email: info@blitzpath.in',
      location: "https://www.google.com/maps/place/Blitzpath+Innovation/@12.9784596,77.7110461,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae13ef7e9298f5:0x2266ff5453e8de78!8m2!3d12.9784596!4d77.7132348!16s%2Fg%2F11p0mw_y70",
      image: MapImg1,
    },
    {
      Primary: "Jabalpur, India",
      Secondary: "#36/37, IT Park, Bargi Hills Jabalpur (M.P.), 482003",
      phone:'Phone: +91-7777871037',
      Email: 'Email: info@blitzpath.in',
      location:'https://www.google.com/maps/place/3J+Associate+Technology+Services/@23.1289437,79.8797406,18.29z/data=!4m14!1m7!3m6!1s0x3981b3a7a741aaf3:0x369322ccbae5d977!2s3J+Associate+Technology+Service!8m2!3d23.1293316!4d79.8806731!16s%2Fg%2F11pgkcf2xm!3m5!1s0x3981b398f1fd4c85:0x5dd9b396a36de953!8m2!3d23.1297222!4d79.8810364!16s%2Fg%2F11n2h9376v',
      image: MapImg2 ,
    },
    {
      Primary: "Abu Dhabi, UAE",
      Secondary: "Building 22, Unit No. 003 Al Reef Down Town,Abu Dhabi. ",
      phone:"Phone: +971-0529041605",
      Email: 'Email: info@blitzpath.in',
      location: "https://www.google.com/maps/place/Al+Reef+Downtown/@24.4570255,54.6732983,17z/data=!3m1!4b1!4m6!3m5!1s0x3e5e49476b5a77a7:0x974eadceb4928af8!8m2!3d24.4570255!4d54.6732983!16s%2Fg%2F11f61sy13x",
      image: MapImg3,
    }
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  return (
    <div className={styles.container}>
          <h1 className={styles.heading}>Locations</h1>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.location_title}>
        
      <div className={styles.Locations}>
        {Location.map((item, index) => {
          return (
        <div key={index} className={styles.abc}>
            <div  className={styles.addresses}>
              
             <div className={styles.location_container}>
              <div className={styles.location_image}>
                <Link to={item.location} target="_blank"><img src={location} alt="" /></Link>
                 </div>
              <div className={styles.location_heading}>
              <h2>{item.Primary}</h2>
              </div>
             </div>
              <p>{item.Secondary}</p>
              <p>{item.phone}</p>
              <p><a className={styles.emailLink} href={`mailto:${item.Email}`}>{item.Email}</a>
</p>
            </div>
            <div>
            <Link to ={item.location} target="_blank"><img src={item.image} alt="" /></Link>
            
            
              </div>
            </div>

          );
        })}
      </div>
          </div>
        </div>
        {/* // <div className={styles.pictures}>
        //   <img src={MapImg1} alt="" />
        // </div>
        // <div className={styles.pictures}>
        //   <img src={MapImg2} alt="" />
        // </div>
        // <div className={styles.pictures}>
        //   <img src={MapImg3} alt="" />
        // </div>  */}
      </div> 

    </div>
  );
};

export default Location;
