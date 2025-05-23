import React, { useEffect, useRef } from "react";
import anime from "animejs";

import "./svg-7.scss";

const Svg7 = () => {
  const iconSmall = useRef(null);
  const iconLarge = useRef(null);
  const loader = useRef(null);

  const PATHS = {
    smallExpandedD:
      "M9,2 L13,2 C14,2 14,2 14,2 C14,2 14,4 14,5.5 L10.0518656,9.56376043 C9.47093627,10.1454132 8.52906373,10.1454132 7.94813439,9.56376043 L4,5.5 C4,4 4,2 4,2 C4,2 4,2 5,2 L9,2 Z",
    largeExpandedD:
      "M9,18 L4,18 C4,16.9954032 4,18 4,16.9954032 C4,15.9908065 4,1.0027958 4,1.77635684e-15 L8,1.77635684e-15 C9,3.81014664e-14 9,1.77635684e-15 10,2.45749601e-14 L14,1.77635684e-15 C14,1 14,15.9908065 14,16.9954032 C14,18 14,16.9954032 14,18 L9,18 Z",
    largeInitialD:
      "M9,3.59576602 L3.03942822,9.56376043 C2.45849888,10.1454132 1.51662634,10.1454132 0.935697001,9.56376043 C0.354767666,8.98210767 0.354767666,8.03906222 0.935697001,7.45740946 L7.94813439,0.436239569 C8.52906373,-0.14541319 9.47093627,-0.14541319 10.0518656,0.436239569 L17.064303,7.45740946 C17.6452323,8.03906222 17.6452323,8.98210767 17.064303,9.56376043 C16.4833737,10.1454132 15.5415011,10.1454132 14.9605718,9.56376043 L9,3.59576602 Z",
    smallInitialD:
      "M9,6.40423398 L14.9605718,0.436239569 C15.5415011,-0.14541319 16.4833737,-0.14541319 17.064303,0.436239569 C17.6452323,1.01789233 17.6452323,1.96093778 17.064303,2.54259054 L10.0518656,9.56376043 C9.47093627,10.1454132 8.52906373,10.1454132 7.94813439,9.56376043 L0.935697001,2.54259054 C0.354767666,1.96093778 0.354767666,1.01789233 0.935697001,0.436239569 C1.51662634,-0.14541319 2.45849888,-0.14541319 3.03942822,0.436239569 L9,6.40423398 Z",
  };

  useEffect(() => {
    if (iconSmall.current && iconLarge.current) {
      anime({
        targets: iconSmall.current,
        d: [
          {
            value: PATHS.smallInitialD,
          },
          {
            value: PATHS.smallExpandedD,
          },
        ],
        easing: "easeInOutSine",
        duration: 1000,
        loop: true,
        direction: "alternate",
      });
      anime({
        targets: iconLarge.current,
        d: [
          {
            value: PATHS.largeInitialD,
          },
          {
            value: PATHS.largeExpandedD,
          },
        ],
        easing: "easeInOutSine",
        duration: 1000,
        loop: true,
        direction: "alternate",
      });
      anime({
        targets: loader.current,
        rotate: 50,
        easing: "easeInOutSine",
        duration: 1000,
        loop: true,
        direction: "alternate",
      });
    }
  }, []);

  return (
    <div className="svg-7">
      <div className="loader" ref={loader}>
        <svg className="large-elem" viewBox="0 0 18 18" width="18" height="18">
          <path
            ref={iconLarge}
            className="large"
            fill="currentColor"
            d="M9,3.59576602 L3.03942822,9.56376043 C2.45849888,10.1454132 1.51662634,10.1454132 0.935697001,9.56376043 C0.354767666,8.98210767 0.354767666,8.03906222 0.935697001,7.45740946 L7.94813439,0.436239569 C8.52906373,-0.14541319 9.47093627,-0.14541319 10.0518656,0.436239569 L17.064303,7.45740946 C17.6452323,8.03906222 17.6452323,8.98210767 17.064303,9.56376043 C16.4833737,10.1454132 15.5415011,10.1454132 14.9605718,9.56376043 L9,3.59576602 Z"
          />
        </svg>
        <svg className="small-elem" viewBox="0 0 18 10" width="18" height="10">
          <path
            ref={iconSmall}
            className="small"
            fill="currentColor"
            d="M9,6.40423398 L14.9605718,0.436239569 C15.5415011,-0.14541319 16.4833737,-0.14541319 17.064303,0.436239569 C17.6452323,1.01789233 17.6452323,1.96093778 17.064303,2.54259054 L10.0518656,9.56376043 C9.47093627,10.1454132 8.52906373,10.1454132 7.94813439,9.56376043 L0.935697001,2.54259054 C0.354767666,1.96093778 0.354767666,1.01789233 0.935697001,0.436239569 C1.51662634,-0.14541319 2.45849888,-0.14541319 3.03942822,0.436239569 L9,6.40423398 Z"
          />
        </svg>
      </div>
    </div>
  );
};

export { Svg7 };
