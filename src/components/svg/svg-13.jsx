import React from "react";

import image from "/src/assets/svg-13/image.jpg";

import "./svg-13.scss";

const Svg13 = () => {
  return (
    <div className="svg-13">
      <div className="wrapper">
        <div className="preview">
          <img src={image} alt="Preview" />
          <span>Preview</span>
        </div>
      </div>
    </div>
  );
};

export { Svg13 };
