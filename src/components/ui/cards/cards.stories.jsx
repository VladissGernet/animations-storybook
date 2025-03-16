import React from 'react';

import { StyledCards } from './styled';

import { Container } from '/src/components/layout/container/container';
import { CardsList1 } from './cards-1';
import { CardsList2 } from './cards-2';
import { CardsList3 } from './cards-3';

export const Cards1 = () => (
  <StyledCards>
    <Container>
      <CardsList1 />
    </Container>
  </StyledCards>
)

export const Cards2 = () => (
  <StyledCards>
    <Container>
      <CardsList2 />
    </Container>
  </StyledCards>
)

export const Cards3 = () => (
  <StyledCards>
    <Container>
      <CardsList3 />
    </Container>
  </StyledCards>
)

export default {
  title: 'Карточки'
}
