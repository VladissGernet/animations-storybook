import React, { useState } from "react";

import logo from "/src/assets/block-2/logo.png";

import "./block-2.scss";

const Block2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="block-2">
      <header className="header">
        <div className={`header__nav menu ${isMenuOpen ? "menu--open" : ""}`}>
          <a
            href="#"
            className="menu__logo-link"
            onClick={(e) => e.preventDefault()}
          >
            <img src={logo} width="64" height="64" alt="logo" />
          </a>

          <button
            className="menu__burger burger"
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="burger__line"></span>
            <span className="burger__line"></span>
            <span className="burger__line"></span>
            <span className="burger__line"></span>
          </button>

          <nav className="main-nav">
            <ul className="main-nav__list">
              <li className="main-nav__item">
                <a href="#" className="main-nav__link">
                  Home
                </a>
              </li>
              <li className="main-nav__item">
                <a href="#" className="main-nav__link">
                  About Us
                </a>
              </li>
              <li className="main-nav__item">
                <a href="#" className="main-nav__link">
                  Contacts
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="header__content">
          <h1 className="header__content-title">Welcome!</h1>
        </div>
      </header>
    </div>
  );
};

export { Block2 };
