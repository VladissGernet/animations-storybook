import React, { useRef, useEffect } from "react";
import * as d3 from "d3";
import anime from "animejs";

import "./svg-15.scss";

const Svg15 = () => {
  /*
    На основе массива с данными data нарисуем пять окружностей.
    Результат пока не видно, но вы можете увидеть его в инспекторе браузера.
  */
  const data = [58, 12, 78, 141, 38];
  const stats = useRef();
  let total = 0;

  for (let i = 0; i < data.length; i++) {
    total = total + data[i];
  }

  /*
    Прежде чем анимировать, исправим рендеринг так, чтобы самая большая фракция
    рендерилась первой. Отсортируем массив data.
  */

  const compareNumeric = (a, b) => {
    if (a < b) return 1;
    if (a == b) return 0;
    if (a > b) return -1;
  };

  data.sort(compareNumeric);

  const PARAMS = {
    r: 100,
    totalLength: 2 * Math.PI * 100, // длина окружности
    total: total, // сумма всех чисел в массиве data
  };

  useEffect(() => {
    /*
      Наполним окружности атрибутами также при помощи D3.js.

      Пока что добавим атрибуты, которые не надо вычислять: радиус, cx, cy, stroke-width.
    */
    d3.select(stats.current)
      .selectAll("circle")
      .data(data)
      .enter()
      .append("circle")
      .style("fill", "transparent")
      .attr("r", PARAMS.r)
      .attr("cx", 120)
      .attr("cy", 120)
      .attr("stroke-width", 40)
      /*
        Теперь добавим цвет. Он должен быть уникальным, поэтому зададим его при помощи RGB. Каждый из
        трёх параметров будем вычислять «на ходу» с помощью функции anime.random(). В RGB максимальное
        значение аргумента — 255.
      */
      .attr(
        "stroke",
        () =>
          `rgb(${anime.random(0, 255)}, ${anime.random(0, 255)}, ${anime.random(
            0,
            255
          )})`
      )
      /*
        Остались stroke-dashoffset и stroke-dasharray. Их значения равны длине окружности. Так как длина
        окружности будет использоваться много раз в коде, запишем её в PARAMS.

        Окружности пропали, так как мы выставили значения атрибутов stroke-dashoffset и stroke-dasharray.
        Но вы всё ещё можете видеть результат в инспекторе.
      */
      .attr("stroke-dashoffset", PARAMS.totalLength)
      .attr("stroke-dasharray", PARAMS.totalLength)
      /*
        Добавим data-атрибут с процентом фракции от общей длины окружности каждому элементу. Вычислим его по формуле:

        X = dataElement * 100 / total

        Где:

        X — значение data-атрибута; dataElement — текущий элемент массива data; total — сумма всех чисел в массиве data.

        Рендеринг готов.
      */
      .attr("data-fraction", (dataItem) => (100 * dataItem) / PARAMS.total);

    /*
      Начнём анимирование.

      Найдём получившиеся окружности и для каждой вычислим value — значение, на которое сдвигать контур. Цикл будем
      начинать от последнего элемента и двигаться к первому. Это нужно для того, чтобы счётчик, который мы
      добавим в следующем шаге, считал правильно. То есть от самой маленькой фракции.
      */

    const circles = stats.current.querySelectorAll("circle");

    /*
      Добавим счётчик previousCircleOffset, в который будем добавлять смещение предыдущих окружностей.
      Учтём это значение в вызове Anime.js.
    */
    let previousCircleOffset = 0;

    for (let i = circles.length - 1; i >= 0; i--) {
      const value = Math.ceil(
        PARAMS.totalLength -
          (PARAMS.totalLength / 100) * circles[i].dataset.fraction
      );

      anime({
        targets: circles[i],
        duration: 2500,
        easing: "easeInOutQuad",
        strokeDashoffset: [anime.setDashoffset, value - previousCircleOffset],
      });

      previousCircleOffset =
        previousCircleOffset +
        Math.ceil((PARAMS.totalLength / 100) * circles[i].dataset.fraction);

      console.log(previousCircleOffset);
    }
  }, []);

  return (
    <div className="svg-15">
      <div className="wrapper">
        <svg ref={stats} width="242" height="242" viewBox="0 0 242 242" />
      </div>
    </div>
  );
};

export { Svg15 };
