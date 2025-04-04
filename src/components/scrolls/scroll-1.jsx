import React, { useRef, useEffect } from "react";

import "./scroll-1.scss";

const Scroll1 = () => {
  const header = useRef(null);
  const firstBlock = useRef(null);
  const backScrolledHeader = useRef(null);
  const scrollStarted = useRef(0); // Используем ref для сохранения значения
  const scrolledHeaderStart = useRef(0); // Используем ref для сохранения значения

  const headerScrollHandler = () => {
    const scrollTop = window.pageYOffset;
    const delta = scrollTop - scrollStarted.current;
    console.log(scrolledHeaderStart.current);

    // Управление классами
    header.current.classList.toggle(
      "header--fixed",
      scrollTop >= scrolledHeaderStart.current
    );
    backScrolledHeader.current?.classList.toggle(
      "header__backscrolled--show",
      delta < 0 && scrollTop >= scrolledHeaderStart.current
    );
    scrollStarted.current = scrollTop;
  };

  useEffect(() => {
    // Инициализация значений
    scrolledHeaderStart.current = firstBlock.current?.offsetHeight || 0;

    // Добавление обработчика
    window.addEventListener("scroll", headerScrollHandler);

    // Очистка при размонтировании
    return () => {
      window.removeEventListener("scroll", headerScrollHandler);
    };
  }, []);

  return (
    <div className="scroll-1">
      <header className="header" ref={header}>
        <div className="header__wrap">
          <a href="#">Logo</a>
        </div>
        <div className="header__backscrolled" ref={backScrolledHeader}>
          Hello!
        </div>
      </header>
      <main>
        <section className="part-1" ref={firstBlock}>
          А это просто блок, прокрути вниз
        </section>
        <section className="part-2">Вот тут появится шапка</section>
        <section className="part-3">Тоже блок, крути наверх</section>
      </main>
    </div>
  );
};

export { Scroll1 };
