import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  destino: string;
  children: React.ReactNode;
  numeroLista: number;
  imagen: string;
  customStyles?: string;
  customStylesImage?: string;
}

export default function RankCard({
  children,
  numeroLista,
  imagen,
  customStyles,
  destino,
  customStylesImage,
}: Props) {
  return (
    <Link
      href={destino}
      className={`border-main-white/20 h-16 rounded-xl border bg-main-black -skew-x-12 flex items-center overflow-hidden lg:max-w-full relative group transition-colors cursor-pointer after:absolute after:bg-gradient-to-r after:from-transparent after:to-main-black after:via-main-black after:inset-0 group hover:after:left-20 after:transition-all ${customStyles}`}
    >
      <span className="bg-main-black relative z-[2] transition-all flex h-full items-center justify-center w-6 lg:w-8  text-main-white group-hover:w-10  font-montserrat font-bold text-xs lg:text-sm">
        {numeroLista}
      </span>
      <div className="imagen relative w-[55%] h-full bg-main-black -left-8">
        <Image
          src={imagen || ""}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          className={customStylesImage}
        />
      </div>
      {children}
    </Link>
  );
}
