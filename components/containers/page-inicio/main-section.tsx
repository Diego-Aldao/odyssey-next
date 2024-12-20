import Link from "next/link";
import React from "react";

interface Props {
  children: React.ReactNode;
  tituloSeccion: string;
  destino?: string;
  nombreDestino?: string;
  customStyles?: string;
  asideSection?: boolean;
}

export default function MainSection({
  children,
  tituloSeccion,
  destino,
  nombreDestino,
  customStyles,
  asideSection,
}: Props) {
  return (
    <section className={`w-full h-full ${customStyles}`}>
      <div
        className={`main-container w-full text-main-white flex flex-col gap-8 lg:gap-12 relative after:absolute after:-top-[1px] after:right-0 after:w-[64%] sm:after:w-[75%] after:h-[1px] after:bg-gradient-to-r after:via-main-color after:from-main-color after:to-main-black after:lg:w-[90%]  ${
          !destino || !nombreDestino
            ? "pb-12 md:pb-14 lg:pb-16"
            : "before:absolute before:-bottom-[1px] before:left-0 before:w-[81%] before:h-[1px] before:bg-gradient-to-l before:via-main-color before:from-main-color before:to-main-black"
        }`}
      >
        <header className="h-12 md:h-14 bg-main-black lg:h-16 w-fit pl-2 pr-4 sm:pr-6 md:pr-8 lg:pr-10 flex items-center relative z-[2] btn-gradient-1 -top-[1px] -left-[1px] border border-main-color border-l-0 border-t-0 rounded-br-lg lg:rounded-br-xl after:absolute after:-bottom-[1px] after:left-0 after:w-[90%] after:h-[1px] after:bg-gradient-to-l after:via-main-black after:from-main-color after:to-main-black">
          <h2
            className={`uppercase text-lg md:text-3xl lg:text-4xl font-black tracking-tight italic ${
              asideSection ? "xl:text-2xl" : "xl:text-5xl"
            }`}
          >
            {tituloSeccion}
          </h2>

          <div className="rounded-border-decoration top-0 -right-10  after:left-0 after:border  after:border-main-color"></div>
        </header>
        <div className="section-container  md:px-0 w-full max-w-[1440px] mx-auto px-2">
          {children}
        </div>
        {destino && nombreDestino && (
          <footer className="h-12 md:h-14 lg:h-16 w-fit bg-main-black pl-2 sm:pl-3 md:pl-4 lg:pl-6 pr-4 sm:pr-6 md:pr-8 lg:pr-10 flex items-center rounded-tl-xl self-end border border-main-color border-b-0 border-r-0 relative -bottom-[1px] -right-[1px] after:absolute after:-top-[1px] after:right-0 after:w-[90%] after:h-[1px] after:bg-gradient-to-r after:via-main-black after:from-main-color after:to-main-black">
            <div className="rounded-border-decoration -bottom-0 -left-10 after:right-0 after:bottom-0 after:border-main-color"></div>
            <Link
              href={destino}
              className={`uppercase md:text-xl lg:text-2xl font-bold tracking-tight italic ${
                asideSection ? "xl:text-xl" : "xl:text-3xl"
              } hover:translate-x-2 hover:text-main-color transition-transform-colors !duration-100`}
            >
              {nombreDestino}
            </Link>
          </footer>
        )}
      </div>
    </section>
  );
}
