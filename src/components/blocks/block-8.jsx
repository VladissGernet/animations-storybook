import React from "react";

import "./block-8.scss";

const Block8 = () => {
  return (
    <div className="block-8">
      <p>Паттерн, который повторяент SVG анимируемые элементы</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        width="700"
        height="400"
      >
        <defs>
          <pattern
            id="pattern"
            patternUnits="userSpaceOnUse"
            viewBox="0 0 110 30"
            width="104"
            height="30"
          >
            <circle
              r="12"
              cx="16"
              cy="15"
              stroke="coral"
              strokeWidth="2"
              fill="transparent"
            >
              <animateTransform
                attributeName="transform"
                type="scale"
                values="0.8; 1.1; 0.8"
                dur="2s"
                repeatCount="indefinite"
              />
            </circle>
            <circle
              r="12"
              cx="52"
              cy="15"
              fill="#6460AA"
              stroke="#6460AA"
              strokeWidth="2"
            >
              <animateTransform
                attributeName="transform"
                type="scale"
                values="0.8; 1.1; 0.8"
                dur="2s"
                repeatCount="indefinite"
              />
            </circle>
            <circle
              r="12"
              cx="88"
              cy="15"
              stroke="#FCB711"
              strokeWidth="2"
              fill="transparent"
            >
              <animateTransform
                attributeName="transform"
                type="scale"
                values="0.8; 1.1; 0.8"
                dur="2s"
                repeatCount="indefinite"
              />
            </circle>
          </pattern>
        </defs>
        <rect fill="url(#pattern)" width="100%" height="100%" x="0" y="0" />
      </svg>
    </div>
  );
};

export { Block8 };

