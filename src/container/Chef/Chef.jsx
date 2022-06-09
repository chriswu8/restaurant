import React from 'react';
import './Chef.css';
import { SubHeading } from '../../components';
import { images } from '../../constants';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's Words" />
      <h1 className="headtext__cormorant">Our Values</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,</p>
        </div>
      </div>

      <div className="app__chef-sign">
        <p>Gordan Ramsay</p>
        <p className="p__opensans">Head Chef</p>
        <img src={images.sign} alt="sign_image" />
      </div>


    </div>
  </div>
);

export default Chef;
