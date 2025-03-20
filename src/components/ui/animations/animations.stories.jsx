import React from 'react';

import { Container } from '/src/components/layout/container/container';

import { StyledAnimations } from './styled';

import { Animation1 } from './animation-1';
import { Animation2 } from './animation-2';

export const Animations1 = () => (
  <StyledAnimations>
    <Container>
      <Animation1 />
    </Container>
  </StyledAnimations>
)

export const Animations2 = () => (
  <StyledAnimations>
    <Container>
      <Animation2 />
    </Container>
  </StyledAnimations>
)


export default {
  title: 'Анимации'
}
