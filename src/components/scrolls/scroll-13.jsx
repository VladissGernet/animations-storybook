import React, { useRef, useEffect } from "react";

import "./scroll-13.scss";

const Scroll13 = () => {
  const motionPath = useRef(null);
  const motionElement = useRef(null);

  /*
    №1.
    Небольшие советы для улучшения
    Кэшировать documentHeight и htmlElement.clientHeight — сейчас ты вычисляешь
    их один раз при монтировании, что хорошо. Но если страница может динамически
    менять размер (например, при изменении контента или ресайзе окна), стоит добавить
    обработчик resize и обновлять эти значения.

    №2.
    В текущем варианте positionCoordinates и ticking — обычные переменные внутри эффекта.
     Это нормально, но если компонент будет ререндериться, эти значения могут сбрасываться.
     Чтобы избежать этого, можно хранить их в useRef, например:

    const ticking = useRef(false);
    const positionCoordinates = useRef({ x: 0, y: 0 });

    И использовать ticking.current, positionCoordinates.current

    №3.
    Обработка edge cases

    Например, если motionPath.current или motionElement.current вдруг не инициализированы
    (например, при быстром размонтировании компонента), стоит добавить проверки.
  */

  const positionCoordinates = {
    x: 0,
    y: 0,
  };

  useEffect(() => {
    const htmlElement = document.documentElement;
    const documentHeight = htmlElement.scrollHeight;
    const pathLength = motionPath.current.getTotalLength();

    /*
       Флаг, чтобы не вызывать несколько requestAnimationFrame подряд,
       если предыдущий ещё не отработал.
    */
    //  никто не ждёт кадра отрисовки = false. Если ждём = true.
    let ticking = false;

    // Устанавливает позицию точки.
    const setPosition = () => {
      motionElement.current.setAttribute(
        "transform",
        `translate(${positionCoordinates.x}, ${positionCoordinates.y})`
      );
      /*
        ticking сбрасывается в false — теперь можно снова запускать
        requestAnimationFrame при следующем scroll.
      */
      ticking = false;
    };

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

      if (ticking) {
        return;
      }

      const scrollPercentage =
        htmlElement.scrollTop / (documentHeight - htmlElement.clientHeight);

      const position = motionPath.current.getPointAtLength(
        scrollPercentage * pathLength
      );

      positionCoordinates.x = position.x;
      positionCoordinates.y = position.y;
      requestAnimationFrame(setPosition);
      // ticking становится true — мы "заняли очередь" на кадр отрисовки.
      ticking = true;
    };

    updatePosition();

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
