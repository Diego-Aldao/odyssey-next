import { parseStringAboutCharacter } from "@/utils/parseStringAboutCharacter";
import { splitStringAboutCharacter } from "@/utils/splitStringAboutCharacter";
import React from "react";

interface Props {
  nombre: string;
  about: string | null;
}

interface Traducciones {
  [key: string]: string;
}

const CHARACTER_ABOUT_TRANSLATE: Traducciones = {
  Race: "raza",
  "Birth year": "nacimiento",
  Height: "altura",
  Weight: "peso",
  "Favorite food": "comida favorita",
  "Favorite foods": "comidas favoritas",
  Ocupation: "ocupación",
  Alliegance: "lealtad",
  Position: "posición",
  Knightmare: "caballero",
  Nationality: "nacionalidad",
  Birthdate: "nacimiento",
  Age: "edad",
  Afiliations: "afiliaciones",
  "Devil Fruit": "fruta prohibida",
  Type: "tipo",
  Bounty: "recompensa",
  "Zodiac sign": "signo del zodíaco",
  Likes: "gustos",
  Dislikes: "disgustos",
  "Nen Type": "tipo nen",
  Equipment: "equipamiento",
  Abilities: "habilidades",
};

export default function SectionMainInfo({ nombre, about }: Props) {
  const [primerParte, segundaParte] = splitStringAboutCharacter(about || "");
  const objetoParseado = parseStringAboutCharacter(primerParte);

  return (
    <div className="main-info flex flex-col gap-8">
      <h1 className="font-montserrat tracking-tighter pl-1 [text-shadow:_2px_2px_#000] uppercase line-clamp-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black italic relative z-[2] w-full text-center md:text-start">
        {nombre}
      </h1>
      {Object.keys(objetoParseado).length >= 1 && (
        <div
          className={`contenedor-pares grid grid-cols-2 sm:flex sm:flex-wrap md:grid lg:grid-cols-2 gap-2 xl:grid-cols-3`}
        >
          {Object.entries(objetoParseado)
            .slice(0, 6)
            .map((linea, i) => (
              <div
                className="pares flex flex-col items-center md:items-start flex-1 sm:min-w-[150px]"
                key={i}
              >
                <span className="capitalize text-xs xl:text-sm text-secondary-white">
                  {CHARACTER_ABOUT_TRANSLATE[linea[0]] || linea[0]}
                </span>
                <span className="text-center xl:text-2xl xl:font-semibold line-clamp-2 font-montserrat font-medium lg:text-left">
                  {linea[1]}
                </span>
              </div>
            ))}
        </div>
      )}

      {about && (
        <div className="sinopsis flex flex-col gap-2 lg:gap-4">
          <h2 className="uppercase text-xl md:text-2xl lg:text-3xl xl:text-4xl font-montserrat font-black italic ">
            sinopsis
          </h2>
          <p className="text-xs lg:text-sm text-secondary-white line-clamp-[10] md:line-clamp-[20] whitespace-pre-line">
            {segundaParte}
          </p>
        </div>
      )}
    </div>
  );
}
