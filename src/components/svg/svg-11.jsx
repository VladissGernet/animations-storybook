import React, { useRef, useEffect } from "react";
import anime from "animejs";

import logo from "/src/assets/svg-11/logo.svg";

import "./svg-11.scss";

const Svg11 = () => {
  const catSVG = useRef(null);
  const htmlSVG = useRef(null);
  const title = useRef(null);

  const COLORS = {
    black: "#111111",
    green: "#4EF483",
  };

  useEffect(() => {
    const catPaths = catSVG.current.querySelectorAll(
      "path:not(.cat__green-point):not(.cat__black-points)"
    );
    const catGreenPoint = catSVG.current.querySelector(".cat__green-point");
    const catBlackPoints =
      catSVG.current.querySelectorAll(".cat__black-points");

    /*
      Создадим таймлайн. Пишем в нём параметры easing, delay и duration. И сразу сделаем add(), передав туда
      контуры кота и анимацию stroke-dashoffset.
    */

    const timeline = anime.timeline({
      easing: "easeInOutSine",
      duration: 1300,
    });

    timeline.add({
      targets: catPaths,
      strokeDashoffset: [anime.setDashoffset, 0],
    });

    // Точка на лбу.
    timeline.add(
      {
        targets: catGreenPoint,
        duration: 300,
        fill: ["transparent", COLORS.green],
      },
      "-=500"
    );

    // Черные точки.
    timeline.add(
      {
        targets: catBlackPoints,
        duration: 500,
        // Добавим последовательное появление чёрных элементов у кота. Для этого воспользуемся методом anime.stagger().
        delay: anime.stagger(200),
        fill: ["transparent", COLORS.black],
      },
      "-=1000"
    );

    // Текст html.
    timeline.add(
      {
        targets: htmlSVG.current.querySelector("path"),
        strokeDashoffset: [anime.setDashoffset, 0],
        strokeOpacity: [1, 0.5],
        duration: 1000,
      },
      "-=300"
    );

    // Текст title.
    timeline.add(
      {
        targets: title.current,
        translateY: [100, 0],
        opacity: [0, 1],
        easing: "easeInElastic",
        duration: 335,
      },
      "-=300"
    );
  }, []);

  return (
    <div className="svg-11">
      <div className="wrapper">
        <div className="hero">
          <a href="" className="logo">
            <img
              src={logo}
              width="113"
              height="32"
              alt="Логотип .htmlacademy"
            />
          </a>

          <h1 ref={title}>Как подготовиться к&nbsp;удаленному собеседованию</h1>

          <svg
            ref={catSVG}
            className="cat"
            xmlns="http://www.w3.org/2000/svg"
            width="359"
            height="535"
            viewBox="0 0 359 535"
            fill="none"
          >
            <path
              d="M59.2324 2.18919C59.2324 2.18919 83.7886 27.632 61.4234 70.2436C61.4234 70.2436 51.8271 5.54437 59.2324 2.18919ZM59.2324 2.18919C66.6377 -1.16599 116.339 41.2177 116.339 41.2177"
              stroke="black"
              strokeWidth="3.23155"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M225.708 2.18919C225.708 2.18919 201.152 27.632 223.517 70.2436C223.517 70.2436 233.114 5.54437 225.708 2.18919ZM225.708 2.18919C218.303 -1.16599 168.602 41.2177 168.602 41.2177"
              stroke="black"
              strokeWidth="3.23155"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              className="cat__green-point"
              d="M143.997 79.9475C150.459 79.9475 155.698 73.2283 155.698 64.9396C155.698 56.6509 150.459 49.9316 143.997 49.9316C137.535 49.9316 132.296 56.6509 132.296 64.9396C132.296 73.2283 137.535 79.9475 143.997 79.9475Z"
            />
            <path
              d="M187.763 41.4769C187.763 41.5005 99.1816 41.4926 99.1816 41.4769"
              stroke="black"
              strokeWidth="3.23155"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M87.5039 92.7711C87.5039 92.7711 96.9981 78.7454 108.707 78.7454C120.416 78.7454 129.91 92.7711 129.91 92.7711C129.91 92.7711 120.416 106.797 108.707 106.797C96.9981 106.797 87.5039 92.7711 87.5039 92.7711Z"
              stroke="black"
              strokeWidth="3.23155"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M155.705 92.7711C155.705 92.7711 165.498 78.3053 177.576 78.3053C189.653 78.3053 199.446 92.7711 199.446 92.7711C199.446 92.7711 189.653 107.237 177.576 107.237C165.498 107.237 155.705 92.7711 155.705 92.7711Z"
              stroke="black"
              strokeWidth="3.23155"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              className="cat__black-points"
              d="M178.832 78.3604C174.442 81.637 171.592 86.8701 171.592 92.7711C171.592 98.6722 174.435 103.913 178.832 107.182C190.329 106.239 199.446 92.7711 199.446 92.7711C199.446 92.7711 190.329 79.3033 178.832 78.3604Z"
              fill="black"
            />
            <path
              className="cat__black-points"
              d="M109.924 78.8005C105.668 81.975 102.903 87.051 102.903 92.7713C102.903 98.4916 105.66 103.568 109.924 106.742C121.067 105.831 129.91 92.7713 129.91 92.7713C129.91 92.7713 121.059 79.712 109.924 78.8005Z"
              fill="black"
            />
            <path
              className="cat__black-points"
              d="M144.602 120.045C153.463 120.045 160.646 117.382 160.646 114.097C160.646 110.812 153.463 108.148 144.602 108.148C135.742 108.148 128.559 110.812 128.559 114.097C128.559 117.382 135.742 120.045 144.602 120.045Z"
              fill="black"
            />
            <path
              d="M144.61 119.597C144.61 119.597 146.982 143.618 129.878 143.618"
              stroke="black"
              strokeWidth="3.23155"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M145.049 119.597C145.049 119.597 142.678 143.618 159.781 143.618"
              stroke="black"
              strokeWidth="3.23155"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M166.433 127.785H204.59"
              stroke="black"
              strokeWidth="3.23155"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M166.433 120.823L204.59 113.861"
              stroke="black"
              strokeWidth="3.23155"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M123.704 127.785H85.5547"
              stroke="black"
              strokeWidth="3.23155"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M123.704 120.823L85.5547 113.861"
              stroke="black"
              strokeWidth="3.23155"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M223.515 70.2435C223.515 70.2435 255.603 169.005 159.773 169.005H138.829"
              stroke="black"
              strokeWidth="3.23155"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M61.4242 70.2435C61.4242 70.2435 52.8409 117.468 61.4242 137.834C61.4242 137.834 72.9209 168.031 102.903 168.031"
              stroke="black"
              strokeWidth="3.23155"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              className="cat__black-points"
              d="M177.578 193.757L138.423 170.805L177.664 168.031L177.578 193.757Z"
              fill="black"
            />
            <path
              d="M79.0055 160.338C57.6062 225.218 108.47 366.937 140.847 358.781C177.662 349.509 111.383 235.425 111.383 235.425"
              stroke="black"
              strokeWidth="3.23155"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M228.684 106.742C228.684 106.742 258.038 4.93144 283.78 12.9383C309.797 21.0237 224.121 218.924 224.121 218.924C291.366 305.193 309.805 498.976 294.46 506.692C294.46 506.692 357.001 471.6 357.001 533.133H285.743C278.982 533.133 272.77 529.424 269.558 523.468L206.515 406.469"
              stroke="black"
              strokeWidth="3.23155"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M84.723 273.401C84.723 273.401 98.5049 475.938 129.901 507.352C129.901 507.352 70.4463 468.874 70.4463 531.97H142.372C152.957 531.97 162.043 524.419 163.975 514L183.749 407.608"
              stroke="black"
              strokeWidth="3.23155"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M134.143 389.316C134.143 389.316 177.192 424.957 238.54 396.741"
              stroke="black"
              strokeWidth="3.23155"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M94.7591 379.863C94.7591 379.863 2 342.453 2 143.618"
              stroke="black"
              strokeWidth="3.23155"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <svg
            ref={htmlSVG}
            className="html"
            width="688"
            height="827"
            viewBox="0 0 688 827"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M667.001 495.942L444.926 811.842C462.793 724.359 543.572 617.499 502.367 589.7C461.162 561.902 375.982 727.09 341.397 775.917L488.915 269.876M293.469 714.239C332.263 619.051 397.286 426.497 347.021 417.779C296.756 409.061 232.317 565.823 225.231 624.49C240.517 549.354 298.915 355.32 259.426 346.692C207.8 335.413 161.493 513.489 137.207 602.28C147.745 440.65 142.758 -24.3209 226.952 17.6911C298.003 53.1445 121.684 493.205 59.3706 491.377C9.51982 489.915 12.1729 330.728 19.7309 251.318M525.033 429.193L398.674 279.917"
              stroke="#4EF483"
              strokeWidth="30"
              strokeLinecap="square"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export { Svg11 };
