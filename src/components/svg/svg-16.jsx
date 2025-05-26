import React from "react";

import "./svg-16.scss";

const Svg16 = () => {
  const data = [
    {
      label: 2008,
      count: 30.4,
    },
    {
      label: 2009,
      count: 39.6,
    },
    {
      label: 2010,
      count: 44.5,
    },
    {
      label: 2011,
      count: 52.8,
    },
    {
      label: 2012,
      count: 63.6,
    },
    {
      label: 2013,
      count: 68.4,
    },
    {
      label: 2014,
      count: 80.3,
    },
    {
      label: 2015,
      count: 85.2,
    },
    {
      label: 2016,
      count: 87.6,
    },
    {
      label: 2017,
      count: 90.9,
    },
    {
      label: 2018,
      count: 95.1,
    },
  ];

  return (
    <div className="svg-16">
      <div className="wrapper">
        <svg
          className="stats"
          width="900"
          height="400"
          viewBox="0 0 900 400"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g className="rects-wrapper"></g>
          <g className="labels"></g>
        </svg>
      </div>
    </div>
  );
};

export { Svg16 };
