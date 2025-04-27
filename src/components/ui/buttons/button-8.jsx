import React from "react";

import "./button-8.scss";

const Button8 = () => {
  return (
    <div className="button-8">
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

export { Button8 };
