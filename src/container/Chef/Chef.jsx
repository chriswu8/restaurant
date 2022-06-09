import React from 'react';
import './Chef.css';
import { SubHeading } from '../../components';
import { images } from '../../constants';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
  </div>
);

export default Chef;
