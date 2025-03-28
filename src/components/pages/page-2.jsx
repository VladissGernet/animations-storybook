import React, { useState, useRef } from "react";

import logo from "/src/assets/page-2/logo.svg";
import headerSlide1 from "/src/assets/page-2/header-slide-1.jpg";
import headerSlide2 from "/src/assets/page-2/header-slide-2.jpg";
import headerSlide3 from "/src/assets/page-2/header-slide-3.jpg";
import cross from "/src/assets/page-2/icon-cross.svg";
import tab1 from "/src/assets/page-2/tab-1.png";
import tab2 from "/src/assets/page-2/tab-2.png";
import tab3 from "/src/assets/page-2/tab-3.png";

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

  return (
    <div className="page-2">
      <div className="container">
        <header className="header">
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
                e.target.closest("button").classList.toggle("burger--open");
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
              {/* <li
                className="tab-content__item tab-content__item--active"
              >
                <article className="tab-content__wrap">
                  <p className="tab-content__date">Срок постройки: 4 месяца</p>
                  <h3 className="tab-content__name">Каменный дом</h3>
                  <p className="tab-content__text">
                    Концепция проекта: человеколюбивое, благополучное
                    пространство. Качествами такового являются: забота,
                    близость, друзья, демократичность, индивидуальность, чувство
                    комфорта, приятные ощущения, семейный дом, органичность,
                    простота и естественность форм.
                  </p>
                  <a href="#" className="tab-content__link">
                    Подробнее
                  </a>
                </article>
                <img
                  className="tab-content__img"
                  width="750"
                  height="500"
                  src={tab1}
                  alt="Каменный дом"
                />
              </li> */}

              {/* <li id="work-2" className="tab-content__item ">
                <article className="tab-content__wrap">
                  <p className="tab-content__date">Срок постройки: 7 месяцев</p>
                  <h3 className="tab-content__name">Дом в горах</h3>
                  <p className="tab-content__text">
                    Проект наглядно демонстрирует, как разместить несколько
                    функциональных зон на открытой планировке загородного дома.
                    Зоны выделены с помощью декоративных приемов: потолочных
                    балок и деревянных панелей на стене в зоне гостиной.
                  </p>
                  <a href="#" className="tab-content__link">
                    Подробнее
                  </a>
                </article>
                <img
                  className="tab-content__img"
                  width="750"
                  height="500"
                  src={tab2}
                  alt="Каменный дом"
                />
              </li>

              <li id="work-3" className="tab-content__item">
                <article className="tab-content__wrap">
                  <p className="tab-content__date">
                    Срок постройки: 12 месяцев
                  </p>
                  <h3 className="tab-content__name">Дом c бассейном</h3>
                  <p className="tab-content__text">
                    Вилла имеет три этажа. В доме – две кухни-столовые, две
                    гостиные с каминами, две гостевые комнаты с ванными
                    комнатами и большими террасами, главная спальня с ванной и
                    гардеробной комнатами. Также здесь есть биллиардная и
                    спа-зона, где расположены хамам, финская сауна, бассейн,
                    зона релаксации и санузел.
                  </p>
                  <a href="#" className="tab-content__link">
                    Подробнее
                  </a>
                </article>
                <img
                  className="tab-content__img"
                  width="750"
                  height="500"
                  src={tab3}
                  alt="Каменный дом"
                />
              </li> */}
            </ul>
          </div>
        </section>

        <section className="faq">
          <h2 className="faq__title">Частые вопросы</h2>

          <ul className="faq__list">
            <li className="faq__item">
              <button className="faq__question" type="button">
                Сколько стоит построить дом?
              </button>
              <div className="faq__answer">
                <p>
                  Все очень индивидуально и зависит от ваших желаний,
                  материалов, места постройки и др. Обычно мы обсуждаем с
                  клиентами первоначальную идею и концпецию, после чего
                  предоставляем первоначальный расчет, на который можно
                  ориентироваться.
                </p>
              </div>
            </li>

            <li className="faq__item">
              <button className="faq__question" type="button">
                Вы даете гарантию на свои дома?
              </button>
              <div className="faq__answer">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Cupiditate tempora recusandae laudantium, id labore minima rem
                  quae, quo voluptatem facere commodi enim iure error. Porro
                  quibusdam labore id magni voluptatem.
                </p>
              </div>
            </li>

            <li className="faq__item">
              <button className="faq__question" type="button">
                Из каких материалов строите дома?
              </button>
              <div className="faq__answer">
                <p>
                  Cupiditate tempora recusandae laudantium, id labore minima rem
                  quae, quo voluptatem facere commodi enim iure error. Porro
                  quibusdam labore id magni voluptatem.
                </p>
              </div>
            </li>

            <li className="faq__item">
              <button className="faq__question" type="button">
                Как с вами связаться?
              </button>
              <div className="faq__answer">
                <p>
                  Cupiditate tempora recusandae laudantium, id labore minima rem
                  quae, quo voluptatem facere commodi enim iure error.
                </p>
              </div>
            </li>
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
