import React from 'react';
import './Header.css';
import { images } from '../../constants';
import { SubHeading } from '../../components';


const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Feel our dedication through our flavour" />
      <h1 className="app__header-h1">Vancouver's Finest Dining</h1>
      <p className="p__opensans" id='lorem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <button type="button" className="custom__button">Explore Menu</button>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.welcome} alt="welcome" />
    </div>
  </div>
);

export default Header;
