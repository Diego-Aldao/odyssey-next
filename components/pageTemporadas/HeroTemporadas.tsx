"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import imagenSummer from "@/assets/pageTemporadas/temporadaVerano.webp";
import imagenWinter from "@/assets/pageTemporadas/temporadaInvierno.webp";
import imagenFall from "@/assets/pageTemporadas/temporadaOtoño.webp";
import imagenSpring from "@/assets/pageTemporadas/temporadaPrimavera.webp";
import imagenDefault from "@/assets/pageTemporadas/temporadaDefault.webp";
import imagenSummerSM from "@/assets/pageTemporadas/temporadaVeranoSM.webp";
import imagenWinterSM from "@/assets/pageTemporadas/temporadaInviernoSM.webp";
import imagenFallSM from "@/assets/pageTemporadas/temporadaOtoñoSM.webp";
import imagenSpringSM from "@/assets/pageTemporadas/temporadaPrimaveraSM.webp";
import imagenDefaultSM from "@/assets/pageTemporadas/temporadaDefaultSM.webp";
import { useInView } from "react-intersection-observer";

interface Props {
  temporada: string[];
}

interface ImagenHero {
  id: number;
  nombre: string | undefined;
  imagen: StaticImageData;
  imagenMobile: StaticImageData;
}

const listadoImagenes: ImagenHero[] = [
  {
    id: 1,
    nombre: "winter",
    imagen: imagenWinter,
    imagenMobile: imagenWinterSM,
  },
  {
    id: 2,
    nombre: "fall",
    imagen: imagenFall,
    imagenMobile: imagenFallSM,
  },
  {
    id: 3,
    nombre: "summer",
    imagen: imagenSummer,
    imagenMobile: imagenSummerSM,
  },
  {
    id: 4,
    nombre: "spring",
    imagen: imagenSpring,
    imagenMobile: imagenSpringSM,
  },
  {
    id: 5,
    nombre: undefined,
    imagen: imagenDefault,
    imagenMobile: imagenDefaultSM,
  },
];

export default function HeroTemporadas({ temporada }: Props) {
  const currentTemporada = temporada[1];
  const currentImagenHero = listadoImagenes.find(
    (imagen) => imagen.nombre === currentTemporada
  );
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  return (
    <div
      ref={ref}
      className={`absolute top-0 left-0 p-2 w-full overflow-hidden bg-main-black min-h-[500px] h-[500px] z-[2] lg:h-[700px]  xl:h-auto transition-transform-colors-opacity after:absolute after:inset-0 after:bg-gradient-to-t after:from-main-black after:via-transparent after:to-main-black/70 after:from-20% xl:after:from-30% ${
        inView ? " lg:opacity-100" : "lg:opacity-0"
      }`}
    >
      <div className="imagen w-full h-full rounded-xl overflow-hidden ">
        <Image
          blurDataURL={
            currentImagenHero?.imagenMobile.blurDataURL ||
            imagenDefaultSM.blurDataURL
          }
          placeholder="blur"
          src={currentImagenHero?.imagenMobile || imagenDefaultSM}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          className="mix-blend-difference md:hidden object-[50%,0px]"
          priority
        />
        <Image
          blurDataURL={
            currentImagenHero?.imagen.blurDataURL || imagenDefault.blurDataURL
          }
          placeholder="blur"
          src={currentImagenHero?.imagen || imagenDefault}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          className="mix-blend-difference hidden md:inline-block"
          priority
        />
      </div>
    </div>
  );
}
