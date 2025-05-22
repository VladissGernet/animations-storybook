import React from "react";

import image from "/src/assets/svg-13/image.jpg";

import "./svg-13.scss";

/*
  1. Добавить маску svg, которая будет скрыта с помощью visually hidden,
  сотоящая из 3 кругов и 1 прямоугольника, закрашивающего всю картинку.
  2. Добавить анимацию при наведении
  3. Добавить анимацию при mouseLeave.
*/

const Svg13 = () => {
  return (
    <div className="svg-13">
      <div className="wrapper">
        {/*
          Маска отображается частично, потому что в разметке она стоит отдельно от блока preview. И по дефолту элемент SVG, в котором находится маска, имеет размеры 300 x 150. Эту область мы и видим.

          Чтобы исправить это поведение, зададим маске размеры через CSS.
        */}
        <div className="visually-hidden">
          <svg className="mask-wrapper" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <mask id="mask" x="0" y="0" maskUnits="userSpaceOnUse">
                <rect width="100%" height="100%" fill="#1f1f1f" />
                <circle cx="20%" cy="50%" r="20%" fill="blue" />
                <circle cx="50%" cy="50%" r="20%" fill="yellow" />
                <circle cx="80%" cy="50%" r="20%" fill="red" />
              </mask>
            </defs>
          </svg>
        </div>

        <div className="preview">
          <img src={image} alt="Preview" />
          <span>Preview</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor">
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              fill="currentColor"
              mask="url(#mask)"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export { Svg13 };
