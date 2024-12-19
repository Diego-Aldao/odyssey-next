import React from "react";
import Logo from "../Logo";
import Link from "next/link";
import { LISTADO_NAVEGACION_FOOTER } from "@/constants";

export default function Footer() {
  return (
    <footer className="w-full px-2 md:px-8 lg:px-10 relative z-[2] mt-12 pb-4">
      <div className="contenido grid grid-cols-2 md:grid-cols-4 gap-8 bg-main-black/5 backdrop-blur-sm rounded-xl sm:px-4 md:px-6 lg:px-8 px-2 pt-10 xl:grid-cols-[1fr,1fr,1fr,1fr,350px]">
        <header className="w-fit flex flex-col col-span-full">
          <Logo customStyles="!text-4xl md:!text-4xl lg:!text-5xl xl:!text-6xl" />
          <span className="text-xs uppercase font-montserrat font-semibold italic ml-4 lg:ml-16 xl:ml-28 relative -top-1">
            comunidad anime
          </span>
        </header>
        {LISTADO_NAVEGACION_FOOTER.map((lista) => (
          <ul
            key={lista.id}
            className="listado capitalize flex flex-col gap-2 "
          >
            <li className="text-secondary-white text-xs xl:text-sm">
              {lista.titulo}
            </li>
            {lista.contenido.map((itemLista) => (
              <li key={itemLista.id}>
                <Link
                  href={itemLista.link}
                  className="font-medium text-xs xl:text-sm hover:text-main-color transition-colors"
                >
                  {itemLista.nombre}
                </Link>
              </li>
            ))}
          </ul>
        ))}
        <div className="newsletter col-span-full flex flex-col gap-2 xl:col-span-1 w-full mx-auto max-w-[350px] xl:max-w-full">
          <span className="text-xs xl:text-sm">Suscribete al newsletter</span>
          <form
            className="w-full flex"
            id="formulario-newsletter"
            name="formulario-newsletter"
          >
            <label className="hidden" htmlFor="email">
              email
            </label>
            <input
              id="email"
              aria-label="email"
              name="email"
              type="email"
              className="bg-transparent border w-full border-secondary-white/20 text-main-white outline-none p-2 rounded-md rounded-r-none text-xs xl:text-sm"
            />
            <button className="bg-main-color px-4 py-2 rounded-md uppercase text-xs xl:text-sm rounded-l-none font-semibold text-main-black">
              enviar
            </button>
          </form>
        </div>
        <div className="copy w-full col-span-full flex items-center justify-center pt-6 pb-2 after:absolute relative after:top-0  after:w-4/5 after:h-[1px] after:bg-secondary-white/20">
          <span className="text-xs uppercase text-secondary-white font-medium font-montserrat">
            odyssey copyright 2024
          </span>
        </div>
      </div>
    </footer>
  );
}
