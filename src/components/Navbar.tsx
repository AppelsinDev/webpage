import { useEffect, useState } from "react";
import { AppelsinIcon } from "./icons/appelsin";

export const Navbar = () => {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0,
  );

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [iconHeight, setIconHeight] = useState(36);

  useEffect(() => {
    if (width <= 640) {
      setIconHeight(48);
    } else {
      setIconHeight(36);
    }
  }, [width]);

  return (
    <nav className="fixed top-0 w-full h-20 sm:h-14 bg-white/0 backdrop-blur-xs justify-between items-center inline-flex">
      <div className="grow shrink basis-0 h-20 sm:h-14 px-8 py-2 justify-between items-center flex overflow-hidden">
        <div className="justify-start items-center gap-6 flex">
          <AppelsinIcon height={iconHeight} />
          <div className="hidden sm:flex h-full justify-start items-center gap-6">
            <a
              className="text-center text-white text-sm font-semibold leading-tight"
              href="/#solutions"
            >
              Soluciones
            </a>
            <a
              className="text-center text-white text-sm font-semibold leading-tight"
              href="/#methodology"
            >
              Metodología
            </a>
            <a className="text-center text-white text-sm font-semibold leading-tight">
              Industria
            </a>
            <a
              className="text-center text-white text-sm font-semibold leading-tight"
              href="/#contact"
            >
              Nosotros
            </a>
          </div>
        </div>
        <div className="hidden sm:flex justify-end items-center gap-6">
          <div data-svg-wrapper className="relative">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.6667 5.33337C11.7275 5.33337 12.745 5.7548 13.4951 6.50495C14.2452 7.25509 14.6667 8.27251 14.6667 9.33337V14H12V9.33337C12 8.97975 11.8595 8.64061 11.6095 8.39057C11.3594 8.14052 11.0203 8.00004 10.6667 8.00004C10.313 8.00004 9.97391 8.14052 9.72386 8.39057C9.47381 8.64061 9.33334 8.97975 9.33334 9.33337V14H6.66667V9.33337C6.66667 8.27251 7.0881 7.25509 7.83824 6.50495C8.58839 5.7548 9.60581 5.33337 10.6667 5.33337Z"
                stroke="white"
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M3.99999 6H1.33333V14H3.99999V6Z"
                stroke="white"
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M2.66666 4.00004C3.40304 4.00004 3.99999 3.40309 3.99999 2.66671C3.99999 1.93033 3.40304 1.33337 2.66666 1.33337C1.93028 1.33337 1.33333 1.93033 1.33333 2.66671C1.33333 3.40309 1.93028 4.00004 2.66666 4.00004Z"
                stroke="white"
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </div>
          <div className="text-center text-white text-sm font-semibold leading-tight">
            Contacto
          </div>
        </div>
      </div>
    </nav>
  );
};
