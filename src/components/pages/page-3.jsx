import React from "react";

import "./page-3.scss";

import product1 from "/src/assets/page-3/product-1.png";
import product2 from "/src/assets/page-3/product-2.png";
import product3 from "/src/assets/page-3/product-3.png";
import background1 from "/src/assets/page-3/bg-1.svg";
import background2 from "/src/assets/page-3/bg-2.svg";

const Page3 = () => {
  return (
    <div className="page-3">
      <section className="products">
        <div className="wrap">
          <h1 className="products__title">Каталог продукции</h1>
          <p className="products__text">
            На этой странице мы подобрали для вас лучшие предметы мебели,
            которые используем при строительстве своих домов. Отличное качество
            и низкая цена. Здесь вы найдете все, что нужно для обустройства дома
            и территории.
          </p>

          <ul className="products__list">
            <li className="products__item product">
              <div className="product__wrap">
                <div
                  className="product__front"
                  style={{
                    backgroundImage: `url(${background1}), url(${background2})`,
                  }}
                >
                  <div className="product__inner product__inner--front">
                    <span className="product__label">Для улицы</span>
                    <img
                      className="product__image"
                      src={product1}
                      alt="Лавка уличная"
                    />
                  </div>
                </div>

                <div className="product__back">
                  <div className="product__inner product__inner--back">
                    <h3 className="product__name">Лавка уличная</h3>
                    <p className="product__desc">
                      Сделана из дерева, отлично подойдет для веранд и
                      придомовых территорий
                    </p>
                    <a href="#" className="product__link">
                      Подробнее
                    </a>
                  </div>
                </div>
              </div>
            </li>

            <li className="products__item product">
              <div className="product__wrap">
                <div
                  className="product__front"
                  style={{
                    backgroundImage: `url(${background1}), url(${background2})`,
                  }}
                >
                  <div className="product__inner product__inner--front">
                    <span className="product__label">Для улицы</span>
                    <img
                      className="product__image"
                      src={product2}
                      alt="Лампа на забор"
                    />
                  </div>
                </div>

                <div className="product__back">
                  <div className="product__inner product__inner--back">
                    <h3 className="product__name">Лампа на забор</h3>
                    <p className="product__desc">
                      Сделана из меди, отлично подойдет для каменного забора.
                    </p>
                    <a href="#" className="product__link">
                      Подробнее
                    </a>
                  </div>
                </div>
              </div>
            </li>

            <li className="products__item product">
              <div className="product__wrap">
                <div
                  className="product__front"
                  style={{
                    backgroundImage: `url(${background1}), url(${background2})`,
                  }}
                >
                  <div className="product__inner product__inner--front">
                    <span className="product__label">Для улицы</span>
                    <img
                      className="product__image"
                      src={product3}
                      alt="Стол для беседки"
                    />
                  </div>
                </div>

                <div className="product__back">
                  <div className="product__inner product__inner--back">
                    <h3 className="product__name">Стол для беседки</h3>
                    <p className="product__desc">
                      Стол из масива дуба, может стоять и в закрытом помещении,
                      и на улице.
                    </p>
                    <a href="#" className="product__link">
                      Подробнее
                    </a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export { Page3 };
