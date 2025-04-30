import React from "react";

import "./button-9.scss";

const Button9 = () => {
  return (
    <div className="button-9">
      <div className="wrapper">
        <button className="button" type="button">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none">
            <rect className="button-shape" />
          </svg>
          <span>Отправить заявку</span>
        </button>
        <button className="button-9--example" type="button">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none">
            <rect className="button-shape" />
          </svg>
          <span>Отправить заявку</span>
        </button>
      </div>
    </div>
  );
};

export { Button9 };
