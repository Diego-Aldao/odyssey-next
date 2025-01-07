"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const listadoLinksDetalle = [
  { id: 1, nombre: "informacion principal", destino: "/" },
  { id: 2, nombre: "Personajes", destino: "/personajes" },
  { id: 5, nombre: "episodios", destino: "/episodios" },
  { id: 3, nombre: "Recomendaciones", destino: "/recomendaciones" },
  { id: 4, nombre: "Reviews", destino: "/reviews" },
];

interface Props {
  id: string;
}

export default function HeaderDetalle({ id }: Props) {
  const pathname = usePathname();

  return (
    <header className="w-full max-w-[1440px] mx-auto flex items-center md:justify-center pt-2">
      <ul className="flex gap-2 lg:gap-4 overflow-x-scroll sm:overflow-hidden overflow-y-hidden pb-2 custom-scroll">
        {listadoLinksDetalle.map((link) => {
          const isActive =
            pathname === `/anime/${id}${link.destino}` ||
            (link.destino === "/" && pathname === `/anime/${id}`);
          return (
            <li key={link.id} className="flex">
              <Link
                href={`/anime/${id}${link.destino}`}
                className={`rounded-xl px-4 py-1 lg:py-2 lg:hover:border-main-color border border-transparent transition-colors ${
                  isActive
                    ? "bg-main-color text-main-black"
                    : "bg-secondary-black text-main-white"
                }`}
              >
                <span className="whitespace-nowrap uppercase text-xs font-semibold lg:text-sm text-inherit">
                  {link.nombre}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </header>
  );
}
