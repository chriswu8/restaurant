import React from 'react';
import './Owner.css';
import { SubHeading } from '../../components';
import { images } from '../../constants';

const Owner = () => (
  <div className='app__continuation'>
    <div className='app__bg section__padding'>

      <div className='app__bg app__wrapper section__padding'>

        <div className="app__wrapper_img app__wrapper_img-reverse">
          <img src={images.owner} alt="owner_image" id='ownerImage' />
        </div>

        <div className="app__wrapper_info" id='app__wrapper_info2'>
          <SubHeading title="Franchise Owner's Words" />

          <div className="app__chef-content">
            <div className="app__chef-content_quote">
              <img src={images.quote} alt="quote_image" />
              <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
            </div>
          </div>

          <div className="app__chef-sign">
            <p className="headChef">Gordon Ramsay</p>
            <p className="headChef">Head Chef</p>
            <img src={images.sign} alt="sign_image" />
          </div>

        </div>
      </div>

    </div>
  </div>
);

export default Owner;
