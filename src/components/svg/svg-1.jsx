import React, { useRef } from "react";

import "./svg-1.scss";

const Svg1 = () => {
  const circle = useRef(null);

  let isActive = false;
  const onClick = () => {
    if (isActive) {
      circle.current.style.transform = "scale(0)";
    } else {
      circle.current.style.transform = "scale(1)";
    }

    isActive = !isActive;
  };

  return (
    <div className="svg-1">
      <div className="wrapper">
        <button
          className="like"
          type="button"
          aria-label="Добавить в избранное"
          onClick={onClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            fill="transparent"
            stroke="#ef1e83"
            strokeWidth="2"
          >
            <clipPath id="myClip">
              <circle
                cx="45"
                cy="40"
                r="100"
                fill="currentColor"
                ref={circle}
              />
            </clipPath>

            <path
              id="heart"
              d="M10,30 A20,20,0,0,1,50,30 A20,20,0,0,1,90,30 Q90,60,50,90 Q10,60,10,30 Z"
            />

            <use clipPath="url(#myClip)" href="#heart" fill="currentColor" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export { Svg1 };
