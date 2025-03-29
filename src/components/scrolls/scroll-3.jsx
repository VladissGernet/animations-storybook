import React, { useEffect, useRef } from "react";

import "./scroll-3.scss";

const Scroll3 = () => {
  const box = useRef(null);
  const result = useRef(null);

  const onScroll = () => {
    const boxTop = box.current.getBoundingClientRect().top;
    const boxBottom = box.current.getBoundingClientRect().bottom;
    const screenHeight = document.documentElement.clientHeight;

    if (boxTop >= screenHeight) {
      result.current.textContent = "элемент скрыт внизу";
    }

    if (boxTop >= 0 && boxBottom <= screenHeight) {
      result.current.textContent = "элемент виден полностью";
    }

    if (boxTop < screenHeight && boxBottom > screenHeight) {
      result.current.textContent =
        "элемент виден частично верхней частью снизу экрана";
    }

    if (boxBottom > 0 && boxTop < 0) {
      result.current.textContent =
        "элемент виден частично нижней частью наверху экрана";
    }

    if (boxBottom < 0) {
      result.current.textContent = "элемент скрыт наверху";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="scroll-3">
      <main>
        <div className="result" ref={result}>
          начни скроллить
        </div>

        <div className="block">Там ниже что-то есть :)</div>
        <div className="box" ref={box}>
          Найди блок с getBoundingClientRect
        </div>
        <div className="block">И еще немного пролистать</div>
      </main>
    </div>
  );
};

export { Scroll3 };

// Код из примера.
// const box = document.querySelector(".box");
// const result = document.querySelector(".result");

// window.addEventListener("scroll", function () {
//   const boxTop = box.getBoundingClientRect().top;
//   const boxBottom = box.getBoundingClientRect().bottom;
//   const screenHeight = document.documentElement.clientHeight;

//   if (boxTop >= screenHeight) {
//     result.textContent = "элемент скрыт внизу";
//   }

//   if (boxTop >= 0 && boxBottom <= screenHeight) {
//     result.textContent = "элемент виден полностью";
//   }

//   if (boxTop < screenHeight && boxBottom > screenHeight) {
//     result.textContent = "элемент виден частично верхней частью снизу экрана";
//   }

//   if (boxBottom > 0 && boxTop < 0) {
//     result.textContent = "элемент виден частично нижней частью наверху экрана";
//   }

//   if (boxBottom < 0) {
//     result.textContent = "элемент скрыт наверху";
//   }
// });
