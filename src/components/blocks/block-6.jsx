import React, { useState } from "react";

import "./block-6.scss";

const TabsContent = [
  {
    title: "London",
    description: `London is the capital of Great Britain. It is one of the
      greatest cities in the world. It is an important business and
      financial centre. It is an intellectual centre, too. Everywhere
      in London, there are open spaces: Hyde Park and Regent Park are
      the largest. The City is the oldest part of London.`,
  },
  {
    title: "Paris",
    description: `Paris is the capital of France. It is one of the most
      beautiful cities in the world. It is an important business and
      financial centre. It is an intellectual centre, too. It is the
      oldest city in the world.`,
  },
  {
    title: "Barcelona",
    description: `Barcelona is the capital of Spain. It is one of the most
      beautiful cities in the world. It is an important business and
      financial centre. It is an intellectual centre, too. It is the
      oldest city in the world.`,
  },
  {
    title: "Madrid",
    description: `Madrid is the capital of Spain. It is one of the most
      beautiful cities in the world. It is an important business and
      financial centre. It is an intellectual centre, too. It is the
      oldest city in the world.`,
  },
];

const Block6 = () => {
  const [activeTab, setActiveTab] = useState("London");

  return (
    <div className="block-6">
      <section className="wrapper">
        <div className="content">
          <div className="tabs">
            {TabsContent.map(({ title }) => {
              const isActiveTab = activeTab === title;
              return (
                <button
                  key={title}
                  className={`tablinks${
                    isActiveTab ? " tablinks--active" : ""
                  }`}
                  onClick={isActiveTab ? null : () => setActiveTab(title)}
                  disabled={isActiveTab}
                >
                  <span>{title}</span>
                </button>
              );
            })}
          </div>

          <div className="wrapper-tabcontent">
            {TabsContent.map(({ title, description }) => {
              const isActiveTab = activeTab === title;
              return (
                <div
                  key={title}
                  className={`tabcontent${
                    isActiveTab ? " tabcontent--active" : ""
                  }`}
                >
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export { Block6 };

// Код из гайда.

// <section class="wrapper">
//   <div class="content">
//     <div class="tabs">
//       <button class="tablinks tablinks-active active" data-country="London">
//         <span>London</span>
//       </button>
//       <button class="tablinks" data-country="Paris">
//         <span>Paris</span>
//       </button>
//       <button class="tablinks" data-country="Barcelona">
//         <span>Barcelona</span>
//       </button>
//       <button class="tablinks" data-country="Madrid">
//         <span>Madrid</span>
//       </button>
//     </div>

//     <div class="wrapper-tabcontent">
//       <div id="London" class="tabcontent tabcontent-active">
//         <h3>London</h3>
//         <p>
//           London is the capital of Great Britain. It is one of the greatest
//           cities in the world. It is an important business and financial
//           centre. It is an intellectual centre, too. Everywhere in London,
//           there are open spaces: Hyde Park and Regent Park are the largest.
//           The City is the oldest part of London.{" "}
//         </p>
//       </div>
//       <div id="Paris" class="tabcontent">
//         <h3>Paris</h3>
//         <p>
//           Paris is in the Paris department of the Paris-Isle-of-France region
//           The French historic, political and economic capital, with a
//           population of only 2.5 million is located in the northern part of
//           France. One of the most beautiful cities in the world. Home to
//           historical monuments such as Notre Dame, the Eiffel tower (320m),
//           Bastille, Louvre and many more.{" "}
//         </p>
//       </div>
//       <div id="Barcelona" class="tabcontent">
//         <h3>Barcelona</h3>
//         <p>
//           Barcelona has been an urban laboratory since the high Medieval Ages.
//           A place of diversity, a backdrop for a multiplicity of social and
//           cultural processes on multiple scales that reflect different ways of
//           constructing the future, a city with a long experience of urban life
//           and social innovations.{" "}
//         </p>
//       </div>
//       <div id="Madrid" class="tabcontent">
//         <h3>Madrid</h3>
//         <p>
//           Madrid is in the middle of Spain, in the Community of Madrid. The
//           Community is a large area that includes the city as well as small
//           towns and villages outside the city. 7 million people live in the
//           Community. More than 3 million live in the city itself.
//         </p>
//       </div>
//     </div>
//   </div>
// </section>;

// "use strict";
// const tabLinks = document.querySelectorAll(".tablinks");
// const tabContents = document.querySelectorAll(".tabcontent");

// tabLinks.forEach(function (element) {
//   element.addEventListener("click", openTabs);
// });

// function openTabs(evt) {
//   const btnTarget = evt.currentTarget;
//   const country = btnTarget.dataset.country;

//   tabContents.forEach(function (item) {
//     item.classList.remove("tabcontent--active");
//   });

//   tabLinks.forEach(function (item) {
//     item.classList.remove("tablinks-active");
//   });

//   document.querySelector(`#${country}`).classList.add("tabcontent--active");

//   btnTarget.classList.add("tablinks-active");
// }
