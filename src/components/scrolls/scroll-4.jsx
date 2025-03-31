import React, { useEffect, useRef } from "react";

import "./scroll-4.scss";

const isPartiallyVisible = (element, screenHeight) => {
  // Когда верхняя координата плюс высота блока больше или
  // равны нулю, элемент полностью или частично виден сверху
  // страницы. Когда высота элемента плюс высота экрана
  // больше его нижней координаты, блок частично или полностью
  // виден снизу экрана.

  const elementBoundary = element.getBoundingClientRect();
  const top = elementBoundary.top;
  const bottom = elementBoundary.bottom;
  const height = elementBoundary.height;

  return top + height >= 0 && height + screenHeight > bottom;
};

const isFullyVisible = (element, screenHeight) => {
  const elementBoundary = element.getBoundingClientRect();
  const top = elementBoundary.top;
  const bottom = elementBoundary.bottom;

  return top >= 0 && bottom <= screenHeight;
};

const Scroll4 = () => {
  const listItems = useRef(null);
  const firstBox = useRef(null);
  const secondBox = useRef(null);

  useEffect(() => {
    //  Найдём высоту окна, будем её использовать далее для отслеживания положения элементов.
    const screenHeight = document.documentElement.clientHeight;
    const listItemsCurrent = listItems.current.children;

    const onScroll = () => {
      for (let i = 0; i < listItemsCurrent.length; i++) {
        const listItem = listItemsCurrent[i];

        if (isPartiallyVisible(listItem, screenHeight)) {
          listItem.classList.add("list-item--active");
        } else {
          listItem.classList.remove("list-item--active");
        }
      }

      if (isPartiallyVisible(firstBox.current, screenHeight)) {
        firstBox.current.classList.add("box-1--active");
      }

      if (isFullyVisible(secondBox.current, screenHeight)) {
        secondBox.current.classList.add("box-2--active");
      } else {
        secondBox.current.classList.remove("box-2--active");
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  });

  return (
    <div className="scroll-4">
      <header className="header">
        <h1>Листай ниже</h1>
      </header>

      <div className="main-content">
        <ol className="list" ref={listItems}>
          <li className="list-item">В каждом маленьком ребёнке</li>
          <li className="list-item">И мальчишке и девчонке,</li>
          <li className="list-item">Есть по двести грамм взрывчатки</li>
          <li className="list-item">Или даже полкило!</li>
          <li className="list-item">Должен он бежать и прыгать,</li>
          <li className="list-item">Всё хватать, ногами дрыгать,</li>
          <li className="list-item">А иначе он взорвется, трах-бабах!</li>
          <li className="list-item">И нет его!</li>
        </ol>

        <p className="box-1" ref={firstBox}>
          Каждый новенький ребёнок
          <br />
          Вылезает из пеленок,
          <br />
          И теряется повсюду,
          <br />И находится везде!
        </p>

        <p className="box-2" ref={secondBox}>
          Он всегда куда-то мчится, <br />
          Он ужасно огорчится,
          <br />
          Если что-нибудь на свете
          <br />
          Вдруг случится без него!
        </p>
      </div>
    </div>
  );
};

export { Scroll4 };

/*
Код из примера.

'use strict'
const screenHeight = document.documentElement.clientHeight;
const listItems = document.querySelectorAll(".list-item");
const firstBox = document.querySelector(".box-1");
const secondBox = document.querySelector(".box-2");

function scrolling() {
  for (var i = 0; i < listItems.length; i++) {
    const listItem = listItems[i];

    if (isPartiallyVisible(listItem)) {
      listItem.classList.add("list-item--active");
    } else {
      listItem.classList.remove("list-item--active");
    }
  }

  if (isPartiallyVisible(firstBox)) {
    firstBox.classList.add("box-1--active");
  }

  if (isFullyVisible(secondBox)) {
    secondBox.classList.add("box-2--active");
  } else {
    secondBox.classList.remove("box-2--active");
  }
}

function isPartiallyVisible(element) {
  const elementBoundary = element.getBoundingClientRect();
  const top = elementBoundary.top;
  const bottom = elementBoundary.bottom;
  const height = elementBoundary.height;

  return (top + height >= 0) && (height + screenHeight > bottom);
}

function isFullyVisible(element) {
  const elementBoundary = element.getBoundingClientRect();
  const top = elementBoundary.top;
  const bottom = elementBoundary.bottom;

  return (top >= 0) && (bottom <= screenHeight);
}

window.addEventListener("scroll", scrolling);

*/
