import React from "react";

import "./block-7.scss";

const Block7 = () => {
  return (
    <div className="block-7">
      <svg xmlns="http://www.w3.org/2000/svg" width="100%">
        <pattern
          id="honey"
          width="180"
          height="104"
          patternUnits="userSpaceOnUse"
        >
          <g fill="none" stroke="#808" strokeWidth="15">
            <path
              id="elem"
              d="M90 0H30L0 52l30 52h60l30-52z"
              stroke="#CA510C"
            />
            <path d="M120 52h60" stroke="#CA510C" />
            {/*
              Чтобы сгладить неровности, воспользуемся хаком: продублируем первый контур с помощью
              use, но со смещением. Мы как бы наложим ровный контур на неровности.
            */}
            <use href="#elem" x="180" />
          </g>
        </pattern>
        <rect fill="url(#honey)" width="100%" height="100%"></rect>
      </svg>
    </div>
  );
};

export { Block7 };
