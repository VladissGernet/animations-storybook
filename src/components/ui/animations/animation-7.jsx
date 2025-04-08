import React from "react";

import "./animation-7.scss";

import image1 from "/src/assets/animation-7/1.jpg";
import image2 from "/src/assets/animation-7/2.jpg";
import image3 from "/src/assets/animation-7/3.jpg";
import image4 from "/src/assets/animation-7/4.jpg";
import image5 from "/src/assets/animation-7/5.jpg";
import image6 from "/src/assets/animation-7/6.jpg";

const Animation7 = () => {
  return (
    <div className="animation-7">
      <div className="container">
        <h1>Parallax</h1>
        <h2>faster</h2>
        <h2>easier</h2>
        <h2>sassier</h2>
        <img src={image1} alt=" " />
        <img src={image2} alt=" " />
        <img src={image3} alt=" " />
        <img src={image4} alt=" " />
        <img src={image5} alt=" " />
        <img src={image6} alt=" " />
      </div>
    </div>
  );
};

export { Animation7 };
