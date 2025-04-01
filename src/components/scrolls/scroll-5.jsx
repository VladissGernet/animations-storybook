import React, { useRef, useEffect } from "react";

import "./scroll-5.scss";

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

const Scroll5 = () => {
  const firstBox = useRef(null);
  const secondBox = useRef(null);
  const page = useRef(null);

  useEffect(() => {
    const screenHeight = document.documentElement.clientHeight;

    const onScroll = () => {
      if (isPartiallyVisible(firstBox.current, screenHeight)) {
        page.current.classList.add("color-one");
        page.current.classList.remove("color-two");
      } else {
        page.current.classList.remove("color-one");
        page.current.classList.remove("color-two");
      }

      if (isFullyVisible(secondBox.current, screenHeight)) {
        page.current.classList.add("color-two");
        page.current.classList.remove("color-one");
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <div className="scroll-5" ref={page}>
      <header className="header">
        <h1>Листай ниже</h1>
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

        <p className="box-1" ref={firstBox}>
          Меняем цвет, когда частично видим этот блок <br />
          Mauris eget est sit amet felis eleifend sagittis non id nulla. Mauris
          eget est sit amet felis eleifend sagittis non id nulla. Mauris eget
          est sit amet felis eleifend sagittis non id nulla. Mauris eget est sit
          amet felis eleifend sagittis non id nulla. Mauris eget est sit amet
          felis eleifend sagittis non id nulla. Mauris eget est sit amet felis
          eleifend sagittis non id nulla. Mauris eget est sit amet felis
          eleifend sagittis non id nulla. Mauris eget est sit amet felis
          eleifend sagittis non id nulla. Mauris eget est sit amet felis
          eleifend sagittis non id nulla. Mauris eget est sit amet felis
          eleifend sagittis non id nulla. Mauris eget est sit amet felis
          eleifend sagittis non id nulla. Mauris eget est sit amet felis
          eleifend sagittis non id nulla.
        </p>

        <p>
          Nunc blandit varius sapien quis ultrices. Vestibulum et consequat
          augue. Pellentesque et maximus nisl, sit amet dictum ante.
        </p>

        <p className="box-2" ref={secondBox}>
          Меняем цвет, когда полностью видим этот блок Nullam magna augue,
          consequat eu augue ut, volutpat fringilla est. Ut commodo ac magna
          vulputate dictum.
        </p>
      </div>
    </div>
  );
};

export { Scroll5 };
