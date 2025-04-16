import React from "react";

import "./cards-4.scss";
import image from "/src/assets/cards-4/image-1.jpg";

const CardsList4 = () => {
  return (
    <div className="cards-4">
      <div className="wrap">
        <div className="item">
          <div className="item-box">
            <img className="item-img" src={image} alt="picture" />
          </div>
        </div>

        <div className="item">
          <div className="item-box">
            <img className="item-img" src={image} alt="picture" />
          </div>
        </div>

        <div className="item">
          <div className="item-box">
            <img className="item-img" src={image} alt="picture" />
          </div>
        </div>
      </div>
    </div>
  );
};

export { CardsList4 };
