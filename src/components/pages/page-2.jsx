import React, { useState, useRef, useEffect } from "react";

import logo from "/src/assets/page-2/logo.svg";
import headerSlide1 from "/src/assets/page-2/header-slide-1.jpg";
import headerSlide2 from "/src/assets/page-2/header-slide-2.jpg";
import headerSlide3 from "/src/assets/page-2/header-slide-3.jpg";
import cross from "/src/assets/page-2/icon-cross.svg";
import tab1 from "/src/assets/page-2/tab-1.png";
import tab2 from "/src/assets/page-2/tab-2.png";
import tab3 from "/src/assets/page-2/tab-3.png";
import about1 from "/src/assets/page-2/about-1.jpg";
import about2 from "/src/assets/page-2/about-2.jpg";
import about3 from "/src/assets/page-2/about-3.jpg";
import reviews1 from "/src/assets/page-2/reviews-1.png";
import reviews2 from "/src/assets/page-2/reviews-2.png";
import reviews3 from "/src/assets/page-2/reviews-3.png";
import reviews4 from "/src/assets/page-2/reviews-4.png";
import reviews5 from "/src/assets/page-2/reviews-5.png";

import "./page-2.scss";

const sliderData = [
  {
    image: headerSlide1,
    title: "Премиальные дома на&nbsp;зеленых участках",
    text: "Комфорт, природа, свобода",
  },
  {
    image: headerSlide2,
    title: "Премиальные дома на&nbsp;зеленых участках",
    text: "Комфорт, природа, свобода",
  },
  {
    image: headerSlide3,
    title: "Премиальные дома на&nbsp;зеленых участках",
    text: "Комфорт, природа, свобода",
  },
];

const defineSliderClass = (index, sliderIndex, sliders) => {
  if (index === sliderIndex) {
    return " slider__item--current";
  }
  if (index === sliderIndex - 1 && sliderIndex > 0) {
    return " slider__item--prev";
  }
  if (index === sliderIndex + 1 && sliderIndex < sliders.length - 1) {
    return " slider__item--next";
  }
  return "";
};

const tabsData = [
  {
    title: "Каменный дом",
    date: "Срок постройки: 4 месяца",
    text: `
      Концепция проекта: человеколюбивое, благополучное
      пространство. Качествами такового являются: забота,
      близость, друзья, демократичность, индивидуальность, чувство
      комфорта, приятные ощущения, семейный дом, органичность,
      простота и естественность форм.
    `,
    image: tab1,
  },
  {
    title: "Дом в горах",
    date: "Срок постройки: 7 месяцев",
    text: `
      Проект наглядно демонстрирует, как разместить несколько
      функциональных зон на открытой планировке загородного дома.
      Зоны выделены с помощью декоративных приемов: потолочных
      балок и деревянных панелей на стене в зоне гостиной.
    `,
    image: tab2,
  },
  {
    title: "Дом с бассейном",
    date: "Срок постройки: 12 месяцев",
    text: `
      Вилла имеет три этажа. В доме – две кухни-столовые, две
      гостиные с каминами, две гостевые комнаты с ванными
      комнатами и большими террасами, главная спальня с ванной и
      гардеробной комнатами. Также здесь есть биллиардная и
      спа-зона, где расположены хамам, финская сауна, бассейн,
      зона релаксации и санузел.
    `,
    image: tab3,
  },
];

