import React from 'react';

import { StyledCards } from './styled';
import './cards.css';

import { Container } from '/src/components/layout/container/container';

import { StyledLine } from './styled';

export const Cards = () => (
  <StyledCards>
    <Container>
      <ul className='cards'>
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
      <div className='card'>
        <span className='card__title'>circle</span>
        <div className='card__content card__content--circle'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad necessitatibus fugiat, maxime voluptatum nemo ullam consectetur sed tempore dolores dolor cupiditate fugit doloribus explicabo facere rerum eveniet neque enim assumenda.
        </div>
      </div>
    </Container>
  </StyledCards>
)

export default {
  title: 'Карточки'
}
