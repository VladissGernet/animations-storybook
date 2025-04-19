import React from "react";

import "./page-5.scss";

import bottom from "/src/assets/page-5/bottom.png";
import clouds from "/src/assets/page-5/clouds.png";
import greenhouse from "/src/assets/page-5/greenhouse.png";
import greenhouseSvg from "/src/assets/page-5/greenhouse.svg";
import house from "/src/assets/page-5/house.png";
import parallax1 from "/src/assets/page-5/parallax-1.png";
import parallax2 from "/src/assets/page-5/parallax-2.png";
import parallaxBg from "/src/assets/page-5/parallax-bg.png";

const Page5 = () => {
  return (
    <div className="page-5">
      <div className="parallax">
        <div className="parallax__assets">
          <div className="parallax__layer parallax__layer--1"></div>
          <div className="parallax__layer parallax__layer--2"></div>
          <div className="parallax__layer parallax__layer--3"></div>
          <div className="parallax__layer parallax__layer--4"></div>
        </div>
      </div>
    </div>
  );
};

export { Page5 };
