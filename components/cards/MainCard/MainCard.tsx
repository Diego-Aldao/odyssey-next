import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  imagen: string;
  children: React.ReactNode;
  id: number;
  customStyles?: string;
}

export default function MainCard({
  imagen,
  children,
  id,
  customStyles,
}: Props) {
  return (
    <Link
      href={`/anime/${id}`}
      className={`p-1 from-main-color bg-gradient-to-t to-tertiary-black via-main-color bg-pos-0 bg-size-200 hover:bg-pos-100 transition-all cursor-pointer group rounded-md ${customStyles}`}
    >
      <div className="rounded-md overflow-hidden w-full h-full relative after:absolute flex items-center justify-center after:w-[calc(100%-5px)] after:h-[calc(100%-5px)] xl:after:w-[calc(100%-10px)] xl:after:h-[calc(100%-10px)] after:rounded-md after:bg-gradient-to-t  after:from-main-black group-hover:before:bg-transparent before:transition-colors after:via-main-black/10 before:absolute  before:bg-main-black/20 before:rounded before:w-[calc(100%-5px)] before:h-[calc(100%-5px)] xl:before:w-[calc(100%-10px)] xl:before:h-[calc(100%-10px)]">
        <header className="absolute z-[2] w-full top-0 left-0 flex gap-2 items-center justify-end p-2">
          <button className="add p-1 sm:p-[6px] md:p-1 xl:p-[6px] rounded-full bg-main-black/20 backdrop-blur-xl flex items-center justify-center group/button border border-transparent hover:border-main-color hover:bg-main-black transition-colors">
            <span className="icon-[solar--add-circle-broken] h-5 w-5 xl:h-6 xl:w-6 group-hover/button:text-main-color transition-colors"></span>
          </button>
          <button className="like p-1 sm:p-[6px] md:p-1 xl:p-[6px] rounded-full bg-main-black/20 backdrop-blur-xl flex items-center justify-center group/button border border-transparent hover:border-main-color hover:bg-main-black transition-colors">
            <span className="icon-[solar--heart-angle-broken] h-5 w-5 xl:h-6 xl:w-6 group-hover/button:text-main-color transition-colors"></span>
          </button>
        </header>
        <Image src={imagen} alt="" width={0} height={0} sizes="100vw" />
        <div className="children-container absolute bottom-0 left-0 z-[2]  px-[7px] xl:px-[12px] pb-[7px] xl:pb-[12px] flex flex-col gap-1 w-full">
          {children}
        </div>
      </div>
    </Link>
  );
}
