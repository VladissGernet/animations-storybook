import React, { useState } from "react";

import image1 from "/src/assets/block-3/slide-1.jpg";
import image2 from "/src/assets/block-3/slide-2.jpg";
import image3 from "/src/assets/block-3/slide-3.jpg";

const sliders = [
  {
    image: image1,
    line1: "Производство",
    line2: "волшебных изделий",
    line3: "из металла и дерева",
  },
  {
    image: image2,
    line1: "Производство",
    line2: "волшебных изделий",
    line3: "из металла и дерева",
  },
  {
    image: image3,
    line1: "Производство",
    line2: "волшебных изделий",
    line3: "из металла и дерева",
  },
];

import arrow from "/src/assets/block-3/arrow.svg";

import "./block-4.scss";

const defineSliderClass = (index, sliderIndex, sliders) => {
  if (index === sliderIndex) {
    return " slider-item--current";
  }
  if (index === sliderIndex - 1 && sliderIndex > 0) {
    return " slider-item--prev";
  }
  if (index === sliderIndex + 1 && sliderIndex < sliders.length - 1) {
    return " slider-item--next";
  }
  return "";
};

const Block4 = () => {
  const [sliderIndex, setSliderIndex] = useState(0);

  const onClickPrev = () =>
    setSliderIndex(sliderIndex > 0 ? sliderIndex - 1 : 0);

  const onClickNext = () =>
    setSliderIndex(
      sliderIndex < sliders.length - 1 ? sliderIndex + 1 : sliders.length - 1
    );

  return (
    <div className="block-4 wrap">
      <section className="slider">
        {sliders.map((slider, index) => (
          <div
            key={slider.image}
            className={
              "slider-item" + defineSliderClass(index, sliderIndex, sliders)
            }
            style={
              index === sliderIndex - 1
                ? {
                    transform: "translate(0)",
                    visibility:
                      index === sliderIndex ||
                      index === sliderIndex - 1 ||
                      index === sliderIndex + 1
                        ? "visible"
                        : "hidden",
                  }
                : {
                    visibility:
                      index === sliderIndex ||
                      index === sliderIndex - 1 ||
                      index === sliderIndex + 1
                        ? "visible"
                        : "hidden",
                  }
            }
          >
            <img className="slider-img" src={slider.image} alt="slide" />
            <h3 className="slider-title">
              <span className="slider-title-line">{slider.line1}</span>
              <span className="slider-title-line">{slider.line2}</span>
              <span className="slider-title-line">{slider.line3}</span>
            </h3>
          </div>
        ))}

        <button
          type="button"
          className="slider-btn slider-btn--prev"
          onClick={onClickPrev}
          disabled={sliderIndex === 0}
        >
          <img src={arrow} alt="prev" />
        </button>
        <button
          type="button"
          className="slider-btn slider-btn--next"
          onClick={onClickNext}
          disabled={sliderIndex === sliders.length - 1}
        >
          <img src={arrow} alt="next" />
        </button>
      </section>
    </div>
  );
};

export { Block4 };

// Это код из гайда.

// "use strict";
// const sliderBox = document.querySelector(".slider");
// const slides = sliderBox.querySelectorAll(".slider-item");
// const btnPrev = sliderBox.querySelector(".slider-btn--prev");
// const btnNext = sliderBox.querySelector(".slider-btn--next");

// let counter = 0;
// const maxStep = slides.length - 1;
// slides[counter].classList.add("slider-item--current");

// function isFirst(counter) {
//   if (counter === 0) {
//     btnPrev.setAttribute("disabled", "disabled");
//   } else {
//     btnPrev.removeAttribute("disabled", "disabled");
//   }
// }

// function isLast(counter) {
//   if (counter === maxStep) {
//     btnNext.setAttribute("disabled", "disabled");
//   } else {
//     btnNext.removeAttribute("disabled", "disabled");
//   }
// }

// function nextBtnHandler() {
//   slides[counter].classList.remove("slider-item--current");
//   slides[counter].setAttribute("style", "transform: translate(0%)");

//   counter++;
//   isLast(counter);
//   isFirst(counter);

//   slides[counter].classList.add("slider-item--current");
// }

// function prevBtnHandler() {
//   slides[counter].classList.remove("slider-item--current");

//   counter--;
//   isLast(counter);
//   isFirst(counter);

//   slides[counter].classList.add("slider-item--current");
//   slides[counter].removeAttribute("style");
// }

// btnNext.addEventListener("click", nextBtnHandler);
// btnPrev.addEventListener("click", prevBtnHandler);
