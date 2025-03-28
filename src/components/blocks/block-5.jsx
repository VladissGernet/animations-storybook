import React, { useState, useRef } from "react";

const accordeonData = [
  {
    title: "First Header",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
        reprehenderit eum exercitationem sit harum, adipisci iusto a tenetur
        quis voluptates aspernatur nam. Consequatur beatae, animi quidem veniam
        cupiditate possimus dolore.`,
  },
  {
    title: "Second Header",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
  },
  {
    title: "Third Header",
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi, fuga.
        Obcaecati amet eum odio dolor esse beatae officia, impedit sed.`,
  },
];

import "./block-5.scss";

const Block5 = () => {
  const [accordionHeights, setAccordionHeights] = useState(
    Array.from({ length: accordeonData.length }, () => 0)
  );

  const ContentRefs = useRef([]);

  const accordionButtonHandler = (index) => {
    const newAccordionStates = [...accordionHeights];
    newAccordionStates[index] === 0
      ? (newAccordionStates[index] = ContentRefs.current[index].scrollHeight)
      : (newAccordionStates[index] = 0);
    setAccordionHeights(newAccordionStates);
  };

  const defineButtonClass = (height) =>
    height === 0 ? "" : " accordeon__title--active";

  const defineDescrClass = (height) =>
    height === 0 ? "" : " accordeon__descr--visible";

  return (
    <section className="block-5 accordeon">
      {accordeonData.map(({ title, description }, index) => (
        <div className="accordeon__item" key={title}>
          <button
            type="button"
            className={`
              accordeon__title${defineButtonClass(accordionHeights[index])}
            `}
            onClick={() => accordionButtonHandler(index)}
          >
            {title}
          </button>
          <div
            className={`accordeon__descr${defineDescrClass(
              accordionHeights[index]
            )}`}
            ref={(el) => (ContentRefs.current[index] = el)}
            style={{
              maxHeight: accordionHeights[index],
            }}
          >
            {description}
          </div>
        </div>
      ))}
    </section>
  );
};

export { Block5 };

// Код из гайда.

// const accordeon = document.querySelector(".accordeon");
// const accordeonTitles = accordeon.querySelectorAll(".accordeon__title");

// accordeonTitles.forEach.call(accordeonTitles, function (accordeonTitle) {
//   accordeonTitle.addEventListener("click", function () {
//     const clickedDescr =
//       accordeonTitle.parentElement.querySelector(".accordeon__descr");

//     accordeonTitle.classList.toggle("accordeon__title--active");
//     clickedDescr.classList.toggle("accordeon__descr--visible");

//     if (clickedDescr.classList.contains("accordeon__descr--visible")) {
//       clickedDescr.style.maxHeight = clickedDescr.scrollHeight + "px";
//     } else {
//       clickedDescr.style.maxHeight = null;
//     }
//   });
// });
