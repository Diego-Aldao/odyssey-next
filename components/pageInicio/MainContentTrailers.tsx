"use client";
import React from "react";
import { trailers } from "@/data/trailers";
import { FetchTrailers } from "@/types/fetchTypes";
import Image from "next/image";

export default function MainContentTrailers() {
  const filtrarTrailers = (trailers: FetchTrailers) => {
    const palabrasClave = ["trailer", "teaser"];
    const filtrados = trailers.data.filter((trailer) =>
      palabrasClave.some((palabra) =>
        trailer.title.toLowerCase().includes(palabra)
      )
    );
    return filtrados;
  };

  const trailersFiltrados = filtrarTrailers(trailers);

  return (
    <div className="grid gap-8 lg:gap-4 sm:grid-cols-3 lg:grid-cols-4 ">
      {trailersFiltrados.slice(0, 12).map((trailer) => (
        <div className="flex flex-col gap-2" key={trailer.entry.mal_id}>
          <span className="font-semibold line-clamp-1 text-sm xl:text-base">
            {trailer.entry.title}
          </span>
          <div className="rounded-xl relative  bg-gradient-to-t from-main-color to-tertiary-black via-main-color bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all p-1 group">
            <div className="play absolute h-14 w-14 inset-0 mx-auto my-auto rounded-full bg-main-black/50 backdrop-blur-sm flex items-center justify-center group-hover:bg-main-black transition-colors cursor-pointer z-[2]">
              <span className="icon-[game-icons--play-button] h-10 w-10 text-main-white ml-1 group-hover:text-main-color transition-colors"></span>
            </div>
            <div className="imagen rounded-xl overflow-hidden after:absolute after:inset-0 after:bg-main-black/20 group-hover:after:bg-main-black/10 after:transition-colors relative">
              <Image
                src={trailer.trailer.images.medium_image_url || ""}
                alt=""
                width={0}
                height={0}
                sizes="100vw"
              />
            </div>
          </div>
          <span className="self-end text-xs xl:text-sm">{trailer.title}</span>
        </div>
      ))}
    </div>
  );
}
