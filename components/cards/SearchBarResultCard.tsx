import Link from "next/link";
import React from "react";

interface Props {
  nombre: string;
  destino: string;
}

export default function SearchBarResultCard({ nombre, destino }: Props) {
  return (
    <Link
      href={destino}
      className="card flex gap-2 p-3 items-center after:absolute relative after:left-0 after:w-full after:bottom-0 after:h-[1px] after:bg-gradient-to-l after:from-transparent after:via-main-white/20 after:to-transparent md:hover:bg-main-black group rounded-xl hover:border-main-white/20 border-transparent hover:after:opacity-0
  md:text-secondary-white border md:hover:text-main-white transition-colors after:transition-opacity"
    >
      <span className="icon-[lets-icons--search-alt-light] text-inherit"></span>
      <span className="text-xs line-clamp-1 text-inherit">{nombre}</span>
      <span className="icon-[solar--arrow-right-up-broken] self-end ml-auto text-inherit group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"></span>
    </Link>
  );
}
