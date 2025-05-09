import React, { useState } from "react";

import image1 from "/src/assets/block-3/slide-1.jpg";
import image2 from "/src/assets/block-3/slide-2.jpg";
import image3 from "/src/assets/block-3/slide-3.jpg";
const sliderImages = [image1, image2, image3];

import arrow from "/src/assets/block-3/arrow.svg";

import "./block-3.scss";

const Block3 = () => {
  const [sliderIndex, setSliderIndex] = useState(0);

  const onClickPrev = () =>
    setSliderIndex(
      sliderIndex === 0 ? sliderImages.length - 1 : sliderIndex - 1
    );

  const onClickNext = () =>
    setSliderIndex(
      sliderIndex === sliderImages.length - 1 ? 0 : sliderIndex + 1
    );

  return (
    <div className="block-3 wrap">
      <section className="slider">
        {sliderImages.map((image, index) => (
          <div
            key={image}
            className={`slider-item ${
              index === sliderIndex ? "slider-item--current" : ""
            }`}
          >
            <img className="slider-img" src={image} alt="slide" />
          </div>
        ))}

        <button
          type="button"
          className="slider-btn slider-btn--prev"
          onClick={onClickPrev}
        >
          <img src={arrow} alt="prev" />
        </button>
        <button
          type="button"
          className="slider-btn slider-btn--next"
          onClick={onClickNext}
        >
          <img src={arrow} alt="next" />
        </button>
      </section>
    </div>
  );
};

export { Block3 };

// Это код из гайда.

// ("use strict");

// const sliderBox = document.querySelector(".slider");
// const slides = sliderBox.querySelectorAll(".slider-item");
// const btnPrev = sliderBox.querySelector(".slider-btn--prev");
// const btnNext = sliderBox.querySelector(".slider-btn--next");

// let counter = 0;

// btnNext.addEventListener("click", function () {
//   slides[counter].classList.toggle("slider-item--current");
//   counter++;
//   if (counter >= slides.length) {
//     counter = 0;
//   }
//   slides[counter].classList.toggle("slider-item--current");
// });

// btnPrev.addEventListener("click", function () {
//   slides[counter].classList.toggle("slider-item--current");
//   counter--;
//   if (counter < 0) {
//     counter = slides.length - 1;
//   }
//   slides[counter].classList.toggle("slider-item--current");
// });
