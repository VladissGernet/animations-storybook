import React from "react";

import "./block-9.scss";

const Block9 = () => {
  /*
    Чаще всего приходится генерировать диаграммы при помощи JavaScript, добавление большого количества
    данных вручную отнимает много времени. При создании SVG-элемента с помощью JS использовать привычный
    document.createElement не получится, так как этот метод создаёт HTML-элементы, а SVG — часть
    спецификации XML. Вместо него можно использовать
    document.createElementNS('http://www.w3.org/2000/svg', 'rect').
    NS означает namespace, то самое пространство имён, которое определяет, к какой спецификации
     принадлежит элемент.
  */
  return (
    <div className="block-9">
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
    </div>
  );
};

export { Block9 };
