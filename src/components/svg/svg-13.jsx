import React, { useRef, useCallback } from "react";
import anime from "animejs";

import image from "/src/assets/svg-13/image.jpg";

import "./svg-13.scss";

/*
  1. Добавить маску svg, которая будет скрыта с помощью visually hidden,
  сотоящая из 3 кругов и 1 прямоугольника, закрашивающего всю картинку.
  2. Добавить анимацию при наведении
  3. Добавить анимацию при mouseLeave.
*/

const Svg13 = () => {
  const mask = useRef(null);

  const mouseleaveHandler = useCallback(() => {
    if (!mask.current) return;
    const maskCircles = mask.current.querySelectorAll("circle");

    for (let i = 0; i < maskCircles.length; i++) {
      anime({
        targets: maskCircles[i],
        r: 0,
        duration: 1000,
        easing: "easeInOutQuad",
        fill: "transparent",
        delay: 150,
      });
    }
  }, []);

  const mouseenterHandler = useCallback(() => {
    if (!mask.current) return;
    const maskCircles = mask.current.querySelectorAll("circle");

    for (let i = 0; i < maskCircles.length; i++) {
      anime({
        targets: maskCircles[i],
        r: anime.random(30, 95),
        duration: 1000,
        easing: "easeInOutQuad",
        fill: "#000000",
        delay: 150,
      });
    }
  }, []);

  const clickHandler = useCallback(() => {
    if (!mask.current) return;
    const maskCircles = mask.current.querySelectorAll("circle");

    for (let i = 0; i < maskCircles.length; i++) {
      const currentR = maskCircles[i].getAttribute("r");
      anime({
        targets: maskCircles[i],
        r: [currentR, 300],
        duration: 1000,
        delay: 150,
        easing: "easeInOutQuad",
      });
    }
  }, []);

  return (
    <div className="svg-13">
      <div className="wrapper">
        <div
          className="preview"
          onMouseEnter={() => mouseenterHandler()}
          onMouseLeave={() => mouseleaveHandler()}
          onClick={() => clickHandler()}
        >
          <img src={image} alt="Preview" />
          <span>Preview</span>
          <svg xmlns="http://www.w3.org/2000/svg">
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

        {/*
          Маска отображается частично, потому что в разметке она стоит отдельно от блока preview. И по дефолту элемент SVG, в котором находится маска, имеет размеры 300 x 150. Эту область мы и видим.

          Чтобы исправить это поведение, зададим маске размеры через CSS.
        */}
        <div className="visually-hidden">
          <svg className="mask-wrapper" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <mask ref={mask} id="mask" x="0" y="0" maskUnits="userSpaceOnUse">
                <rect width="100%" height="100%" fill="#ffffff" />
                <circle cx="20%" cy="30%" r="0" fill="transparent"></circle>
                <circle cx="85%" cy="75%" r="0" fill="transparent"></circle>
                <circle cx="40%" cy="30%" r="0" fill="transparent"></circle>
              </mask>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export { Svg13 };
