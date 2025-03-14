import React from 'react';

import './cards-1.css';
import { StyledLine } from './styled';

const CardsList1 = () => (
  <>
    <ul className='cards-1'>
      <li className='card' tabIndex='0'>
        <span className='card__title'>Clip-path</span>
        <div className='card__content card__content--clip-path'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad necessitatibus fugiat, maxime voluptatum nemo ullam consectetur sed tempore dolores dolor cupiditate fugit doloribus explicabo facere rerum eveniet neque enim assumenda.
        </div>
      </li>
      <li className='card' tabIndex='0'>
        <span className='card__title'>Transform</span>
        <div className='card__content card__content--transform'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad necessitatibus fugiat, maxime voluptatum nemo ullam consectetur sed tempore dolores dolor cupiditate fugit doloribus explicabo facere rerum eveniet neque enim assumenda.
        </div>
      </li>
    </ul>
    <StyledLine />
    <div className='cards-1'>
      <div className='card'>
        <span className='card__title'>circle</span>
        <div className='card__content card__content--circle'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad necessitatibus fugiat, maxime voluptatum nemo ullam consectetur sed tempore dolores dolor cupiditate fugit doloribus explicabo facere rerum eveniet neque enim assumenda.
        </div>
      </div>
    </div>
  </>
);

export { CardsList1 };
