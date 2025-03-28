import React from "react";

import "./scroll-1.scss";

const Scroll1 = () => {
  // let scroll
  return (
    <div className="scroll-1">
      <header className="header">
        <div className="header__wrap">
          <a href="#">Logo</a>
        </div>
        <div className="header__backscrolled">Hello!</div>
      </header>
      <main>
        <section className="part-1">А это просто блок, прокрути вниз</section>
        <section className="part-2">Вот тут появится шапка</section>
        <section className="part-3">Тоже блок, крути наверх</section>
      </main>
    </div>
  );
};

export { Scroll1 };