const Page2 = () => {
  const [sliderIndex, setSliderIndex] = useState(0);

  // Модальное окно.
  const modal = useRef(null);
  const modalWrapper = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onInAnimationEnd = () => {
    modalWrapper.current.classList.remove("modal__wrap--modal-in");
    modalWrapper.current.removeEventListener("animationend", onInAnimationEnd);
  };

  const modalOpenHandler = () => {
    setIsModalOpen(true);
    modal.current.classList.add("modal--open");
    modalWrapper.current.classList.remove("modal__wrap--modal-out");
    modalWrapper.current.classList.add("modal__wrap--modal-in");
    modalWrapper.current.addEventListener("animationend", onInAnimationEnd);
  };

  const onOutAnimationEnd = () => {
    modal.current.classList.remove("modal--open");
    modalWrapper.current.removeEventListener("animationend", onOutAnimationEnd);
  };

  const modalCloseHandler = () => {
    setIsModalOpen(false);
    modalWrapper.current.classList.add("modal__wrap--modal-out");
    modalWrapper.current.addEventListener("animationend", onOutAnimationEnd);
  };

  const onClickPrev = () =>
    setSliderIndex(sliderIndex > 0 ? sliderIndex - 1 : 0);

  const onClickNext = () =>
    setSliderIndex(
      sliderIndex < sliderData.length - 1
        ? sliderIndex + 1
        : sliderData.length - 1
    );

  // Табы.
  const [tabIndex, setTabIndex] = useState(0);

  // faqData список.
  const faqData = [
    {
      question: "Сколько стоит построить дом?",
      answer: `
        Все очень индивидуально и зависит от ваших желаний,
        материалов, места постройки и др. Обычно мы обсуждаем с
        клиентами первоначальную идею и концпецию, после чего
        предоставляем первоначальный расчет, на который можно
        ориентироваться.
      `,
    },
    {
      question: "Вы даете гарантию на свои дома?",
      answer: `
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Cupiditate tempora recusandae laudantium, id labore minima rem
        quae, quo voluptatem facere commodi enim iure error. Porro
        quibusdam labore id magni voluptatem.
      `,
    },
    {
      question: "Из каких материалов строите дома?",
      answer: `
        Cupiditate tempora recusandae laudantium, id labore minima rem
        quae, quo voluptatem facere commodi enim iure error. Porro
        quibusdam labore id magni voluptatem.
      `,
    },
    {
      question: "Как с вами связаться?",
      answer: `
        Cupiditate tempora recusandae laudantium, id labore minima rem
        quae, quo voluptatem facere commodi enim iure error.
      `,
    },
  ];

  const [accordionHeights, setAccordionHeights] = useState(
    Array.from({ length: faqData.length }, () => 0)
  );

  const ContentRefs = useRef([]);

  const accordionButtonHandler = (index) => {
    const newAccordionStates = [...accordionHeights];
    newAccordionStates[index] === 0
      ? (newAccordionStates[index] = ContentRefs.current[index].scrollHeight)
      : (newAccordionStates[index] = 0);
    setAccordionHeights(newAccordionStates);
  };

  const defineItemlass = (height) => (height === 0 ? "" : " faq__item--open");

  // Progress bar
  const progressBar = useRef(null);

  useEffect(() => {
    // Progress bar
    const onScroll = () => {
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const windowScroll = window.pageYOffset;
      const progressBarWidth = (windowScroll / windowHeight).toFixed(2);
      progressBar.current.style.transform = `scaleX(${progressBarWidth})`;
    };

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Fixed header menu appearance.
  const headerMenuWrapper = useRef(null);
  const headerBackscrolled = useRef(null);
  const scrollStarted = useRef(0); // Используем ref для сохранения значения
  const HEADER_APPEARANCE_HEIGHT = 400;
  const HEADER_NO_SCROLL_TIME = 600;

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.pageYOffset;
      const delta = scrollTop - scrollStarted.current;

      headerMenuWrapper.current.classList.toggle(
        "header__wrapper--fixed",
        scrollTop >= HEADER_APPEARANCE_HEIGHT
      );

      headerBackscrolled.current.classList.toggle(
        "header__backscrolled--shown",
        scrollTop >= HEADER_APPEARANCE_HEIGHT && delta < 0
      );

      scrollStarted.current = scrollTop;
    };

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Плавное появление элементов, когда половина высоты элемента видна при прокрутке

  const contentItemsList = useRef(null);

  const isPartiallyVisible = (element, screenHeight) => {
    const elementBoundary = element.getBoundingClientRect();
    const top = elementBoundary.top;
    const bottom = elementBoundary.bottom;
    const height = elementBoundary.height;

    return top + height >= 0 && height + screenHeight > bottom;
  };

  const throttle = (mainFunction, delay) => {
    let timerFlag = null;

    return (...args) => {
      if (timerFlag === null) {
        mainFunction(...args);
        timerFlag = setTimeout(() => {
          timerFlag = null;
        }, delay);
      }
    };
  };

  useEffect(() => {
    //  Найдём высоту окна, будем её использовать далее для отслеживания положения элементов.
    const listItemsCurrent = contentItemsList.current.children;

    const handleScroll = () => {
      const screenHeight = document.documentElement.clientHeight;
      if (
        isPartiallyVisible(contentItemsList.current, screenHeight) === false
      ) {
        return;
      }

      for (let i = 0; i < listItemsCurrent.length; i++) {
        if (isPartiallyVisible(listItemsCurrent[i], screenHeight)) {
          listItemsCurrent[i].classList.add("content__block--active");
        } else {
          listItemsCurrent[i].classList.remove("content__block--active");
        }
      }
    };

    const handleScrollThrottled = throttle(handleScroll, 200);

    window.addEventListener("scroll", handleScrollThrottled);

    return () => {
      window.removeEventListener("scroll", handleScrollThrottled);
    };
  }, []);

  // Горизонтальный скролл.

  const sectionScroll = useRef(null);
  const list = useRef(null);

  useEffect(() => {
    const sectionWidth = sectionScroll.current.clientWidth;
    const listWidth = list.current.scrollWidth;
    let dist = 0;
    const step = 50;

    const onScroll = (e) => {
      e.preventDefault();

      if (e.deltaY > 0 && listWidth + dist > sectionWidth - step * 4) {
        dist = dist - step;
      } else if (e.deltaY < 0 && dist < 0) {
        dist = dist + step;
      }
      list.current.style.transform = `translateX(${dist}px)`;
    };

    sectionScroll.current.addEventListener("wheel", onScroll);
  }, []);

  return (
    <div className="page-2">
      <div className="container">
        <header className="header">
          <div className="header__wrapper" ref={headerMenuWrapper}>
            <div className="header__nav menu">
              <a
                href="#"
                className="menu__logo-link"
                onClick={(e) => e.preventDefault()}
                tabIndex="-1"
              >
                <img src={logo} alt="logo" />
              </a>

              <button
                className="menu__burger burger"
                type="button"
                onClick={(e) => {
                  const burgerButton = e.target.closest("button");
                  burgerButton.classList.toggle("burger--open");

                  if (burgerButton.classList.contains("burger--open")) {
                    document.body.style.overflow = "hidden";
                  } else {
                    setTimeout(() => {
                      document.body.removeAttribute("style");
                    }, HEADER_NO_SCROLL_TIME);
                  }
                }}
              >
                <span className="burger__line"></span>
                <span className="burger__line"></span>
                <span className="burger__line"></span>
                <span className="burger__line"></span>
              </button>

              <nav className="menu__nav main-nav">
                <div className="main-nav__wrap">
                  <ul className="main-nav__list">
                    <li className="main-nav__item">
                      <a href="#" className="main-nav__link">
                        Работы
                      </a>
                    </li>
                    <li className="main-nav__item">
                      <a href="#" className="main-nav__link">
                        О нас
                      </a>
                    </li>
                    <li className="main-nav__item">
                      <a href="#" className="main-nav__link">
                        Контакты
                      </a>
                    </li>
                  </ul>

                  <address className="main-nav__address">
                    <a
                      className="main-nav__address-link"
                      href="mailto:info@green-house.com"
                    >
                      Info@green-house.com
                    </a>
                  </address>
                </div>
              </nav>
            </div>
            <div
              className="header__backscrolled backscroll-header"
              ref={headerBackscrolled}
            >
              <p className="backscroll-header__text">
                Акция: до 1 апреля скидка 10% всем корпоративным клиентам.
              </p>

              <a href="#" className="backscroll-header__link">
                Подробнее
              </a>
            </div>
          </div>

          <div className="header__content">
            <h1 className="visually-hidden">Премиальные загородные дома</h1>

            <section className="header__slider slider">
              {sliderData.map((item, index) => (
                <div
                  key={item.image}
                  className={
                    "slider__item" +
                    defineSliderClass(index, sliderIndex, sliderData)
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
                  <img className="slider__img" src={item.image} alt="slide" />
                  <h2
                    className="slider__title"
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  />
                  <p className="slider__text">{item.text}</p>
                </div>
              ))}

              <ul className="slider__togglers">
                <li>
                  <button
                    className="slider__btn slider__btn--prev"
                    type="button"
                    onClick={onClickPrev}
                    disabled={sliderIndex === 0}
                  >
                    <span className="visually-hidden">Назад</span>
                    <svg
                      className="slider__btn-icon"
                      width="19"
                      height="14"
                      viewBox="0 0 19 14"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17 7.00008L17.7071 6.29297L18.4142 7.00008L17.7071 7.70719L17 7.00008ZM1 8.00008C0.447715 8.00008 0 7.55237 0 7.00008C0 6.4478 0.447715 6.00008 1 6.00008V8.00008ZM12.3738 0.959641L17.7071 6.29297L16.2929 7.70719L10.9596 2.37385L12.3738 0.959641ZM17.7071 7.70719L12.3738 13.0405L10.9596 11.6263L16.2929 6.29297L17.7071 7.70719ZM17 8.00008H1V6.00008H17V8.00008Z" />
                    </svg>
                  </button>
                </li>
                <li>
                  <button
                    className="slider__btn slider__btn--next"
                    type="button"
                    onClick={onClickNext}
                    disabled={sliderIndex === sliderData.length - 1}
                  >
                    <span className="visually-hidden">Вперед</span>
                    <svg
                      className="slider__btn-icon"
                      width="19"
                      height="14"
                      viewBox="0 0 19 14"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17 7.00008L17.7071 6.29297L18.4142 7.00008L17.7071 7.70719L17 7.00008ZM1 8.00008C0.447715 8.00008 0 7.55237 0 7.00008C0 6.4478 0.447715 6.00008 1 6.00008V8.00008ZM12.3738 0.959641L17.7071 6.29297L16.2929 7.70719L10.9596 2.37385L12.3738 0.959641ZM17.7071 7.70719L12.3738 13.0405L10.9596 11.6263L16.2929 6.29297L17.7071 7.70719ZM17 8.00008H1V6.00008H17V8.00008Z" />
                    </svg>
                  </button>
                </li>
              </ul>

              <button
                className="slider__modal-btn"
                type="button"
                onClick={modalOpenHandler}
                disabled={isModalOpen}
              >
                Связаться
              </button>
            </section>
          </div>
        </header>
        <div className="progress-bar">
          <div className="progress-bar__value" ref={progressBar}></div>
        </div>

        <section className="content" ref={contentItemsList}>
          <section className="content__block">
            <div className="content__text-wrap">
              <h1 className="content__title">О компании</h1>
              <p className="content__text">
                Green house — архитектурно-строительная компания с комплексным
                подходом к проектированию и реализации современных загородных
                домов премиум класса. В нем описан подробный план действий для
                строителей: какие технологии и материалы необходимо применять. В
                нашем портфолио более 200 частных вилл, а также десятки
                уникальных проектов коммерческой недвижимости.
              </p>
            </div>

            <img
              className="content__image"
              src={about1}
              alt="дома green house"
            />
          </section>

          <section className="content__block content__block--inverted">
            <div className="content__text-wrap">
              <p className="content__text">
                Green house — архитектурно-строительная компания с комплексным
                подходом к проектированию и реализации современных загородных
                домов премиум класса. В нем описан подробный план действий для
                строителей: какие технологии и материалы необходимо применять. В
                нашем портфолио более 200 частных вилл, а также десятки
                уникальных проектов коммерческой недвижимости.
              </p>
            </div>

            <img
              className="content__image"
              src={about2}
              alt="дома green house"
            />
          </section>

          <section className="content__block">
            <div className="content__text-wrap">
              <p className="content__text">
                Green house — архитектурно-строительная компания с комплексным
                подходом к проектированию и реализации современных загородных
                домов премиум класса. В нем описан подробный план действий для
                строителей: какие технологии и материалы необходимо применять. В
                нашем портфолио более 200 частных вилл, а также десятки
                уникальных проектов коммерческой недвижимости.
              </p>
            </div>

            <img
              className="content__image"
              src={about3}
              alt="дома green house"
            />
          </section>
        </section>

        <section className="reviews" ref={sectionScroll}>
          <h2 className="reviews__title">Отзывы покупателей</h2>

          <ul className="reviews__list reviews-list" ref={list}>
            <li className="reviews-list__item">
              <img className="reviews-list__image" src={reviews1} alt="" />
              <h3 className="reviews-list__name">Анастасия Климова</h3>
              <p className="reviews-list__description">
                Построила дом в 2015 году
              </p>
              <p className="reviews-list__text">
                Хочу выразить огромную благодарность компании Green House за их
                слаженную и четкую работу. Все работы произведены качественно и
                в оговоренные сроки. Компания Green House — это слаженная
                команда нацеленная на клиента. Спасибо Вам огромное!!!
              </p>
            </li>

            <li className="reviews-list__item">
              <img
                className="reviews-list__image"
                src={reviews2}
                alt="Витайлий Костин"
              />
              <h3 className="reviews-list__name">Витайлий Костин</h3>
              <p className="reviews-list__description">
                Построил дом в 2019 году
              </p>
              <p className="reviews-list__text">
                Третий год компания Green House оказывает нам услуги по
                строительству нашего загородного дома: от фундамента и до
                внутренней отделки. Работа, выполненная строителями компании,
                превосходит все ожидания. Лучшие в своем деле!
              </p>
            </li>

            <li className="reviews-list__item">
              <img
                className="reviews-list__image"
                src={reviews3}
                alt="Кира Соболева"
              />
              <h3 className="reviews-list__name">Кира Соболева</h3>
              <p className="reviews-list__description">
                Построила дом в 2020 году
              </p>
              <p className="reviews-list__text">
                Никогда не жили в натуральном дереве, порадовали моменты того,
                что отделка внутри бревенчатого дома практически не нужна.
                Эстетика бревен подходит ко всему. Ну и конечно, аромат
                натурального дерева внутри дома — отдельный приятный бонус.
              </p>
            </li>

            <li className="reviews-list__item">
              <img
                className="reviews-list__image"
                src={reviews4}
                alt="Александр Казаков"
              />
              <h3 className="reviews-list__name">Александр Казаков</h3>
              <p className="reviews-list__description">
                Построил дом в 2014 году
              </p>
              <p className="reviews-list__text">
                Заказывали строительство дома. Все было построено в оперативные
                сроки. Спасибо большое за ваш профессиональный подход. Стоимость
                вполне адекватная. Могу однозначно рекомендовать эту компанию. И
                сам обращусь еще.
              </p>
            </li>

            <li className="reviews-list__item">
              <img
                className="reviews-list__image"
                src={reviews5}
                alt="Анатолий Ким"
              />
              <h3 className="reviews-list__name">Анатолий Ким</h3>
              <p className="reviews-list__description">
                Построил дом в 2018 году
              </p>
              <p className="reviews-list__text">
                Заказал дом, построили быстро качественно. Цена намного меньше,
                чем в других компаниях. Работой бригады остался доволен, все
                профессионалы своего дела. Кто решился на строительство,
                рекомендую компанию Green house.
              </p>
            </li>
          </ul>
        </section>

        <section className="works">
          <h2 className="works__title">Работы</h2>
          <div className="works__tabs tabs">
            <ul className="tabs__links">
              {tabsData.map((item, index) => (
                <li className="tabs__links-item" key={item.title}>
                  <button
                    className={`tabs__link${
                      tabIndex === index ? " tabs__link--active" : ""
                    }`}
                    type="button"
                    disabled={tabIndex === index}
                    onClick={() => setTabIndex(index)}
                  >
                    {item.title}
                  </button>
                </li>
              ))}
            </ul>

            <ul className="tabs__content tab-content">
              {tabsData.map((item, index) => (
                <li
                  className={`tab-content__item${
                    tabIndex === index ? " tab-content__item--active" : ""
                  }`}
                  key={item.title}
                >
                  <article className="tab-content__wrap">
                    <p className="tab-content__date">{item.date}</p>
                    <h3 className="tab-content__name">{item.title}</h3>
                    <p className="tab-content__text">{item.text}</p>
                    <a href="#" className="tab-content__link">
                      Подробнее
                    </a>
                  </article>
                  <img
                    className="tab-content__img"
                    width="750"
                    height="500"
                    src={item.image}
                    alt="Каменный дом"
                  />
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="faq">
          <h2 className="faq__title">Частые вопросы</h2>

          <ul className="faq__list">
            {faqData.map(({ question, answer }, index) => (
              <li
                className={`faq__item${defineItemlass(
                  accordionHeights[index]
                )}`}
                key={question}
              >
                <button
                  className="faq__question"
                  type="button"
                  onClick={() => accordionButtonHandler(index)}
                >
                  {question}
                </button>
                <div
                  className="faq__answer"
                  ref={(el) => (ContentRefs.current[index] = el)}
                  style={{
                    maxHeight: accordionHeights[index],
                  }}
                >
                  <p>{answer}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <div className="modal" ref={modal}>
          <div className="modal__wrap" ref={modalWrapper}>
            <button
              className="modal__close-btn"
              type="button"
              onClick={modalCloseHandler}
            >
              <img src={cross} alt="закрыть" />
            </button>
            <form action="#" className="modal__form callback">
              <input
                className="callback__field"
                type="text"
                required
                placeholder="Имя"
                disabled={!isModalOpen}
              />
              <input
                className="callback__field"
                type="email"
                required
                placeholder="Email"
                disabled={!isModalOpen}
              />
              <textarea
                className="callback__field callback__field--message"
                placeholder="Ваше сообщение"
                disabled={!isModalOpen}
              />
              <input
                className="callback__button"
                type="submit"
                value="Отправить"
                onClick={(e) => e.preventDefault()}
                disabled={!isModalOpen}
              />
            </form>
            <h2 className="modal__title">Связаться</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Page2 };
