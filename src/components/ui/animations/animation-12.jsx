import React from "react";

import "./animation-12.scss";

import image from "/src/assets/animation-10/image-1.jpg";

const Animation12 = () => {
  return (
    <div className="animation-12">
      <p>
        При изменении положения элемента по оси Z можно столкнуться с не самым
        приятным эффектом. Его размер будет меняться при отдалении или
        приближении к вьюпорту. Однако мы можем легко справиться с этой
        проблемой. Чтобы показывать элемент в реальном размере, следует
        применить к нему трансформацию scale().
      </p>
      <pre>
        Для вычисления коэффициента масштабирования scale применяется следующая
        формула:
        <code> 1 + (translateZ * -1) / perspective</code>.
        <br />
        То есть если свойство <code>perspective</code> равно 1px и мы
        передвигаем элемент по оси Z на -2px, то коэффициент будет равен трём:
        <br />
        <code>.layer &#123; transform: translateZ(-2px) scale(3); &#125;</code>
      </pre>
      <div className="block">
        <img
          className="image image-translateZ"
          width="300"
          height="300"
          src={image}
          alt=""
        />
      </div>
    </div>
  );
};

export { Animation12 };
