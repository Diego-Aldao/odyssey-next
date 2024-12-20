"use client";
import Image from "next/image";
import React from "react";
import { useInView } from "react-intersection-observer";
import imagen from "@/assets/mainPage/HomeHero.webp";
import imagenMobile from "@/assets/mainPage/HomeHeroMobile.webp";

export default function ImageHero() {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  return (
    <div
      ref={ref}
      className={`absolute h-[550px] p-2 bg-main-black lg:h-[650px] xl:h-[800px] 2xl:h-[900px] top-0 left-0 w-full after:absolute after:inset-0 after:bg-gradient-to-t after:from-main-black after:via-transparent after:to-main-black  scale-x-[-1] after:from-5% xl:after:from-[10%] 2xl:after:from-20% transition-transform-opacity ${
        inView
          ? "lg:opacity-100 lg:translate-y-0"
          : "lg:opacity-0 lg:translate-y-4"
      }`}
    >
      <div className="imagen w-full h-full rounded-xl bg-secondary-black overflow-hidden">
        <Image
          src={imagenMobile}
          placeholder="blur"
          blurDataURL={imagenMobile.blurDataURL}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          className="object-[35%,0px] mix-blend-difference md:hidden"
          priority={true}
        />
        <Image
          src={imagen}
          placeholder="blur"
          blurDataURL={imagen.blurDataURL}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          className="!object-cover object-[35%,0px] mix-blend-difference md:inline-block hidden"
          priority={true}
        />
      </div>
    </div>
  );
}
