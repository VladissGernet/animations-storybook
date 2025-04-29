import React from "react";

import "./svg-2.scss";

const Svg2 = () => {
  return (
    <div className="svg-2">
      <div className="wrapper">
        <svg
          className="preloader preloader--1"
          viewBox="0 0 120 120"
          width="120"
          height="120"
        >
          <circle cx="30" cy="30" r="24" fill="transparent" />
        </svg>

        <svg
          className="preloader preloader--2"
          viewBox="0 0 120 120"
          width="120"
          height="120"
        >
          <circle cx="30" cy="30" r="8" fill="transparent" />
          <circle cx="55" cy="30" r="8" fill="transparent" />
          <circle cx="80" cy="30" r="8" fill="transparent" />
        </svg>

        <svg
          className="preloader preloader--3"
          viewBox="0 0 120 120"
          width="120"
          height="120"
        >
          <circle cx="30" cy="30" r="26" fill="transparent" />
          <circle cx="30" cy="30" r="20" fill="transparent" />
          <circle cx="30" cy="30" r="14" fill="transparent" />
        </svg>
      </div>
    </div>
  );
};

export { Svg2 };
