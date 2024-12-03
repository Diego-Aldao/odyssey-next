import { Genre } from "@/types/fetchTypes";
import { LocalObjetoTraduccion } from "@/types/localTypes";
import Image from "next/image";
import React from "react";

interface Props {
  imagen: string;
  score: number;
  año: number;
  titulo: string;
  sinopsis: string;
  generos: Genre[];
  estado: string;
  rankPopularidad: number;
}

const estados: LocalObjetoTraduccion = {
  "Finished Airing": {
    nombre: "finalizado",
    color: "bg-red-500",
  },
  "Currently Airing": {
    nombre: "en emisión",
    color: "bg-green-500",
  },
  "Not Yet Aired": {
    nombre: "finalizado",
    color: "bg-secondary-white",
  },
};

export default function SectionHero({
  imagen,
  score,
  año,
  titulo,
  sinopsis,
  generos,
  estado,
  rankPopularidad,
}: Props) {
  return (
    <div className="hero h-[600px] md:h-[550px] xl:h-[650px] w-full flex flex-col items-start justify-end  max-w-[1440px] mx-auto lg:relative">
      <div className="imagen pointer-events-none absolute sm:h-[750px] md:h-[800px] top-0 -z-[1] right-0 after:absolute after:inset-0 after:bg-main-black/30  before:absolute before:inset-0 before:bg-gradient-to-t before:from-main-black before:to-transparent before:via-main-black/70 w-full overflow-x-hidden lg:hidden">
        <Image
          src={imagen}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          className="object-[50%,0px] xl:object-[50%,10%] 2xl:object-[50%,20%]"
        />
      </div>
      <div className="imagen hidden lg:block absolute skew-x-[60deg] top-24 xl:top-32 right-0 xl:right-10 overflow-hidden lg:w-[423px] lg:h-[600px] pointer-events-none hover:skew-x-0 transition-all hover:z-10 hover:top-32 hover:scale-90 hover:xl:scale-100 rounded-xl peer group">
        <Image
          src={imagen}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          className="object-[50%,150px] skew-x-[-60deg] hover:object-[50%-0px] transition-all pointer-events-auto hover:skew-x-0 "
        />
      </div>
      <div className="imagen hidden lg:block absolute skew-x-[60deg] top-8 right-10 xl:right-20 grayscale -z-[1] overflow-hidden lg:w-[423px] lg:h-[600px] pointer-events-none peer-hover:scale-50 transition-all">
        <Image
          src={imagen}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          className="object-[50%,150px] skew-x-[-60deg]"
        />
      </div>
      <div className="imagen hidden lg:block absolute skew-x-[60deg] top-44 xl:top-60 -right-10 xl:right-0 grayscale -z-[1] overflow-hidden lg:w-[423px] lg:h-[600px] pointer-events-none peer-hover:scale-50 transition-all">
        <Image
          src={imagen}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          className="object-[50%,0px] skew-x-[-60deg]"
        />
      </div>
      <div className="image-focus w-full fixed h-full top-0 left-0 z-[-1] peer-hover:z-[9] peer-hover:visible peer-hover:opacity-100 invisible opacity-0 peer-hover:bg-main-black/90 transition-opacity pointer-events-none"></div>
      <div className="hero-content flex-col gap-2 relative w-fit flex">
        <ul className="subinfo flex gap-4 flex-wrap pl-2 items-center relative w-fit">
          <li className=" flex gap-1 items-center">
            <span className="text-xs sm:text-sm lg:text-base xl:text-lg font-semibold font-montserrat">
              {score}
            </span>
            <span className="icon-[solar--star-bold] h-3 w-3 lg:h-4 lg:w-4 xl:h-5 xl:w-5 text-main-color"></span>
          </li>
          <li className="flex gap-1 items-center">
            <span className="text-xs sm:text-sm lg:text-base xl:text-lg font-semibold font-montserrat">
              {año}
            </span>
            <span className="icon-[solar--calendar-bold] h-3 w-3 lg:h-4 lg:w-4 xl:h-5 xl:w-5 text-main-color"></span>
          </li>
          <li className="flex gap-1 items-center">
            <span className="text-xs sm:text-sm lg:text-base xl:text-lg font-semibold font-montserrat">
              {rankPopularidad}
            </span>
            <span className="icon-[solar--graph-up-bold] h-3 w-3 lg:h-4 lg:w-4 xl:h-5 xl:w-5 text-main-color"></span>
          </li>
          <li className="py-1 px-4 rounded-full bg-main-black flex items-center gap-2">
            <span
              className={`w-1 h-1 lg:w-2 lg:h-2 rounded-full block ${estados[estado].color}`}
            ></span>
            <span className="capitalize text-xs lg:text-sm xl:text-base font-bold font-montserrat">
              {estados[estado].nombre}
            </span>
          </li>
        </ul>
        <h1 className="font-montserrat tracking-tighter xl:pr-2 xl:pl-1 lg:max-w-[700px] xl:max-w-[850px] [text-shadow:_2px_2px_#000] uppercase line-clamp-2 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-2xl font-black italic relative">
          {titulo}
        </h1>
        <ul className="tags flex gap-2 flex-wrap relative w-fit">
          {generos.map((genero) => (
            <li key={genero.mal_id}>
              <span className="uppercase text-[10px] lg:text-xs font-semibold px-4 py-1 rounded-full bg-secondary-black">
                {genero.name}
              </span>
            </li>
          ))}
        </ul>
        <p className="text-xs lg:text-sm text-secondary-white max-w-[500px] md:max-w-[600px] xl:max-w-[750px] md:line-clamp-6 relative line-clamp-[8] xl:line-clamp-[10] lg:bg-main-black/50 rounded-md lg:backdrop-blur-sm">
          {sinopsis}
        </p>
      </div>
    </div>
  );
}
