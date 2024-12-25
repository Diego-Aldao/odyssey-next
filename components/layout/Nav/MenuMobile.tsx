"use client";
import ModalMenuMobile from "@/components/modals/ModalMenuMobile";
import useToggler from "@/hooks/useToggler";
import React, { useEffect } from "react";

export default function MenuMobile() {
  const { toggler, handleToggler } = useToggler();

  // Bloquear/desbloquear el scroll según el estado del menú
  useEffect(() => {
    if (toggler) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Limpieza en caso de desmontaje
    return () => {
      document.body.style.overflow = "";
    };
  }, [toggler]);

  return (
    <>
      <ModalMenuMobile toggler={toggler} handleToggler={handleToggler} />
      <div
        onClick={handleToggler}
        className="menu-mobile md:hidden flex items-center justify-center ml-auto relative h-10 w-10"
      >
        <span
          className={`icon-[solar--menu-dots-broken] h-10 w-10 text-main-white absolute right-0 transition-all ${
            toggler
              ? "-top-20 opacity-0 invisible"
              : "top-0 visible opacity-100"
          }`}
        ></span>
        <span
          className={`icon-[solar--close-circle-broken]  h-8 w-8 text-main-white absolute right-[4px] transition-all ${
            toggler
              ? "top-[4px] visible opacity-100"
              : "-top-20 opacity-0 invisible"
          }`}
        ></span>
      </div>
    </>
  );
}
