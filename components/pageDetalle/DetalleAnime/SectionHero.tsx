import {
  BASE_URL_ANIME,
  LISTADO_ALL_GENEROS,
  LISTADO_ESTADOS_ANIME,
} from "@/constants";
import fetchData from "@/services/fetchData";
import { FetchAnime } from "@/types/fetchTypes";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ImagesDetalle from "./ImagesDetalle";

interface Props {
  id: string;
}

export default async function SectionHero({ id }: Props) {
  const { data } = await fetchData<FetchAnime>(`${BASE_URL_ANIME}/${id}/full`);

  const color = LISTADO_ESTADOS_ANIME[data.status.toLowerCase()].color;
  const generosEspañol = data.genres
    .map((genero) => {
      return LISTADO_ALL_GENEROS.find((item) => item.id === genero.mal_id);
    })
    .filter((genero) => genero !== undefined);

  return (
    <div className="hero h-[600px] md:h-[550px] xl:h-[650px] w-full flex flex-col items-start justify-end  max-w-[1440px] mx-auto lg:relative">
      <div className="imagen pointer-events-none absolute sm:h-[750px] md:h-[800px] top-0 -z-[1] right-0 after:absolute after:inset-0 after:bg-main-black/30  before:absolute before:inset-0 before:bg-gradient-to-t before:from-main-black before:to-transparent before:via-main-black/70 w-full overflow-x-hidden lg:hidden">
        <Image
          src={data.images.webp.image_url}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          className="object-[50%,0px] xl:object-[50%,10%] 2xl:object-[50%,20%]"
          unoptimized
        />
      </div>
      <div className="imagen absolute right-[5vw] xl:right-[10vw] bottom-0 rounded-xl overflow-hidden hidden lg:block w-[250px] xl:w-[300px] z-[2]">
        <Image
          src={data.images.webp.large_image_url}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          unoptimized
        />
      </div>
      <ImagesDetalle id={id} />
      <div className="hero-content flex-col gap-2 relative w-fit flex">
        <ul className="subinfo flex gap-4 flex-wrap pl-2 items-center relative w-fit">
          <li className=" flex gap-1 items-center">
            <span
              className={`text-xs font-semibold font-montserrat ${
                data.score
                  ? "sm:text-sm lg:text-base xl:text-lg"
                  : "capitalize lg:text-sm xl:text-base"
              }`}
            >
              {data.score || "sin puntuar"}
            </span>
            <span className="icon-[solar--star-bold] h-3 w-3 lg:h-4 lg:w-4 xl:h-5 xl:w-5 text-main-color"></span>
          </li>
          <li className="py-1 px-4 rounded-full bg-main-black flex items-center gap-2">
            <span
              style={{ background: color }}
              className={`w-1 h-1 lg:w-2 lg:h-2 rounded-full block ${color}`}
            ></span>
            <span className="capitalize text-xs lg:text-sm xl:text-base font-bold font-montserrat">
              {LISTADO_ESTADOS_ANIME[data.status.toLowerCase()].nombre}
            </span>
          </li>
        </ul>
        <Link href={`/anime/${id}`}>
          <h1 className="font-montserrat w-fit tracking-tighter xl:pr-2 xl:pl-1 lg:max-w-[700px] xl:max-w-[850px] [text-shadow:_2px_2px_#000] uppercase line-clamp-2 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-2xl font-black italic relative hover:text-main-color transition-colors">
            {data.title}
          </h1>
        </Link>
        <ul className="tags flex gap-2 flex-wrap relative w-fit">
          {generosEspañol.map((genero) => (
            <li key={genero.id}>
              <span className="uppercase text-[10px] lg:text-xs font-semibold px-4 py-1 rounded-full bg-secondary-black">
                {genero.nombre}
              </span>
            </li>
          ))}
        </ul>
        {data.synopsis && (
          <p className="text-xs lg:text-sm text-secondary-white max-w-[500px] md:max-w-[600px] xl:max-w-[750px] md:line-clamp-6 relative line-clamp-[8] xl:line-clamp-[10] lg:bg-main-black/50 rounded-md lg:backdrop-blur-sm">
            {data.synopsis}
          </p>
        )}
      </div>
    </div>
  );
}
