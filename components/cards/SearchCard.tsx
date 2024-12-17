import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  destino: string;
  imagen: string;
  titulo: string;
  children: React.ReactNode;
}

export default function SearchCard({
  destino,
  imagen,
  titulo,
  children,
}: Props) {
  return (
    <Link
      href={destino}
      className="card-search rounded-xl border-main-white/20 border p-2 flex gap-2 max-w-[450px] w-full hover:border-main-white/40 transition-colors bg-main-black hover:bg-secondary-black"
    >
      <div className="imagen rounded-xl w-[100px] h-[135px] border-secondary-black border-2 overflow-hidden">
        <Image
          src={imagen}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          className="scale-105"
        />
      </div>
      <div className="info flex flex-col gap-2 flex-1">
        <span className="font-bold text-sm font-montserrat line-clamp-2 md:text-base lg:text-sm xl:text-base">
          {titulo}
        </span>
        {children}
      </div>
    </Link>
  );
}
