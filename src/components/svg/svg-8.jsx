import React, { useRef, useEffect } from "react";
import anime from "animejs";

import "./svg-8.scss";

const Svg8 = () => {
  const svgElement = useRef(null);

  // Что нам нужно знать для генерации контуров, чтобы они заполнили весь вьюпорт:
  const PARAMS = {
    windowHeight: window.innerHeight,
    windowWidth: window.innerWidth,
    // Сразу можно вычислить количество контуров, разделив ширину вьюпорта на значение шага между контурами.
    quantity: Math.ceil(window.innerWidth / 15),
    curvesQuantity: Math.ceil(window.innerHeight / 160),
  };

  const COLORS = ["#F66C41", "#00E0FF", "#D9AB36", "#4EF483", "#7C4EFF"];

  /*
    Добавим вспомогательную функцию для получения случайного элемента в массиве.
    В Anime.js есть встроенный механизм anime.random(), который вернёт случайный индекс элемента.
  */
  const getRandomElement = (array) => array[anime.random(0, array.length - 1)];

  useEffect(() => {
    /*
      Используя вычисленные нами ширину и высоту вьюпорта, зададим SVG-элементу вьюбокс.
      Здесь и далее мы будем использовать интерполяцию для более удобной работы со строками и переменными.
    */
    svgElement.current.setAttribute(
      "viewBox",
      `0 0 ${PARAMS.windowWidth}, ${PARAMS.windowHeight}`
    );

    // Генерация контуров.
    for (let i = 0; i < PARAMS.quantity; i++) {
      const firstCordX = i * anime.random(25, 40);
      const strokeColor = getRandomElement(COLORS);
      /*
        Вычислим, сколько витков поместится во вьюпорт, округлив число вверх. Разделим высоту вьюпорта на 160.
        И с помощью цикла for соберём строку с нужным количеством координат.
      */
      let curvesPoints = "";
      for (let j = 0; j < PARAMS.curvesQuantity; j++) {
        curvesPoints += "q -40 40 0 80 q 40 40 0 80";
      }

      const pathTemplate = `<path d="M${firstCordX} 0 ${curvesPoints}" stroke="${strokeColor}"></path>`;
      svgElement.current.insertAdjacentHTML("beforeend", pathTemplate);

      anime({
        targets: svgElement.current.querySelector("path:last-child"),
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutSine",
        duration: 5000,
        /*
          Обратите внимание на свойство delay. Благодаря anime.random() мы можем получить
          случайное время задержки анимации из диапазона.
        */
        delay: anime.random(500, 1500),
      });
    }
  }, []);

  return (
    <div className="svg-8">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        ref={svgElement}
      />
    </div>
  );
};

export { Svg8 };
