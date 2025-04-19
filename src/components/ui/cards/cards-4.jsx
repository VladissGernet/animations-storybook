import React, { useRef, useEffect } from "react";

import "./cards-4.scss";
import image from "/src/assets/cards-4/image-1.jpg";

const CardsList4 = () => {
  const itemsRef = useRef([]);

  // Очистка массива перед рендером, чтобы не накапливались ссылки.
  itemsRef.current = [];

  const setItemRef = (element) => {
    if (element && !itemsRef.current.includes(element)) {
      itemsRef.current.push(element);
    }
  };

  // Параметр для интенсивности изменения трансформации.
  const SPEED = 0.05;
  // Задержка для оптимизации.
  const THROTTLE_DELAY = 50;

  // Функция throttle будет принимать 2 аргумента:
  // - callee, функция, которую надо вызывать;
  // - timeout, интервал в мс, с которым следует пропускать вызовы.
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

  const onMouseMove = throttle((evt) => {
    const box = evt.target.closest(".item-box");
    if (!box) return;

    const a = -(evt.offsetY - box.offsetHeight / 2) * SPEED;
    const b = (evt.offsetX - box.offsetWidth / 2) * SPEED;

    box.setAttribute("style", `transform: rotateX(${a}deg) rotateY(${b}deg);`);
  }, THROTTLE_DELAY);

  const onCardOut = (evt) => {
    evt.target.querySelector(".item-box").removeAttribute("style");
  };

  useEffect(() => {
    itemsRef.current.forEach((item) => {
      item.addEventListener("mousemove", onMouseMove);
      item.addEventListener("mouseleave", onCardOut);
    });
  }, []);

  return (
    <div className="cards-4">
      <div className="wrap">
        <div className="item" ref={setItemRef}>
          <div className="item-box">
            <img className="item-img" src={image} alt="picture" />
          </div>
        </div>

        <div className="item" ref={setItemRef}>
          <div className="item-box">
            <img className="item-img" src={image} alt="picture" />
          </div>
        </div>

        <div className="item" ref={setItemRef}>
          <div className="item-box">
            <img className="item-img" src={image} alt="picture" />
          </div>
        </div>
      </div>
    </div>
  );
};

export { CardsList4 };
