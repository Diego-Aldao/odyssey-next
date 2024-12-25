"use client";
import React from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

import imagen from "@/assets/mainPage/imagenHero.webp";
import imageMobile from "@/assets/mainPage/imagenHeroMobile.webp";

export default function HeroSection() {
  const [ref, inView] = useInView({
    threshold: 0.4,
  });
  const [ref2, inView2] = useInView({
    threshold: 0.5,
  });
  return (
    <div
      ref={ref}
      className="w-full absolute top-0 left-0 h-[500px] xl:h-[600px] flex flex-col items-start justify-end md:justify-start max-w-[1903px] mx-auto after:absolute after:inset-0 after:bg-gradient-to-t after:from-main-black after:via-transparent after:to-main-black after:from-[2%]"
    >
      <div
        ref={ref2}
        className="flex mt-auto flex-col h-fit relative mb-10 md:mb-0 md:mt-40 z-[2] px-4 md:px-8 lg:px-10 max-w-[1440px] mx-auto w-full 2xl:px-0"
      >
        <div className="w-fit flex flex-col">
          <h1
            className={`uppercase font-black relative italic tracking-tighter [text-shadow:4px_4px_#000,0px_0px_20px_#000] lg:[text-shadow:4px_4px_#000,0px_0px_40px_#000] xl:[text-shadow:4px_4px_#000,0px_0px_20px_#000] text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl transition-transform-opacity ${
              inView2
                ? "lg:opacity-100 lg:translate-x-0"
                : "lg:opacity-0 lg:-translate-x-2"
            }`}
          >
            odyssey
          </h1>
          <span
            className={`uppercase font-montserrat self-end font-black italic text-xs xl:text-xl lg:-top-2  relative [text-shadow:2px_2px_#000,0px_0px_20px_#000] lg:[text-shadow:2px_2px_#000,0px_0px_40px_#000] xl:[text-shadow:2px_2px_#000,0px_0px_20px_#000] sm:text-base md:text-lg transition-transform-opacity delay-75 ${
              inView2
                ? "lg:opacity-100 lg:translate-y-0"
                : "lg:opacity-0 lg:-translate-y-2"
            }`}
          >
            comunidad anime
          </span>
        </div>
      </div>

      <div
        className={`absolute top-0 left-0 p-2 imagen w-full h-full rounded-t-xl overflow-hidden transition-transform-opacity  ${
          inView
            ? " lg:opacity-100 translate-y-0"
            : "lg:opacity-0 -translate-y-4"
        }`}
      >
        <div className="imagen w-full h-full rounded-t-xl overflow-hidden">
          <Image
            blurDataURL={imageMobile.blurDataURL}
            placeholder="blur"
            src={imageMobile}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            className={`mix-blend-difference md:hidden`}
            priority
          />
          <Image
            blurDataURL={imagen.blurDataURL}
            placeholder="blur"
            src={imagen}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            className={`mix-blend-difference xl:object-[50%,70%] hidden md:inline-block`}
            priority
          />
        </div>
      </div>
    </div>
  );
}
