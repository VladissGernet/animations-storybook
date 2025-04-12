import React from "react";

import "./animation-14.scss";

const Animation14 = () => {
  return (
    <div className="animation-14">
      <p>
        При смещении элементов по оси Z возникает интересный эффект — чем выше
        слой по оси Z, тем он быстрее движется, если его сместить по оси Х или
        У. А чем ниже, тем медленнее. Разберём на примере демонстрации. Здесь
        полосы смещены по оси Z с шагом 50px, а при наведении каждый слой
        смещается на 50px по оси Х. Как видите, полосы движутся с разной
        скоростью.
      </p>
      <div className="block">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </div>
  );
};

export { Animation14 };
