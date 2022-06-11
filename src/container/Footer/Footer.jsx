import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { FooterOverlay } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <div>
      <div className="app__footer-links_logo">
        <img className='logo' src={images.brandTB} alt="footer_logo" />
        <p className="quote">&quot;The best way to find oneself is to lose oneself in the stellar service of others.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <FooterOverlay />
          <FiFacebook />
          <FiInstagram />
          <FiTwitter />
        </div>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans" id='copyright'>2022 Chris Wu Restaurant. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;