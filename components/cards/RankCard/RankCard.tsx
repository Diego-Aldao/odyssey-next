import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  destino: string;
  children: React.ReactNode;
  numeroLista: number;
  imagen: string;
  customStyles?: string;
}

export default function RankCard({
  children,
  numeroLista,
  imagen,
  customStyles,
  destino,
}: Props) {
  return (
    <Link
      href={destino}
      className={`border-main-white/20 h-16 rounded-xl border bg-main-black -skew-x-12 flex items-center max-w-[300px] overflow-hidden lg:max-w-full relative hover:border-main-color/80 group transition-colors cursor-pointer after:absolute after:bg-gradient-to-r after:from-transparent after:to-main-black after:via-main-black after:inset-0 group hover:after:left-20 after:transition-all ${customStyles}`}
    >
      <span className="bg--main-black/5 backdrop-blur-sm relative z-[2] transition-all flex h-full items-center justify-center w-8 group-hover:bg-main-color text-main-white group-hover:w-12 group-hover:text-main-black font-montserrat font-bold  rounded-l-xl">
        {numeroLista}
      </span>
      <div className="imagen relative w-[55%] h-full bg-main-black -left-8">
        <Image src={imagen} alt="" width={0} height={0} sizes="100vw" />
      </div>
      {children}
    </Link>
  );
}
