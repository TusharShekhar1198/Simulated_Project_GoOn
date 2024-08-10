import React from 'react'
import GoOnlogo from '../assets/GoOnlogo.png'
import EarthGlobe from '../assets/EarthGlobe.png'
import Homeimg1 from '../assets/Homeimg1.png'
import MapPin from '../assets/MapPin.png'
import ActiveState from '../assets/ActiveState.png'
import GoOn1 from '../assets/GoOn1.png'
import Line5 from '../assets/Line5.png'
import Facebook from '../assets/Facebook.png'
import Instagram from '../assets/Instagram.png'
import LinkedIn from '../assets/LinkedIn.png'
import YouTube from '../assets/YouTube.png'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className='navbar'>
          <Link to='/'><img src={GoOnlogo} className='GoOnlogo'></img></Link>
        {/* <div className='Firstnav'> */}
          <Link to='/'><li className='home'>Home</li></Link>
          <li className='Jobs'>Jobs</li>
          <li className='Rides'>Rides</li>
          <li className='Blog'>Blog</li>
          <li className='AboutUs'>AboutUs</li>
          {/* </div> */}
          <div className='secondnav'>
            <div className='earth'><img src={EarthGlobe} className='EarthGlobe'></img></div>
            <li>EN</li>
            <li>Help</li>
            <Link to='/login'><li>Login</li></Link>
            <div className='signupdiv'><Link to='/signup'><li className='fontsignup'>SignUp</li></Link></div>
          </div>
      </div>
      <div className='main'>
        <div className='Homeimg1'><img src={Homeimg1} className='homeimg1'></img></div>
        {/* <div> */}
          <h1 className='Request'>Request A Ride and</h1>
          <img src={GoOn1} className='GoOn1'></img>
        {/* </div> */}
        <input type='text' placeholder='Enter Current Location'></input>
       <input type='text' placeholder='Enter Destination'></input>
      </div>
        <div className='activestate'>
        <img src={ActiveState}></img>
        </div>
        <div className='mappin'>
        <img src={MapPin}></img>
        </div>

        <div className='footer'>
      <h1 className='phrase'>Streamline your parking experience  
      <br></br>with our innovative solutions.</h1>
      <div className='contactusfooter'>
      <Link to='https://www.linkedin.com/in/tushar-shekhar-920272283/'><button className='footerbtn2'>Contact Us </button></Link>
      </div>
      <img src={Line5} className='line5'></img>
      <div className='Company'>
      <h1>Company</h1><br></br>
      {/* <ul className='companyul'> */}
        <li>About us</li>
        <li>Careers/Jobs</li>
        <li>Contact Us</li>
        <li>Contact Details</li>
        <li>Sitemap</li>
        <li>How to</li>
      {/* </ul> */}
      </div>
      <div className='legal'>
        <h1>Legal</h1><br></br>
      {/* <ul> */}
        <li>Link policy</li>
        <li>Advertising</li>
        <li>Disclaimer</li>
        <li>Terms & Conditions</li>
        <li>Privacy Policy</li>
        <li>My privacy</li>
      {/* </ul> */}
      </div>
      <div className='icons'>
       <Link to='https://www.youtube.com'><img src={YouTube} className='ico4'></img></Link><Link to='https://www.youtube.com'><h1>Youtube</h1></Link>
       <Link to='https://www.instagram.com/tusharshekhar_/'><img src={Instagram} className='ico1'></img></Link><Link to='https://www.instagram.com/tusharshekhar_/'><h1>Instagram</h1></Link>
       <Link to='https://www.facebook.com'><img src={Facebook} className='ico2'></img></Link><Link to='https://www.facebook.com'><h1>Facebook</h1></Link>
       <Link to='https://www.linkedin.com/in/tushar-shekhar-920272283/'><img src={LinkedIn} className='ico3'></img></Link><Link to='https://www.linkedin.com/in/tushar-shekhar-920272283/'><h1>Linkedin</h1></Link>
      </div>
      <h4 className='copyright'>© [ParKrO] [2024]</h4>
      <h4 className='gmail'>parkro@gmail.com</h4>
     </div>
    </div>
  )
}

export default Home
