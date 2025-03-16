import React from 'react';

import './cards-2.scss';

import cardImage from '/src/assets/tools-card-2.png';

const CardsList2 = () => (
  <div className='cards-2'>
    <div className='card' data-brand="Tekton" tabIndex="0">
      <img className='card__image' src={cardImage} width="350" height="220" alt="Инструменты" />
      <div className='card__content'>
        <h2 className='card__title'>Набор инструментов, 65 предметов</h2>
        <button className='card__button' type="button">Купить</button>
      </div>
    </div>
  </div>
);

export { CardsList2 };
