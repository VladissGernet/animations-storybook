import React from "react";

import "./animation-6.scss";

import image from "/src/assets/animation-6/animation-6.jpg";

const Animation6 = () => {
  return (
    <div className="animation-6">
      <div className="wrapper">
        <div className="parallax">
          <div className="parallax-layer parallax-image">
            <img src={image} alt="Сад изящных слов" />
          </div>
          <span className="parallax-layer parallax-text">Сад изящных слов</span>
        </div>
      </div>
    </div>
  );
};

export { Animation6 };
