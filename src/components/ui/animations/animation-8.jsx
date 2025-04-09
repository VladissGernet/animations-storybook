import React, { useRef } from "react";

import "./animation-8.scss";

const Animation8 = () => {
  const parallax = useRef(null);
  // Обязательно [] вместо null.
  const parallaxLayers = useRef([]);

  // Вместо querrySelectorAll.
  const addToParallaxLayers = (el) => {
    if (el && !parallaxLayers.current.includes(el)) {
      parallaxLayers.current.push(el);
    }
  };

  // Функция throttle будет принимать 2 аргумента:
  // - callee, функция, которую надо вызывать;
  // - timeout, интервал в мс, с которым следует пропускать вызовы.
  const throttle = (callee, timeout) => {
    // Таймер будет определять,
    // надо ли нам пропускать текущий вызов.
    let timer = null;

    // Как результат возвращаем другую функцию.
    // Это нужно, чтобы мы могли не менять другие части кода,
    // чуть позже мы увидим, как это помогает.
    return (...args) => {
      // Если таймер есть, то функция уже была вызвана,
      // и значит новый вызов следует пропустить.
      if (timer) return;

      // Если таймера нет, значит мы можем вызвать функцию:
      timer = setTimeout(() => {
        // Аргументы передаём неизменными в функцию-аргумент:
        callee(...args);

        // По окончании сбрасываем таймер:
        timer = null;
      }, timeout);
    };
  };

  /*
    Опишем функцию initParallax, в которой будем вести расчёты. Далее декомпозируем задачу:
    сначала найдём координаты курсора относительно карточки, а затем вычислим новые координаты
    для элементов при срабатывании события мыши.

    Всегда вычисляйте координаты относительно того блока, на котором слушается событие мыши — тогда
    расчёты будут точными. Если вычислять координаты курсора относительно вьюпорта, то смещение
    параллакс-элементов будет рассчитываться неправильно, так как пропорции вьюпорта и карточки,
    скорее всего, не будут совпадать.

    Сначала вычислим координаты. В JS нет метода, который возвращал бы координаты курсора
    относительно нужного блока. Свойство clientX возвращает положение по оси X относительно
    начала вьюпорта. Чтобы начало блока parallax совпадало с 0 по оси X, надо из положения относительно
    экрана вычесть левый отступ блока parallax. В этом нам поможет метод getBoundingClientRect().

    Перейдём к вычислениям. Для удобства записываем текущую координату в переменную и следом добавляем
    переменную parallaxLeftOffset с внешним отступом блока wrapper от границ экрана. Будем вычитать отступ
    из текущей позиции курсора и записывать это в переменную coordX:
  */

  const handleParallax = throttle((evt) => {
    // Размер области просмотра.
    const parallaxLeftOffext = parallax.current.getBoundingClientRect().left;
    const parallaxTopOffset = parallax.current.getBoundingClientRect().top;

    // координаты центра экрана
    const coordX =
      evt.clientX - parallaxLeftOffext - 0.5 * parallax.current.offsetWidth;
    const coordY =
      evt.clientY - parallaxTopOffset - 0.5 * parallax.current.offsetHeight;

    /*
      Чтобы получить ширину, используем свойство offsetWidth. Теперь центр враппера —
      точка с координатами 0.0. Можно двигаться к самому интересному.

      Мы вычислили положение курсора относительно параллакс-блока. Теперь мы можем
      рассчитать смещение его элементов и задать им его:
      */

    parallaxLayers.current.forEach((layer) => {
      /*
        Теперь элементы следуют за курсором. Добавляем коэффициент скорости, который будет замедлять
        трансформацию элементов. Пусть он будет равен 0.5 — слишком большое значение лучше не
        устанавливать, так как трансформация должна быть плавной.

        Будем умножать вычисленную координату на этот коэффициент.

        Код работает, но мы забыли о сути параллакса. Параллакс — это смещение элементов с разной скоростью,
        а сейчас все элементы двигаются с одинаковой.

        Изменим это. Коэффициент скорости будем хранить прямо в разметке в data-атрибуте, так как это удобно.
      */
      const layerSpeed = layer.dataset.speed;
      const x = -(coordX * layerSpeed).toFixed(2);
      const y = -(coordY * layerSpeed).toFixed(2);

      layer.setAttribute("style", `transform: translate(${x}px, ${y}px);`);
    });
  }, 50);

  const reset = throttle(() => {
    parallaxLayers.current.forEach((layer) => {
      layer.removeAttribute("style");
    });
  }, 100);

  return (
    <div className="animation-8">
      <div className="wrapper">
        <div
          className="parallax"
          ref={parallax}
          onMouseMove={handleParallax}
          onMouseLeave={reset}
        >
          <h1
            className="parallax__layer title"
            data-speed="0.03"
            ref={addToParallaxLayers}
          >
            Здорово быть енотом!
          </h1>

          <button
            className="parallax__layer button"
            type="button"
            data-speed="0.05"
            ref={addToParallaxLayers}
          >
            Стать енотом
          </button>

          <div
            className="parallax__layer circle"
            data-speed="0.18"
            ref={addToParallaxLayers}
          />
        </div>
      </div>
    </div>
  );
};

export { Animation8 };

/*
  Код из гайда.

  const wrapper = document.querySelector('.parallax');
  const layers = document.querySelectorAll('.parallax__layer');
  const SPEED = 0.02;

  const handleParallax = (evt) => {
  //размер области просмотра
    const parallaxLeftOffset = wrapper.getBoundingClientRect().left;
    const parallaxTopOffset = wrapper.getBoundingClientRect().top;

    // координаты центра экрана
    const coordX = evt.clientX - parallaxLeftOffset - 0.5 * wrapper.offsetWidth;
    const coordY = evt.clientY - parallaxTopOffset - 0.5 *  wrapper.offsetHeight;

    layers.forEach((layer)=>{
      const layerSpeed = layer.dataset.speed;
      const x = coordX.toFixed(2);
      const y = coordY.toFixed(2);
      layer.setAttribute('style', `transform: translate(${x}px, ${y}px);`)
    });
  };

  const reset = () => {
    layers.forEach((layer)=>{
        layer.removeAttribute('style');
    });
  }

  wrapper.addEventListener('mousemove', handleParallax);
  wrapper.addEventListener('mouseout', reset);
*/

/*
  Как оптимизировать параллакс
  В начале статьи мы упомянули, что параллакс ресурсозатратен для браузера — на каждое движение мыши
  вызывается несколько команд по перерасчёту координат. Что можно с этим сделать?

  Не смещайте элементы с помощью свойств top, left, right, bottom. Вместо них лучше использовать
  transform: translateX, translateY — они снижают нагрузку на графический процессор.

  В CSS есть свойство will-change. Если задать ему значение transform, то браузер ещё до анимирования
  выполнит оптимизации. Это снизит нагрузку на графический процессор, и анимация будет работать плавнее,
  без рывков.

  Теоретически, можно использовать декоратор throttle на событии мыши. Но чаще всего у вас будут
  появляться нежелательные рывки при трансформации. Поэтому задавать задержку стоит с осторожностью.

  Заключение
  Мы показали простые способы создания параллакса на CSS и JS, но иногда нужны более сложные эффекты.
  Для таких случаев есть специальные библиотеки, например, Loco Scroll, parallax JS или rellax. С их
  помощью можно управлять направлением движения элементов, фиксировать слайды при прокрутке, создавать
  эффект «спешки» или «задержки» анимации.
*/
