import React from "react";

import { Container } from "/src/components/layout/container/container";

import { StyledButtons } from "./styled";

import { Button1 } from "./button-1";
import { Button2 } from "./button-2";
import { Button3 } from "./button-3";
import { Button4 } from "./button-4";
import { Button5 } from "./button-5";
import { Button6 } from "./button-6";
import { Button7 } from "./button-7";
import { Button8 } from "./button-8";
import { Button9 } from "./button-9";

export const Buttons1 = () => (
  <StyledButtons>
    <Container>
      <Button1 />
    </Container>
  </StyledButtons>
);

export const Buttons2 = () => (
  <StyledButtons>
    <Container>
      <Button2 />
    </Container>
  </StyledButtons>
);

export const Buttons3 = () => (
  <StyledButtons>
    <Container>
      <Button3 />
    </Container>
  </StyledButtons>
);

export const Buttons4 = () => (
  <StyledButtons $backgroundColor="#ffffff">
    <Container>
      <Button4 />
    </Container>
  </StyledButtons>
);

export const Buttons5 = () => (
  <StyledButtons $backgroundColor="#ffffff">
    <Container>
      <Button5 />
    </Container>
  </StyledButtons>
);

export const Buttons6 = () => (
  <StyledButtons $backgroundColor="#ffffff">
    <Container>
      <Button6 />
    </Container>
  </StyledButtons>
);

export const Buttons7 = () => (
  <StyledButtons $backgroundColor="#ffffff">
    <Container>
      <Button7 />
    </Container>
  </StyledButtons>
);

export const Buttons8Dropdown = () => (
  <StyledButtons $backgroundColor="#ffffff">
    <Container>
      <Button8 />
    </Container>
  </StyledButtons>
);

export const Buttons9SVG = () => (
  <StyledButtons $backgroundColor="#666666">
    <Container>
      <Button9 />
    </Container>
  </StyledButtons>
);

export default {
  title: "Кнопки",
};
