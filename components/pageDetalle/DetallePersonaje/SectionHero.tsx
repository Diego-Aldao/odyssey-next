import Image from "next/image";
import React from "react";

interface Props {
  imagen: string;
}

export default function SectionHero({ imagen }: Props) {
  return (
    <section className="w-full h-full max-h-[600px] md:hidden relative after:absolute after:inset-0 after:bg-gradient-to-t after:from-5% after:from-main-black after:to-transparent after:via-main-black/40 overflow-hidden">
      <Image
        src={imagen}
        alt=""
        width={0}
        height={0}
        sizes="100vw"
        className="scale-105"
      />
    </section>
  );
}
