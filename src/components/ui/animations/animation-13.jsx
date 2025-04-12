import React from "react";

import "./animation-13.scss";

import image from "/src/assets/animation-10/image-1.jpg";

const Animation13 = () => {
  return (
    <div className="animation-13">
      <div className="wrapper">
        <article className="card">
          <div className="card__container">
            <section
              className="card__front"
              style={{ backgroundImage: `url(${image})` }}
            >
              <div className="card__inner">
                <p className="card__title">Diligord</p>
                <p>Lorem ipsum</p>
              </div>
            </section>

            <section className="card__back">
              <div className="card__inner">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Alias cum repellat velit quae suscipitc.
                </p>
              </div>
            </section>
          </div>
        </article>
      </div>
    </div>
  );
};

export { Animation13 };
