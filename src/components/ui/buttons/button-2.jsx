import React from 'react';

import './button-2.css';

const Button2 = () => (
  <>
    <button className="button-2 button-2--1">
      Transform
    </button>
    <button className="button-2 button-2--2">
      Transform
    </button>
    <button className="button-2 button-2--3">
      <span className="button-2__reaction">Yes</span>
      <span className='button-2__content'>Transform</span>
    </button>
    <button className="button-2 button-2--4">
      <span className="button-2__reaction">Yes</span>
      <span className='button-2__content'>Transform</span>
    </button>
  </>
);

export { Button2 };
