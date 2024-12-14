import Link from "next/link";
import React from "react";

interface Props {
  destino: string;
  nombre: string;
  customStyles?: string;
}

export default function BackButton({ destino, nombre, customStyles }: Props) {
  return (
    <Link
      href={destino}
      className={`back-button bg-secondary-black rounded-xl group px-4 py-3 ml-auto flex items-center gap-2 border border-main-white/20 hover:border-main-white/50 transition-colors w-fit ${customStyles}`}
    >
      <span className="icon-[solar--alt-arrow-left-broken] group-hover:-translate-x-1 transition-transform lg:h-5 lg:w-5"></span>
      <span className="text-xs uppercase">{nombre}</span>
    </Link>
  );
}
