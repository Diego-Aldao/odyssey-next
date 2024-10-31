import Image from "next/image";
import React from "react";
import imagen from "@/assets/mainPage/imagenHero.png";
import SearchBar from "../SearchBar";

export default function MainContentHero() {
  return (
    <>
      <SearchBar customStyles=" w-[90%] mx-auto h-10 max-w-[500px] md:h-12 lg:max-w-[600px] sm:hidden lg:flex relative z-[2] 2xl:hidden" />
      <div className="upper flex flex-col sm:flex-col-reverse 2xl:pt-24">
        <div className="imagen-mobile w-[150%] max-w-[500px] -mt-16 -left-20 sm:-mt-40  relative sm:w-[700px] sm:max-w-full sm:-left-0 md:left-0 md:w-[800px] md:-mt-44 scale-y-95 lg:w-full lg:-mt-80 lg:left-16 ml-auto   xl:-mt-96 scale-x-[-1] lg:h-[650px] xl:h-[800px] ">
          <Image
            src={imagen}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            className="!object-contain"
          />
        </div>
        <div className="left flex flex-col w-fit relative -top-8 sm:top-0">
          <h1 className="uppercase font-black text-5xl italic tracking-tighter [text-shadow:4px_4px_#000,0px_0px_20px_#000] lg:[text-shadow:4px_4px_#000,0px_0px_40px_#000] xl:[text-shadow:4px_4px_#000,0px_0px_20px_#000] sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
            odyssey
          </h1>
          <span className="uppercase font-black italic text-xs  self-end [text-shadow:2px_2px_#000,0px_0px_20px_#000] lg:[text-shadow:2px_2px_#000,0px_0px_40px_#000] xl:[text-shadow:2px_2px_#000,0px_0px_20px_#000] sm:text-base md:text-lg">
            comunidad anime
          </span>
        </div>
      </div>
    </>
  );
}
