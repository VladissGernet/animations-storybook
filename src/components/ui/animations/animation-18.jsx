import React from "react";

import "./animation-18.scss";

import parallaxBg from "/src/assets/animation-18/parallax-bg.jpg";
import parallax1 from "/src/assets/animation-18/parallax-1.png";
import parallax2 from "/src/assets/animation-18/parallax-2.png";

const Animation18 = () => {
  return (
    <div className="animation-18">
      <div className="parallax">
        <div className="parallax__assets">
          <img
            className="parallax__layer parallax__layer--0"
            src={parallaxBg}
          />
          <img className="parallax__layer parallax__layer--1" src={parallax1} />
          <img className="parallax__layer parallax__layer--2" src={parallax2} />
        </div>
      </div>
    </div>
  );
};

export { Animation18 };
