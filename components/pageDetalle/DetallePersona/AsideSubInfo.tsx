import Image from "next/image";
import React from "react";
import imagenError from "@/assets/errorImageMainCard.webp";

interface Props {
  imagen?: string;
  nombreDePila?: string;
  apellido?: string;
  nacimiento?: Date;
  sitioWeb?: string;
  favoritos?: number;
}

export default function AsideSubInfo({
  imagen,
  nombreDePila,
  apellido,
  nacimiento,
  sitioWeb,
  favoritos,
}: Props) {
  let nacimientoFormateado;

  if (nacimiento) {
    nacimientoFormateado = Intl.DateTimeFormat("es-ES", {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    }).format(new Date(nacimiento));
  }

  const subInfo = [
    {
      id: 1,
      nombre: "nombre de pila",
      valor: nombreDePila,
    },
    {
      id: 2,
      nombre: "apellido",
      valor: apellido,
    },
    {
      id: 3,
      nombre: "nacimiento",
      valor: nacimientoFormateado,
    },
    {
      id: 4,
      nombre: "sitio web",
      valor: sitioWeb,
    },
    {
      id: 5,
      nombre: "favoritos",
      valor: favoritos,
    },
  ];

  return (
    <aside className="aside hidden md:flex flex-col gap-4">
      <div className="imagen overflow-hidden rounded-2xl border-2 border-secondary-white/20 min-h-[295px] lg:min-h-[385px] xl:min-h-[464px]">
        <Image
          src={imagen || imagenError}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          className="scale-105"
          unoptimized
        />
      </div>
      <ul className="subinfo flex flex-col gap-4">
        {subInfo.map((item) => (
          <>
            {item.valor && (
              <li className="nombre flex gap-1 flex-col" key={item.id}>
                <span className="text-xs text-secondary-white first-letter:uppercase">
                  {item.nombre}
                </span>
                <span className="text-xs lg:text-sm font-montserrat">
                  {item.valor}
                </span>
              </li>
            )}
          </>
        ))}
      </ul>
    </aside>
  );
}
