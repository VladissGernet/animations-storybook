import React, { useRef, useEffect } from "react";
import * as d3 from "d3";
import anime from "animejs";

import "./block-9.scss";

const Block9 = () => {
  // Сортировка для круоговй диаграммы.
  const compareNumeric = (a, b) => {
    if (a < b) return 1;
    if (a == b) return 0;
    if (a > b) return -1;
  };
  /*
    Чаще всего приходится генерировать диаграммы при помощи JavaScript, добавление большого количества
    данных вручную отнимает много времени. При создании SVG-элемента с помощью JS использовать привычный
    document.createElement не получится, так как этот метод создаёт HTML-элементы, а SVG — часть
    спецификации XML. Вместо него можно использовать
    document.createElementNS('http://www.w3.org/2000/svg', 'rect').
    NS означает namespace, то самое пространство имён, которое определяет, к какой спецификации
     принадлежит элемент.
  */

  //  Пример использования D3.
  const svgRef = useRef();
  const svgRef2 = useRef();
  const data = [
    {
      num: 259,
      color: "#caf880",
    },
    {
      num: 110,
      color: "#33a7b6",
    },
    {
      num: 140,
      color: "#c751c0 ",
    },
    {
      num: 63,
      color: "#4158d0  ",
    },
    {
      num: 125,
      color: "#2874fc   ",
    },
  ];
  /*
    select цепляется за целевой элемент, внутри которого будет создана диаграмма. Это может быть любой элемент, необязательно SVG.
    selectAll получает элемент, который является столбцом и ещё НЕ создан на странице. Это заготовка.
    data получает массив с данными и связывает («под капотом») пустой span с каждым числом массива.
    enter() означает, что после этого начнётся отображение диаграммы, а код, который следует ниже, будет выполнен столько раз, сколько элементов в массиве.
  */
  useEffect(() => {
    // Столбчатая диаграмма.
    const svg = d3.select(svgRef.current);
    svg
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .style("fill", (data) => data.color)
      .attr("height", (data) => data.num)
      .attr("width", 95)
      .attr("x", (data, index) => 95 * index);

    // =============================================================================================================================================

    // Круговая диаграмма
    const svg2 = d3.select(svgRef2.current);

    /*
      Далее займёмся расчётами: узнаем, какой окружности принадлежит каждая часть круга. После этого
      мы сможем показать именно эту часть.

      Найдём длину всей окружности по уже знакомой формуле:

      L = 2πR

      Получаем 628. После узнаем сумму всех чисел в массиве с данными. Можно воспользоваться циклом.

      Теперь, мы знаем, что 100% длины окружности — это 628. 100% круга так относится к total, как X относится
      к элементу массива.

      X — это процент закрашенной области. Например, для первого числа в массиве формула будет такой:

      100 * 45 = total * X

      Total у нас равен 313.

      X = 4500 / 313

      При работе с графиками вам часто будет необходима формула нахождения X в уравнении с пропорцией.
      Вспомнить это поможет статья. Вы также найдёте её в дополнительных материалах к разделу.
      https://math-prosto.ru/ru/pages/linear_equations/solving_equations_with_proportions/
      Решение уравнений с пропорцией или правило креста.

      Выходит, что 14,3% от длины окружности занимает первое число в массиве. По аналогии будем делать так с каждым
      элементом массива и записывать процент в атрибут data-fraction.

      Добавим цветов. Каждый цвет должен быть уникальным, иначе может случиться так, что рядом будет две закрашенные
      фракции с одинаковым цветом. Поэтому будем добавлять цвет в формате rgba, и каждое значение генерировать случайным образом.

      Напомним, что, если вы используете Anime.js, то для получения случайного числа можно использовать встроенный
      метод anime.random().
    */

    const dataCircleGraph = [45, 20, 59, 111, 78];
    dataCircleGraph.sort(compareNumeric);

    let totalLength = 0;

    for (let i = 0; i < dataCircleGraph.length; i++) {
      totalLength = totalLength + dataCircleGraph[i];
    }

    svg2
      .selectAll("circle")
      .data(dataCircleGraph)
      .enter()
      .append("circle")
      .style("fill", "transparent")
      .attr("r", 100)
      .attr("cx", 120)
      .attr("cy", 120)
      .attr(
        "stroke",
        () =>
          `rgb(${anime.random(0, 255)}, ${anime.random(0, 255)}, ${anime.random(
            0,
            255
          )})`
      )
      .attr("stroke-width", 40)
      .attr("data-fraction", (dataCircleGraph) =>
        Math.ceil((100 * dataCircleGraph) / totalLength)
      )
      .attr("stroke-dashoffset", totalLength)
      .attr("stroke-dasharray", totalLength);

    const circles = svgRef2.current.querySelectorAll("circle");
    let previousCircleOffset = 0;
    // for (let i = circles.length - 1; i >= 0; i--) {
    //   /*
    //     Вычисляем необходимое значение для атрибута stroke-dashoffset.

    //     X = totalLength / 100 * data-fraction

    //     Где totalLength — это длина окружности.
    //   */
    //   const fractionLength = Math.floor(
    //     (totalLength / 100) * circles[i].dataset.fraction
    //   );

    //   const value = totalLength - fractionLength;
    //   anime({
    //     targets: circles[i],
    //     duration: 2500,
    //     easing: "easeInOutQuad",
    //     strokeDashoffset: [anime.setDashoffset, value - previousCircleOffset],
    //   });
    //   previousCircleOffset = previousCircleOffset + fractionLength;
    // }
    for (let i = circles.length - 1; i >= 0; i--) {
      const fractionLength = Math.floor(
        (totalLength / 100) * circles[i].dataset.fraction
      );
      const value = totalLength - fractionLength;
      anime({
        targets: circles[i],
        duration: 2500,
        easing: "easeInOutQuad",
        strokeDashoffset: [anime.setDashoffset, value - previousCircleOffset],
      });

      previousCircleOffset = previousCircleOffset + fractionLength;
    }
  }, []);
  return (
    <div className="block-9">
      <h4>Диаграммы из библиотеки D3.js</h4>
      {/* Круговая диагармма */}
      <svg ref={svgRef2} width="242" height="242" viewBox="0 0 242 242" />
      {/* Столбчатая диаграмма */}
      <svg
        ref={svgRef}
        width="500"
        height="400"
        viewBox="0 0 500 400"
        transform="scale(1,-1)"
      />
      <hr />
      <h4>Диаграммы без библиотек.</h4>
      <p>Столбчатая диаграмма</p>
      <svg
        width="500"
        height="400"
        viewBox="0 0 500 400"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="translate(0,400)">
          {/*
            Значение 400 в первой трансформации — это высота картинки. Мы перевернули
            систему координат, и теперь график выглядит правильно.
          */}
          <g transform="scale(1,-1)">
            {/*
              Переворачивает картинку.
             */}
            <rect x="10" y="0" width="45" height="90" fill="coral" />
            <rect x="60" y="0" width="45" height="120" fill="crimson" />
            <rect x="110" y="0" width="45" height="190" fill="coral" />
            <rect x="160" y="0" width="45" height="30" fill="crimson" />
            <rect x="210" y="0" width="45" height="300" fill="coral" />
            <rect x="260" y="0" width="45" height="220" fill="crimson" />
            <rect x="310" y="0" width="45" height="90" fill="coral" />
            <rect x="360" y="0" width="45" height="130" fill="crimson" />
            <rect x="410" y="0" width="45" height="40" fill="crimson" />
            <rect x="460" y="0" width="45" height="180" fill="crimson" />
          </g>
        </g>
      </svg>
      <hr />
      <p>Круговая диаграмма</p>
      {/*
        Здесь потребуется управлять обводкой через свойства stroke-dasharray и stroke-width.

        Алгоритм построения диаграммы:

        1. Задаём ширину и высоту изображению.
        2. Добавляем border-radius: 50% и фон.
        3. Внутри рисуем окружность.
        4. Задаём окружности обводку толщиной равной её диаметру.
        5. Сдвигаем на необходимое расстояние обводку с помощью stroke-dasharray.

        Зачем скруглять элемент SVG, если у нас уже есть окружность внутри и можно взаимодействовать только с ней?

        Дело в том, что обводка рисуется не от центра окружности, а от её внешней стороны. И если задать 10px
        толщину, то 5px обводки будет с внешней стороны окружности, а 5px — с внутренней. Результирующий круг
        получится намного больше, чем исходные размеры диаграммы.
       */}
      <svg
        className="circle-graph"
        width="300"
        height="300"
        viewBox="0 0 300 300"
      >
        <circle
          r="150"
          cx="150"
          cy="150"
          stroke="#ff7f50"
          fill="#f1f1f1"
          /*
            Теперь закрасим её часть. Скажем, 40%. Для этого сначала вычислим, сколько это в пикселях, а затем зададим
            вычисленное значение в атрибут stroke-dasharray следующим образом:

            stroke-dasharray: <вычисленное значение> <длина окружности>

            2πR * 40 / 100 — так выглядит формула, где:

            R — радиус;
            π — число Пи;
            40 — процент закрашенной области.
            Получается 377.
          */
          strokeWidth="300"
          strokeDasharray="377 942"
        />
      </svg>
      <hr />
    </div>
  );
};

export { Block9 };
