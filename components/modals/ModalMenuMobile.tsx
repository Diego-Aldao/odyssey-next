import React from "react";

interface Props {
  toggler: boolean;
  handleToggler: () => void;
}

export default function ModalMenuMobile({ toggler, handleToggler }: Props) {
  return (
    <div
      className={`contenedor fixed inset-0 bg-main-black/90 -z-[1] items-start flex transition-opacity md:hidden ${
        toggler
          ? "opacity-100 visible pointer-events-auto"
          : "opacity-0 invisible pointer-events-none"
      }`}
      onClick={handleToggler}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={`contenido2  bg-secondary-black w-full rounded-b-xl relative ${
          toggler ? "top-0 visible opacity-100" : "-top-4 opacity-0 invisible"
        } transition-all delay-200`}
      >
        <div className="contenido w-full  max-w-[500px] mx-auto  px-4 pb-10 flex flex-col gap-8 pt-[148px] sm:pt-[82px]">
          <div className="usuario flex  items-center w-full gap-[2px] rounded-md overflow-hidden ">
            <button className="py-2 bg-main-black flex-1 h-full">
              <span className="uppercase font-medium text-xs">ingresar</span>
            </button>
            <button className="py-2 bg-main-black flex-1 h-full">
              <span className="uppercase font-medium text-xs">registrarme</span>
            </button>
          </div>
          <ul className="links flex flex-col gap-2">
            <li className="capitalize font-medium text-sm text-main-white p-2 w-full bg-main-black/20 rounded-md">
              ultimos episodios
            </li>
            <li className="capitalize font-medium text-sm text-main-white p-2 w-full bg-main-black/20 rounded-md">
              anime de temporada
            </li>
            <li className="capitalize font-medium text-sm text-main-white p-2 w-full bg-main-black/20 rounded-md">
              tops
            </li>
            <li className="capitalize font-medium text-sm text-main-white p-2 w-full bg-main-black/20 rounded-md">
              trailers
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
