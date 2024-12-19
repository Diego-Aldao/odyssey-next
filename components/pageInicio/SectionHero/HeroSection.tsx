import React from "react";
import TituloHero from "./TituloHero";

export default function HeroSection() {
  return (
    <section className="flex flex-col sm:gap-y-12 h-[450px] lg:h-[520px] xl:h-[600px] w-full max-w-[1440px] mx-auto justify-end relative">
      <TituloHero />
    </section>
  );
}
