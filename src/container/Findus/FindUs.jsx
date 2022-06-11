import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Findus.css';

const FindUs = () => {

  return (

    <div className="app__bg app__wrapper section__padding" id="contact">
      <div className="app__wrapper_info" id='contactAndHours'>
        <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Find Us</h1>
        <SubHeading title="Contact" />
        <div className="app__wrapper-content">
          <table className='contact'>
            <tr className="p__opensans"><th>Address:</th><td> 3700 Willingdon Ave, Burnaby</td></tr>
            <tr className="p__opensans"><th>Telephone:</th><td className='phone'>604-123-4567</td></tr>
          </table>

          <SubHeading title="Opening Hours" />
          <table>
            <tr className="p__opensans"><th>Sunday: </th><td>Closed</td></tr>
            <tr className="p__opensans"><th>Monday:</th><td>10:00 AM - 10:30 PM</td></tr>
            <tr className="p__opensans"><th>Tuesday:</th><td>10:00 AM - 10:30 PM</td></tr>
            <tr className="p__opensans"><th>Wednesday:</th><td>10:00 AM - 10:30 PM</td></tr>
            <tr className="p__opensans"><th>Thursday:</th><td>10:00 AM - 10:30 PM</td></tr>
            <tr className="p__opensans"><th>Friday:</th><td>09:00 AM - 11:00 PM</td></tr>
            <tr className="p__opensans"><th>Saturday:</th><td>06:00 AM - 11:00 PM</td></tr>
          </table>
        </div>
      </div>

      <div className="app__wrapper_img">
        <img className='map' src={images.map} alt="maps" />
      </div>
    </div>
  );

}

export default FindUs;