/*
  Пример из гайда

  <!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Создание анимированного паттерна</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>
<div class="patterns visually-hidden">
  <svg xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="pattern1" patternUnits="userSpaceOnUse" viewBox="0 0 275 175" width="150" height="95">
        <g>
          <circle r="12" cx="14" cy="14" stroke="coral" stroke-width="2" fill="transparent">
            <animateTransform
              attributeName="transform"
              type="scale"
              from="0.8"
              to="0.8"
              values="0.8; 1.1; 0.8"
              dur="2s"
              repeatCount="indefinite" />
          </circle>
          <circle r="12" cx="60" cy="14" fill="#6460AA" stroke="#6460AA" stroke-width="2">
            <animateTransform
              attributeName="transform"
              type="scale"
              from="0.8"
              to="0.8"
              values="0.8; 1.1; 0.8"
              dur="2s"
              repeatCount="indefinite" />
          </circle>
          <circle r="12" cx="106" cy="14" stroke="#FCB711" stroke-width="2" fill="transparent">
            <animateTransform
              attributeName="transform"
              type="scale"
              from="0.8"
              to="0.8"
              values="0.8; 1.1; 0.8"
              dur="2s"
              repeatCount="indefinite" />
          </circle>
          <circle r="12" cx="152" cy="14" stroke="#0089D0" stroke-width="2" fill="#0089D0">
            <animateTransform
              attributeName="transform"
              type="scale"
              from="0.8"
              to="0.8"
              values="0.8; 1.1; 0.8"
              dur="2s"
              repeatCount="indefinite" />
          </circle>
          <circle r="12" cx="198" cy="14" stroke="#64B915" stroke-width="2" fill="transparent">
            <animateTransform
              attributeName="transform"
              type="scale"
              from="0.8"
              to="0.8"
              values="0.8; 1.1; 0.8"
              dur="2s"
              repeatCount="indefinite" />
          </circle>
          <circle r="12" cx="246" cy="14" stroke="#FCB711" stroke-width="2" fill="#FCB711">
            <animateTransform
              attributeName="transform"
              type="scale"
              from="0.8"
              to="0.8"
              values="0.8; 1.1; 0.8"
              dur="2s"
              repeatCount="indefinite" />
          </circle>
        </g>

        <g>
          <circle r="12" cx="246" cy="60" stroke="coral" stroke-width="2" fill="transparent">
            <animateTransform
              attributeName="transform"
              type="scale"
              from="0.8"
              to="0.8"
              values="0.8; 1.1; 0.8"
              dur="2s"
              repeatCount="indefinite" />
          </circle>
          <circle r="12" cx="14" cy="60" fill="#6460AA" stroke="#6460AA" stroke-width="2">
            <animateTransform
              attributeName="transform"
              type="scale"
              from="0.8"
              to="0.8"
              values="0.8; 1.1; 0.8"
              dur="2s"
              repeatCount="indefinite" />
          </circle>
          <circle r="12" cx="60" cy="60" stroke="#FCB711" stroke-width="2" fill="transparent">
            <animateTransform
              attributeName="transform"
              type="scale"
              from="0.8"
              to="0.8"
              values="0.8; 1.1; 0.8"
              dur="2s"
              repeatCount="indefinite" />
          </circle>
          <circle r="12" cx="106" cy="60" stroke="#0089D0" stroke-width="2" fill="#0089D0">
            <animateTransform
              attributeName="transform"
              type="scale"
              from="0.8"
              to="0.8"
              values="0.8; 1.1; 0.8"
              dur="2s"
              repeatCount="indefinite" />
          </circle>
          <circle r="12" cx="152" cy="60" stroke="#64B915" stroke-width="2" fill="transparent">
            <animateTransform
              attributeName="transform"
              type="scale"
              from="0.8"
              to="0.8"
              values="0.8; 1.1; 0.8"
              dur="2s"
              repeatCount="indefinite" />
          </circle>
          <circle r="12" cx="198" cy="60" stroke="#FCB711" stroke-width="2" fill="#FCB711">
            <animateTransform
              attributeName="transform"
              type="scale"
              from="0.8"
              to="0.8"
              values="0.8; 1.1; 0.8"
              dur="2s"
              repeatCount="indefinite" />
          </circle>
        </g>

        <g>
          <circle r="12" cx="198" cy="106" stroke="coral" stroke-width="2" fill="transparent">
            <animateTransform
              attributeName="transform"
              type="scale"
              from="0.8"
              to="0.8"
              values="0.8; 1.1; 0.8"
              dur="2s"
              repeatCount="indefinite" />
          </circle>
          <circle r="12" cx="246" cy="106" fill="#6460AA" stroke="#6460AA" stroke-width="2">
            <animateTransform
              attributeName="transform"
              type="scale"
              from="0.8"
              to="0.8"
              values="0.8; 1.1; 0.8"
              dur="2s"
              repeatCount="indefinite" />
          </circle>
          <circle r="12" cx="14" cy="106" stroke="#FCB711" stroke-width="2" fill="transparent">
            <animateTransform
              attributeName="transform"
              type="scale"
              from="0.8"
              to="0.8"
              values="0.8; 1.1; 0.8"
              dur="2s"
              repeatCount="indefinite" />
          </circle>
          <circle r="12" cx="60" cy="106" stroke="#0089D0" stroke-width="2" fill="#0089D0">
            <animateTransform
              attributeName="transform"
              type="scale"
              from="0.8"
              to="0.8"
              values="0.8; 1.1; 0.8"
              dur="2s"
              repeatCount="indefinite" />
          </circle>
          <circle r="12" cx="106" cy="106" stroke="#64B915" stroke-width="2" fill="transparent">
            <animateTransform
              attributeName="transform"
              type="scale"
              from="0.8"
              to="0.8"
              values="0.8; 1.1; 0.8"
              dur="2s"
              repeatCount="indefinite" />
          </circle>
          <circle r="12" cx="152" cy="106" stroke="#FCB711" stroke-width="2" fill="#FCB711">
            <animateTransform
              attributeName="transform"
              type="scale"
              from="0.8"
              to="0.8"
              values="0.8; 1.1; 0.8"
              dur="2s"
              repeatCount="indefinite" />
          </circle>
        </g>

        <g>
          <circle r="12" cx="152" cy="152" stroke="coral" stroke-width="2" fill="transparent">
            <animateTransform
              attributeName="transform"
              type="scale"
              from="0.8"
              to="0.8"
              values="0.8; 1.1; 0.8"
              dur="2s"
              repeatCount="indefinite" />
          </circle>
          <circle r="12" cx="198" cy="152" fill="#6460AA" stroke="#6460AA" stroke-width="2">
            <animateTransform
              attributeName="transform"
              type="scale"
              from="0.8"
              to="0.8"
              values="0.8; 1.1; 0.8"
              dur="2s"
              repeatCount="indefinite" />
          </circle>
          <circle r="12" cx="246" cy="152" stroke="#FCB711" stroke-width="2" fill="transparent">
            <animateTransform
              attributeName="transform"
              type="scale"
              from="0.8"
              to="0.8"
              values="0.8; 1.1; 0.8"
              dur="2s"
              repeatCount="indefinite" />
          </circle>
          <circle r="12" cx="14" cy="152" stroke="#0089D0" stroke-width="2" fill="#0089D0">
            <animateTransform
              attributeName="transform"
              type="scale"
              from="0.8"
              to="0.8"
              values="0.8; 1.1; 0.8"
              dur="2s"
              repeatCount="indefinite" />
          </circle>
          <circle r="12" cx="60" cy="152" stroke="#64B915" stroke-width="2" fill="transparent">
            <animateTransform
              attributeName="transform"
              type="scale"
              from="0.8"
              to="0.8"
              values="0.8; 1.1; 0.8"
              dur="2s"
              repeatCount="indefinite" />
          </circle>
          <circle r="12" cx="106" cy="152" stroke="#FCB711" stroke-width="2" fill="#FCB711">
            <animateTransform
              attributeName="transform"
              type="scale"
              from="0.8"
              to="0.8"
              values="0.8; 1.1; 0.8"
              dur="2s"
              repeatCount="indefinite" />
          </circle>
            <circle r="12" cx="14" cy="14" stroke="coral" stroke-width="2" fill="transparent">
              <animateTransform
                attributeName="transform"
                type="scale"
                from="0.8"
                to="0.8"
                values="0.8; 1.1; 0.8"
                dur="2s"
                repeatCount="indefinite" />
            </circle>
            <circle r="12" cx="60" cy="14" fill="#6460AA" stroke="#6460AA" stroke-width="2">
              <animateTransform
                attributeName="transform"
                type="scale"
                from="0.8"
                to="0.8"
                values="0.8; 1.1; 0.8"
                dur="2s"
                repeatCount="indefinite" />
            </circle>
            <circle r="12" cx="106" cy="14" stroke="#FCB711" stroke-width="2" fill="transparent">
              <animateTransform
                attributeName="transform"
                type="scale"
                from="0.8"
                to="0.8"
                values="0.8; 1.1; 0.8"
                dur="2s"
                repeatCount="indefinite" />
            </circle>
            <circle r="12" cx="152" cy="14" stroke="#0089D0" stroke-width="2" fill="#0089D0">
              <animateTransform
                attributeName="transform"
                type="scale"
                from="0.8"
                to="0.8"
                values="0.8; 1.1; 0.8"
                dur="2s"
                repeatCount="indefinite" />
            </circle>
            <circle r="12" cx="198" cy="14" stroke="#64B915" stroke-width="2" fill="transparent">
              <animateTransform
                attributeName="transform"
                type="scale"
                from="0.8"
                to="0.8"
                values="0.8; 1.1; 0.8"
                dur="2s"
                repeatCount="indefinite" />
            </circle>
            <circle r="12" cx="246" cy="14" stroke="#FCB711" stroke-width="2" fill="#FCB711">
              <animateTransform
                attributeName="transform"
                type="scale"
                from="0.8"
                to="0.8"
                values="0.8; 1.1; 0.8"
                dur="2s"
                repeatCount="indefinite" />
            </circle>
          </g>

            <g>
              <circle r="12" cx="246" cy="60" stroke="coral" stroke-width="2" fill="transparent">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  from="0.8"
                  to="0.8"
                  values="0.8; 1.1; 0.8"
                  dur="2s"
                  repeatCount="indefinite" />
              </circle>
              <circle r="12" cx="14" cy="60" fill="#6460AA" stroke="#6460AA" stroke-width="2">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  from="0.8"
                  to="0.8"
                  values="0.8; 1.1; 0.8"
                  dur="2s"
                  repeatCount="indefinite" />
              </circle>
              <circle r="12" cx="60" cy="60" stroke="#FCB711" stroke-width="2" fill="transparent">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  from="0.8"
                  to="0.8"
                  values="0.8; 1.1; 0.8"
                  dur="2s"
                  repeatCount="indefinite" />
              </circle>
              <circle r="12" cx="106" cy="60" stroke="#0089D0" stroke-width="2" fill="#0089D0">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  from="0.8"
                  to="0.8"
                  values="0.8; 1.1; 0.8"
                  dur="2s"
                  repeatCount="indefinite" />
              </circle>
              <circle r="12" cx="152" cy="60" stroke="#64B915" stroke-width="2" fill="transparent">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  from="0.8"
                  to="0.8"
                  values="0.8; 1.1; 0.8"
                  dur="2s"
                  repeatCount="indefinite" />
              </circle>
              <circle r="12" cx="198" cy="60" stroke="#FCB711" stroke-width="2" fill="#FCB711">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  from="0.8"
                  to="0.8"
                  values="0.8; 1.1; 0.8"
                  dur="2s"
                  repeatCount="indefinite" />
              </circle>
            </g>

            <g>
              <circle r="12" cx="198" cy="106" stroke="coral" stroke-width="2" fill="transparent">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  from="0.8"
                  to="0.8"
                  values="0.8; 1.1; 0.8"
                  dur="2s"
                  repeatCount="indefinite" />
              </circle>
              <circle r="12" cx="246" cy="106" fill="#6460AA" stroke="#6460AA" stroke-width="2">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  from="0.8"
                  to="0.8"
                  values="0.8; 1.1; 0.8"
                  dur="2s"
                  repeatCount="indefinite" />
              </circle>
              <circle r="12" cx="14" cy="106" stroke="#FCB711" stroke-width="2" fill="transparent">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  from="0.8"
                  to="0.8"
                  values="0.8; 1.1; 0.8"
                  dur="2s"
                  repeatCount="indefinite" />
              </circle>
              <circle r="12" cx="60" cy="106" stroke="#0089D0" stroke-width="2" fill="#0089D0">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  from="0.8"
                  to="0.8"
                  values="0.8; 1.1; 0.8"
                  dur="2s"
                  repeatCount="indefinite" />
              </circle>
              <circle r="12" cx="106" cy="106" stroke="#64B915" stroke-width="2" fill="transparent">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  from="0.8"
                  to="0.8"
                  values="0.8; 1.1; 0.8"
                  dur="2s"
                  repeatCount="indefinite" />
              </circle>
              <circle r="12" cx="152" cy="106" stroke="#FCB711" stroke-width="2" fill="#FCB711">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  from="0.8"
                  to="0.8"
                  values="0.8; 1.1; 0.8"
                  dur="2s"
                  repeatCount="indefinite" />
              </circle>
            </g>

            <g>
              <circle r="12" cx="152" cy="152" stroke="coral" stroke-width="2" fill="transparent">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  from="0.8"
                  to="0.8"
                  values="0.8; 1.1; 0.8"
                  dur="2s"
                  repeatCount="indefinite" />
              </circle>
              <circle r="12" cx="198" cy="152" fill="#6460AA" stroke="#6460AA" stroke-width="2">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  from="0.8"
                  to="0.8"
                  values="0.8; 1.1; 0.8"
                  dur="2s"
                  repeatCount="indefinite" />
              </circle>
              <circle r="12" cx="246" cy="152" stroke="#FCB711" stroke-width="2" fill="transparent">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  from="0.8"
                  to="0.8"
                  values="0.8; 1.1; 0.8"
                  dur="2s"
                  repeatCount="indefinite" />
              </circle>
              <circle r="12" cx="14" cy="152" stroke="#0089D0" stroke-width="2" fill="#0089D0">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  from="0.8"
                  to="0.8"
                  values="0.8; 1.1; 0.8"
                  dur="2s"
                  repeatCount="indefinite" />
              </circle>
              <circle r="12" cx="60" cy="152" stroke="#64B915" stroke-width="2" fill="transparent">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  from="0.8"
                  to="0.8"
                  values="0.8; 1.1; 0.8"
                  dur="2s"
                  repeatCount="indefinite" />
              </circle>
              <circle r="12" cx="106" cy="152" stroke="#FCB711" stroke-width="2" fill="#FCB711">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  from="0.8"
                  to="0.8"
                  values="0.8; 1.1; 0.8"
                  dur="2s"
                  repeatCount="indefinite" />
              </circle>
            </g>
          </circle>
        </g>
      </pattern>
    </defs>
  </svg>
</div>

<svg width="1000" height="500" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" x="0" y="0" fill="url(#pattern1)"></rect>
</svg>
</body>
</html>


body {
  margin: 0;
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
}

svg {
  width: 100vw;
  height: 100vh;
}

svg * {
  transform-box: fill-box;
}


*/
