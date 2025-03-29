import React from "react";

import "./scroll-4.scss";

const Scroll4 = () => {
  return (
    <div className="scroll-4">
      <header className="header">
        <h1>Листай ниже</h1>
      </header>

      <div className="main-content">
        <ol className="list">
          <li className="list-item">В каждом маленьком ребёнке</li>
          <li className="list-item">И мальчишке и девчонке,</li>
          <li className="list-item">Есть по двести грамм взрывчатки</li>
          <li className="list-item">Или даже полкило!</li>
          <li className="list-item">Должен он бежать и прыгать,</li>
          <li className="list-item">Всё хватать, ногами дрыгать,</li>
          <li className="list-item">А иначе он взорвется, трах-бабах!</li>
          <li className="list-item">И нет его!</li>
        </ol>

        <p className="box-1">
          Каждый новенький ребёнок
          <br />
          Вылезает из пеленок,
          <br />
          И теряется повсюду,
          <br />И находится везде!
        </p>

        <p className="box-2">
          Он всегда куда-то мчится, <br />
          Он ужасно огорчится,
          <br />
          Если что-нибудь на свете
          <br />
          Вдруг случится без него!
        </p>
      </div>
    </div>
  );
};

export { Scroll4 };
