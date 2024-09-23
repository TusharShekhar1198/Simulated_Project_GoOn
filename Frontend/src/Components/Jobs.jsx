import React from 'react';
// { useState } from 'react';
import GoOnlogo from '../assets/GoOnlogo.png';
import EarthGlobe from '../assets/EarthGlobe.png';
// import Homeimg1 from '../assets/Homeimg1.png';
// import MapPin from '../assets/MapPin.png';
// import ActiveState from '../assets/ActiveState.png';
// import GoOn1 from '../assets/GoOn1.png';
// import Line5 from '../assets/Line5.png';
// import Facebook from '../assets/Facebook.png';
// import Instagram from '../assets/Instagram.png';
// import LinkedIn from '../assets/LinkedIn.png';
// import YouTube from '../assets/YouTube.png';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { GrLanguage } from "react-icons/gr";
import { useState } from "react";
import Select from 'react-select';


const Jobs = () => {
    const { t, i18n } = useTranslation();
  const [showSelect, setShowSelect] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [step, setStep] = useState(1); // Step management (1 for initial, 2 for next step)

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

  const handleGetStarted = () => {
    setShowModal(true);
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (email && mobile) {
      setStep(2); // Move to next step if both fields are filled
    } else {
      alert('Please fill in both fields');
    }
  };

  return (
    <div>
        <div className='navbar'>
        <Link to='/'><img src={GoOnlogo} className='GoOnlogo' alt='GoOn logo' /></Link>
        <Link to='/'><li className='home'>{t('home_key')}</li></Link>
        <Link to='/job'><li className='Jobs'>{t('jobs_key')}</li></Link>
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
    <div className={`jobs-page ${showModal ? 'blur-background' : ''}`}>
      {/* Background content */}
      <h1>Welcome to the Job Section</h1>
      <button onClick={handleGetStarted}>Get Started</button>

      {/* Modal */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            {step === 1 && (
              <form onSubmit={handleNext}>
                <h2>Get Started</h2>
                <div>
                  <label>Email:</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label>Mobile:</label>
                  <input
                    type="tel"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    required
                  />
                </div>
                <button type="submit">Next</button>
              </form>
            )}

            {step === 2 && (
              <div>
                <h2>Next Step</h2>
                <p>You have successfully entered your email and mobile number!</p>
                {/* Additional form fields for next steps */}
                <button onClick={() => setShowModal(false)}>Finish</button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default Jobs;
