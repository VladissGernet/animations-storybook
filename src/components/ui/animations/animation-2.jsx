import React from 'react';

import image from '/src/assets/house.png';

import './animation-2.scss';

const Animation2 = () => {
  return (
    <div className="animation-2">
      <img className="animation-2__image" src={image} alt="Загородный дом." width="700" height="438"/>
    </div>
  );
};

export { Animation2 };
