import React, { useEffect, useRef } from "react";

import "./scroll-2.scss";

const Scroll2 = () => {
  const progressBar = useRef(null);

  const onScroll = () => {
    const windowHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const windowScroll = window.pageYOffset;
    const progressBarWidth = (windowScroll / windowHeight).toFixed(2);
    progressBar.current.style.transform = `scaleX(${progressBarWidth})`;
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="scroll-2">
      <div className="progressbar" ref={progressBar}></div>
      <main>
        <h1>Lorem ipsum dolor sit.</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, illo
          minus? Nesciunt qui modi repudiandae rerum quibusdam magni eveniet est
          eum? Laborum pariatur sint exercitationem quae, accusantium beatae nam
          sunt.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
          excepturi dignissimos, laboriosam, obcaecati ab alias placeat nostrum
          itaque sed numquam saepe. Aliquam maiores perferendis hic nam,
          quibusdam nulla quaerat ipsa!
        </p>
        <p>
          Numquam, id quidem. Accusantium dicta, eveniet illum dolorum ad
          molestias a voluptatum sequi laudantium laborum sit, enim culpa
          architecto aspernatur reprehenderit eius dolores perferendis magni
          inventore beatae ducimus distinctio voluptatem.
        </p>
        <p>
          Tenetur, itaque neque ad veritatis modi dicta, sequi, eligendi
          assumenda culpa nulla quia consequatur dolorum delectus? Doloribus,
          excepturi pariatur mollitia, non reprehenderit, numquam qui tempore
          deserunt esse ullam consequuntur repellendus?
        </p>
        <p>
          Molestiae, voluptas aliquam ratione dolores exercitationem voluptatem
          minima quam perspiciatis, vitae nostrum tempore doloremque debitis
          saepe libero ab animi inventore dicta eos. Exercitationem quibusdam
          voluptatem laborum ex cumque esse? Nemo.
        </p>
        <p>
          Nihil sint explicabo natus aliquid commodi iusto ut autem maxime
          laborum? Ab voluptates, rem quos magni autem necessitatibus sint
          pariatur deleniti accusantium porro. Repellat quidem, pariatur
          aspernatur iste magnam ducimus.
        </p>
        <h2>Lorem ipsum dolor sit amet.</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, id
          quasi! Tenetur voluptas, nostrum harum deserunt dolores voluptatum
          quas culpa facilis doloremque molestias sapiente at impedit sint eos
          pariatur nihil in autem non laboriosam ipsam reprehenderit, architecto
          voluptatibus? Eius, pariatur aspernatur maiores doloribus quam sit
          quasi voluptates corporis sunt. Commodi at magnam quaerat ratione
          dolorem officiis voluptate perspiciatis molestias maiores ipsa,
          architecto voluptas odit nisi corrupti quam, illo omnis voluptatibus
          non temporibus delectus atque quis assumenda porro! Odit, maiores
          iusto natus voluptatibus vero atque nemo, culpa obcaecati sapiente
          quam sunt facilis, ea ullam. Voluptate deserunt vel recusandae
          blanditiis pariatur provident?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium
          omnis magni rem minima? Vel illo animi aut molestiae perferendis
          obcaecati dicta. Incidunt omnis maiores ipsam iure ad placeat ipsum
          deleniti doloribus! Culpa magnam sed consectetur illum fugit,
          exercitationem ipsum saepe provident excepturi placeat nisi voluptate
          dolorum! Vero consectetur officiis maiores a sunt distinctio
          laboriosam, quis, repellat quibusdam quas quo. Mollitia fugiat magnam
          dicta eos, nihil sapiente possimus quis minima nesciunt sint
          temporibus similique consectetur magni provident distinctio maiores
          deleniti error qui id labore maxime perferendis. Itaque quos
          perferendis inventore, ratione corrupti quisquam esse voluptatibus
          eos, possimus tenetur architecto minus quibusdam.
        </p>
        <p>
          A molestias est fuga unde? Consequuntur ratione maiores vero ex
          inventore eius doloribus hic iusto repudiandae non veritatis omnis
          optio, quos maxime voluptatibus reiciendis assumenda, temporibus
          fugiat neque fugit! Consequatur voluptatum dignissimos qui iure
          cupiditate eligendi nostrum pariatur saepe quos odit porro, ducimus
          harum voluptatem excepturi tempora aperiam quia. Ad cumque ducimus
          dolores fugit ipsa alias necessitatibus hic non distinctio eaque,
          soluta assumenda porro amet eveniet exercitationem. Repudiandae libero
          magnam ex eveniet tempore id velit labore quidem ea, qui unde, minima
          soluta quaerat. Deserunt temporibus placeat velit! Consectetur nemo
          architecto odit accusamus quidem optio consequuntur veritatis nostrum!
          Vitae, culpa aliquid.
        </p>
        <p>
          Praesentium blanditiis autem, quos est eos incidunt libero aperiam.
          Ipsa dolorem neque facere, laboriosam, laudantium velit unde vel
          magnam praesentium qui obcaecati nobis possimus nemo aperiam
          blanditiis doloribus! Quo, est at? Possimus accusamus praesentium
          natus quae commodi iure id nulla dolore quod? Quidem maiores voluptas
          iste laudantium accusantium ullam, in, asperiores dicta sapiente
          corporis labore. Ipsam, repudiandae, exercitationem ad amet delectus
          voluptate tempore cum repellendus magni similique atque non quas sequi
          distinctio eius ullam eos reprehenderit. Facilis voluptas fuga
          accusantium, similique voluptatibus sequi eaque quidem totam velit ad
          maxime harum ducimus commodi recusandae ut sit itaque asperiores,
          consequatur repudiandae esse?
        </p>
        <p>
          Labore fugiat officiis, et, reiciendis porro beatae magni laborum
          dolorem rerum iste in nobis dignissimos quod perferendis expedita
          nihil provident accusamus facilis fugit. Minus voluptatem, itaque
          accusamus vel repellendus impedit? Commodi labore similique
          perferendis fugit at blanditiis maiores rerum repellendus tempore
          accusantium! Cumque, earum officiis autem ab nobis minima natus,
          labore quod nesciunt nisi tempora voluptate quo aspernatur ullam
          facilis. Architecto saepe a vitae est exercitationem non minima harum
          quidem, id, laborum unde ex eveniet animi reiciendis assumenda
          temporibus nam, earum officiis itaque optio et at doloribus quasi
          ipsam. Veritatis sunt, labore dolor ex optio minus aut numquam totam
          dolorem.
        </p>
        <p>
          Explicabo harum iste eum maxime voluptate culpa ea nostrum quis,
          facere earum reiciendis nam aspernatur cupiditate adipisci incidunt
          aliquam asperiores, minima fugiat eius sequi omnis ut? Corporis
          tempore excepturi, inventore nulla magnam obcaecati distinctio harum
          est voluptate, et numquam at placeat commodi asperiores ipsam
          voluptatum perferendis ratione? Sit repudiandae excepturi cupiditate
          architecto molestias nam dolore, sequi in quidem consequuntur neque
          minima reiciendis doloremque iusto quisquam tenetur officiis natus
          quas error dolorem iure. Error laboriosam impedit necessitatibus
          praesentium earum aperiam quibusdam neque aut, quaerat, dolorem minima
          atque minus laudantium pariatur vitae, ex ad nam. Aperiam molestias
          cupiditate perspiciatis non quis fugit.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, illo
          minus? Nesciunt qui modi repudiandae rerum quibusdam magni eveniet est
          eum? Laborum pariatur sint exercitationem quae, accusantium beatae nam
          sunt.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
          excepturi dignissimos, laboriosam, obcaecati ab alias placeat nostrum
          itaque sed numquam saepe. Aliquam maiores perferendis hic nam,
          quibusdam nulla quaerat ipsa!
        </p>
        <p>
          Numquam, id quidem. Accusantium dicta, eveniet illum dolorum ad
          molestias a voluptatum sequi laudantium laborum sit, enim culpa
          architecto aspernatur reprehenderit eius dolores perferendis magni
          inventore beatae ducimus distinctio voluptatem.
        </p>
        <p>
          Tenetur, itaque neque ad veritatis modi dicta, sequi, eligendi
          assumenda culpa nulla quia consequatur dolorum delectus? Doloribus,
          excepturi pariatur mollitia, non reprehenderit, numquam qui tempore
          deserunt esse ullam consequuntur repellendus?
        </p>
        <p>
          Molestiae, voluptas aliquam ratione dolores exercitationem voluptatem
          minima quam perspiciatis, vitae nostrum tempore doloremque debitis
          saepe libero ab animi inventore dicta eos. Exercitationem quibusdam
          voluptatem laborum ex cumque esse? Nemo.
        </p>
        <p>
          Nihil sint explicabo natus aliquid commodi iusto ut autem maxime
          laborum? Ab voluptates, rem quos magni autem necessitatibus sint
          pariatur deleniti accusantium porro. Repellat quidem, pariatur
          aspernatur iste magnam ducimus.
        </p>
        <h2>Lorem ipsum dolor sit amet.</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, id
          quasi! Tenetur voluptas, nostrum harum deserunt dolores voluptatum
          quas culpa facilis doloremque molestias sapiente at impedit sint eos
          pariatur nihil in autem non laboriosam ipsam reprehenderit, architecto
          voluptatibus? Eius, pariatur aspernatur maiores doloribus quam sit
          quasi voluptates corporis sunt. Commodi at magnam quaerat ratione
          dolorem officiis voluptate perspiciatis molestias maiores ipsa,
          architecto voluptas odit nisi corrupti quam, illo omnis voluptatibus
          non temporibus delectus atque quis assumenda porro! Odit, maiores
          iusto natus voluptatibus vero atque nemo, culpa obcaecati sapiente
          quam sunt facilis, ea ullam. Voluptate deserunt vel recusandae
          blanditiis pariatur provident?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium
          omnis magni rem minima? Vel illo animi aut molestiae perferendis
          obcaecati dicta. Incidunt omnis maiores ipsam iure ad placeat ipsum
          deleniti doloribus! Culpa magnam sed consectetur illum fugit,
          exercitationem ipsum saepe provident excepturi placeat nisi voluptate
          dolorum! Vero consectetur officiis maiores a sunt distinctio
          laboriosam, quis, repellat quibusdam quas quo. Mollitia fugiat magnam
          dicta eos, nihil sapiente possimus quis minima nesciunt sint
          temporibus similique consectetur magni provident distinctio maiores
          deleniti error qui id labore maxime perferendis. Itaque quos
          perferendis inventore, ratione corrupti quisquam esse voluptatibus
          eos, possimus tenetur architecto minus quibusdam.
        </p>
        <p>
          A molestias est fuga unde? Consequuntur ratione maiores vero ex
          inventore eius doloribus hic iusto repudiandae non veritatis omnis
          optio, quos maxime voluptatibus reiciendis assumenda, temporibus
          fugiat neque fugit! Consequatur voluptatum dignissimos qui iure
          cupiditate eligendi nostrum pariatur saepe quos odit porro, ducimus
          harum voluptatem excepturi tempora aperiam quia. Ad cumque ducimus
          dolores fugit ipsa alias necessitatibus hic non distinctio eaque,
          soluta assumenda porro amet eveniet exercitationem. Repudiandae libero
          magnam ex eveniet tempore id velit labore quidem ea, qui unde, minima
          soluta quaerat. Deserunt temporibus placeat velit! Consectetur nemo
          architecto odit accusamus quidem optio consequuntur veritatis nostrum!
          Vitae, culpa aliquid.
        </p>
        <p>
          Praesentium blanditiis autem, quos est eos incidunt libero aperiam.
          Ipsa dolorem neque facere, laboriosam, laudantium velit unde vel
          magnam praesentium qui obcaecati nobis possimus nemo aperiam
          blanditiis doloribus! Quo, est at? Possimus accusamus praesentium
          natus quae commodi iure id nulla dolore quod? Quidem maiores voluptas
          iste laudantium accusantium ullam, in, asperiores dicta sapiente
          corporis labore. Ipsam, repudiandae, exercitationem ad amet delectus
          voluptate tempore cum repellendus magni similique atque non quas sequi
          distinctio eius ullam eos reprehenderit. Facilis voluptas fuga
          accusantium, similique voluptatibus sequi eaque quidem totam velit ad
          maxime harum ducimus commodi recusandae ut sit itaque asperiores,
          consequatur repudiandae esse?
        </p>
        <p>
          Labore fugiat officiis, et, reiciendis porro beatae magni laborum
          dolorem rerum iste in nobis dignissimos quod perferendis expedita
          nihil provident accusamus facilis fugit. Minus voluptatem, itaque
          accusamus vel repellendus impedit? Commodi labore similique
          perferendis fugit at blanditiis maiores rerum repellendus tempore
          accusantium! Cumque, earum officiis autem ab nobis minima natus,
          labore quod nesciunt nisi tempora voluptate quo aspernatur ullam
          facilis. Architecto saepe a vitae est exercitationem non minima harum
          quidem, id, laborum unde ex eveniet animi reiciendis assumenda
          temporibus nam, earum officiis itaque optio et at doloribus quasi
          ipsam. Veritatis sunt, labore dolor ex optio minus aut numquam totam
          dolorem.
        </p>
        <p>
          Explicabo harum iste eum maxime voluptate culpa ea nostrum quis,
          facere earum reiciendis nam aspernatur cupiditate adipisci incidunt
          aliquam asperiores, minima fugiat eius sequi omnis ut? Corporis
          tempore excepturi, inventore nulla magnam obcaecati distinctio harum
          est voluptate, et numquam at placeat commodi asperiores ipsam
          voluptatum perferendis ratione? Sit repudiandae excepturi cupiditate
          architecto molestias nam dolore, sequi in quidem consequuntur neque
          minima reiciendis doloremque iusto quisquam tenetur officiis natus
          quas error dolorem iure. Error laboriosam impedit necessitatibus
          praesentium earum aperiam quibusdam neque aut, quaerat, dolorem minima
          atque minus laudantium pariatur vitae, ex ad nam. Aperiam molestias
          cupiditate perspiciatis non quis fugit.
        </p>
        <p>
          Labore fugiat officiis, et, reiciendis porro beatae magni laborum
          dolorem rerum iste in nobis dignissimos quod perferendis expedita
          nihil provident accusamus facilis fugit. Minus voluptatem, itaque
          accusamus vel repellendus impedit? Commodi labore similique
          perferendis fugit at blanditiis maiores rerum repellendus tempore
          accusantium! Cumque, earum officiis autem ab nobis minima natus,
          labore quod nesciunt nisi tempora voluptate quo aspernatur ullam
          facilis. Architecto saepe a vitae est exercitationem non minima harum
          quidem, id, laborum unde ex eveniet animi reiciendis assumenda
          temporibus nam, earum officiis itaque optio et at doloribus quasi
          ipsam. Veritatis sunt, labore dolor ex optio minus aut numquam totam
          dolorem.
        </p>
        <p>
          Explicabo harum iste eum maxime voluptate culpa ea nostrum quis,
          facere earum reiciendis nam aspernatur cupiditate adipisci incidunt
          aliquam asperiores, minima fugiat eius sequi omnis ut? Corporis
          tempore excepturi, inventore nulla magnam obcaecati distinctio harum
          est voluptate, et numquam at placeat commodi asperiores ipsam
          voluptatum perferendis ratione? Sit repudiandae excepturi cupiditate
          architecto molestias nam dolore, sequi in quidem consequuntur neque
          minima reiciendis doloremque iusto quisquam tenetur officiis natus
          quas error dolorem iure. Error laboriosam impedit necessitatibus
          praesentium earum aperiam quibusdam neque aut, quaerat, dolorem minima
          atque minus laudantium pariatur vitae, ex ad nam. Aperiam molestias
          cupiditate perspiciatis non quis fugit.
        </p>
        <p>
          Labore fugiat officiis, et, reiciendis porro beatae magni laborum
          dolorem rerum iste in nobis dignissimos quod perferendis expedita
          nihil provident accusamus facilis fugit. Minus voluptatem, itaque
          accusamus vel repellendus impedit? Commodi labore similique
          perferendis fugit at blanditiis maiores rerum repellendus tempore
          accusantium! Cumque, earum officiis autem ab nobis minima natus,
          labore quod nesciunt nisi tempora voluptate quo aspernatur ullam
          facilis. Architecto saepe a vitae est exercitationem non minima harum
          quidem, id, laborum unde ex eveniet animi reiciendis assumenda
          temporibus nam, earum officiis itaque optio et at doloribus quasi
          ipsam. Veritatis sunt, labore dolor ex optio minus aut numquam totam
          dolorem.
        </p>
        <p>
          Explicabo harum iste eum maxime voluptate culpa ea nostrum quis,
          facere earum reiciendis nam aspernatur cupiditate adipisci incidunt
          aliquam asperiores, minima fugiat eius sequi omnis ut? Corporis
          tempore excepturi, inventore nulla magnam obcaecati distinctio harum
          est voluptate, et numquam at placeat commodi asperiores ipsam
          voluptatum perferendis ratione? Sit repudiandae excepturi cupiditate
          architecto molestias nam dolore, sequi in quidem consequuntur neque
          minima reiciendis doloremque iusto quisquam tenetur officiis natus
          quas error dolorem iure. Error laboriosam impedit necessitatibus
          praesentium earum aperiam quibusdam neque aut, quaerat, dolorem minima
          atque minus laudantium pariatur vitae, ex ad nam. Aperiam molestias
          cupiditate perspiciatis non quis fugit.
        </p>
        <p>
          Labore fugiat officiis, et, reiciendis porro beatae magni laborum
          dolorem rerum iste in nobis dignissimos quod perferendis expedita
          nihil provident accusamus facilis fugit. Minus voluptatem, itaque
          accusamus vel repellendus impedit? Commodi labore similique
          perferendis fugit at blanditiis maiores rerum repellendus tempore
          accusantium! Cumque, earum officiis autem ab nobis minima natus,
          labore quod nesciunt nisi tempora voluptate quo aspernatur ullam
          facilis. Architecto saepe a vitae est exercitationem non minima harum
          quidem, id, laborum unde ex eveniet animi reiciendis assumenda
          temporibus nam, earum officiis itaque optio et at doloribus quasi
          ipsam. Veritatis sunt, labore dolor ex optio minus aut numquam totam
          dolorem.
        </p>
        <p>
          Explicabo harum iste eum maxime voluptate culpa ea nostrum quis,
          facere earum reiciendis nam aspernatur cupiditate adipisci incidunt
          aliquam asperiores, minima fugiat eius sequi omnis ut? Corporis
          tempore excepturi, inventore nulla magnam obcaecati distinctio harum
          est voluptate, et numquam at placeat commodi asperiores ipsam
          voluptatum perferendis ratione? Sit repudiandae excepturi cupiditate
          architecto molestias nam dolore, sequi in quidem consequuntur neque
          minima reiciendis doloremque iusto quisquam tenetur officiis natus
          quas error dolorem iure. Error laboriosam impedit necessitatibus
          praesentium earum aperiam quibusdam neque aut, quaerat, dolorem minima
          atque minus laudantium pariatur vitae, ex ad nam. Aperiam molestias
          cupiditate perspiciatis non quis fugit.
        </p>
      </main>

      <script src="script.js"></script>
    </div>
  );
};

export { Scroll2 };
