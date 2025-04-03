import React, { useEffect } from "react";

import "./scroll-10.scss";

import image1 from "/src/assets/scroll-10/item-1.png";
import image2 from "/src/assets/scroll-10/item-2.png";
import image3 from "/src/assets/scroll-10/item-3.png";
import image4 from "/src/assets/scroll-10/item-4.png";
import image5 from "/src/assets/scroll-10/item-5.png";
import image6 from "/src/assets/scroll-10/item-6.png";
import image7 from "/src/assets/scroll-10/item-7.png";
import image8 from "/src/assets/scroll-10/item-8.png";
import image9 from "/src/assets/scroll-10/item-9.png";
import image10 from "/src/assets/scroll-10/item-10.png";
import image11 from "/src/assets/scroll-10/item-11.png";
import image12 from "/src/assets/scroll-10/item-12.png";

const Scroll10 = () => {
  useEffect(() => {
    ("use strict");
    const section = document.querySelector(".scroller");
    const list = section.querySelector(".scroller__list");
    const progressBar = section.querySelector(".scroller__progress-bar");

    /*
      Найдём элементы и запишем в переменные. Найдём ширину экрана sectionWidth
      и ширину прокручиваемых элементов listWidth.
    */
    const sectionWidth = section.clientWidth;
    const listWidth = list.scrollWidth;

    /*
      Введём дополнительные переменные: progress для значения value индикатора выполнения,
      dist для хранения значения смещения элементов, которое будем подставлять в translateX(),
      и шаг прокрутки step в 50px.
    */
    let progress = 0,
      dist = 0;
    const step = 50;

    /*
      Сразу же рассчитаем максимальное значение прокрутки maxDist с запасом на один шаг,
      чтобы последний элемент был немного сдвинут от края контейнера, а не прижат к нему вплотную.
    */
    const maxDist = listWidth - sectionWidth + step;

    progressBar.value = progress;

    section.addEventListener("wheel", wheelHandler);

    function wheelHandler(evt) {
      /*
        Для секции добавим слушатель события прокрутки колеса мыши wheel, в колбэк wheelHandler
        передадим событие evt, выключим поведение по умолчанию, чтобы не происходило событие scroll.
      */
      evt.preventDefault();

      /*
        Так как весь блок с элементами будет смещаться налево, значение dist должно быть меньше либо
        равно нулю. Больше нуля значение быть не должно, так как это означает, что первый элемент
        сместится направо. Поэтому в условии учтём ещё несколько факторов:

        (evt.deltaY > 0) означает, что было сделано движение колеса мыши;
        (listWidth + dist > sectionWidth - step * 2) означает, что мы не прокрутили элементы слишком
        далеко налево.

        Внутри функции будем в зависимости от направления прокрутки evt.deltaY увеличивать или
        уменьшать dist на шаг step.
      */

      if (
        evt.deltaY > 0 &&
        dist <= 0 &&
        listWidth + dist > sectionWidth - step * 2
      ) {
        dist = dist - step;
      } else if (dist < 0) {
        dist = dist + step;
      }

      list.setAttribute("style", `transform: translateX(${dist}px)`);
      progress = ((Math.abs(dist) * 100) / maxDist).toFixed(0);

      progressBar.value = progress;
    }

    return () => {
      section.removeEventListener("wheel", wheelHandler);
    };
  }, []);
  return (
    <div className="scroll-10">
      <section className="scroller">
        <p>Наведи мышку и начни скролить</p>
        <div className="scroller__wrap">
          <ul className="scroller__list">
            <li className="scroller__item">
              <img className="scroller__img" src={image1} alt="1" />
            </li>
            <li className="scroller__item">
              <img className="scroller__img" src={image2} alt="2" />
            </li>
            <li className="scroller__item">
              <img className="scroller__img" src={image3} alt="3" />
            </li>
            <li className="scroller__item">
              <img className="scroller__img" src={image4} alt="4" />
            </li>
            <li className="scroller__item">
              <img className="scroller__img" src={image5} alt="5" />
            </li>
            <li className="scroller__item">
              <img className="scroller__img" src={image6} alt="6" />
            </li>
            <li className="scroller__item">
              <img className="scroller__img" src={image7} alt="7" />
            </li>
            <li className="scroller__item">
              <img className="scroller__img" src={image8} alt="8" />
            </li>
            <li className="scroller__item">
              <img className="scroller__img" src={image9} alt="9" />
            </li>
            <li className="scroller__item">
              <img className="scroller__img" src={image10} alt="10" />
            </li>
            <li className="scroller__item">
              <img className="scroller__img" src={image11} alt="11" />
            </li>
            <li className="scroller__item">
              <img className="scroller__img" src={image12} alt="12" />
            </li>
          </ul>
        </div>

        <div className="scroller__progress">
          <progress className="scroller__progress-bar" max="100" value="0" />
        </div>
      </section>
    </div>
  );
};

export { Scroll10 };
