import React from "react";

import "./animation-15.scss";

import image from "/src/assets/animation-15/norway.jpg";

const Animation15 = () => {
  return (
    <div className="animation-15">
      <div className="wrap">
        <header
          className="header"
          style={{ "--animaiton-15-bg-image": `url(${image})` }}
        >
          <h1 className="header__title">Шапка с параллакс эффектом</h1>
          <h2 className="header__subtitle">при прокрутке страницы</h2>
        </header>
        <section className="content">
          <h2>Lorem ipsum dolor sit amet</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            accusamus eum dignissimos! Deserunt explicabo minima aliquam,
            quibusdam obcaecati provident libero sed magnam? Voluptates iure
            numquam minus officiis saepe natus quam.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
            quis vero repellat earum voluptate deleniti illum corporis eligendi
            cupiditate, nulla enim repellendus? Provident ab, perferendis
            ratione sit obcaecati facere commodi.
          </p>
        </section>
      </div>
    </div>
  );
};

export { Animation15 };

/*
  Этолонное решение.

  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title></title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="wrap">
    <header class="header">
      <h1 class="header__title">Шапка с параллакс эффектом</h1>
      <h2 class="header__subtitle">при прокрутке страницы</h2>
    </header>
    <section class="content">
      <h2>Lorem ipsum dolor sit amet</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio accusamus eum dignissimos! Deserunt explicabo minima aliquam, quibusdam obcaecati provident libero sed magnam? Voluptates iure numquam minus officiis saepe natus quam.</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam quis vero repellat earum voluptate deleniti illum corporis eligendi cupiditate, nulla enim repellendus? Provident ab, perferendis ratione sit obcaecati facere commodi.</p>
    </section>
  </div>
</body>
</html>

*/
