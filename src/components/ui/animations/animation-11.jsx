import React from "react";

import "./animation-11.scss";

const Animation11 = () => {
  return (
    <div className="animation-11">
      <button className="btn btn--normal">
        <span>hover me</span>
      </button>
      <button className="btn btn--backface">
        <span>hover me too</span>
      </button>
    </div>
  );
};

export { Animation11 };
