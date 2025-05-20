import React, { useEffect, useRef } from "react";

import "./scroll-11.scss";

const Scroll11 = () => {
  const motionPath = useRef(null);
  const motionElement = useRef(null);

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

    // Чтобы окружность заранее находилась на траектории, добавим в скрипт вызов функции updatePosition.
    updatePosition();

    window.addEventListener("scroll", updatePosition);

    return () => {
      window.removeEventListener("scroll", updatePosition);
    };
  }, []);

  return (
    <div className="scroll-11">
      <div className="motion-wrapper">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="328"
          height="2151"
          viewBox="0 0 328 2151"
          fill="none"
        >
          <path
            className="motion-path"
            d="M124.5 3.5C124.5 3.5 45.5001 20 44.5001 112C43.5001 204 233.583 158.103 281.5 255C342.744 378.846 232 532 177 593C122 654 38.4999 613.5 20 656C1.50014 698.5 78.4996 874 124.5 956C170.5 1038 289.5 927.5 281.5 837C273.5 746.5 203.5 733 177 746.5C150.5 760 55.1483 867.792 20 983.5C-15.1483 1099.21 13.9999 1195 44.5001 1235C75.0003 1275 117.5 1283.5 204.5 1374.5C291.5 1465.5 82.0001 1427 44.5001 1482.5C7 1538 69 1562 124.5 1583.5C180 1605 225 1515.5 229 1583.5C233 1651.5 -11.4999 1832.5 20 1981C51.5 2129.5 274.5 1956.5 313 1981C351.5 2005.5 282 2067.5 229 2117C176 2166.5 152.5 2141.5 152.5 2141.5"
            stroke="#ED73E1"
            strokeWidth="6"
            ref={motionPath}
          />
          <circle
            className="motion-element"
            r="10"
            cx="0"
            cy="0"
            fill="#ED73E1"
            ref={motionElement}
          />
        </svg>
      </div>
    </div>
  );
};

export { Scroll11 };
