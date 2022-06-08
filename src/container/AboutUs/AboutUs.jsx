import React from 'react';
import './AboutUs.css';
import { images } from '../../constants';


const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center'>
      <img src="images.Wu" alt="wu" />
    </div>
    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext cormorant'>About Us</h1>
        <img src="images.spoon" alt="about_spoon" className='spoon_img' />
        <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <button type='button' className="custom__button">Learn more</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
