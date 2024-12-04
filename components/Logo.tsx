import Link from "next/link";
import React from "react";

interface Props {
  customStyles?: string;
}

export default function Logo({ customStyles }: Props) {
  return (
    <Link
      href="/"
      className={`uppercase font-black italic font-montserrat text-lg md:text-2xl lg:text-4xl tracking-tighter text-main-white [text-shadow:-1px_-1px_#000,1px_1px_#000,-1px_1px_#000,-1px_1px_#000] ${customStyles}`}
    >
      odyssey
    </Link>
  );
}
