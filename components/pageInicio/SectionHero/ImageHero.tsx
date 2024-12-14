"use client";
import Image from "next/image";
import React from "react";
import { useInView } from "react-intersection-observer";
import imagen from "@/assets/mainPage/imagenHero.webp";

export default function ImageHero() {
  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });
  return (
    <div className="w-[150%] max-w-[500px] -left-20 relative sm:w-[700px] sm:max-w-full sm:-left-0 md:left-0 md:w-[800px] md:-mt-12 scale-y-95 lg:w-full ml-auto   scale-x-[-1] lg:h-[650px] xl:h-[800px] ">
      <Image
        src={imagen}
        alt=""
        width={0}
        height={0}
        sizes="100vw"
        className={`!object-contain ${
          inView
            ? "lg:opacity-100 lg:translate-y-0"
            : "lg:opacity-0 lg:translate-y-2"
        } lg:transition-transform-opacity`}
        placeholder="blur"
        blurDataURL={imagen.blurDataURL}
        priority={true}
        ref={ref}
      />
    </div>
  );
}
