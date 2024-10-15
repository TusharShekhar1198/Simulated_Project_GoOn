import React from 'react'
import { Link } from 'react-router-dom'
import GoOnlogo from "../assets/GoOnlogo.png"
import Homeimg2 from '../assets/INTRO IMG.png';
import GoOn1 from '../assets/GoOn1.png';
import imageNokri from "../assets/ladycar.png"
import JobForm from './JobFrom';
import Facebook from '../assets/Facebook.png';
import Instagram from '../assets/Instagram.png';
import LinkedIn from '../assets/LinkedIn.png';
import YouTube from '../assets/YouTube.png';
import Line5 from '../assets/Line5.png';

import "./Nokri.css"
const Nokri = () => {
  return (
    <div>
      <div className='navbar'>
        <Link to='/'><img src={GoOnlogo} className='GoOnlogo-N' alt='GoOn logo' /></Link>
      </div>
      <div className='main-N'>
        <div className='Homeimg1-N'><img src={Homeimg2} className='homeimg1-N' alt='Home' /></div>
        <h1 className='Request-N'>Drive Your Future With GoOn</h1>
        <img src={GoOn1} className='GoOn1-N' alt='GoOn' />
        <h3  className='R-N-2'  >Be part of GoOn, connect with a global <br />
              community, and maximize your earnings by <br />
              providing reliable transportation. Drive, earn,<br />
               and grow with us.</h3>

      </div>
    <div>
      <h1 className='Request-N-2' >What you need to Sign Up</h1>
      <div className='image-nokri' ><img src={imageNokri} alt="" /></div>

    </div>
    <JobForm/>


    <div className='footer'>
        <h1 className='phrase'>{('streamline_parking_key')}</h1>
        <div className='contactusfooter'>
          <Link to='https://www.linkedin.com/in/tushar-shekhar-920272283/'><button className='footerbtn2'>{('contact_us_key')}</button></Link>
        </div>
        <img src={Line5} className='line5' alt='Line' />
        <div className='Company'>
          <h1>{('company_key')}</h1>
          <li>{('about_us_key')}</li>
          <li>{('careers_jobs_key')}</li>
          <li>{('contact_us_key')}</li>
          <li>{('contact_details_key')}</li>
          <li>{('sitemap_key')}</li>
          <li>{('how_to_key')}</li>
        </div>
        <div className='legal'>
          <h1>{('legal_key')}</h1>
          <li>{('link_policy_key')}</li>
          <li>{('advertising_key')}</li>
          <li>{('disclaimer_key')}</li>
          <li>{('terms_conditions_key')}</li>
          <li>{('privacy_policy_key')}</li>
          <li>{('my_privacy_key')}</li>
        </div>
        <div className='icons'>
          <Link to='https://www.youtube.com'><img src={YouTube} className='ico4' alt='YouTube' /></Link><Link to='https://www.youtube.com'><h1>{('youtube_key')}</h1></Link>
          <Link to='https://www.instagram.com/tusharshekhar_/'><img src={Instagram} className='ico1' alt='Instagram' /></Link><Link to='https://www.instagram.com/tusharshekhar_/'><h1>{('instagram_key')}</h1></Link>
          <Link to='https://www.facebook.com'><img src={Facebook} className='ico2' alt='Facebook' /></Link><Link to='https://www.facebook.com'><h1>{('facebook_key')}</h1></Link>
          <Link to='https://www.linkedin.com/in/tushar-shekhar-920272283/'><img src={LinkedIn} className='ico3' alt='LinkedIn' /></Link><Link to='https://www.linkedin.com/in/tushar-shekhar-920272283/'><h1>{
          ('linkedin_key')}</h1></Link>
        </div>
        <h4 className='copyright'>{('copyright_key')}</h4>
        <h4 className='gmail'>{('gmail_key')}</h4>
      </div>
       
    </div>
  )
}

export default Nokri
