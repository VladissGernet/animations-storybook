import React, { useRef, useEffect } from "react";

import "./scroll-13.scss";

const Scroll13 = () => {
  const motionPath = useRef(null);
  const motionElement = useRef(null);

  const coordinates = {
    x: 0,
    y: 0,
  };

  useEffect(() => {
    const htmlElement = document.documentElement;
    const documentHeight = htmlElement.scrollHeight;

    const pathLength = motionPath.current.getTotalLength();

    const updatePosition = () => {
      /*
        Добавим вычисление процента текущей прокрутки и на его основе вычислим координаты точки,
        которая соответствует этому проценту относительно элемента path.

        Будем использовать метод getPointAtLength - возвращает координаты точки, находящейся на
        указанной дистанции от начала траектории.

        documentHeight - clientHeight
        Максимально возможное значение для scrollTop.
        Когда страница прокручена до конца, scrollTop достигает этой величины.
      */

      const scrollPercentage =
        htmlElement.scrollTop / (documentHeight - htmlElement.clientHeight);

      const position = motionPath.current.getPointAtLength(
        scrollPercentage * pathLength
      );

      motionElement.current.setAttribute(
        "transform",
        `translate(${position.x}, ${position.y})`
      );
    };

    updatePosition();

    // Реализовать request animation frame

    window.addEventListener("scroll", updatePosition);

    return () => {
      window.removeEventListener("scroll", updatePosition);
    };
  }, []);

  return (
    <div className="scroll-13">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="507"
        height="813"
        viewBox="0 0 507 813"
        fill="none"
      >
        <path
          ref={motionPath}
          className="path"
          d="M75.3329 2C75.3329 2 308.069 48.4013 317.834 115.968C327.6 183.535 41.9686 227.494 63.9402 329.252C85.9118 431.009 335.737 427.753 369.915 308.086C404.093 188.419 273.077 128.993 103.001 146.902C-67.0758 164.812 4.53545 596.263 120.904 651.619C237.272 706.975 254.361 461.129 361.778 454.617C469.195 448.104 179.495 713.487 342.247 796.521C505 879.555 505 578.353 505 578.353"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="6 6"
        />
        <circle
          ref={motionElement}
          className="target"
          r="30"
          cx="0"
          cy="0"
          fill="#ffffff"
        />
      </svg>
    </div>
  );
};

export { Scroll13 };
