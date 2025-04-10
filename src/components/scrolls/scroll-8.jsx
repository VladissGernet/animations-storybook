import React, { useEffect } from "react";

import "./scroll-8.scss";

const Scroll8 = () => {
  useEffect(() => {
    const btnScrollTop = document.querySelector(".btn--scroll-to-top");
    const btnScrollCenter = document.querySelector(".btn--scroll-to-center");
    const btnScrollBottom = document.querySelector(".btn--scroll-to-bottom");
    const element = document.querySelector(".box");

    btnScrollTop.addEventListener("click", () => {
      element.scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
    });

    btnScrollCenter.addEventListener("click", () => {
      element.scrollIntoView({
        block: "center",
        behavior: "smooth",
      });
    });

    btnScrollBottom.addEventListener("click", () => {
      element.scrollIntoView({
        block: "end",
        behavior: "smooth",
      });
    });

    return () => {
      btnScrollTop.removeEventListener("click", () => {});
      btnScrollCenter.removeEventListener("click", () => {});
      btnScrollBottom.removeEventListener("click", () => {});
    };
  }, []);

  return (
    <div className="scroll-8">
      <body>
        <main>
          <button type="button" className="btn btn--scroll-to-top">
            scrollIntoView to top
          </button>
          <button type="button" className="btn btn--scroll-to-center">
            scrollIntoView to center
          </button>
          <button type="button" className="btn btn--scroll-to-bottom">
            scrollIntoView to bottom
          </button>
          <h1>Lorem ipsum dolor sit amet.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
            consequuntur doloribus vel beatae nobis odio dolor est architecto,
            ratione voluptate maxime impedit vero blanditiis ut non illo
            repellat aut officia?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
            consequuntur doloribus vel beatae nobis odio dolor est architecto,
            ratione voluptate maxime impedit vero blanditiis ut non illo
            repellat aut officia?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
            consequuntur doloribus vel beatae nobis odio dolor est architecto,
            ratione voluptate maxime impedit vero blanditiis ut non illo
            repellat aut officia?
          </p>
          <h2>Lorem ipsum dolor sit amet consectetur.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
            consequuntur doloribus vel beatae nobis odio dolor est architecto,
            ratione voluptate maxime impedit vero blanditiis ut non illo
            repellat aut officia?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
            consequuntur doloribus vel beatae nobis odio dolor est architecto,
            ratione voluptate maxime impedit vero blanditiis ut non illo
            repellat aut officia?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
            consequuntur doloribus vel beatae nobis odio dolor est architecto,
            ratione voluptate maxime impedit vero blanditiis ut non illo
            repellat aut officia?
          </p>
          <h2>Lorem ipsum dolor sit amet consectetur.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
            consequuntur doloribus vel beatae nobis odio dolor est architecto,
            ratione voluptate maxime impedit vero blanditiis ut non illo
            repellat aut officia?
          </p>
          <div className="box">
            <svg
              height="100"
              viewBox="0 0 512 512"
              width="100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <g>
                  <path
                    d="m117.66 374.896c-252.161-215.97-13.1-424.901 138.34-276.9 151.44-148 390.501 60.93 138.34 276.901h-276.68z"
                    fill="#ff8997"
                  />
                  <path
                    d="m72.591 186.379c0-49.358 13.877-95.41 37.855-134.364-105.603 25.124-168.616 172.287 7.214 322.881h37.523c-50.7-46.394-82.592-113.661-82.592-188.517z"
                    fill="#ff6f7f"
                  />
                  <path
                    d="m394.34 172.956v201.94c-33.93 29.08-76.76 58.27-129.9 86.74-5.27 2.82-11.61 2.82-16.88 0-53.14-28.47-95.97-57.66-129.9-86.74v-201.94c0-9.55 3.87-18.2 10.13-24.45 6.25-6.26 14.9-10.13 24.45-10.13 19.1 0 34.59 15.48 34.59 34.58 0-9.55 3.87-18.2 10.13-24.45 6.26-6.26 14.9-10.13 24.45-10.13 19.11 0 34.59 15.48 34.59 34.58 0-9.55 3.87-18.2 10.13-24.45 6.26-6.26 14.91-10.13 24.46-10.13 19.1 0 34.58 15.48 34.58 34.58 0-9.55 3.87-18.2 10.13-24.45 6.26-6.26 14.91-10.13 24.46-10.13 19.1 0 34.58 15.48 34.58 34.58z"
                    fill="#c7c5cb"
                  />
                  <g fill="#ffdcef">
                    <path d="m314.825 301.974c-27.939 0-26.546-27.403-58.825-27.403s-30.886 27.403-58.825 27.403c-21.757 0-46.142 32.735-26.286 65.711s51.903 10.218 85.111 10.218 65.255 22.758 85.111-10.218c19.857-32.976-4.529-65.711-26.286-65.711z" />
                    <ellipse cx="222.55" cy="225.668" rx="17.704" ry="22.455" />
                    <ellipse
                      cx="167.292"
                      cy="255.589"
                      rx="17.704"
                      ry="22.455"
                      transform="matrix(.971 -.241 .241 .971 -56.57 47.748)"
                    />
                    <ellipse cx="289.45" cy="225.668" rx="17.704" ry="22.455" />
                    <ellipse
                      cx="344.708"
                      cy="255.589"
                      rx="22.455"
                      ry="17.704"
                      transform="matrix(.241 -.971 .971 .241 13.704 528.693)"
                    />
                  </g>
                  <path
                    d="m117.66 331.815v43.081c33.93 29.08 76.76 58.27 129.9 86.74 5.27 2.82 11.61 2.82 16.88 0 13.887-7.44 27.063-14.93 39.568-22.453-77.069-5.474-144.465-46.637-186.348-107.368z"
                    fill="#b2b0bc"
                  />
                </g>
                <g>
                  <path d="m201.615 393.007c8.821 0 17.866-1.892 26.463-3.689 24.868-5.2 30.921-5.212 55.849 0 22.034 4.607 47.011 9.831 63.623-17.755 22.508-37.381-4.463-77.088-32.716-77.088-10.456 0-15.226-4.564-21.827-10.88-7.695-7.362-17.271-16.525-37.005-16.525s-29.31 9.163-37.005 16.525c-6.601 6.317-11.37 10.88-21.827 10.88-28.094 0-55.327 39.535-32.715 77.088 10.13 16.823 23.371 21.444 37.16 21.444zm-4.445-83.531c16.478 0 24.83-7.992 32.198-15.043 6.933-6.634 12.92-12.363 26.633-12.363s19.701 5.729 26.633 12.363c7.369 7.051 15.721 15.043 32.198 15.043 16.524 0 36.368 26.938 19.864 54.348-10.621 17.638-23.661 15.836-47.7 10.809-26.92-5.628-34.962-5.651-61.99 0-24.04 5.028-37.08 6.829-47.7-10.809-16.606-27.579 3.551-54.348 19.864-54.348z" />
                  <path d="m247.756 225.66c0-16.519-11.308-29.959-25.207-29.959s-25.207 13.44-25.207 29.959 11.308 29.958 25.207 29.958 25.207-13.439 25.207-29.958zm-35.413 0c0-8.108 4.674-14.957 10.206-14.957s10.206 6.849 10.206 14.957c0 8.107-4.674 14.957-10.206 14.957s-10.206-6.849-10.206-14.957z" />
                  <path d="m191.751 249.522c-4.152-16.757-18.638-26.248-31.674-23.016-13.491 3.344-21.234 19.108-17.261 35.143 3.47 13.999 14.738 23.645 26.521 23.644 15.879-.005 27.078-16.951 22.414-35.771zm-34.373 8.518c-2.893-11.677 4.793-21.824 13.639-14.956 9.614 7.465 8.388 24.907-.135 27.019-5.372 1.329-11.554-4.194-13.504-12.063z" />
                  <path d="m314.663 225.66c0-16.519-11.308-29.959-25.207-29.959-13.9 0-25.207 13.44-25.207 29.959s11.308 29.958 25.207 29.958c13.899.001 25.207-13.439 25.207-29.958zm-35.412 0c0-8.108 4.674-14.957 10.206-14.957s10.205 6.849 10.205 14.957c0 8.107-4.673 14.957-10.205 14.957s-10.206-6.849-10.206-14.957z" />
                  <path d="m367.528 240.092c-3.146-6.957-8.832-11.909-15.6-13.586-13.49-3.346-27.7 6.981-31.674 23.015-4.685 18.907 6.605 35.772 22.413 35.772 20.01 0 33.686-25.685 24.861-45.201zm-12.901 17.948c-2.893 11.673-14.431 17.06-19.044 6.856-4.932-10.905 3.975-25.997 12.736-23.829 3.122.774 4.811 3.594 5.54 5.207 1.513 3.344 1.792 7.632.768 11.766z" />
                  <path d="m256.002 87.65c-32.536-29.759-70.367-45.938-109.825-46.885-38.197-.921-74.312 12.661-101.711 38.233-3.029 2.826-3.192 7.573-.366 10.601 2.827 3.03 7.574 3.192 10.601.366 46.357-43.266 128.588-52.566 196.058 13.372 2.915 2.848 7.571 2.848 10.486 0 117.745-115.069 288.766-5.172 219.888 150.594-15.671 35.44-42.307 70.478-79.274 104.32v-39.057c0-4.143-3.358-7.501-7.501-7.501s-7.501 3.358-7.501 7.501v52.246c-34.534 29.201-76.889 57.316-125.954 83.602-3.068 1.643-6.734 1.643-9.8.002-49.068-26.288-91.423-54.403-125.957-83.604v-198.498c0-7.24 2.816-14.039 7.938-19.153 16.965-16.993 46.238-4.861 46.238 19.153 0 4.143 3.358 7.501 7.501 7.501s7.501-3.358 7.501-7.501c0-7.24 2.816-14.039 7.935-19.149 17.022-17.025 46.242-4.813 46.242 19.149 0 4.143 3.358 7.501 7.501 7.501s7.501-3.358 7.501-7.501c0-7.24 2.816-14.039 7.934-19.149 16.906-16.906 46.242-5.062 46.242 19.149 0 4.143 3.358 7.501 7.501 7.501s7.501-3.358 7.501-7.501c0-7.24 2.816-14.039 7.935-19.149 16.883-16.886 46.242-5.102 46.242 19.149v116.248c0 4.143 3.358 7.501 7.501 7.501s7.501-3.358 7.501-7.501v-116.248c0-23.206-18.879-42.085-42.085-42.085-14.144 0-26.835 6.941-34.61 18.106-16.692-23.988-52.277-24.263-69.179.001-16.684-23.975-52.263-24.281-69.178 0-15.025-21.591-45.829-24.314-64.33-5.783-7.954 7.942-12.332 18.512-12.332 29.761v185.297c-47.352-43.433-78.326-89.754-89.927-134.699-10.564-40.929-4.848-80.692 16.095-111.963 2.305-3.442 1.384-8.101-2.058-10.406-3.441-2.305-8.102-1.384-10.406 2.058-32.804 48.98-35.899 121.371 17.021 199.034 47.933 70.346 128.217 125.86 203.151 166.006 7.503 4.015 16.459 4.014 23.964-.002 87.61-46.937 186.642-117.301 226.867-208.269 16.204-36.644 21.046-73.777 14.004-107.386-22.179-105.858-154.575-154.893-252.855-64.962z" />
                </g>
              </g>
            </svg>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
            consequuntur doloribus vel beatae nobis odio dolor est architecto,
            ratione voluptate maxime impedit vero blanditiis ut non illo
            repellat aut officia?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
            consequuntur doloribus vel beatae nobis odio dolor est architecto,
            ratione voluptate maxime impedit vero blanditiis ut non illo
            repellat aut officia?
          </p>
          <h2>Lorem ipsum dolor sit amet consectetur.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
            consequuntur doloribus vel beatae nobis odio dolor est architecto,
            ratione voluptate maxime impedit vero blanditiis ut non illo
            repellat aut officia?
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
            consequuntur doloribus vel beatae nobis odio dolor est architecto,
            ratione voluptate maxime impedit vero blanditiis ut non illo
            repellat aut officia?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
            consequuntur doloribus vel beatae nobis odio dolor est architecto,
            ratione voluptate maxime impedit vero blanditiis ut non illo
            repellat aut officia?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
            consequuntur doloribus vel beatae nobis odio dolor est architecto,
            ratione voluptate maxime impedit vero blanditiis ut non illo
            repellat aut officia?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
            consequuntur doloribus vel beatae nobis odio dolor est architecto,
            ratione voluptate maxime impedit vero blanditiis ut non illo
            repellat aut officia?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
            consequuntur doloribus vel beatae nobis odio dolor est architecto,
            ratione voluptate maxime impedit vero blanditiis ut non illo
            repellat aut officia?
          </p>
          <h2>Lorem ipsum dolor sit amet consectetur.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
            consequuntur doloribus vel beatae nobis odio dolor est architecto,
            ratione voluptate maxime impedit vero blanditiis ut non illo
            repellat aut officia?
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
            consequuntur doloribus vel beatae nobis odio dolor est architecto,
            ratione voluptate maxime impedit vero blanditiis ut non illo
            repellat aut officia?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
            consequuntur doloribus vel beatae nobis odio dolor est architecto,
            ratione voluptate maxime impedit vero blanditiis ut non illo
            repellat aut officia?
          </p>
        </main>

        <script src="script.js"></script>
      </body>
    </div>
  );
};

export { Scroll8 };
