import React from "react";

import "./page-5.scss";

import bottom from "/src/assets/page-5/bottom.png";
import clouds from "/src/assets/page-5/clouds.png";
import greenhouse from "/src/assets/page-5/greenhouse.png";
import house from "/src/assets/page-5/house.png";

const Page5 = () => {
  return (
    <div className="page-5">
      <div className="parallax">
        <div className="parallax__assets">
          <img
            className="parallax__layer parallax__layer--clouds"
            src={clouds}
          />
          <img
            className="parallax__layer parallax__layer--text"
            src={greenhouse}
          />
          <img className="parallax__layer parallax__layer--house" src={house} />
          <img
            className="parallax__layer parallax__layer--bottom"
            src={bottom}
          />
        </div>
      </div>
    </div>
  );
};

export { Page5 };
