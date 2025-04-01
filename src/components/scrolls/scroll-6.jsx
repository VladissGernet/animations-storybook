import React, { useEffect, useRef } from "react";

import "./scroll-6.scss";

const Scroll6 = () => {
  const colorStep = 2;
  let colorResultHSL = 53;
  let currentScroll = 0;
  const page = useRef(null);

  const onScroll = () => {
    let scrollTop = window.scrollY;

    /*
      Вычисляется разница между текущей прокруткой и предыдущей (delta),
      чтобы определить направление прокрутки (вниз или вверх).
    */
    const delta = scrollTop - currentScroll;

    if (delta > 0) {
      colorResultHSL += colorStep;
      if (colorResultHSL >= 360) {
        colorResultHSL = 0;
      }
    } else {
      /*
        Если пользователь прокручивает страницу вверх (delta <= 0), проверяется,
        находится ли прокрутка в верхней точке (scrollTop === 0). Если да, то цвет
        устанавливается обратно на начальную точку (жёлтый, 53 градуса). Иначе
        уменьшается значение colorResultHSL на величину colorStep.Если значение
        оттенка опускается ниже 0, оно автоматически возвращается к 360 градусам,
        чтобы продолжать цикл по цветовому кругу.
      */
      if (scrollTop === 0) {
        colorResultHSL = 53;
      } else {
        if (scrollTop === 0) {
          colorResultHSL = 53;
        } else {
          colorResultHSL = colorResultHSL - colorStep;
        }

        if (colorResultHSL <= 0) {
          colorResultHSL = 360;
        }
      }
    }

    page.current.style.backgroundColor = `hsl(${colorResultHSL}, 98%, 65%)`;

    // Текущее значение прокрутки сохраняется для следующего вызова функции.
    currentScroll = scrollTop;
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="scroll-6" ref={page}>
      <header className="header">
        <h1>Листай ниже</h1>
        <p>Без зависимости от каких-либо элементов</p>
      </header>

      <div className="main-content">
        <ol className="list">
          <li>Nam sagittis est non enim ultrices elementum. </li>
          <li>Sed id ligula sed mi tempor ornare.</li>
          <li>
            Aenean feugiat risus eget sagittis volutpat. Proin quis orci a metus
            lacinia auctor eget id nisi.
          </li>
          <li>Donec pulvinar nunc feugiat semper consequat.</li>
          <li>
            Etiam cursus justo eget libero gravida, nec faucibus mauris posuere.
          </li>
          <li>In nec sem id libero egestas cursus vel a urna.</li>
          <li>
            Fusce pulvinar arcu eu lobortis egestas. Maecenas eleifend felis ut
            urna consectetur, et pellentesque mi molestie.
          </li>
          <li>Aliquam ut felis venenatis, dapibus ante non, gravida nulla.</li>
          <li>
            Donec consectetur quam in urna commodo, sed aliquet metus vehicula.
          </li>
          <li>
            Mauris eget est sit amet felis eleifend sagittis non id nulla.
          </li>
        </ol>

        <p className="box-1">
          Phasellus tortor nisl, dapibus at posuere sed, tempor in massa.
          Pellentesque eu sodales orci, finibus congue libero. Mauris molestie
          bibendum posuere.
        </p>

        <p>
          Nunc blandit varius sapien quis ultrices. Vestibulum et consequat
          augue. Pellentesque et maximus nisl, sit amet dictum ante.
        </p>

        <p className="box-2">
          Nullam magna augue, consequat eu augue ut, volutpat fringilla est. Ut
          commodo ac magna vulputate dictum.
        </p>
      </div>
    </div>
  );
};

export { Scroll6 };

/*
Код из курса.

'use strict'
const colorStep = 2;
let colorResultHSL = 53;
let currentScroll = 0;

function scrolling() {
  let scrollTop = window.scrollY;
  const delta = scrollTop - currentScroll;

  if (delta > 0) {
    colorResultHSL = colorResultHSL + colorStep;
    if (colorResultHSL >=360) {
      colorResultHSL = 0;
    }
  } else {
      if (scrollTop === 0) {
        colorResultHSL = 53
      } else {
        colorResultHSL = colorResultHSL - colorStep;
      }

    if (colorResultHSL <= 0) {
      colorResultHSL = 360;
    }
  }

  document.body.setAttribute('style', `background-color: hsl(${colorResultHSL}deg 98% 65%);`);
  currentScroll = scrollTop;
}

window.addEventListener("scroll", scrolling);

*/
