import React from 'react';
import { Heading } from '../../components';
import { images, awardsData } from '../../constants';
import './Laurels.css';

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="app__laurels_awards-card">
    <img className='awardImages' src={imgUrl} alt="awards" />
    <div className="app__laurels_awards-card_content">
      <p className="p__cormorant" style={{ color: '#DCCA87' }}>{title}</p>
      <p className="p__opensans" id='sub'>{subtitle}</p>
    </div>
  </div>
);

const Laurels = () => (
  <div className="app__bg app__wrapper section__padding" id="awards">
    <div className="app__wrapper_info">
      <div><Heading title="Awards & Recognition"/></div>
      
      <h1 className="laurels__cormorant">Our Laurels</h1>
      <img id='laurelSpoon' src={images.spoon} alt="spoon_image" className="spoon__img" />
      <div className="app__laurels_awards">
        {awardsData.awards.map((award) => <AwardCard award={award} key={award.title} />)}
      </div>
    </div>

    <div className="app__wrapper_img" >
      <img id='awardDish' src={images.laurels} alt="laurels_img" />
    </div>
  </div>
);

export default Laurels;