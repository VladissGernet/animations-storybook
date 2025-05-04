import React, { useRef, useEffect } from "react";

import "./cursor-1.scss";

const Cursor1 = () => {
  const svgCursor = useRef(null);
  let activeColor;

  const PARAMS = {
    speed: 0.2,
    // Корректировка центра курсора.
    offset: null,
  };

  // Массив цветов для покраски курсора при клике.
  const COLORS = ["#F66C41", "#00E0FF", "#D9AB36", "#4EF483", "#7C4EFF"];

  const mouse = {
    x: null,
    y: null,
  };

  const pos = {
    x: null,
    y: null,
  };

  const updateCoordinates = (evt) => {
    mouse.x = evt.clientX - PARAMS.offset;
    mouse.y = evt.clientY - PARAMS.offset;
  };

  /*
    Создадим функцию updateCursor, которая будет смещать
    кастомный курсор на вычисленные координаты.
  */
  const updateCursor = () => {
    /*
      Настало время связать процессы. Опишем функцию updateCursor.
      Важно помнить, что она вызывается не по движению мыши, а столько
      раз в секунду, сколько может позволить браузер.
    */

    /*
      Доработаем анимацию. Каждый кадр будем смещать курсор не на чёткую
      координату мыши из объекта mouse, а на разницу между текущим положением
      курсора и предыдущим.

      Ещё будем умножать эту разницу на коэффициент скорости (от 0 до 1). За
      счёт этого каждый кадр кастомный курсор станет смещаться на меньшее
      расстояние, но будет стремиться к координатам настоящего курсора. За счёт
      этого появится плавность.

      Введём коэффициент скорости в объекте PARAMS, а также заведём объект pos,
      в котором будем хранить положение кастомного курсора.
    */

    const diffX = Math.round(mouse.x - pos.x);
    const diffY = Math.round(mouse.y - pos.y);

    pos.x = Math.round(pos.x + diffX * PARAMS.speed);
    pos.y = Math.round(pos.y + diffY * PARAMS.speed);

    const translate = `translate3d(${pos.x}px, ${pos.y}px, 0)`;

    svgCursor.current.style.transform = translate;
  };

  // вспомогательные функции

  const getRandomElement = (array) =>
    array[getRandomInteger(0, array.length - 1)];

  const getRandomInteger = (a = 0, b = 1) => {
    const lower = Math.ceil(Math.min(a, b));
    const upper = Math.floor(Math.max(a, b));
    return Math.floor(lower + Math.random() * (upper - lower + 1));
  };

  const changeColor = () => {
    const color = getRandomElement(COLORS);

    if (color === activeColor) {
      changeColor();
    } else {
      svgCursor.current.style.fill = color;
      activeColor = color;
    }
  };

  /*
    Добавим вызов метода requestAnimationFrame, передав туда
    функцию-прослойку requestAnimationHandler. Она будет вызывать
    updateCursor, а затем вновь вызывать себя же.

    Мы могли бы обойтись и без функции-посредника, и всё бы работало.
    Однако так нам будет удобнее в случае, если понадобится добавить ещё
    одну анимацию, помимо курсора.

    Теперь у нас есть два независимых процесса:

    - обновление объекта mouse с каждым движением мыши,
    - зацикленный вызов функции updateCursor.
  */

  const requestAnimationHandler = () => {
    updateCursor();
    requestAnimationFrame(requestAnimationHandler);
  };

  requestAnimationFrame(requestAnimationHandler);

  useEffect(() => {
    window.addEventListener("mousemove", updateCoordinates);
    window.addEventListener("click", changeColor);

    PARAMS.offset = Math.round(
      svgCursor.current.getBoundingClientRect().width / 2
    );

    return () => {
      window.removeEventListener("click", changeColor);
      window.removeEventListener("mousemove", updateCoordinates);
    };
  }, []);

  return (
    <div className="cursor-1">
      <svg
        className="cursor"
        width="50"
        height="50"
        fill="#333333"
        viewBox="0 0 50 50"
        ref={svgCursor}
      >
        <circle r="25" cx="25" cy="25" />
      </svg>
    </div>
  );
};

export { Cursor1 };
