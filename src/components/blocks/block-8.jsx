import React from "react";

import "./block-8.scss";

const Block8 = () => {
  return (
    <div className="block-8">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
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
      </svg>
    </div>
  );
};

export { Block8 };
