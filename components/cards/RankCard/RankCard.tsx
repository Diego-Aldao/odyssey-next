"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useInView } from "react-intersection-observer";
import errorImage from "@/assets/errorImageVideoCard.webp";

interface Props {
  destino: string;
  children: React.ReactNode;
  numeroLista: number;
  imagen: string;
  customStyles?: string;
  customStylesImage?: string;
}

export default function RankCard({
  children,
  numeroLista,
  imagen,
  customStyles,
  destino,
  customStylesImage,
}: Props) {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  return (
    <Link
      href={destino}
      ref={ref}
      className={`border-main-white/20 h-16 rounded-xl border bg-main-black -skew-x-12 flex items-center overflow-hidden lg:max-w-full relative group transition-colors cursor-pointer after:absolute after:bg-gradient-to-r after:from-transparent after:to-main-black after:via-main-black after:inset-0 group hover:after:left-20 after:transition-all ${customStyles} ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      } transition-transform-opacity`}
    >
      <span className="bg-main-black relative z-[2] transition-all flex h-full items-center justify-center w-6 lg:w-8  text-main-white group-hover:w-10  font-montserrat font-bold text-xs lg:text-sm">
        {numeroLista}
      </span>
      <div
        className={`relative w-[55%] h-full bg-main-black -left-8 ${
          inView ? "translate-x-0" : "-translate-x-4"
        } transition-transform`}
      >
        <Image
          src={imagen || errorImage}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          className={customStylesImage}
          unoptimized
        />
      </div>
      {children}
    </Link>
  );
}
