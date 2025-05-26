import React, { useRef, useEffect } from "react";

import "./block-10.scss";

const Block10 = () => {
  const canvas = useRef(null);
  // https://habr.com/ru/articles/650175/

  useEffect(() => {
    const ctx = canvas.current.getContext("2d");

    /*
      Arc
      Arc метод — один из самых базовых методов canvas api и используется для рисования окружностей, а также кривых линий. Метод принимает следующие аргументы:
      x
      Горизонтальная координата центра дуги
      y
      Вертикальная координата центра дуги
      radius
      Радиус дуги
      startAngle
      Угол начала дуги в радианах
      endAngle
      Угол конца дуги в радианах
    */

    // ctx.beginPath();
    // ctx.arc(100, 100, 50, 0, Math.PI * 2);
    // ctx.closePath();
    // ctx.stroke();

    /*
      fillRect
      Также мы можем нарисовать прямоугольник используя метод fillRect, который принимает следующие параметры:
      x
      Координата начальной точки прямоугольника по оси X
      y
      Координата начальной точки прямоугольника по оси Y
      width
      Ширина прямоугольника
      height
      Высота прямоуголника
    */
    // ctx.fillRect(200, 0, 100, 100);

    const framesLimit = 200; // количество кадров
    let framesCount = 0;
    // let positionX = 0;
    // let size = 0;

    // function animate() {
    //   if (framesCount >= framesLimit) {
    //     // Очищае канвас
    //     ctx.clearRect(0, 0, canvas.current.width, canvas.current.height);

    //     return;
    //   }

    //   framesCount += 1;
    //   positionX += 1;
    //   size += 1;

    //   ctx.beginPath();
    //   ctx.arc(positionX, 100, size, 0, Math.PI * 2);
    //   ctx.closePath();
    //   ctx.stroke();

    //   window.requestAnimationFrame(animate);
    // }

    // animate();

    // ==============================================================================
    let count = 0;
    let scale = 10;

    function draw() {
      if (framesCount >= framesLimit) {
        return;
      }
      framesCount += 1;

      let angle = count * 0.1;
      let radius = scale * Math.sqrt(count);
      let positionX = radius * Math.sin(angle) + canvas.current.width / 2;
      let positionY = radius * Math.cos(angle) + canvas.current.height / 2;

      ctx.fillStyle = "#F24949";
      ctx.strokeStyle = "#8B428C";
      ctx.beginPath();
      ctx.arc(positionX, positionY, 10, 0, Math.PI * 2);
      ctx.closePath();
      ctx.stroke();

      count++;
    }

    function animate() {
      draw();
      window.requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <div className="block-10">
      <canvas className="block-10__canvas" ref={canvas} />
    </div>
  );
};

export { Block10 };
