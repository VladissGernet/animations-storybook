import React from 'react';

import { Container } from '/src/components/layout/container/container';

import { StyledButtons } from './styled';

import { Button } from './button-1';

export const Buttons = () => (
  <StyledButtons>
    <Container>
      <Button />
    </Container>
  </StyledButtons>
)

export default {
  title: 'Кнопки'
}
