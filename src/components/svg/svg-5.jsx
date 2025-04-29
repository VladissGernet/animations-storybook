import React from "react";

import "./svg-5.scss";

const Svg5 = () => {
  return (
    <div className="svg-5">
      <div className="wrapper">
        <svg width="300" height="100" viewBox="0 0 250 50">
          <line className="bar" x1="0" x2="300" y1="0" y2="0" />
        </svg>
      </div>
    </div>
  );
};

export { Svg5 };
