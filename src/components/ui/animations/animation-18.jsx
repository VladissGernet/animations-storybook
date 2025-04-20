import React, { useRef } from "react";

import "./animation-18.scss";

import parallaxBg from "/src/assets/animation-18/parallax-bg.jpg";
import parallax1 from "/src/assets/animation-18/parallax-1.png";
import parallax2 from "/src/assets/animation-18/parallax-2.png";

const Animation18 = () => {
  const parallaxAssets = useRef(null);
  const SPEED = 0.02;
  const THROTTLE_DELAY = 50;

  const throttle = (callee, timeout) => {
    // Таймер будет определять,
    // надо ли нам пропускать текущий вызов.
    let timer = null;

    // Как результат возвращаем другую функцию.
    // Это нужно, чтобы мы могли не менять другие части кода,
    // чуть позже мы увидим, как это помогает.
    return (...args) => {
      // Если таймер есть, то функция уже была вызвана,
      // и значит новый вызов следует пропустить.
      if (timer) return;

      // Если таймера нет, значит мы можем вызвать функцию:
      timer = setTimeout(() => {
        // Аргументы передаём неизменными в функцию-аргумент:
        callee(...args);

        // По окончании сбрасываем таймер:
        timer = null;
      }, timeout);
    };
  };

  const onCardMove = throttle((evt) => {
    /*
      В React-событиях (SyntheticEvent) свойства offsetX и offsetY не всегда доступны.
      Это связано с тем, что React использует собственную обертку над нативными событиями
      браузера, и некоторые свойства, которые есть в нативных событиях, могут отсутствовать
      или работать иначе.
    */
    const rect = parallaxAssets.current.getBoundingClientRect();
    const offsetX = evt.clientX - rect.left;
    const offsetY = evt.clientY - rect.top;

    const a = -(offsetY - parallaxAssets.current.offsetHeight / 2) * SPEED;
    const b = (offsetX - parallaxAssets.current.offsetWidth / 2) * SPEED;

    parallaxAssets.current.style.transform = `rotateX(${a}deg) rotateY(${b}deg)`;
  }, THROTTLE_DELAY);

  const onCardLeave = () => {
    setTimeout(() => {
      parallaxAssets.current.removeAttribute("style");
    }, THROTTLE_DELAY);
  };

  return (
    <div className="animation-18">
      <div className="parallax">
        <div
          className="parallax__assets"
          ref={parallaxAssets}
          onMouseMove={onCardMove}
          onMouseLeave={onCardLeave}
        >
          <img
            className="parallax__layer parallax__layer--0"
            src={parallaxBg}
          />
          <img className="parallax__layer parallax__layer--1" src={parallax1} />
          <img className="parallax__layer parallax__layer--2" src={parallax2} />
        </div>
      </div>
    </div>
  );
};

export { Animation18 };
