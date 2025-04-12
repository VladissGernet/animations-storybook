import React from "react";

import { Container } from "/src/components/layout/container/container";

import { StyledAnimations } from "./styled";

import { Animation1 } from "./animation-1";
import { Animation2 } from "./animation-2";
import { Animation3 } from "./animation-3";
import { Animation4 } from "./animation-4";
import { Animation5 } from "./animation-5";
import { Animation6 } from "./animation-6";
import { Animation7 } from "./animation-7";
import { Animation8 } from "./animation-8";
import { Animation9 } from "./animation-9";
import { Animation10 } from "./animation-10";
import { Animation11 } from "./animation-11";
import { Animation12 } from "./animation-12";
import { Animation13 } from "./animation-13";
import { Animation14 } from "./animation-14";

export const Animations1 = () => (
  <StyledAnimations>
    <Container>
      <Animation1 />
    </Container>
  </StyledAnimations>
);

export const Animations2 = () => (
  <StyledAnimations>
    <Container>
      <Animation2 />
    </Container>
  </StyledAnimations>
);

export const Animations3 = () => (
  <StyledAnimations>
    <Container>
      <Animation3 />
    </Container>
  </StyledAnimations>
);

export const Animations4 = () => (
  <StyledAnimations>
    <Container>
      <Animation4 />
    </Container>
  </StyledAnimations>
);

export const Animations5Parallax = () => <Animation5 />;

export const Animations6ParallaxCSS = () => <Animation6 />;

export const Animations7ParallaxCSS = () => <Animation7 />;

export const Animations8ParallaxJS = () => <Animation8 />;

export const Animations9_3D = () => <Animation9 />;

export const Animations10Example3D = () => <Animation10 />;

export const Animations11ExampleButton = () => <Animation11 />;

export const Animations12Example3d = () => <Animation12 />;

export const Animations13Cards = () => <Animation13 />;

export const Animations14SpeedExample = () => <Animation14 />;

export default {
  title: "Анимации",
};
