import React from "react";
import imagenUno from "@/assets/mainPage/lucy_kushinada.webp";
import imagenDos from "@/assets/mainPage/eren_jeager.webp";
import imagenTres from "@/assets/mainPage/spike_spiegel.webp";
import CardPersonaje from "../cards/CardPersonaje";

export default function SectionPersonajesPopulares() {
  const personajes = [
    {
      id: 213159,
      nombre: "lucy kushinada",
      imagen: imagenUno,
    },
    {
      id: 40882,
      nombre: "eren jaeger",
      imagen: imagenDos,
    },
    {
      id: 1,
      nombre: "spike spiegel",
      imagen: imagenTres,
    },
  ];
  return (
    <div className="section w-full max-w-[1435px] mx-auto col-span-full relative z-10 flex flex-col gap-8">
      <div className="header flex items-center gap-2">
        <h2 className="uppercase font-mont text-lg md:text-3xl lg:text-4xl xl:text-5xl italic font-black tracking-tight">
          personajes populares
        </h2>
        <span className="icon-[solar--star-fall-broken] h-6 w-6 lg:h-7 xl:h-8 lg:w-7 xl:w-8"></span>
      </div>
      <div className="w-full grid md:grid-cols-3 gap-4 md:gap-12 sm:grid-cols-3 z-[10] relative">
        {personajes.map((personaje) => (
          <CardPersonaje
            key={personaje.id}
            imagen={personaje.imagen}
            nombre={personaje.nombre}
            id={personaje.id}
          />
        ))}
      </div>
    </div>
  );
}
