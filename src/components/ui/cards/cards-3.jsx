import React from 'react';

import image from '/src/assets/shoes-card-1.png';

import './cards-3.scss';

const CardsList3 = () => (
  <ul className='cards-3'>
    <li className='card' data-brand="Waked" tabIndex="0">
      <img className='card__image' src={image} width={332} height={274} alt="Кеды"/>
      <button className='card__button' type="button">Купить</button>
    </li>
    <li className='card' data-brand="P.P.L." tabIndex="0">
      <img className='card__image' src={image} width={332} height={274} alt="Кеды"/>
      <button className='card__button' type="button">Купить</button>
    </li>
    <li className='card' data-brand="St. Ave" tabIndex="0">
      <img className='card__image' src={image} width={332} height={274} alt="Кеды"/>
      <button className='card__button' type="button">Купить</button>
    </li>
  </ul>
);

export { CardsList3 };
