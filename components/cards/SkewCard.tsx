"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useInView } from "react-intersection-observer";
import imagenError from "@/assets/errorImageVideoCard.webp";

interface Props {
  imagen: string;
  titulo: string;
  subtitulo: string;
  destino: string;
  customImageStyles?: string;
  customStyles?: string;
  customShadowStyles?: string;
}

interface PropsCardDouble {
  imagenLeft: string;
  imagenRight: string;
  nombreTop: string;
  nombreBottom: string;
  destinoTop: string;
  destinoBottom: string;
}

export function SkewCardDouble({
  imagenLeft,
  imagenRight,
  nombreTop,
  nombreBottom,
  destinoTop,
  destinoBottom,
}: PropsCardDouble) {
  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });
  return (
    <div
      ref={ref}
      className={`-skew-x-[10deg] h-20 xl:h-24 relative w-full flex gap-2 overflow-hidden rounded-md border-2 border-secondary-white/10 group justify-between ${
        inView ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="deco invisible opacity-0 group-hover:visible group-hover:opacity-100 w-0 z-[2] h-full bg-main-color group-hover:w-1 absolute top-0 left-0 transition-all"></div>

      <div
        className={`overflow-hidden h-full relative left-0 group-hover:left-1 transition-all ${
          inView ? "translate-x-0" : "-translate-x-4"
        }`}
      >
        <Image
          src={imagenLeft || imagenError}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          className="scale-105"
          unoptimized
        />
      </div>
      <div className="deco invisible opacity-0 group-hover:visible group-hover:opacity-100 w-0 z-[2] h-full bg-main-color group-hover:w-1 absolute top-0 right-0 transition-all"></div>
      <div
        className={`overflow-hidden h-full relative right-0 group-hover:right-1 transition-all ${
          inView ? "translate-x-0" : "translate-x-4"
        }`}
      >
        <Image
          src={imagenRight || imagenError}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          className="scale-105"
          unoptimized
        />
      </div>
      <div className="info z-10 absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center gap-1">
        <div className="shadow-left hidden lg:block absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent to-main-black to-[55px] xl:to-[65px] group-hover:left-12 transition-all"></div>
        <div className="shadow-right hidden lg:block absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-transparent to-main-black to-[55px] xl:to-[65px] group-hover:right-12 transition-all"></div>
        <Link
          href={destinoTop}
          className="text-xs lg:text-sm line-clamp-1 max-w-[60%] xl:max-w-[65%] 2xl:max-w-[75%] font-medium relative z-[2] hover:text-main-color transition-colors"
        >
          {nombreTop}
        </Link>
        <span className="text-[10px] xl:text-xs line-clamp-1 text-secondary-white relative z-[2]">
          como
        </span>
        <Link
          href={destinoBottom}
          className="text-xs lg:text-sm line-clamp-1 max-w-[60%] xl:max-w-[65%] 2xl:max-w-[75%] font-medium relative z-[2] hover:text-main-color transition-colors"
        >
          {nombreBottom}
        </Link>
      </div>
    </div>
  );
}

export default function SkewCard({
  imagen,
  titulo,
  subtitulo,
  destino,
  customImageStyles,
  customShadowStyles,
}: Props) {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  return (
    <Link
      href={destino}
      ref={ref}
      className={`-skew-x-[10deg] h-20 xl:h-24 relative w-full flex gap-2 overflow-hidden rounded-md border-2 border-secondary-white/10 group bg-main-black ${
        inView ? "opacity-100" : "opacity-0"
      } transition-opacity`}
    >
      <div className="deco invisible opacity-0 group-hover:visible group-hover:opacity-100 w-0 h-full bg-main-color group-hover:w-2 absolute top-0 left-0 transition-all"></div>

      <span
        className={`imagen h-20 xl:h-24 w-[120px] xl:w-[170px] overflow-hidden absolute top-0 left-0  group-hover:left-2 transition-all ${
          inView ? "translate-x-0" : "-translate-x-4"
        }`}
      >
        <Image
          src={imagen || imagenError}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          className={`scale-105 object-[50%,-30px] xl:object-[50%,-50px] ${customImageStyles}`}
          unoptimized
        />
      </span>

      <span
        className={`info flex flex-col gap-2 w-full items-end z-[2] relative pt-4 pr-4 after:absolute after:inset-0 after:bg-gradient-to-r after:to-[130px] after:lg:to-[120px] after:xl:to-[160px] after:lg:group-hover:left-20 after:transition-all after:from-transparent after:to-main-black ${customShadowStyles}`}
      >
        <span className="font-medium text-sm lg:text-base text-right uppercase line-clamp-1 max-w-[70%] relative z-[2]">
          {titulo}
        </span>
        <span className="text-xs text-secondary-white font-montserrat capitalize relative z-[2]">
          {subtitulo}
        </span>
      </span>
    </Link>
  );
}
