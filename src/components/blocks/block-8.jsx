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
