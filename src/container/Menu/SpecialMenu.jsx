import React from 'react';
import './SpecialMenu.css';
import { SubHeading, MenuItem } from '../../components';
import { foodData, alcoholData, images } from '../../constants';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <h1 className="headtext__cormorant">Special Menu</h1>
      <SubHeading title="Best Ingredients Cooked With Upmost Care" />
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">Appetizers</p>
        <div className="app__specialMenu_menu_items">
          {foodData.appetizers.map((appetizer, index) => (
            <MenuItem key={appetizer.title + index} title={appetizer.title} price={appetizer.price} tags={appetizer.tags} />
          ))}
        </div>
        <br /><br /><br />
        {/* ========= */}
        <br />
        <p className="app__specialMenu-menu_heading">Desserts</p>
        <div className="app__specialMenu_menu_items">
          {foodData.desserts.map((dessert, index) => (
            <MenuItem key={dessert.title + index} title={dessert.title} price={dessert.price} tags={dessert.tags} />
          ))}
        </div>
      </div>


      <div className="food">
        <div className="noodles">
          <img src={images.noodle} alt="menu__img" />
        </div>
        <div className="coconut">
          <img src={images.coconut} alt="coconut jelly" />
        </div>
      </div>


      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Main Course</p>
        <div className="app__specialMenu_menu_items">
          {foodData.mainCourse.map((food, index) => (
            <MenuItem key={food.title + index} title={food.title} price={food.price} tags={food.tags} />
          ))}
        </div>
      </div>
    </div>

    {/* =============== */}
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">Cocktails</p>
        <div className="app__specialMenu_menu_items">
          {alcoholData.cocktails.map((cocktail, index) => (
            <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu__img" />
      </div>

      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Wine & Beer</p>
        <div className="app__specialMenu_menu_items">
          {alcoholData.wines.map((wine, index) => (
            <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
          ))}
        </div>
      </div>
    </div>
    {/* =============== */}

    <div style={{ marginTop: 15 }}>
      <button type="button" className="custom__button">View More</button>
    </div>


  </div>
);

export default SpecialMenu;
