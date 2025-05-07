import React, { useEffect, useRef } from "react";

import "./cursor-2.scss";

const Cursor2 = () => {
  const isActivePage = useRef(true);
  const cursor = useRef(null);
  let activeColor;

  const PARAMS = {
    speed: 0.2,
    //
    offset: null,
  };

  // Массив цветов для покраски курсора при клике.
  const COLORS = ["#F66C41", "#00E0FF", "#D9AB36", "#4EF483", "#7C4EFF"];

  const mouse = {
    x: 100,
    y: 100,
  };

  const pos = {
    x: 0,
    y: 0,
  };

  const updateCoordinates = (evt) => {
    mouse.x = evt.clientX;
    mouse.y = evt.clientY;
  };

  const updateCursor = () => {
    const diffX = Math.round(mouse.x - pos.x);
    const diffY = Math.round(mouse.y - pos.y);

    pos.x = Math.round(pos.x + diffX * PARAMS.speed);
    pos.y = Math.round(pos.y + diffY * PARAMS.speed);

    const translate = `translate3d(${pos.x - PARAMS.offset}px, ${
      pos.y - PARAMS.offset
    }px, 0)`;

    if (!cursor.current) {
      return;
    }

    cursor.current.style.transform = translate;
  };

  // Случайное число.

  const getRandomInteger = (a = 0, b = 1) => {
    const lower = Math.ceil(Math.min(a, b));
    const upper = Math.floor(Math.max(a, b));
    return Math.floor(lower + Math.random() * (upper - lower + 1));
  };

  // Случайный цвет.
  const getRandomElement = (arr) => arr[getRandomInteger(0, arr.length - 1)];

  const changeColorHandler = () => {
    const color = getRandomElement(COLORS);

    if (color === activeColor) {
      changeColorHandler();
    } else {
      cursor.current.style.color = color;
      activeColor = color;
    }
  };

  // Анимация курсора.
  const cursorClickAnimation = () => {
    cursor.current.classList.add("cursor--click");

    setTimeout(() => {
      cursor.current.classList.remove("cursor--click");
    }, 255);
  };

  // Браузерный обаботчик анимаций.
  const requestAnimationHandler = () => {
    // Остановка цикла анимаций requestAnimationFrame при размонтировании компонента.
    if (isActivePage.current === false) {
      return;
    }
    updateCursor();
    requestAnimationFrame(requestAnimationHandler);
  };

  requestAnimationFrame(requestAnimationHandler);

  useEffect(() => {
    window.addEventListener("mousemove", updateCoordinates);
    window.addEventListener("click", changeColorHandler);
    window.addEventListener("click", cursorClickAnimation);
    PARAMS.offset = cursor.current.getBoundingClientRect().width / 2;

    return () => {
      window.removeEventListener("click", cursorClickAnimation);
      window.removeEventListener("mousemove", updateCoordinates);
      window.removeEventListener("click", changeColorHandler);
      // Остановка цикла анимаций requestAnimationFrame при размонтировании компонента.
      isActivePage.current = false;
    };
  }, []);

  return (
    <div className="cursor-2">
      <svg
        className="cursor"
        xmlns="http://www.w3.org/2000/svg"
        width="27"
        height="27"
        viewBox="0 0 27 27"
        fill="none"
        ref={cursor}
      >
        <path
          d="M26.7344 25.4514L21.4005 20.1158L25.1363 16.3801C25.3524 16.1642 25.4452 15.8538 25.3831 15.5548C25.3211 15.2556 25.1128 15.0078 24.8288 14.8955L10.3436 9.16435C10.0074 9.03108 9.62417 9.11065 9.36851 9.3663C9.11286 9.62195 9.03341 10.0051 9.16644 10.3414L14.8969 24.8264C15.0093 25.1106 15.2572 25.3189 15.5561 25.3809C15.6175 25.3936 15.6791 25.3998 15.7403 25.3998C15.9784 25.3998 16.2099 25.3061 16.3816 25.1342L20.1178 21.3982L25.4517 26.7339C25.6287 26.9111 25.8609 26.9996 26.0931 26.9996C26.3252 26.9996 26.5573 26.9111 26.7344 26.734C27.0885 26.3799 27.0886 25.8056 26.7344 25.4514ZM16.0756 22.8748L11.6238 11.6216L22.877 16.0739L16.0756 22.8748Z"
          fill="currentColor"
        />
        <path
          d="M3.02707 2.97021L6.69115 6.37234"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="line"
        />
        <path
          d="M10 1V6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="line"
        />
        <path
          d="M1 10H6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="line"
        />
      </svg>
    </div>
  );
};

export { Cursor2 };
