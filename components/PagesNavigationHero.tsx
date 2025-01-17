"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { useInView } from "react-intersection-observer";

interface Props {
  imageDesktop: StaticImageData;
  imageMobile: StaticImageData;
  customImagePosition?: string;
  titulo: string;
  customStylesTitulo?: string;
  subtitulo?: string | string[];
}

export default function PagesNavigationHero({
  imageDesktop,
  imageMobile,
  customImagePosition,
  titulo,
  subtitulo,
  customStylesTitulo,
}: Props) {
  const [ref, inView] = useInView({
    threshold: 0.4,
  });
  const [ref2, inView2] = useInView({
    threshold: 0.5,
  });
  return (
    <div
      ref={ref}
      className="w-full relative h-[500px] xl:h-[600px] 2xl:h-[700px] flex flex-col items-start justify-end md:justify-start max-w-[1903px] mx-auto  after:absolute after:inset-0 after:bg-gradient-to-t after:from-main-black after:via-transparent after:to-main-black after:from-[2%]"
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
            } ${customStylesTitulo}`}
          >
            {titulo}
          </h1>
          <span
            className={`uppercase font-montserrat self-end font-black italic text-xs xl:text-xl lg:-top-2  relative [text-shadow:2px_2px_#000,0px_0px_20px_#000] lg:[text-shadow:2px_2px_#000,0px_0px_40px_#000] xl:[text-shadow:2px_2px_#000,0px_0px_20px_#000] sm:text-base md:text-lg transition-transform-opacity delay-75 ${
              inView2
                ? "lg:opacity-100 lg:translate-y-0"
                : "lg:opacity-0 lg:-translate-y-2"
            }`}
          >
            {subtitulo}
          </span>
        </div>
      </div>

      <div
        className={`absolute top-0 left-0 p-2 imagen w-full h-full rounded-t-xl overflow-hidden  transition-transform-opacity  ${
          inView
            ? " lg:opacity-100 translate-y-0"
            : "lg:opacity-0 -translate-y-4"
        }`}
      >
        <div className="imagen w-full h-full rounded-xl overflow-hidden">
          <Image
            blurDataURL={imageMobile.blurDataURL}
            placeholder="blur"
            src={imageMobile}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            className={`md:hidden ${customImagePosition}`}
            priority
          />
          <Image
            blurDataURL={imageDesktop.blurDataURL}
            placeholder="blur"
            src={imageDesktop}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            className={`hidden md:inline-block ${customImagePosition}`}
            priority
          />
        </div>
      </div>
    </div>
  );
}
