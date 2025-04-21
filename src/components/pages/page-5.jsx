import React, { useRef } from "react";

import "./page-5.scss";

import bottom from "/src/assets/page-5/bottom.png";
import clouds from "/src/assets/page-5/clouds.png";
import greenhouse from "/src/assets/page-5/greenhouse.png";
import house from "/src/assets/page-5/house.png";

const Page5 = () => {
  const parallaxAssets = useRef(null);
  const SPEED = 0.01;
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
    <div className="page-5">
      <div className="parallax">
        <div
          className="parallax__assets"
          ref={parallaxAssets}
          onMouseMove={onCardMove}
          onMouseLeave={onCardLeave}
        >
          <img
            className="parallax__layer parallax__layer--clouds"
            src={clouds}
          />
          <img
            className="parallax__layer parallax__layer--text"
            src={greenhouse}
          />
          <img className="parallax__layer parallax__layer--house" src={house} />
          <img
            className="parallax__layer parallax__layer--bottom"
            src={bottom}
          />
        </div>
      </div>
    </div>
  );
};

export { Page5 };
