import Image from "next/image";
import React from "react";
import imagen from "@/assets/mainPage/imagenHero.webp";

export default function HeroSection() {
  return (
    <section className="flex flex-col sm:gap-y-12  w-full max-w-[1440px] mx-auto justify-end relative">
      <div className="imagen-mobile w-[150%] max-w-[500px] -left-20 relative sm:w-[700px] sm:max-w-full sm:-left-0 md:left-0 md:w-[800px] md:-mt-12 scale-y-95 lg:w-full ml-auto   scale-x-[-1] lg:h-[650px] xl:h-[800px] ">
        <Image
          src={imagen}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          className="!object-contain"
        />
      </div>
      <div className="left flex flex-col w-fit absolute bottom-0 left-0 z-2 sm:top-20 sm:left-10 sm:bottom-auto">
        <h1 className="uppercase font-black text-5xl italic tracking-tighter [text-shadow:4px_4px_#000,0px_0px_20px_#000] lg:[text-shadow:4px_4px_#000,0px_0px_40px_#000] xl:[text-shadow:4px_4px_#000,0px_0px_20px_#000] sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
          odyssey
        </h1>
        <span className="uppercase font-black italic text-xs self-end mr-3 md:mr-4 xl:mr-6 lg:-top-2 relative [text-shadow:2px_2px_#000,0px_0px_20px_#000] lg:[text-shadow:2px_2px_#000,0px_0px_40px_#000] xl:[text-shadow:2px_2px_#000,0px_0px_20px_#000] sm:text-base md:text-lg">
          comunidad anime
        </span>
      </div>
    </section>
  );
}
