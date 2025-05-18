import React, { useEffect, useRef } from "react";
import anime from "animejs";

import "./scroll-12.scss";

const Scroll12 = () => {
  const path = useRef(null);

  useEffect(() => {
    const scrollHandler = () => {
      /*
        Штрих смещается слишком быстро. Чтобы это починить, найдём
        коэффициент — во сколько раз длина path больше или меньше высоты body.

        Вычислить длину path нам поможет встроенный метод getTotalLength().
        Вычислить коэффициент можно, поделив высоту документа на длину path.

        Останется в формулу расчёта отступа добавить деление значения текущей
        прокрутки на найденный коэффициент.
      */
      const delta = document.body.offsetHeight / path.current.getTotalLength();
      /*
        Округляем текущее значение прокрутки и делаем его отрицательным.
        Далее делим на delta.
      */
      const offset = -Math.floor(window.pageYOffset / delta);

      anime({
        targets: path.current,
        strokeDashoffset: [offset],
        easing: "easeInOutCubic",
        duration: 10,
      });
    };
    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <div className="scroll-12">
      <div className="wrapper">
        <svg viewBox="0 0 100 1000">
          <path
            ref={path}
            fill="none"
            stroke="#483D8BFF"
            strokeWidth="2"
            strokeDasharray="200 1504"
            strokeDashoffset="50"
            strokeLinecap="round"
            d="M96.4354 1.64424C84.0938 10.6631 75.5952 25.0234 67.4631 37.6066C50.003 64.624 32.2974 91.9479 18.4403 121.028C12.1426 134.244 2.38231 151.886 1.70073 167.108C1.17676 178.81 5.51029 191.39 8.69086 202.335C15.1749 224.646 22.5624 246.645 31.5008 268.097C56.6128 328.366 76.4422 392.466 71.2341 458.946C69.0084 487.357 54.6656 517.763 39.9625 541.724C32.9963 553.076 27.3664 562.75 23.9588 575.939C19.7324 592.296 19.7179 609.751 25.4304 625.789C29.6709 637.695 39.4127 642.806 50.0798 648.139C83.7541 664.976 102.144 694.803 107.564 732.205C112.942 769.313 97.0739 800.228 93.4922 836.045C90.7991 862.976 91.4687 890.136 91.4687 917.167"
          />
        </svg>
      </div>
    </div>
  );
};

export { Scroll12 };
