import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  imagen: string;
  nombre: string;
  rol: string;
  voz: string;
  id: number;
}

export default function PersonajeCard({ imagen, nombre, rol, voz, id }: Props) {
  return (
    <Link
      href={`/personaje/${id}`}
      className="flex justify-between relative bg-main-black p-1 border border-tertiary-black rounded-xl group hover:border-main-color transition-colors cursor-pointer"
    >
      <span className="img-bg absolute w-full hidden lg:block inset-0 bg-main-black h-full rounded-xl overflow-hidden mix-blend-multiply group-hover:bg-transparent group-hover:after:backdrop-blur-0 group-hover:after:bg-transparent after:transion-all transition-all after:inset-0 after:bg-main-black/5 after:backdrop-blur-sm after:absolute">
        <Image
          src={imagen}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          className="object-[50%,50%] group-hover:object-[50%,45%] transition-all"
        />
      </span>
      <span className="personaje flex gap-2 relative z-[2] w-full">
        <span className="imagen min-w-[80px] w-[80px] h-[120px] rounded-xl overflow-hidden border-2 border-tertiary-black">
          <Image
            src={imagen}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            className="w-full min-w-[76px]"
          />
        </span>
        <span className="info flex flex-col gap-1 overflow-hidden w-full">
          <span className=" md:text-lg lg:text-xl xl:text-2xl w-full font-semibold italic group-hover:left-4 left-0 relative transition-all line-clamp-1">
            {nombre}
          </span>
          <span className="text-sm xl:text-base font-medium">
            <span className="capitalize">rol: </span>
            <span className="text-secondary-white">{rol}</span>
          </span>
          <span className="text-sm font-medium">
            <span className="capitalize">voz: </span>
            <span className="text-secondary-white">{voz}</span>
          </span>
        </span>
      </span>
    </Link>
  );
}
