import React from 'react';

import { Container } from '/src/components/layout/container/container';

import { StyledButtons } from './styled';

import { Button1 } from './button-1';
import { Button2 } from './button-2';
import { Button3 } from './button-3';
import { Button4 } from './button-4';

export const Buttons1 = () => (
  <StyledButtons>
    <Container>
      <Button1 />
    </Container>
  </StyledButtons>
)

export const Buttons2 = () => (
  <StyledButtons>
    <Container>
      <Button2 />
    </Container>
  </StyledButtons>
)

export const Buttons3 = () => (
  <StyledButtons>
    <Container>
      <Button3 />
    </Container>
  </StyledButtons>
)

export const Buttons4 = () => (
  <StyledButtons $backgroundColor="#ffffff">
    <Container>
      <Button4 />
    </Container>
  </StyledButtons>
)

export default {
  title: 'Кнопки'
}
