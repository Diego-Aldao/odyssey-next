"use client";
import { LISTADO_ID_ANIME_RANDOM } from "@/constants";
import React from "react";
import { useRouter } from "next/navigation";

export default function RandomAnime() {
  const router = useRouter();

  const handleClick = () => {
    const randomIndex = Math.floor(
      Math.random() * LISTADO_ID_ANIME_RANDOM.length
    );
    const randomAnime = LISTADO_ID_ANIME_RANDOM[randomIndex];
    router.push(`/anime/${randomAnime}`);
  };

  return (
    <div
      onClick={handleClick}
      className="fixed bottom-20 left-0 lg:-left-28 p-2 transition-all group hover:-left-0 group opacity-80 lg:opacity-100 flex items-center justify-center gap-6 bg-secondary-black rounded-r-3xl z-[4] cursor-pointer hover:bg-tertiary-black"
    >
      <span className="hidden lg:inline-block uppercase text-xs font-bold group-hover:opacity-100 group-hover:visible invisible opacity-0 transition-all group-hover:delay-100 relative -left-2 group-hover:left-0 text-main-color">
        random anime
      </span>
      <span className="icon-[game-icons--perspective-dice-six-faces-six] text-main-color h-8 w-8 animate-spinner-ease-spin"></span>
    </div>
  );
}
