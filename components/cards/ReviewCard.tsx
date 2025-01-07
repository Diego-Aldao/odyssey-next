"use client";
import useToggler from "@/hooks/useToggler";
import { Reactions, Tag } from "@/types/fetchTypes";
import { getTopReactions } from "@/utils/getTopReactions";
import Image from "next/image";
import React from "react";
import { useInView } from "react-intersection-observer";

interface Props {
  imagen: string;
  usuario: string;
  tags: Tag[];
  review: string;
  reacciones: Reactions;
  reaccionesTotales: number;
}

interface Reacciones {
  [key: string]: string;
}

const reactionLabels: Reacciones = {
  overall: "General",
  nice: "icon-[emojione-monotone--ok-hand]",
  love_it: "icon-[emojione-monotone--red-heart]",
  funny:
    "icon-[emojione-monotone--smiling-face-with-open-mouth-and-closed-eyes]",
  confusing: "icon-[emojione-monotone--confused-face]",
  informative: "icon-[emojione-monotone--light-bulb]",
  well_written: "icon-[emojione-monotone--writing-hand]",
  creative: "icon-[emojione-monotone--artist-palette]",
};

export default function ReviewCard({
  imagen,
  usuario,
  tags,
  review,
  reacciones,
  reaccionesTotales,
}: Props) {
  const { toggler, handleToggler } = useToggler();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  return (
    <div
      ref={ref}
      className={`review grid md:grid-cols-[50px,1fr] gap-2 h-fit transition-opacity ${
        inView ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`usuario hidden md:block w-full h-fit rounded-md border border-secondary-white overflow-hidden ${
          inView ? "translate-x-0" : "-translate-x-2"
        } transition-transform`}
      >
        <Image
          src={imagen}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          unoptimized
        />
      </div>
      <div className="info flex flex-col gap-2">
        <header className="flex gap-2">
          <div
            className={`usuario md:hidden w-[50px] h-fit rounded-md border border-secondary-white overflow-hidden ${
              inView ? "translate-x-0" : "-translate-x-2"
            } transition-transform`}
          >
            <Image
              src={imagen}
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              unoptimized
            />
          </div>
          <div className="info-header flex flex-col gap-2">
            <span className="nombre-usuario text-sm lg:text-base font-montserrat font-medium">
              {usuario}
            </span>
            <ul className="tags flex flex-wrap gap-2 items-center">
              {tags.map((reaccion, i) => (
                <span
                  className="tag text-xs py-1 px-4 bg-secondary-black rounded-full"
                  key={`${reaccion}${i}`}
                >
                  {reaccion}
                </span>
              ))}
            </ul>
          </div>
        </header>
        <p
          className={`text-sm text-secondary-white whitespace-pre-line h-fit transition-all max-w-5xl  ${
            toggler ? "line-clamp-none pb-4" : "line-clamp-6 pb-0"
          }`}
        >
          {review.split(/\n\n/).map((part, index) => (
            <React.Fragment key={index}>
              {part}
              {index < review.split(/\n\n/).length - 1 && (
                <>
                  <br /> <br />
                </>
              )}
            </React.Fragment>
          ))}
        </p>
        <div className="reacciones flex gap-2 items-center">
          <ul className="flex items-center gap-1">
            {getTopReactions(reacciones, reactionLabels).map(
              (topReaction, i) => (
                <span
                  key={i}
                  className={`${topReaction} h-5 w-5 lg:w-6 lg:h-6`}
                ></span>
              )
            )}
          </ul>
          <div className="totales flex items-center gap-2">
            <span className="font-montserrat text-xs lg:text-sm font-semibold">
              {reaccionesTotales}
            </span>
            <span className="icon-[solar--info-circle-bold] text-secondary-white h-4 w-4 lg:w-5 lg:h-5"></span>
          </div>

          <button
            className="button bg-secondary-black py-1 px-2 lg:py-2 lg:px-4 items-center gap-2 rounded-md capitalize text-xs lg:text-sm ml-auto font-medium flex"
            onClick={handleToggler}
          >
            <span>{toggler ? "ocultar full review" : "ver full review"}</span>
            <span
              className={`icon-[solar--alt-arrow-down-broken] h-4 w-4 lg:h-5 lg:w-5 ${
                toggler ? "rotate-180" : "rotate-0"
              }`}
            ></span>
          </button>
        </div>
      </div>
    </div>
  );
}
