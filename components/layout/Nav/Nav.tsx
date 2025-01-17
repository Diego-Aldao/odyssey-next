"use client";
import React from "react";
import SearchBar from "../../SearchBar/SearchBar";
import Logo from "../../Logo";
import MenuMobile from "./MenuMobile";
import Link from "next/link";
import { LISTADO_NAVEGACION } from "@/constants";
import User from "./User";
import useScroll from "@/hooks/useScroll";

export default function Nav() {
  const scrollY = useScroll();
  return (
    <header
      className={`w-full top-0 z-20 after:absolute after:inset-0 after:bg-gradient-to-b transition-transform-opacity  after:to-transparent pointer-events-none  ${
        scrollY >= 600
          ? "fixed translate-y-0 opacity-100 after:from-main-black after:via-main-black/60 h-48 after:via-70%"
          : "absolute translate-y-0 opacity-100 after:from-transparent h-fit"
      } ${scrollY > 100 && scrollY < 600 && "-translate-y-4 opacity-0"} `}
    >
      <div className="contenedor w-full max-w-[1903px] pointer-events-auto mx-auto grid grid-cols-2 grid-rows-2 gap-4 lg:gap-x-6 relative z-[2] sm:flex sm:items-center md:grid md:grid-cols-[120px,auto,44px] lg:grid-cols-[200px,auto,44px] pt-4 md:pt-6 lg:pt-8 px-4 md:px-8 lg:px-10 xl:flex">
        <Logo customStyles="w-fit h-fit self-center" />
        <ul className="menu-desktop hidden md:flex items-center gap-2 flex-1 xl:flex-initial sm:gap-4">
          {LISTADO_NAVEGACION.map((itemNavegacion) => (
            <li key={itemNavegacion.id} className="w-fit ">
              <Link
                className="text-sm lg:text-base hover:text-main-color transition-colors whitespace-nowrap capitalize font-bold text-inherit px-2 py-1 lg:px-4 lg:py-2 cursor-pointer"
                href={itemNavegacion.link}
              >
                {itemNavegacion.nombre}
              </Link>
            </li>
          ))}
        </ul>
        <SearchBar customStyles="flex max-w-[400px] md:w-fit md:mx-0 2xl:max-w-[500px] mx-auto sm:mx-0 sm:ml-auto md:mx-auto col-span-full row-start-2 h-fit sm:col-start-2 sm:row-start-1 sm:col-span-1 sm:min-w-[400px] md:min-w-[450px] lg:min-w-[500px] xl:mx-0  xl:min-w-[280px] xl:w-full xl:max-w-[450px] xl:ml-auto xl:flex-1 md:col-span-full md:row-start-2" />
        <User />
        <MenuMobile />
      </div>
    </header>
  );
}
