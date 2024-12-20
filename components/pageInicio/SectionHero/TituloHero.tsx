"use client";
import React from "react";
import { useInView } from "react-intersection-observer";

export default function TituloHero() {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  return (
    <div
      ref={ref}
      className="left flex flex-col w-fit absolute bottom-0 left-0 z-2 lg:top-20 sm:left-10 lg:bottom-auto"
    >
      <h1
        className={`uppercase font-black text-5xl italic tracking-tighter [text-shadow:4px_4px_#000,0px_0px_20px_#000] lg:[text-shadow:4px_4px_#000,0px_0px_40px_#000] xl:[text-shadow:4px_4px_#000,0px_0px_20px_#000] sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl transition-transform-opacity ${
          inView
            ? "lg:opacity-100 lg:translate-x-0"
            : "lg:opacity-0 lg:-translate-x-2"
        }`}
      >
        odyssey
      </h1>
      <span
        className={`uppercase font-black italic text-xs self-end mr-3 md:mr-4 xl:mr-6 lg:-top-2 relative [text-shadow:2px_2px_#000,0px_0px_20px_#000] lg:[text-shadow:2px_2px_#000,0px_0px_40px_#000] xl:[text-shadow:2px_2px_#000,0px_0px_20px_#000] sm:text-base md:text-lg transition-transform-opacity delay-75 ${
          inView
            ? "lg:opacity-100 lg:translate-y-0"
            : "lg:opacity-0 lg:-translate-y-2"
        }`}
      >
        comunidad anime
      </span>
    </div>
  );
}
