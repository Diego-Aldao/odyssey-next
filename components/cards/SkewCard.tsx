import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  imagen: string;
  titulo: string;
  subtitulo: string;
  destino: string;
}

export default function SkewCard({
  imagen,
  titulo,
  subtitulo,
  destino,
}: Props) {
  return (
    <Link
      href={destino}
      className="-skew-x-[10deg] h-20 xl:h-24  relative w-full flex gap-2  overflow-hidden rounded-md border-2 border-secondary-white/10 group"
    >
      <div className="deco invisible opacity-0 group-hover:visible group-hover:opacity-100 w-0 h-full bg-main-color group-hover:w-2 absolute top-0 left-0 transition-all"></div>
      <span className="imagen h-20 xl:h-24  w-[120px] xl:w-[170px] overflow-hidden absolute top-0 left-0  group-hover:left-2 transition-all">
        <Image
          src={imagen}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          className="scale-105 object-[50%,-30px] xl:object-[50%,-50px]"
        />
      </span>

      <span className="info flex flex-col gap-2 w-full bg-gradient-to-r from-transparent group-hover:to-100% transition-all to-main-black to-[120px] lg:to-[120px] xl:to-[170px] items-end z-[2] relative pt-4 pr-4">
        <span className="font-medium text-sm lg:text-base text-right uppercase line-clamp-1 max-w-[70%]">
          {titulo}
        </span>
        <span className="text-xs text-secondary-white">{subtitulo}</span>
      </span>
    </Link>
  );
}
