import React from 'react';

import image from '/src/assets/glitch-1.png';

import './animation-4.scss';

const Animation4 = () => {
  return (
    <div className='animation-4'>
      <div className="animation-4__item animation-4__item--1">
        <img
          src={image}
          alt="фото"
          width="340"
          height="510"
        />
        <img
          src={image}
          alt="фото"
          width="340"
          height="510"
        />
        <img
          src={image}
          alt="фото"
          width="340"
          height="510"
        />
      </div>
      <div className="animation-4__item animation-4__item--2">
        <img
          src={image}
          alt="фото"
          width="340"
          height="510"
        />
        <img
          src={image}
          alt="фото"
          width="340"
          height="510"
        />
        <img
          src={image}
          alt="фото"
          width="340"
          height="510"
        />
        <div className="animation-4__text">glitch its simple</div>
      </div>
    </div>
  );
};

export { Animation4 };
