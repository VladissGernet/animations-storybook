import React from 'react';

import { Container } from '/src/components/layout/container/container';

import { StyledAnimations } from './styled';

import { Animation1 } from './animation-1';
import { Animation2 } from './animation-2';
import { Animation3 } from './animation-3';

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

export const Animations3 = () => (
  <StyledAnimations>
    <Container>
      <Animation3 />
    </Container>
  </StyledAnimations>
)


export default {
  title: 'Анимации'
}
