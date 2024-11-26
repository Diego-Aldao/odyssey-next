import Image from "next/image";
import Link from "next/link";
import React from "react";
import UserInteraction from "./UserInteraction";

interface Props {
  imagen: string;
  children: React.ReactNode;
  id: number;
  customStyles?: string;
  nombre: string;
  tipo: string;
}

export default function MainCard({
  imagen,
  children,
  id,
  customStyles,
  nombre,
  tipo,
}: Props) {
  return (
    <Link
      href={`/anime/${id}`}
      className={`p-[2px] sm:p-1 bg-tertiary-black rounded-xl transition-all hover:bg-main-color group ${customStyles}`}
    >
      <div className="rounded-xl overflow-hidden w-full h-full relative after:absolute flex items-center justify-center after:w-[calc(100%-5px)] after:h-[calc(100%-5px)] xl:after:w-[calc(100%-8px)] xl:after:h-[calc(100%-8px)] after:rounded-xl after:bg-gradient-to-t  after:from-main-black group-hover:before:bg-transparent before:transition-colors after:via-main-black/10 before:absolute  before:bg-main-black/20 before:rounded-xl before:w-[calc(100%-5px)] before:h-[calc(100%-5px)] xl:before:w-[calc(100%-8px)] xl:before:h-[calc(100%-8px)]">
        <UserInteraction id={id} nombre={nombre} tipo={tipo} />
        <Image src={imagen} alt="" width={0} height={0} sizes="100vw" />
        <div className="children-container absolute bottom-0 left-0 z-[2]  px-[7px] xl:px-[12px] pb-[7px] xl:pb-[12px] flex flex-col gap-1 w-full">
          {children}
        </div>
      </div>
    </Link>
  );
}
