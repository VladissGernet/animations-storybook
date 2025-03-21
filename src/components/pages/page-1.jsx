import React from 'react';

import logo from '/src/assets/page-1/logo.svg';
import menuIcon from '/src/assets/page-1/menu-icon.svg';
import cartIcon from '/src/assets/page-1/cart-icon.svg';
import boot from '/src/assets/page-1/boot.png';
import textCircle from '/src/assets/page-1/text-circle.svg';
import starIcon from '/src/assets/page-1/star-icon.svg';

import './page-1.scss';

const Page1 = () => {
  return (
    <div className='page-1'>
      <header className="header">
        <div className="header__wrap">
          <nav className="header__top">
            <a href="#"><img width="137" height="37" src={logo} alt="logo"/></a>
            <nav className="header__nav">
              <a href="#"><img width="30" height="21" src={menuIcon} alt="menu"/></a>
              <a href="#"><img width="30" height="29" src={cartIcon} alt="cart"/></a>
            </nav>
          </nav>

          <div className="header__promo promo">
            <p className="promo__title">скорость</p>
            <div className="promo__box">
              <img className="promo__img" src={boot} alt="boot"/>
              <img className="promo__badge" width="179" height="179" src={textCircle} alt="защита от дождя и холода"/>
            </div>
          </div>

          <div className="header__description">
            <h1 className="header__title">
              Премиальные<br/>
              беговые кеды<br/>
              для российской осени
            </h1>
            <div className="header__rating rating">
              <img className="rating__item" src={starIcon}  width="24" height="24" alt="star"/>
              <img className="rating__item" src={starIcon}  width="24" height="24" alt="star"/>
              <img className="rating__item" src={starIcon}  width="24" height="24" alt="star"/>
              <img className="rating__item" src={starIcon}  width="24" height="24" alt="star"/>
              <img className="rating__item" src={starIcon}  width="24" height="24" alt="star"/>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export { Page1 };

