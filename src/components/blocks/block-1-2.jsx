import React, { useState, useRef } from "react";

import "./block-1-2.scss";

const Block1_2 = () => {
  const [, setIsModalOpen] = useState(false);
  const modal = useRef(null);
  const modalWrapper = useRef(null);

  const onInAnimationEnd = () => {
    modalWrapper.current.classList.remove("modal__wrapper--modal-in");
    modalWrapper.current.removeEventListener("animationend", onInAnimationEnd);
  };

  const modalOpenHandler = () => {
    setIsModalOpen(true);
    modal.current.classList.add("modal--open");
    modalWrapper.current.classList.remove("modal__wrapper--modal-out");
    modalWrapper.current.classList.add("modal__wrapper--modal-in");
    modalWrapper.current.addEventListener("animationend", onInAnimationEnd);
  };

  const onOutAnimationEnd = () => {
    modal.current.classList.remove("modal--open");
    modalWrapper.current.removeEventListener("animationend", onOutAnimationEnd);
  };

  const modalCloseHandler = () => {
    setIsModalOpen(false);
    modalWrapper.current.classList.add("modal__wrapper--modal-out");
    modalWrapper.current.addEventListener("animationend", onOutAnimationEnd);
  };

  return (
    <div className="block-1-2">
      <button type="button" className="btn" onClick={modalOpenHandler}>
        open modal
      </button>

      <div className="modal" ref={modal}>
        <div className="modal__wrapper" ref={modalWrapper}>
          <h2 className="modal-title">Hello!</h2>
          <button type="button" className="btn" onClick={modalCloseHandler}>
            ok
          </button>
        </div>
      </div>
    </div>
  );
};

export { Block1_2 };
