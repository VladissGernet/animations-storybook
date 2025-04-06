import React, { useEffect, useRef } from "react";

import "./animation-5.scss";

import attention from "/src/assets/animation-5/attention.png";
import fence from "/src/assets/animation-5/fence.png";
import tree from "/src/assets/animation-5/tree.png";
import top from "/src/assets/animation-5/top.svg";
import bottom from "/src/assets/animation-5/bottom.svg";

const Animation5 = () => {
  const parallaxBox = useRef(null);

  useEffect(() => {
    const layers = parallaxBox.current.querySelectorAll(".parallax__layer");

    const parallax = (evt) => {
      //размер области просмотра
      const parallaxWidth = parallaxBox.current.offsetWidth;
      const parallaxHeight = parallaxBox.current.offsetHeight;
      // координаты центра экрана
      const coordX = evt.clientX - parallaxWidth / 2;
      const coordY = evt.clientY - parallaxHeight / 2;

      /*
        Чем дальше курсор движется к краю экрана, тем больше смещение. Смещать
        элементы будем при помощи трансформации сдвига по осям X и У. Большого
        количества знаков после запятой не нужно, хватит и двух.
      */

      layers.forEach((layer) => {
        const layerSpeed = layer.dataset.speed;
        const x = (coordX * layerSpeed).toFixed(2);
        const y = (coordY * layerSpeed).toFixed(2);
        layer.setAttribute("style", `transform: translate(${x}px, ${y}px);`);
      });
    };

    const stopParallax = () => {
      layers.forEach((layer) => {
        layer.removeAttribute("style");
      });
    };

    /*
      Далее с помощью JavaScript будем смещать каждый слой при движении мыши по экрану.
      В этом нам поможет событие mousemove, которое будем слушать на родителе параллакс-слоёв.
      А callback-функция parallax как раз будет содержать всё описанное выше.
    */

    parallaxBox.current.addEventListener("mousemove", parallax);

    /*
      Чтобы элементы возвращались в исходное состояние, когда курсор движется за пределами страницы,
      добавим ещё один слушатель события mouseout. В нём будем удалять инлайновые стили со смещением.
    */

    /*

      mousemove — наступает при перемещении курсора по элементу.

      mouseover — наступает, если пользователь наводит курсор на сам элемент либо его вложенные элементы.

      mouseout — наступает, если курсор «ушёл» за границы элемента.

      mouseleave — наступает, если курсор «ушёл» за пределы элемента.

      Последние два события очень похожи между собой. Разница лишь в том, что первое событие не всплывает,
      а второе — всплывает. Об этом важно помнить, т. к. иногда обработчики могут «наслаиваться» друг на друга,
      срабатывать одновременно и вызывать баги (дрожание параллакса). Использование mouseleave является
      более надежным способом.

      В отличие от остальных, mousemove срабатывает каждый раз, когда курсор движется, оставаясь в пределах элемента.
      */
    parallaxBox.current.addEventListener("mouseleave", stopParallax);
  }, []);

  return (
    <div className="animation-5">
      <section className="error parallax" ref={parallaxBox}>
        <h2 className="error__title">Ошибка!</h2>
        <p className="error__description">
          Этой страницы не&nbsp;существует. Пожалуйста, перейдите на&nbsp;
          <a href="#">главную страницу</a> и&nbsp;найдите
          то,&nbsp;что&nbsp;искали.
        </p>
        <div className="parallax__layer parallax__layer--1" data-speed="0.02">
          <img className="parallax__image" src={top} alt="top wave" />
        </div>
        <div className="parallax__layer parallax__layer--2" data-speed="0.02">
          <img className="parallax__image" src={bottom} alt="bottom wave" />
        </div>
        <div className="parallax__layer parallax__layer--3" data-speed="0.04">
          <img className="parallax__image" src={attention} alt="attention" />
        </div>
        <div className="parallax__layer parallax__layer--4" data-speed="0.10">
          <img className="parallax__image" src={fence} alt="fence" />
        </div>
        <div className="parallax__layer parallax__layer--5" data-speed="0.10">
          <img className="parallax__image" src={tree} alt="tree" />
        </div>
      </section>
    </div>
  );
};

export { Animation5 };
