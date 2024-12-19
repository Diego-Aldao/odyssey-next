import NoData from "@/components/errors/NoData";
import { AnimeElement } from "@/types/fetchTypes";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import errorImage from "@/assets/errorImageMainCard.webp";

interface Props {
  imagen: string;
  participaciones: AnimeElement[];
}

export default function AsideSubInfo({ imagen, participaciones }: Props) {
  return (
    <aside className="aside hidden md:flex flex-col gap-4">
      <div className="imagen overflow-hidden min-h-[295px] lg:min-h-[385px] xl:min-h-[464px] rounded-2xl border-2 bg-secondary-black border-secondary-white/20">
        <Image
          src={imagen || errorImage}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          className="scale-105"
          unoptimized
        />
      </div>
      <div className="animes flex flex-col gap-2">
        <h2 className="uppercase text-lg lg:text-xl xl:text-2xl font-montserrat font-black italic">
          participaciones
        </h2>
        {participaciones && participaciones.length >= 1 && (
          <>
            {participaciones.slice(0, 24).map((item, i) => (
              <div
                key={`${item.anime.mal_id}${i}`}
                className="flex items-start gap-2"
              >
                <div className="imagen min-w-[50px] w-[50px] h-[70px] rounded-md overflow-hidden">
                  <Image
                    src={item.anime.images.webp.small_image_url}
                    alt=""
                    width={0}
                    height={0}
                    sizes="100vw"
                    unoptimized
                  />
                </div>
                <div className="flex-col flex gap-2">
                  <Link
                    href={`/anime/${item.anime.mal_id}`}
                    className="text-sm font-medium line-clamp-2 hover:text-main-color transition-colors"
                  >
                    {item.anime.title}
                  </Link>
                  <span className="text-xs text-secondary-white">
                    {item.role}
                  </span>
                </div>
              </div>
            ))}
          </>
        )}
        {participaciones && participaciones.length === 0 && <NoData />}
      </div>
    </aside>
  );
}
