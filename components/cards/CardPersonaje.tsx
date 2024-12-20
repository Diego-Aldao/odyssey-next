import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  imagen: StaticImageData;
  nombre: string;
  id: number;
}

export default function CardPersonaje({ imagen, nombre, id }: Props) {
  const cantidad = Array(10).fill(null);
  return (
    <Link
      href={`/personaje/${id}`}
      className="imagenpj relative overflow-hidden flex flex-col items-center group justify-center h-[280px] w-[304px] mx-auto sm:h-full sm:w-full sm:mx-0 [-webkit-mask-image:-webkit-gradient(linear,_left_top,_left_bottom,_from(rgba(0,0,0,1)),_to(rgba(0,0,0,0)))]"
    >
      <ul className="listado flex flex-col group-hover:-translate-y-4 transition-transform group-hover:scale-105 justify-center items-center gap-0 absolute z-10 left-0  mix-blend-color-burn overflow-hidden">
        {cantidad.map((_, i) => (
          <li key={i}>
            <span
              className={`uppercase   font-black font-montserrat italic tracking-tighter px-1 pr-2 text-[40px] leading-[1] sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl whitespace-nowrap opacity-40`}
            >
              {nombre}
            </span>
          </li>
        ))}
      </ul>
      <ul className="listado flex flex-col group-hover:-translate-y-4 transition-transform group-hover:scale-105 gap-0 absolute left-0   overflow-hidden">
        {cantidad.map((_, i) => (
          <li key={i}>
            <span className="uppercase font-black font-montserrat italic  group-hover:xl:[text-shadow:_-1px_1px_0_#b5cff8,1px_1px_0_#b5cff8,1px_-1px_0_#b5cff8,-1px_-1px_0_#b5cff8] transition-all tracking-tighter px-1 pr-2 text-[40px] leading-[1] sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl whitespace-nowrap text-main-color">
              {nombre}
            </span>
          </li>
        ))}
      </ul>
      <Image
        src={imagen}
        className="[filter:drop-shadow(12px_-4px_0px_#b5cff8)] group-hover:xl:[filter:drop-shadow(20px_-8px_0px_#b5cff8)] transition-all !object-contain sm:!object-cover object-[100%,10px]"
        alt=""
        width={0}
        height={0}
        sizes="100vw"
      />
    </Link>
  );
}
