import React from 'react';

import { Container } from '/src/components/layout/container/container';

import { StyledTexts } from './styled';

import { Text1 } from './text-1';

export const Animations1 = () => (
  <StyledTexts>
    <Container>
      <Text1 />
    </Container>
  </StyledTexts>
)


export default {
  title: 'Тексты'
}
