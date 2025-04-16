import React from "react";

import "./page-4.scss";

import about1 from "/src/assets/page-4/about-1.jpg";
import about2 from "/src/assets/page-4/about-2.jpg";
import about3 from "/src/assets/page-4/about-3.jpg";
import headerBg from "/src/assets/page-4/header-bg.jpg";
import logo from "/src/assets/page-4/logo.svg";

const Page4 = () => {
  return (
    <div className="page-4">
      <div className="wrap">
        <header className="header">
          <img className="header__bg" src={headerBg} alt="background" />
          <div className="header__nav menu">
            <a href="#" className="menu__logo-link">
              <img src={logo} alt="logo" />
            </a>

            <button className="menu__burger burger" type="button">
              <span className="burger__line"></span>
              <span className="burger__line"></span>
              <span className="burger__line"></span>
              <span className="burger__line"></span>
            </button>
          </div>

          <div className="header__box">
            <h1 className="header__title">Галерея фотографий наших проектов</h1>
            <p className="header__text">
              На этой странице подобраны фотографии наших лучших <br />
              проектов. Ваш может быть таким же прекрасным.
            </p>
            <a href="#" className="header__link">
              <span className="visually-hidden">Смотреть все</span>
              <svg
                width="19"
                height="14"
                viewBox="0 0 19 14"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17 7.00008L17.7071 6.29297L18.4142 7.00008L17.7071 7.70719L17 7.00008ZM1 8.00008C0.447715 8.00008 0 7.55237 0 7.00008C0 6.4478 0.447715 6.00008 1 6.00008V8.00008ZM12.3738 0.959641L17.7071 6.29297L16.2929 7.70719L10.9596 2.37385L12.3738 0.959641ZM17.7071 7.70719L12.3738 13.0405L10.9596 11.6263L16.2929 6.29297L17.7071 7.70719ZM17 8.00008H1V6.00008H17V8.00008Z" />
              </svg>
            </a>
          </div>
        </header>

        <main className="content">
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
        </main>
      </div>
    </div>
  );
};

export { Page4 };
