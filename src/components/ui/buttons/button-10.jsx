import React from "react";

import "./button-10.scss";

const Button10 = () => {
  return (
    <div className="button-10">
      <svg width="57" height="54" viewBox="0 0 600 600">
        <g id="likeWrapper">
          <path
            fill="transparent"
            stroke="#D75A4A"
            strokeWidth="30"
            d="M448.069,57.839c-72.675-23.562-150.781,15.759-175.721,87.898C247.41,73.522,169.303,34.277,96.628,57.839 C23.111,81.784-16.975,160.885,6.894,234.708c22.95,70.38,235.773,258.876,263.006,258.876 c27.234,0,244.801-188.267,267.751-258.876C561.595,160.732,521.509,81.631,448.069,57.839z"
            id="like"
          />
          <animate
            href="#like"
            begin="likeWrapper.click"
            attributeType="CSS"
            attributeName="fill"
            dur="0.2s"
            to="#D75A4A"
            fill="freeze"
          />
        </g>
      </svg>
    </div>
  );
};

export { Button10 };
