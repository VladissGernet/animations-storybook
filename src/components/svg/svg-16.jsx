import React, { useRef, useEffect } from "react";
import anime from "animejs";

import "./svg-16.scss";

const Svg16 = () => {
  const data = [
    {
      label: 2008,
      count: 30.4,
    },
    {
      label: 2009,
      count: 39.6,
    },
    {
      label: 2010,
      count: 44.5,
    },
    {
      label: 2011,
      count: 52.8,
    },
    {
      label: 2012,
      count: 63.6,
    },
    {
      label: 2013,
      count: 68.4,
    },
    {
      label: 2014,
      count: 80.3,
    },
    {
      label: 2015,
      count: 85.2,
    },
    {
      label: 2016,
      count: 87.6,
    },
    {
      label: 2017,
      count: 90.9,
    },
    {
      label: 2018,
      count: 95.1,
    },
  ];
  const stats = useRef(null);
  const rectsWrapper = useRef(null);
  const labelsWrapper = useRef(null);
  let rects, labels;

  /*
    Прежде чем вычислить высоту, давайте найдём самое большое значение из массива с данными.
    Отсортируем массив в порядке возрастания поля count. И с помощью метода at(-1) заберём значение
     последнего элемента, оно же самое большое.

    Можно найти последний элемент и с помощью data[data.length - 1], мы просто используем более
    короткий способ.
  */

  const compareNumeric = (a, b) => {
    if (a.count > b.count) return 1;
    if (a.count == b.count) return 0;
    if (a.count < b.count) return -1;
  };

  data.sort(compareNumeric);
  const maxValue = data.at(-1).count;

  useEffect(() => {
    const PARAMS = {
      barWidth: 50,
      svgHeight: stats.current.getAttribute("height"),
      labelXOffset: 7,
    };

    const renderStats = () => {
      data.forEach((item, index) => {
        // Рендер текстовых узлов.

        const label = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "text"
        );
        label.textContent = item.label;
        label.setAttribute("y", PARAMS.svgHeight);
        label.setAttribute("x", PARAMS.labelXOffset + index * 80);

        labelsWrapper.current.appendChild(label);

        // Вычисляем высоту, которую можно использовать для отрисовки столбцов. Для этого нужно вычесть высоту текстовых узлов.
        const labelsHeight =
          labelsWrapper.current.getBoundingClientRect().height;
        PARAMS.barsAvailableHeight = PARAMS.svgHeight - labelsHeight;

        // Рендер столбцов.
        /*
          Считаем высоту. Сначала посчитаем, сколько в процентах от самого высокого столбца. Для этого нужно значение из массива умножить на 100 и разделить на максимальное значение из массива.

          fraction = value * 100 / maxValue
        */
        const fraction = (100 * item.count) / maxValue;
        const barHeight = PARAMS.barsAvailableHeight * (fraction / 100);

        const rect = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "rect"
        );
        rect.setAttribute("x", index * 80);
        rect.setAttribute("y", Number(PARAMS.svgHeight) + Number(labelsHeight));
        rect.setAttribute("width", PARAMS.barWidth);
        rect.setAttribute("height", barHeight);
        rect.setAttribute("fill", "crimson");

        rectsWrapper.current.appendChild(rect);
      });

      labels = labelsWrapper.current.querySelectorAll("text");
      rects = rectsWrapper.current.querySelectorAll("rect");
    };

    const animateStats = () => {
      const timeline = anime.timeline({
        duration: 1000,
        easing: "easeInOutQuad",
      });

      timeline.add({
        targets: rects,
        scaleY: [0, 1],
        opacity: [0, 1],
        delay: anime.stagger(100),
      });

      timeline.add({
        targets: labels,
        translateY: [-20, 0],
        opacity: [0, 1],
        delay: anime.stagger(100),
      });
    };

    renderStats();
    animateStats();
  }, []);

  return (
    <div className="svg-16">
      <div className="wrapper">
        <svg
          ref={stats}
          className="stats"
          width="700"
          height="400"
          viewBox="0 0 900 286"
        >
          <g className="rects-wrapper" transform="translate(0, 800)">
            <g ref={rectsWrapper} transform="scale(1, -1)" />
          </g>
          <g ref={labelsWrapper} className="labels"></g>
        </svg>
      </div>
    </div>
  );
};

export { Svg16 };
