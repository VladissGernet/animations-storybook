import React from 'react';

import './button-4.scss';

const Button4 = () => (
  <div className="button-4">
    <button className="btn btn--1" type="button">Button №1</button>
    <button className="btn btn--2" type="button">Button №2</button>
    <button className="btn btn--3" type="button">
      <span data-hover="hovered">Button №3</span>
    </button>
    <button className="btn btn--4" type="button">Button №4</button>
    <button className="btn btn--5" type="button">Button №5</button>
  </div>
);

export { Button4 };
