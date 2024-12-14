"use client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import UserInteraction from "./UserInteraction";
import { useInView } from "react-intersection-observer";
import errorImage from "@/assets/errorImageMainCard.webp";

interface Props {
  imagen: string;
  children: React.ReactNode;
  id: number;
  customStyles?: string;
  nombre: string;
  tipo: string;
  destino: string;
}

export default function MainCard({
  imagen,
  children,
  id,
  customStyles,
  nombre,
  tipo,
  destino,
}: Props) {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const [currentSrc, setCurrentSrc] = useState<string | StaticImageData>(
    imagen
  );

  useEffect(() => {
    if (currentSrc !== imagen) {
      setCurrentSrc(imagen);
    }
  }, [imagen]);

  return (
    <Link
      ref={ref}
      href={destino}
      className={`p-[2px] bg-tertiary-black rounded-xl hover:bg-main-color group transition-transform-colors-opacity h-[62vw] sm:h-[43vw] md:h-[30vw] lg:h-[19.7vw] 2xl:h-[14vw] ${customStyles} ${
        inView
          ? "lg:opacity-100 lg:translate-y-0"
          : " lg:opacity-0 lg:translate-y-8"
      }
      
      `}
    >
      <div className="rounded-xl overflow-hidden w-full h-full relative after:absolute flex items-center justify-center after:w-[calc(100%-5px)] after:h-[calc(100%-5px)] xl:after:w-[calc(100%-8px)] xl:after:h-[calc(100%-8px)] after:rounded-xl after:bg-gradient-to-t  after:from-main-black group-hover:before:bg-transparent before:transition-colors after:via-main-black/10 before:absolute  before:bg-main-black/20 before:rounded-xl before:w-[calc(100%-5px)] before:h-[calc(100%-5px)] xl:before:w-[calc(100%-8px)] xl:before:h-[calc(100%-8px)] bg-main-black">
        <UserInteraction id={id} nombre={nombre} tipo={tipo} />
        <Image
          src={currentSrc}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          unoptimized={true}
          onError={() => {
            setCurrentSrc(errorImage);
          }}
        />
        <div className="children-container absolute bottom-0 left-0 z-[2]  px-[7px] xl:px-[12px] pb-[7px] xl:pb-[12px] flex flex-col gap-1 w-full">
          {children}
        </div>
      </div>
    </Link>
  );
}
