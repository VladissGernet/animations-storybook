import React, { useState } from 'react';

import './block-1.scss';

const Block1 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  console.log(isModalOpen);

  return (
    <div className='block-1'>
      <button
        type="button"
        className="btn btn--close-modal"
        onClick={() => setIsModalOpen(true)}
      >
          open modal
      </button>

      <div
        className={`modal ${isModalOpen ? 'modal--open' : ''}`}
      >
          <div className="modal-wrapper">
            <h2 className="modal-title">Hello!</h2>
            <button
              type="button"
              className="btn btn--close-modal"
              onClick={() => setIsModalOpen(false)}
            >
              ok
            </button>
          </div>
      </div>
    </div>
  )
}

export { Block1 };
