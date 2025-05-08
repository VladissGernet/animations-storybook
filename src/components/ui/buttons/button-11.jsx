import React, { useEffect, useRef } from "react";
import KUTE from "kute.js";

import "./button-11.scss";

const Button11 = () => {
  const button = useRef(null);
  const path = useRef(null);
  let isButtonActive = false;

  const PATHS = {
    TICK: "M9 8L14.5 2.5L13 1L11 3L7.5 6.5L5.5 8.5L3 6L2.5 6.5L1.5 7.5L5.5 11.5L9 8Z",
    STAR: "M6 6L8 2L10 6L14 6.5L11 9.5L12 14L8 12L4 14L5 9.5L2 6.5L6 6Z",
  };

  let tweenToTick = null;
  let tweenToStar = null;

  const onButtonClick = () => {
    isButtonActive = !isButtonActive;

    if (isButtonActive) {
      tweenToTick.start();
      return;
    }
    tweenToStar.start();
  };

  useEffect(() => {
    tweenToTick = KUTE.to(
      path.current,
      {
        /*
          Опишем анимацию, используя метод to. Обратите внимание: в качестве изменяемого
          свойства мы указываем не d, а path.
        */
        path: PATHS.TICK,
      },
      {
        duration: 350,
      }
    );
    tweenToStar = KUTE.to(
      path.current,
      {
        path: PATHS.STAR,
      },
      {
        duration: 350,
      }
    );
  }, []);

  return (
    <div className="button-11">
      <div className="wrapper">
        <button
          className="button"
          type="button"
          aria-label="Добавить в избранное"
          ref={button}
          onClick={onButtonClick}
        >
          <svg width="75" height="75" viewBox="-2 -1 35 30">
            <path
              className="button-svg"
              d="M6 6L8 2L10 6L14 6.5L11 9.5L12 14L8 12L4 14L5 9.5L2 6.5L6 6Z"
              stroke="currentColor"
              fill="currentColor"
              ref={path}
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export { Button11 };
