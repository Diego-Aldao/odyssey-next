"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import imagenSummer from "@/assets/pageTemporadas/bgSummer.webp";
import imagenWinter from "@/assets/pageTemporadas/bgWinter.webp";
import imagenFall from "@/assets/pageTemporadas/bgFall.webp";
import imagenSpring from "@/assets/pageTemporadas/bgSpring.webp";
import imagenDefault from "@/assets/pageTemporadas/bgDefault.webp";
import { useInView } from "react-intersection-observer";

interface Props {
  temporada: string[];
}

interface ImagenHero {
  id: number;
  nombre: string | undefined;
  imagen: StaticImageData;
}

const listadoImagenes: ImagenHero[] = [
  {
    id: 1,
    nombre: "winter",
    imagen: imagenWinter,
  },
  {
    id: 2,
    nombre: "fall",
    imagen: imagenFall,
  },
  {
    id: 3,
    nombre: "summer",
    imagen: imagenSummer,
  },
  {
    id: 4,
    nombre: "spring",
    imagen: imagenSpring,
  },
  {
    id: 5,
    nombre: undefined,
    imagen: imagenDefault,
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
      className={`absolute top-0 left-0 w-full overflow-hidden min-h-[600px] h-[600px] lg:h-[800px] mix-blend-soft-light xl:h-auto transition-transform-colors-opacity ${
        inView ? " lg:opacity-100" : "lg:opacity-0"
      }`}
    >
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
        className=" [-webkit-mask-image:-webkit-gradient(linear,_left_top,_left_bottom,_from(rgba(0,0,0,1)),_to(rgba(0,0,0,0)))]"
      />
    </div>
  );
}
