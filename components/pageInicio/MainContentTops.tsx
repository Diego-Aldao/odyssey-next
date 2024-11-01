import React from "react";
import { topsEmision } from "@/data/topsEmision";
import Image from "next/image";

export default function MainContentTops() {
  return (
    <div className="contenedor w-full px-1 grid gap-4 sm:grid-cols-2 lg:gap-8 xl:grid-cols-2 2xl:grid-cols-1">
      {topsEmision.data.slice(0, 12).map((anime) => (
        <div
          className="w-full border border-main-white/20 h-14 lg:h-16 xl:h-20 rounded-xl rounded-l-md -skew-x-12 o flex hover:border-main-color transition-colors cursor-pointer group"
          key={anime.mal_id}
        >
          <div className="puesto bg-main-color flex items-center justify-center px-2 group-hover:px-4 transition-all rounded-l-md">
            <span className="font-montserrat font-black text-main-black ">
              {anime.rank === null
                ? "-"
                : anime.rank >= 10
                ? anime.rank
                : `0${anime.rank}`}
            </span>
          </div>
          <div className="imagen w-1/2 mr-2 relative after:absolute after:inset-0 after:bg-gradient-to-l after:to-transparent after:from-main-black after:via-main-black/90 after:-right-[5px] group-hover:after:left-20 after:transition-all">
            <Image
              src={anime.images.webp.image_url}
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              className="object-[50%,-20px]"
            />
          </div>
          <div className="info flex flex-wrap 2xl:flex-nowrap w-full justify-end items-center gap-4 pr-4 absolute h-full">
            <span className="uppercase text-sm xl:text-base font-semibold line-clamp-1 max-w-[147px] md:max-w-[170px] lg:max-w-[250px] xl:max-w-[300px] 2xl:max-w-[200px]  text-right">
              {anime.title}
            </span>
            <div className="calificacion flex gap-1 items-center ">
              <span className="text-xs xl:text-sm font-montserrat font-black">
                {anime.score}
              </span>
              <span className="icon-[solar--star-bold] h-3 w-3 xl:h-4 xl:w-4 text-main-color"></span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
