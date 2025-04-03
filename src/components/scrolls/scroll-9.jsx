import React, { useEffect } from "react";

import "./scroll-9.scss";

const Scroll9 = () => {
  useEffect(() => {
    const wrap = document.querySelector(".wrap");
    const element = document.querySelector(".box");
    let scale = 1;
    const scaleStep = 0.05;

    wrap.addEventListener("wheel", wheelHandler);

    function wheelHandler(evt) {
      evt.preventDefault();
      const delta = evt.deltaY;

      if (delta > 0) {
        scale = scale + scaleStep;
      } else if (scale >= 0) {
        scale = scale - scaleStep;
      }
      element.setAttribute("style", `transform: scale(${scale});`);
    }

    return () => {
      wrap.removeEventListener("wheel", wheelHandler);
    };
  }, []);

  return (
    <div className="scroll-9">
      <p>Наведи мышку на блок и покрути колесико мышки</p>
      <div className="wrap">
        <div className="box">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          nesciunt beatae error! Earum quas mollitia reprehenderit, perferendis
          porro soluta, tenetur velit beatae totam deleniti iure laborum
          dolores, ab accusantium. Deleniti.
        </div>
      </div>
    </div>
  );
};

export { Scroll9 };
