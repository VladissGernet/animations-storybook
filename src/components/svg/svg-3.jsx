import React from "react";

import "./svg-3.scss";

const Svg3 = () => {
  return (
    <div className="svg-3">
      <div className="wrapper">
        <svg width="100" height="100" viewBox="0 0 100 100">
          <rect
            className="spinner"
            fill="transparent"
            x="8"
            y="8"
            height="85"
            width="85"
          />
        </svg>
      </div>
    </div>
  );
};

export { Svg3 };
