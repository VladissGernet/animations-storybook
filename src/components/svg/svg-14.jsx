import React from "react";

import "./svg-14.scss";

const Svg14 = () => {
  return (
    <div className="svg-14">
      <div className="wrapper">
        <p>
          Почему-то не рабоатет feGaussianBlur, пример из гайда смотреть в
          svg-14.jsx
        </p>
        <div className="cells">
          <div className="item"></div>
          <div className="item"></div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="gooey-filter">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 30 -7"
                result="goo"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export { Svg14 };

/*
  <!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Создание эффекта "деления" клеток</title>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap"
            rel="stylesheet">
        <style>

body {
  margin: 0;
  padding: 0;
}

.wrapper {
  display: grid;
  gap: 1rem;
  place-items: center;
  max-width: 550px;
  height: 250px;
  margin: 5rem auto 0;
  padding: 1.5rem;
}

.cells {
  width: 500px;
  height: 300px;
  filter:url('#gooey-filter');
}

.item {
  position: absolute;
  left: calc(50% - 50px);
  top: calc(50% - 50px);
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #000000;
  animation: item-1 1.45s ease-in-out infinite alternate;
}

@keyframes item-1 {
  50% {
    transform: translateX(-40px);
  }

  100% {
    transform: translateX(0)
  }
}

@keyframes item-2 {
  50% {
    transform: translateX(80px);
  }

  100% {
    transform: translateX(40px)
  }
}

.item:last-child {
  animation: item-2 1.45s ease-in-out infinite alternate;
}

            </style>
    </head>
    <body>
        <div class="wrapper">
            <div class="cells">
                <div class="item">1</div>
                <div class="item">2</div>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <filter id="gooey-filter">
                        <fegaussianblur in="SourceGraphic" stdDeviation="10"
                            resilt="blur" />
                        <fecolormatrix in="blur" mode="matrix"
                            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 30 -7"
                            result="goo" />
                    </filter>
                </defs>
            </svg>
        </div>
    </body>
</html>

*/
