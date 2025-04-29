import React, { useRef } from "react";

import "./button-8.scss";

const Button8 = () => {
  const dropdown = useRef(null);
  const dropdownButton = useRef(null);
  const dropdownContent = useRef(null);
  const dropdownText = useRef(null);

  const onDropdownClick = () => {
    dropdown.current.classList.toggle("active");
  };

  const onDropdownContentClick = (evt) => {
    const button = evt.target.closest("button");

    if (!button) return;

    dropdown.current.classList.remove("active");
    dropdownText.current.textContent = button.textContent;
  };

  return (
    <div className="button-8">
      <div className="dropdown" ref={dropdown}>
        <button
          className="dropdown__button"
          type="button"
          ref={dropdownButton}
          onClick={onDropdownClick}
        >
          <span ref={dropdownText}>Выбрать любимую вкусняшку</span>
          <svg
            className="dropdown__chevron"
            width="15"
            height="15"
            viewBox="0 0 15 15"
          >
            <path
              d="M1.5 4.5L7.5 10.5L13.5 4.5"
              fill="none"
              stroke="currentColor"
            />
          </svg>
        </button>
        <div
          className="dropdown__content"
          ref={dropdownContent}
          onClick={onDropdownContentClick}
        >
          <ul>
            <li className="dropdown__content-item dropdown__content-item--chocolate">
              <button type="button">Шоколад</button>
            </li>

            <li className="dropdown__content-item dropdown__content-item--sweets">
              <button type="button">Конфетки</button>
            </li>

            <li className="dropdown__content-item dropdown__content-item--potato">
              <button type="button">Картошечка</button>
            </li>
            <li className="dropdown__content-item dropdown__content-item--fizzy">
              <button type="button">Газировка</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export { Button8 };
