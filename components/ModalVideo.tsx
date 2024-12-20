"use client";
import React from "react";
import { useInView } from "react-intersection-observer";

interface Props {
  titulo: string;
  url: string;
  handleToggler: () => void;
}

export default function ModalVideo({ titulo, url, handleToggler }: Props) {
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    e.preventDefault();
    handleToggler();
  };

  const [ref, inView] = useInView({
    threshold: 0,
  });

  return (
    <div
      ref={ref}
      className={`modal w-full h-screen bg-main-black/95 fixed z-50 left-0 top-0 flex flex-col items-center justify-center gap-4 sm:px-4 px-2 lg:px-0 ${
        inView ? "opacity-100" : "opacity-0"
      } transition-opacity`}
      onClick={handleToggler}
    >
      <header className="flex w-full md:w-[720px] lg:w-[920px] items-center justify-between">
        <span className="line-clamp-1 uppercase font-bold text-sm md:text-lg">
          {titulo}
        </span>
        <div
          className="button-cerrar p-1 flex items-center justify-center pl-2 group cursor-pointer"
          onClick={(e) => {
            handleClick(e);
          }}
        >
          <span className="icon-[solar--close-circle-broken] h-6 w-6 md:h-8 md:w-8 group-hover:text-main-color transition-colors"></span>
        </div>
      </header>
      <div
        className={`p-[2px] md:p-1 bg-tertiary-black rounded-xl w-full flex overflow-hidden h-[54vw] md:w-[720px] md:h-[410px] lg:w-[920px] lg:h-[520px] ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        } transition-transform-opacity delay-300`}
      >
        <iframe
          src={url}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="w-full h-full rounded-xl"
        ></iframe>
      </div>
    </div>
  );
}
