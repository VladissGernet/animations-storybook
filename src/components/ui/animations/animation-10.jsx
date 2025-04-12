import React from "react";

import "./animation-10.scss";

import image from "/src/assets/animation-10/image-1.jpg";

const Animation10 = () => {
  return (
    <div className="animation-10">
      <div className="block">
        <img
          className="image image-rotateZ"
          width="300"
          height="300"
          src={image}
          alt=""
        />
      </div>

      <div className="block">
        <img
          className="image image-scaleZ"
          width="300"
          height="300"
          src={image}
          alt=""
        />
      </div>

      <div className="block">
        <img
          className="image image-translateZ"
          width="300"
          height="300"
          src={image}
          alt=""
        />
      </div>
    </div>
  );
};

export { Animation10 };
