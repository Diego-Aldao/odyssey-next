import React from "react";
import ImageHero from "./ImageHero";
import TituloHero from "./TituloHero";

export default function HeroSection() {
  return (
    <section className="flex flex-col sm:gap-y-12  w-full max-w-[1440px] mx-auto justify-end relative">
      <ImageHero />
      <TituloHero />
    </section>
  );
}
