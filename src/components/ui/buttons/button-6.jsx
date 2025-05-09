import React from "react";

import "./button-6.scss";

const Button6 = () => {
  return (
    <div className="button-6">
      <div className="wrapper">
        <div className="icon-wrapper menu">
          <svg
            width="42"
            height="30"
            viewBox="0 0 17 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 13C0 12.4477 0.50368 12 1.125 12H16.875C17.4963 12 18 12.4477 18 13C18 13.5523 17.4963 14 16.875 14H1.125C0.50368 14 0 13.5523 0 13Z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 7C4 6.44772 4.50368 6 5.125 6L16.875 6C17.4963 6 18 6.44772 18 7C18 7.55229 17.4963 8 16.875 8L5.125 8C4.50368 8 4 7.55228 4 7Z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10 1C10 0.447715 10.4477 3.84529e-08 11 8.58868e-08L17 6.01208e-07C17.5523 6.48642e-07 18 0.447716 18 1C18 1.55228 17.5523 2 17 2L11 2C10.4477 2 10 1.55228 10 1Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <div className="icon-wrapper approve">
          <svg
            width="60"
            height="60"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
            fill="none"
          >
            <path
              d="M26.002,13H20V7.026C20,5.907,19.093,5,17.974,5c-0.615,0-1.198,0.28-1.582,0.76L9,15l0.001,0L9,15v10l3,2h12.473  c0.892,0,1.676-0.592,1.921-1.451l2.49-8.725C29.43,14.908,27.993,13,26.002,13z"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="2"
            />
            <rect
              fill="none"
              height="14"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="2"
              width="6"
              x="3"
              y="13"
            />
            <circle cx="6" cy="23" r="1" />
          </svg>
        </div>
        <div className="icon-wrapper run">
          <svg
            width="60"
            height="60"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.4544 6C16.4586 6 17.2726 5.10457 17.2726 4C17.2726 2.89543 16.4586 2 15.4544 2C14.4503 2 13.6362 2.89543 13.6362 4C13.6362 5.10457 14.4503 6 15.4544 6Z"
              fill="currentColor"
            />
            <path
              d="M14.3428 10.969C14.5514 11.311 14.8508 11.5742 15.2001 11.7227C15.5495 11.8712 15.9319 11.8978 16.2955 11.799L19.31 10.97L18.8709 9.02997L15.8564 9.85897L14.6027 7.79197C14.3349 7.35053 13.9192 7.04354 13.4464 6.93797L9.95002 6.16797C9.55888 6.08162 9.15277 6.13933 8.79441 6.33217C8.43606 6.52502 8.14539 6.84229 7.9673 7.23497L6.46002 10.551L8.08639 11.446L9.59366 8.12897L11.3818 8.52297L6.7582 17H2.72729V19H6.7582C7.39275 19 7.99002 18.628 8.3173 18.029L10.0609 14.833L14.76 15.867L16.4109 21.316L18.1346 20.683L16.4846 15.235C16.3827 14.9005 16.2026 14.6014 15.9622 14.3679C15.7219 14.1345 15.4298 13.9748 15.1155 13.905L12.3527 13.298L13.9637 10.344L14.3428 10.969Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <div className="icon-wrapper telegram">
          <svg
            width="60"
            height="60"
            viewBox="0 0 30 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M24.202 3.15291C24.3805 3.30222 24.4667 3.5349 24.4284 3.76448L21.8023 19.5214C21.7656 19.7411 21.6201 19.9273 21.4157 20.0159C21.2112 20.1045 20.9759 20.0833 20.7905 19.9597L12.912 14.7074C12.7589 14.6054 12.6557 14.4437 12.6274 14.2619C12.5992 14.08 12.6486 13.8947 12.7635 13.751L15.3742 10.4877L11.0142 13.3944C10.8182 13.525 10.5672 13.5407 10.3564 13.4353L5.10414 10.8092C4.8689 10.6915 4.72656 10.4449 4.74241 10.1824C4.75826 9.91983 4.92925 9.6921 5.17694 9.60364L23.56 3.03826C23.7792 2.95998 24.0234 3.00359 24.202 3.15291ZM7.06747 10.3228L10.6029 12.0905L18.1643 7.0495C18.4337 6.86994 18.7937 6.91349 19.0124 7.1521C19.2312 7.3907 19.2434 7.75314 19.0412 8.00591L14.2362 14.0121L20.674 18.3039L22.9496 4.65058L7.06747 10.3228Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <div className="icon-wrapper tel">
          <svg
            width="60"
            height="60"
            viewBox="0 0 28 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.9999 1.79688C9.77412 1.79688 5.53821 2.51113 4.00125 3.93476C2.72606 5.11583 2.30098 7.20233 2.15769 8.52341C2.15769 8.52341 2.13794 8.65396 2.13794 8.71011C2.13794 9.22816 2.58266 9.64365 3.12639 9.64365C3.19063 9.64365 5.56797 9.46157 7.00125 9.34956C7.03574 9.34484 7.0705 9.34021 7.10499 9.33091C7.63881 9.31699 8.0689 8.90612 8.0689 8.39738L8.07369 6.55816C8.07369 5.98869 8.56318 5.53117 9.1662 5.53117H18.8335C19.4366 5.53117 19.9261 5.98863 19.9261 6.55816L19.931 8.39738C19.931 8.90612 20.361 9.31699 20.8948 9.33091C20.9291 9.34026 20.9638 9.34484 20.9987 9.34956C22.4321 9.46151 24.8094 9.64365 24.8734 9.64365C25.4169 9.64365 25.8619 9.22816 25.8619 8.71011C25.8619 8.65396 25.8422 8.52341 25.8422 8.52341C25.6988 7.20233 25.2742 5.11588 23.999 3.93476C22.4615 2.51113 18.2256 1.79688 13.9999 1.79688ZM13.9999 13.9335C12.9076 13.9335 12.0229 14.769 12.0229 15.8006C12.0229 16.8322 12.9076 17.6677 13.9999 17.6677C15.0922 17.6677 15.9768 16.8322 15.9768 15.8006C15.9768 14.769 15.0922 13.9335 13.9999 13.9335ZM12.5171 9.73228V8.56533C12.5171 7.92121 11.9635 7.39839 11.2815 7.39839C10.5996 7.39839 10.046 7.92126 10.046 8.56533V9.73228L3.37826 16.4588C2.9188 16.8837 2.63205 17.4763 2.63205 18.13V20.0018C2.63205 21.0334 3.51682 21.8689 4.60906 21.8689H5.10334V23.036C5.10334 23.6801 5.65702 24.2028 6.33898 24.2028C7.02094 24.2028 7.57457 23.6801 7.57457 23.036V21.8689H20.4252V23.036C20.4252 23.6801 20.9786 24.2028 21.6609 24.2028C22.3428 24.2028 22.8963 23.6801 22.8963 23.036V21.8689H23.3906C24.4829 21.8689 25.3676 21.0334 25.3676 20.0018V18.13C25.3676 17.4762 25.0809 16.8836 24.6214 16.4588L17.9539 9.73228V8.56533C17.9539 7.92121 17.4002 7.39839 16.7182 7.39839C16.0363 7.39839 15.4827 7.92126 15.4827 8.56533V9.73228H12.5171ZM13.9999 12.0663C16.1845 12.0663 17.9539 13.7374 17.9539 15.8006C17.9539 17.8638 16.1845 19.5351 13.9999 19.5351C11.8153 19.5351 10.0459 17.8639 10.0459 15.8006C10.0459 13.7374 11.8153 12.0663 13.9999 12.0663Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <div className="icon-wrapper calendar">
          <svg
            width="60"
            height="60"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 2V6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 2V6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 10H21"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export { Button6 };
