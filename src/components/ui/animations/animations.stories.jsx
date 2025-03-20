import React from 'react';

import { Container } from '/src/components/layout/container/container';

import { StyledAnimations } from './styled';

import { Animation1 } from './animation-1';

export const Animations1 = () => (
  <StyledAnimations>
    <Container>
      <Animation1 />
    </Container>
  </StyledAnimations>
)


export default {
  title: 'Анимации'
}
