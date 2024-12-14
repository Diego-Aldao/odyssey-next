"use client";
import useToggler from "@/hooks/useToggler";
import { SelectedTrailer } from "@/types/localTypes";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ModalVideo from "../ModalVideo";
import { useInView } from "react-intersection-observer";
import errorImage from "@/assets/errorImageVideoCard.webp";

interface Props {
  id: number | string;
  nombreAnime?: string;
  imagen: string | null;
  videoUrl: string | null;
  tipoDeVideo: string;
  customStyles?: string;
  customStylesButton?: string;
  customStylesImage?: string;
}

export default function VideoCard({
  id,
  nombreAnime,
  imagen,
  tipoDeVideo,
  videoUrl,
  customStyles,
  customStylesButton,
  customStylesImage,
}: Props) {
  const [selectedTrailer, setSelectedTrailer] = useState<SelectedTrailer>();
  const { toggler, handleToggler } = useToggler();
  const handleClick = () => {
    const selectedTrailer: SelectedTrailer = {
      titulo: `${nombreAnime} ${tipoDeVideo}`,
      url: videoUrl || "",
    };
    setSelectedTrailer(selectedTrailer);
    handleToggler();
  };
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [currentSrc, setCurrentSrc] = useState<string | StaticImageData>(
    imagen || errorImage
  );

  useEffect(() => {
    if (currentSrc !== imagen) {
      setCurrentSrc(imagen || "");
    }
  }, [imagen]);

  return (
    <>
      {toggler && selectedTrailer && (
        <ModalVideo
          titulo={selectedTrailer.titulo}
          url={selectedTrailer.url}
          handleToggler={handleToggler}
        />
      )}
      <div
        ref={ref}
        className={`flex flex-col gap-2 ${
          inView
            ? "lg:opacity-100 lg:translate-y-0"
            : "lg:opacity-0 lg:translate-y-2"
        } transition-transform-opacity ${customStyles}`}
      >
        {nombreAnime && (
          <Link
            href={`/anime/${id}`}
            className="line-clamp-1 text-xs xl:text-sm font-montserrat font-bold"
          >
            {nombreAnime}
          </Link>
        )}

        <div
          className={`p-[2px] bg-tertiary-black rounded-xl transition-colors relative hover:bg-main-color cursor-pointer group ${customStylesImage}`}
          onClick={handleClick}
        >
          <div className="play absolute p-2 w-fit h-fit inset-0 mx-auto my-auto rounded-full bg-main-black/30 backdrop-blur-sm flex items-center justify-center  transition-colors z-[2] group-hover:bg-main-black">
            <span
              className={`icon-[solar--play-broken] h-6 w-6 text-main-white  group-hover:text-main-color transition-colors ${customStylesButton}`}
            ></span>
          </div>
          <div
            className={`imagen rounded-xl h-full w-full overflow-hidden after:absolute after:inset-0 after:bg-main-black/20 group-hover:after:bg-main-black/10 after:transition-colors relative`}
          >
            <Image
              src={currentSrc}
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              className={customStylesImage}
              onError={() => {
                setCurrentSrc(errorImage);
              }}
            />
          </div>
        </div>
        <span className="self-end text-xs xl:text-sm">{tipoDeVideo}</span>
      </div>
    </>
  );
}
