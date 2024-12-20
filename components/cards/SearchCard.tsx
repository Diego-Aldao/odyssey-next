"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useInView } from "react-intersection-observer";
import errorImage from "@/assets/errorImageMainCard.webp";

interface Props {
  destino: string;
  imagen: string;
  titulo: string;
  children: React.ReactNode;
}

export default function SearchCard({
  destino,
  imagen,
  titulo,
  children,
}: Props) {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  return (
    <Link
      href={destino}
      ref={ref}
      className={`card-search rounded-xl border-main-white/20 border p-2 flex gap-2 max-w-[450px] w-full hover:border-main-white/40 bg-main-black hover:bg-secondary-black transition-transform-colors-opacity ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div className="imagen rounded-xl w-[100px] h-[135px] border-secondary-black border-2 overflow-hidden">
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
      <div className="info flex flex-col gap-2 flex-1">
        <span className="font-bold text-sm font-montserrat line-clamp-2 md:text-base lg:text-sm xl:text-base">
          {titulo}
        </span>
        {children}
      </div>
    </Link>
  );
}
