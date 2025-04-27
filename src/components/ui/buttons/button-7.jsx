import React from "react";

import "./button-7.scss";

const Button7 = () => {
  return (
    <div className="button-7">
      <div className="wrapper">
        <button className="icon-wrapper arrow" type="button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="55"
            height="55"
            viewBox="0 0 55 55"
          >
            <path
              d="M27.5 2C41.6 2 53 13.4 53 27.5S41.6 53 27.5 53 2 41.6 2 27.5 13.4 2 27.5 2M27.5 0C12.3 0 0 12.3 0 27.5S12.3 55 27.5 55 55 42.7 55 27.5 42.7 0 27.5 0L27.5 0z"
              fill="currentColor"
            />
            <polygon
              className="arrow-1"
              points="34.9 31 28.5 35 28.5 17 26.5 17 26.5 35 20.1 31 19 32.7 27.5 38 36 32.7"
              fill="currentColor"
            />
            <polygon
              className="arrow-2"
              points="34.9 31 28.5 35 28.5 17 26.5 17 26.5 35 20.1 31 19 32.7 27.5 38 36 32.7"
              fill="currentColor"
            />
          </svg>
        </button>

        <button className="icon-wrapper burger" type="button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 900 900"
            width="55"
            height="55"
          >
            <path
              className="bottom"
              d="M145 609l609 0c74,0 74,111 0,111l-609 0c-74,0 -74,-111 0,-111z"
              fill="currentColor"
            />
            <path
              className="middle"
              d="M146 394c203,0 406,0 609,0 74,0 74,111 0,111 -203,0 -406,0 -609,0 -74,0 -74,-111 0,-111z"
              fill="currentColor"
            />
            <path
              className="top"
              d="M146 179l609 0c74,0 74,111 0,111l-609 0c-74,0 -74,-111 0,-111z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export { Button7 };
