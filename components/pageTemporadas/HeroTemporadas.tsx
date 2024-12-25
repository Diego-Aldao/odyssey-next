import React from "react";
import imagenSummer from "@/assets/pageTemporadas/imageHeroTemporadaVerano.webp";
import imagenSummerSM from "@/assets/pageTemporadas/imageHeroTemporadaVeranoMobile.webp";
import imagenWinter from "@/assets/pageTemporadas/imageHeroTemporadaInvierno.webp";
import imagenWinterSM from "@/assets/pageTemporadas/imageHeroTemporadaInviernoMobile.webp";
import imagenFall from "@/assets/pageTemporadas/imageHeroTemporadaOtoño.webp";
import imagenFallSM from "@/assets/pageTemporadas/imageHeroTemporadaOtoñoMobile.webp";
import imagenSpring from "@/assets/pageTemporadas/imageHeroTemporadaPrimavera.webp";
import imagenSpringSM from "@/assets/pageTemporadas/imageHeroTemporadaPrimaveraMobile.webp";
import imagenDefault from "@/assets/pageTemporadas/imageHeroTemporadaDefault.webp";
import imagenDefaultSM from "@/assets/pageTemporadas/imageHeroTemporadaDefaultMobile.webp";
import PagesNavigationHero from "../PagesNavigationHero";
import { StaticImageData } from "next/image";

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

const listadoSubtitulos: { [key: string]: string } = {
  winter: "invierno",
  fall: "otoño",
  summer: "verano",
  spring: "primavera",
  now: "temporada actual",
  upcoming: "próximas temporadas",
};

export default function HeroTemporadas({ temporada }: Props) {
  const [primerItem, segundoItem] = temporada;

  const getSubtituloTemporada = () => {
    if (segundoItem) {
      return `${listadoSubtitulos[segundoItem]} de ${primerItem}`;
    } else {
      return `${listadoSubtitulos[primerItem]}`;
    }
  };
  const subtitulo = getSubtituloTemporada();

  const currentImagenHero = listadoImagenes.find(
    (imagen) => imagen.nombre === segundoItem
  );
  return (
    <PagesNavigationHero
      imageDesktop={currentImagenHero?.imagen || imagenDefault}
      imageMobile={currentImagenHero?.imagenMobile || imagenDefaultSM}
      titulo="temporadas"
      subtitulo={subtitulo}
      customImagePosition="object-[50%,0px] md:scale-x-[-1]"
    />
  );
}
