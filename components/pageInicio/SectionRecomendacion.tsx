"use client";
import React from "react";
import Image from "next/image";
import imagenAot from "@/assets/mainPage/aot.webp";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

export default function SectionRecomendacion() {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  const [ref2, inView2] = useInView({
    threshold: 0.5,
  });
  return (
    <div className="recomendacion w-full pb-10 flex xl:row-start-2 flex-col gap-4 col-span-full relative z-10">
      <div className="header flex items-center gap-2">
        <h2 className="uppercase text-lg md:text-3xl lg:text-4xl xl:text-5xl italic font-black tracking-tight">
          recomendacion
        </h2>
        <span className="icon-[solar--star-fall-broken] h-6 w-6 xl:h-7 xl:w-7"></span>
      </div>
      <Link
        href={`/anime/48583`}
        className="contenido group flex flex-col p-2 lg:px-10 lg:py-5 w-full relative rounded-xl xl:rounded-none h-[120px] sm:h-[200px] max-w-[400px] sm:max-w-full sm:mx-0 mx-auto lg:h-[450px] xl:h-[600px] 2xl:h-[700px] overflow-hidden"
      >
        <div className="header gap-8 self-end w-full justify-end hidden lg:flex relative z-10">
          <div className="puntuacion flex items-center gap-2 ">
            <span className="font-semibold font-montserrat lg:text-xl text-xs capitalize">
              mappa
            </span>
          </div>
          <div className="puntuacion flex items-center gap-2">
            <span className="font-semibold font-montserrat lg:text-xl text-xs">
              8.76
            </span>
            <span className="icon-[solar--star-bold] h-3 w-3 xl:h-6 xl:w-6 text-main-color"></span>
          </div>
        </div>
        <span
          className={`uppercase text-xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-montserrat tracking-tighter italic font-black w-fit h-fit relative z-[2] text-main-black [text-shadow:_-1px_1px_0_#b5cff8,1px_1px_0_#b5cff8,1px_-1px_0_#b5cff8,-1px_-1px_0_#b5cff8] top-2 left-4 lg:left-0 lg:top-3 mix-blend-lighten ${
            inView
              ? "lg:opacity-100 lg:translate-x-0"
              : "lg:opacity-0 lg:-translate-x-4"
          } transition-transform-opacity`}
        >
          attack on titan
        </span>
        <div className="lg:border-b-2 border-main-white/20 group-hover:lg:border-main-color transition-colors absolute hidden lg:block lg:w-[800px] xl:w-[1200px] 2xl:w-[1400px] h-[400px] top-[-320px] left-0 bg-main-black skew-y-[-15deg] overflow-hidden z-[5] pointer-events-none">
          <span
            ref={ref}
            className={`uppercase lg:text-7xl xl:text-8xl 2xl:text-9xl font-montserrat tracking-tighter text-main-color [text-shadow:_-1px_1px_0_#b5cff8,1px_1px_0_#b5cff8,1px_-1px_0_#b5cff8,-1px_-1px_0_#b5cff8] font-black w-fit h-fit xl:-bottom-[41.5px] lg:bottom-[-44px] 2xl:-bottom-[87px] 2xl:left-[40px] left-[40px] absolute skew-y-[15deg] italic z-[5] whitespace-nowrap ${
              inView
                ? "lg:opacity-100 lg:translate-x-0"
                : "lg:opacity-0 lg:translate-x-4"
            } transition-transform-opacity`}
          >
            attack on titan
          </span>
        </div>
        <div className="imagen h-full absolute top-0 left-0 w-full border-main-white/20 group-hover:lg:border-main-color transition-colors lg:border-2">
          <Image
            src={imagenAot}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            className="object-[50%,0px] scale-105 grayscale opacity-20 group-hover:lg:opacity-30 transition-transform-opacity translate-y-0 group-hover:lg:-translate-y-4"
          />
        </div>
        <span
          className={`uppercase text-xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-montserrat tracking-tighter italic font-black w-fit h-fit relative z-[2] text-main-black [text-shadow:_-1px_1px_0_#b5cff8,1px_1px_0_#b5cff8,1px_-1px_0_#b5cff8,-1px_-1px_0_#b5cff8] bottom-4 right-4 lg:right-0 lg:bottom-6 2xl:bottom-0 ml-auto  mix-blend-lighten mt-auto ${
            inView2
              ? "lg:opacity-100 lg:translate-y-0"
              : "lg:opacity-0 lg:translate-x-4"
          } transition-transform-opacity`}
        >
          the final season
        </span>
        <div className="lg:border-t-2 border-main-white/20 group-hover:lg:border-main-color transition-colors absolute hidden lg:block lg:w-[800px] xl:w-[1000px] h-[400px] bottom-[-300px] right-0 bg-main-black skew-y-[-15deg] overflow-hidden z-[5] pointer-events-none">
          <span
            ref={ref2}
            className={`uppercase lg:text-7xl xl:text-8xl 2xl:text-9xl font-montserrat tracking-tighter text-main-color [text-shadow:_-1px_1px_0_#b5cff8,1px_1px_0_#b5cff8,1px_-1px_0_#b5cff8,-1px_-1px_0_#b5cff8] font-black w-fit h-fit xl:-top-[41.5px] lg:top-[-12px] 2xl:-top-[90px] 2xl:right-[41px] right-[40px] absolute skew-y-[15deg] italic z-[5] whitespace-nowrap ${
              inView2
                ? "lg:opacity-100 lg:translate-y-0"
                : "lg:opacity-0 lg:-translate-x-4"
            } transition-transform-opacity`}
          >
            the final season
          </span>
        </div>
      </Link>
    </div>
  );
}
