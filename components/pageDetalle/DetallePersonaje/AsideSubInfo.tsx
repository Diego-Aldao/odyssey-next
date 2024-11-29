import { AnimeElement } from "@/types/fetchTypes";
import Image from "next/image";
import React from "react";

interface Props {
  imagen: string;
  participaciones: AnimeElement[];
}

export default function AsideSubInfo({ imagen, participaciones }: Props) {
  return (
    <aside className="aside hidden md:flex flex-col gap-4">
      <div className="imagen overflow-hidden rounded-2xl border-2 border-secondary-white/20">
        <Image
          src={imagen}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          className="scale-105"
        />
      </div>
      <div className="animes flex flex-col gap-2">
        <h2 className="uppercase text-lg lg:text-xl xl:text-2xl font-montserrat font-black italic">
          participaciones
        </h2>
        {participaciones.slice(0, 24).map((item) => (
          <div key={item.anime.mal_id} className="flex items-start gap-2">
            <div className="imagen min-w-[50px] w-[50px] h-[70px] rounded-md overflow-hidden">
              <Image
                src={item.anime.images.webp.small_image_url}
                alt=""
                width={0}
                height={0}
                sizes="100vw"
              />
            </div>
            <div className="flex-col flex gap-2">
              <span className="text-sm font-medium line-clamp-2">
                {item.anime.title}
              </span>
              <span className="text-xs text-secondary-white">{item.role}</span>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
