import React from 'react';
import GoOnlogo from '../assets/GoOnlogo.png';
import EarthGlobe from '../assets/EarthGlobe.png';
import Homeimg1 from '../assets/Homeimg1.png';
import MapPin from '../assets/MapPin.png';
import ActiveState from '../assets/ActiveState.png';
import GoOn1 from '../assets/GoOn1.png';
import Line5 from '../assets/Line5.png';
import Facebook from '../assets/Facebook.png';
import Instagram from '../assets/Instagram.png';
import LinkedIn from '../assets/LinkedIn.png';
import YouTube from '../assets/YouTube.png';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { GrLanguage } from "react-icons/gr";
import { useState } from "react";
import Select from 'react-select';

const Home = () => {
  const { t, i18n } = useTranslation();
  const [showSelect, setShowSelect] = useState(false);

  const changeLanguage = (selectedOption) => {
    i18n.changeLanguage(selectedOption.value);
    setShowSelect(false);
  };

  const options = [
    { value: 'en', label: 'English' },
    { value: 'hi', label: 'Hindi' },
    { value: 'bn', label: 'Bengali' },
    { value: 'gu', label: 'Gujarati' },
    { value: 'mr', label: 'Marathi' },
    // { value: 'tl', label: 'Tamil' },
    { value: 'te', label: 'Telugu' },
    // { value: 'ml', label: 'Malayalam' },
  ];

  const DropdownIndicator = () => {
    return (
      <div onClick={() => setShowSelect(!showSelect)}>
        <GrLanguage size={40} className='ln-logo' />
      </div>
    );
  };

  return (
    <div>
      <div className='navbar'>
        <Link to='/'><img src={GoOnlogo} className='GoOnlogo' alt='GoOn logo' /></Link>
        <Link to='/'><li className='home'>{t('home_key')}</li></Link>
        <li className='Jobs'>{t('jobs_key')}</li>
        <Link to='/ride'><li className='Rides'>{t('rides_key')}</li></Link>
        <li className='Blog'>{t('blog_key')}</li>
        <li className='AboutUs'>{t('aboutus_key')}</li>
        <div className='secondnav'>
          <div className='earth'><img src={EarthGlobe} className='EarthGlobe' alt='Globe' /></div>
          <div className='language-selector'>
            <Select
              onChange={changeLanguage}
              defaultValue={options.find(option => option.value === i18n.language)}
              options={options}
              components={{ DropdownIndicator }}
              isSearchable={false}
            />
          </div>
          <li>{t('help_key')}</li>
          <Link to='/login'><li>{t('login_key')}</li></Link>
          <div className='signupdiv'><Link to='/signup'><li className='fontsignup'>{t('signup_key')}</li></Link></div>
        </div>
      </div>
      <div className='main'>
        <div className='Homeimg1'><img src={Homeimg1} className='homeimg1' alt='Home' /></div>
        <h1 className='Request'>{t('request_ride_key')}</h1>
        <img src={GoOn1} className='GoOn1' alt='GoOn' />
        <input type='text' placeholder={t('location_key')} />
        <input type='text' placeholder={t('destination_key')} />
      </div>
      <div className='activestate'>
        <img src={ActiveState} alt='Active State' />
      </div>
      <div className='mappin'>
        <img src={MapPin} alt='Map Pin' />
      </div>
      <div className='footer'>
        <h1 className='phrase'>{t('streamline_parking_key')}</h1>
        <div className='contactusfooter'>
          <Link to='https://www.linkedin.com/in/tushar-shekhar-920272283/'><button className='footerbtn2'>{t('contact_us_key')}</button></Link>
        </div>
        <img src={Line5} className='line5' alt='Line' />
        <div className='Company'>
          <h1>{t('company_key')}</h1>
          <li>{t('about_us_key')}</li>
          <li>{t('careers_jobs_key')}</li>
          <li>{t('contact_us_key')}</li>
          <li>{t('contact_details_key')}</li>
          <li>{t('sitemap_key')}</li>
          <li>{t('how_to_key')}</li>
        </div>
        <div className='legal'>
          <h1>{t('legal_key')}</h1>
          <li>{t('link_policy_key')}</li>
          <li>{t('advertising_key')}</li>
          <li>{t('disclaimer_key')}</li>
          <li>{t('terms_conditions_key')}</li>
          <li>{t('privacy_policy_key')}</li>
          <li>{t('my_privacy_key')}</li>
        </div>
        <div className='icons'>
          <Link to='https://www.youtube.com'><img src={YouTube} className='ico4' alt='YouTube' /></Link><Link to='https://www.youtube.com'><h1>{t('youtube_key')}</h1></Link>
          <Link to='https://www.instagram.com/tusharshekhar_/'><img src={Instagram} className='ico1' alt='Instagram' /></Link><Link to='https://www.instagram.com/tusharshekhar_/'><h1>{t('instagram_key')}</h1></Link>
          <Link to='https://www.facebook.com'><img src={Facebook} className='ico2' alt='Facebook' /></Link><Link to='https://www.facebook.com'><h1>{t('facebook_key')}</h1></Link>
          <Link to='https://www.linkedin.com/in/tushar-shekhar-920272283/'><img src={LinkedIn} className='ico3' alt='LinkedIn' /></Link><Link to='https://www.linkedin.com/in/tushar-shekhar-920272283/'><h1>{t('linkedin_key')}</h1></Link>
        </div>
        <h4 className='copyright'>{t('copyright_key')}</h4>
        <h4 className='gmail'>{t('gmail_key')}</h4>
      </div>
    </div>
  );
}

export default Home;