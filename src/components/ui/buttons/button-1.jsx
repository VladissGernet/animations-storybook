import React from 'react';

import './button-1.css';

const Button = () => {
  return (
    <>
    <button className="button-1 button--1">
      Clip-path 1
    </button>
    <button className="button-1 button--2">
      Clip-path 2
    </button>
    <button className="button-1 button--3">
      Clip-path 3
    </button>
    <button className="button-1 button--4">
      Clip-path 4
    </button>
    <hr className="line" />
    <button className="button-1 button--5">
      Transform 1
    </button>
    <button className="button-1 button--6">
      Transform 2
    </button>
    <button className="button-1 button--7">
      Transform 3
    </button>
    <button className="button-1 button--8">
      Transform 4
    </button>
    <hr className="line" />
    <p style={{color: '#ffffff'}}>
      При обманчивой на первый взгляд схожести анимаций между ними есть одно существенное отличие:
      <br />
      с помощью clip-path мы определяем видимую область блока,
      <br />
      а с помощью transform можем менять размер scale(), положение translate() и так далее, но не можем ограничить область видимости.
    </p>
    </>
  );
};

export { Button };
