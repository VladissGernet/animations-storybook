import React, { useEffect, useRef } from "react";
import anime from "animejs";

import "./svg-9.scss";

const Svg9 = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    const motionPaths = svgRef.current.querySelectorAll("svg.motion path");
    const phpPaths = svgRef.current.querySelectorAll("svg.php path");

    anime({
      targets: motionPaths,
      duration: 2000,
      delay: anime.stagger(350),
      easing: "easeInOutExpo",
      strokeDashoffset: [anime.setDashoffset, 0],
    });

    anime({
      targets: phpPaths,
      duration: 2000,
      delay: anime.stagger(350),
      easing: "easeInOutExpo",
      strokeDashoffset: [anime.setDashoffset, 0],
    });
  }, []);

  return (
    <div className="svg-9" ref={svgRef}>
      <div className="wrapper">
        <svg
          className="motion"
          xmlns="http://www.w3.org/2000/svg"
          width="205"
          height="118"
          viewBox="0 0 205 118"
          fill="none"
        >
          <path
            d="M3 55.5286C8.43655 49.2385 14.7452 43.6721 21.6476 39.052C23.1876 38.0129 25.4513 37.1037 26.6945 38.4768C27.381 39.2375 27.3995 40.3693 27.381 41.3899C27.1954 49.5725 27.0099 57.7366 26.8058 65.9193C32.0382 56.9017 39.2932 49.053 47.884 43.1155C46.9934 48.8118 46.1213 54.4895 45.2307 60.1859C48.552 52.4671 54.471 45.8987 61.8001 41.7981C60.4271 48.1252 59.054 54.4524 57.6624 60.7611C61.9114 51.3909 70.6508 44.1916 80.6703 41.8352C84.9565 40.8332 89.9106 40.8332 93.2319 43.7092C101.433 50.8342 92.4712 61.93 84.6039 64.4906C77.9613 66.6615 70.9847 61.8372 74.6029 54.7679C76.3842 51.261 79.3158 48.3479 82.7299 46.4368C88.0551 43.4494 101.192 43.6721 107.241 44.47C110.655 76.2914 107.705 85.6987 107.055 115.182"
            stroke="white"
            strokeWidth="5.56644"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M107.093 3.00003C106.425 12.5557 106.629 26.8615 107.575 36.3986"
            stroke="white"
            strokeWidth="5.56644"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M118.856 44.8967C117.91 53.0609 116.518 56.3636 118.8 64.2679C119.023 65.0287 119.338 65.8822 120.081 66.1234C120.916 66.4017 121.732 65.7523 122.381 65.1586C126.241 61.5218 130.527 56.7718 133.143 53.4691C132.939 56.846 135.481 60.056 138.71 61.0394C141.938 62.0414 145.594 61.0023 148.173 58.8314C150.752 56.6605 152.347 53.4505 153.034 50.1478C153.869 46.1214 153.331 41.5569 150.529 38.5325C145.482 33.0959 131.844 38.885 132.549 46.3997C132.624 45.8987 132.772 47.0491 132.828 46.6409"
            stroke="white"
            strokeWidth="5.56644"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M124.478 26.6203C123.235 29.9972 121.973 33.3928 120.73 36.7697"
            stroke="white"
            strokeWidth="5.56644"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M132.865 47.012C143.163 47.7542 164.241 38.9592 167.34 36.51C166.95 44.6184 166.004 52.6898 164.501 60.6683C166.876 54.1556 170.921 48.2552 176.116 43.6907C178.176 41.8909 180.643 40.2209 183.371 40.2952C183.872 40.3137 184.41 40.4065 184.744 40.7776C185.134 41.2043 185.115 41.8352 185.078 42.4104C184.781 47.7913 184.28 53.1722 183.575 58.516C183.148 61.8373 186.952 64.0082 189.587 61.9486C193.91 58.5531 198.066 55.1761 202 50.9456"
            stroke="white"
            strokeWidth="5.56644"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <svg
          className="php"
          xmlns="http://www.w3.org/2000/svg"
          width="163"
          height="116"
          viewBox="0 0 163 116"
          fill="none"
        >
          <path
            d="M23.1334 1C22.0612 5.52278 20.0922 10.8059 18.3961 14.7828C29.0013 14.2955 39.548 14.003 50.0166 13.9445C55.5727 13.9055 61.3821 13.9835 65.6319 15.6601C68.9655 16.9662 70.876 20.0269 67.7569 22.2883C66.3143 23.341 64.1698 23.9259 62.1424 24.4327C46.1957 28.3122 29.3912 29.5403 14.2827 27.9807C12.0214 41.861 10.9102 44.9607 3.34619 58.841"
            stroke="white"
            strokeWidth="5.84843"
            strokeMiterlimit="10"
          />
          <path
            d="M39.8598 28.4292C37.3449 49.4445 34.9471 60.3617 23.8936 83.8528"
            stroke="white"
            strokeWidth="5.84843"
            strokeMiterlimit="10"
          />
          <path
            d="M38.3975 45.2922C50.4452 43.6936 81.1495 43.2647 92.5929 43.986C97.3691 26.3627 101.619 19.8905 100.118 2.87154"
            stroke="white"
            strokeWidth="5.84843"
            strokeMiterlimit="10"
          />
          <path
            d="M72.8449 31.8408C83.1382 30.7296 142.032 19.0912 128.561 45.3506C123.902 54.4546 108.15 54.0843 101.444 54.8251C94.4061 55.6049 65.3784 55.5854 58.4773 55.7998C55.67 61.8822 50.8743 85.1589 47.9111 92.3915"
            stroke="white"
            strokeWidth="5.84843"
            strokeMiterlimit="10"
          />
          <path
            d="M87.9531 55.4099C86.2961 60.5565 84.9704 64.6309 83.3134 69.797C82.3386 72.8577 81.4224 76.1913 83.8787 78.4527C86.452 80.8311 91.8911 81.299 96.9207 81.5135C111.23 82.1373 113.842 81.2014 116.493 80.909C115.753 83.5603 111.503 94.8088 110.898 96.2124C108.384 101.963 102.711 106.662 92.3784 110.951C83.9762 114.44 45.591 110.697 18.8247 104.244"
            stroke="white"
            strokeWidth="5.84843"
            strokeMiterlimit="10"
          />
          <path
            d="M154.547 80.5191C151.038 89.8571 149.303 94.8868 146.281 104.244"
            stroke="white"
            strokeWidth="5.84843"
            strokeMiterlimit="10"
          />
          <path
            d="M126.689 74.3004C131.816 70.9083 137.859 66.9117 143.006 63.5196"
            stroke="white"
            strokeWidth="5.84843"
            strokeMiterlimit="10"
          />
          <path
            d="M144.683 74.3004C149.81 70.9083 155.853 66.9117 161 63.5196"
            stroke="white"
            strokeWidth="5.84843"
            strokeMiterlimit="10"
          />
          <path
            d="M134.858 81.7473L126.884 104.244"
            stroke="white"
            strokeWidth="5.84843"
            strokeMiterlimit="10"
          />
        </svg>
      </div>
    </div>
  );
};

export { Svg9 };
