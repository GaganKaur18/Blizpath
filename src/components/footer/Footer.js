import React from 'react'
import "./Footer.css"
import useWindowDimensions from '../../CustomHooks/useWindowDimensions'
function Footer() {
  const {width} = useWindowDimensions()
  return (
    
  
    <footer>
    <div className='Left-content'>
    <p>Copyright &copy; 2023 {width<400 ? <br/> : ''}  Blitzpath Innovations | Powered by Blitzpath Innovations |</p>
    </div>
    
    {/* <div className='right-content'>
    <ul class="footer-links">
      <li><a href="#">Terms of Use</a></li>
      <li><a href="#">Privacy Policy</a></li>
      <li><a href="#">Contact Us</a></li> 
    </ul>
    </div> */}
    </footer>


  
   
    

  )
};

 export default Footer;