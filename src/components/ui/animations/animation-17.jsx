import React from "react";

import "./animation-17.scss";

import layer0 from "/src/assets/animation-17/layer_0.png";
import layer1 from "/src/assets/animation-17/layer_1.png";
import layer2 from "/src/assets/animation-17/layer_2.png";
import layer3 from "/src/assets/animation-17/layer_3.png";
import layer4 from "/src/assets/animation-17/layer_4.png";
import layer5 from "/src/assets/animation-17/layer_5.png";
import layer6 from "/src/assets/animation-17/layer_6.png";

const Animation17 = () => {
  return (
    <div className="animation-17">
      <div className="parallax">
        <div className="parallax__layer parallax__layer__0">
          <img src={layer0} />
        </div>

        <div className="parallax__layer parallax__layer__1">
          <img src={layer1} />
        </div>

        <div className="parallax__layer parallax__layer__2">
          <img src={layer2} />
        </div>

        <div className="parallax__layer parallax__layer__3">
          <img src={layer3} />
        </div>

        <div className="parallax__layer parallax__layer__4">
          <img src={layer4} />
        </div>

        <div className="parallax__layer parallax__layer__5">
          <img src={layer5} />
        </div>

        <div className="parallax__layer parallax__layer__6">
          <img src={layer6} />
        </div>

        <div className="parallax__cover"></div>
      </div>
    </div>
  );
};

export { Animation17 };
