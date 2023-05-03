import React,{useState} from 'react'
import logo from '../../images/Blitzpath.jpeg'
import logo1 from '../../images/Blitzpathlogo.jpeg'
import {Link} from 'react-router-dom'
import "./Navbar.css"
// import DayNightToggle from 'react-day-and-night-toggle'
function Navbar({isDarkMode,setIsDarkMode}) {
  const [open,setOpen] = useState(false)
  const handleOpen = (e)=>{
    const name = e.target.name
    if(name==='image'){
      setOpen(false)
    }
    else{

      setOpen(!open)
    }
  }
  return (
    <div className="container">
    <header className="nav-item" id = "items">
        <div className="logo-section">
          <div className="logo">
          <Link to="/">
            <img src={logo1} onClick={handleOpen} name='image' alt="" />
            </Link>
            </div>
            <div className="logo1">
            <Link to="/">
            <img src={logo} onClick={handleOpen} name='image' alt="" />
            </Link>
            </div>
        </div>
        <nav className='desktop-device'>
            <ul  className='navlink'>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/customer_stories">Customer Stories</Link></li>
                <li><Link to="/about/#about">About Us</Link></li>
                <li><Link to="/Careers">Careers</Link></li>
                <li><Link to="/ContactUs">Contact</Link></li>
            </ul>
        </nav>
        <nav className='mobile-device'>
            <div className="nav-container">
              <div className="dropdown" style={{border: "none"}}>
                <button className="dropbtn" onClick={handleOpen} >
                <div>
                <div className='dropdown1'></div>
                <div className='dropdown1'></div>
                <div className='dropdown1'></div>
                  </div></button>
                <div className="dropdown-content" style={{display:open?'block':'none'}}>

                  
                  <span onClick={handleOpen}><Link to="/services">Services</Link></span>
                  <span onClick={handleOpen}><Link to="/customer_stories">Customer Stories</Link></span>
                  <span onClick={handleOpen}><Link to="/about">About Us</Link></span>
                  <span onClick={handleOpen}><Link to="/Careers">Careers</Link></span>
                  <span onClick={handleOpen}><Link to="/ContactUs">Contact</Link></span>
                </div>
              </div>
            </div>
          </nav>
    </header>
    </div>
  )
}

export default Navbar
