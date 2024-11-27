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
        className={`main-container bg-main-black/60 rounded-xl w-full text-main-white flex flex-col gap-8 lg:gap-12 border border-[#4d4d50] ${
          (!destino || !nombreDestino) && "pb-12 md:pb-14 lg:pb-16"
        }`}
      >
        <header className="h-12 md:h-14 bg-main-black rounded-tl-lg lg:h-16 w-fit pl-2 sm:pl-3 md:pl-4 lg:pl-6 pr-4 sm:pr-6 md:pr-8 lg:pr-10 flex items-center rounded-br-xl border border-[#4d4d50] relative z-[2] border-t-0 border-l-0 -top-[1px] -left-[1px]">
          <h2
            className={`uppercase text-lg md:text-3xl lg:text-4xl font-black tracking-tight italic ${
              asideSection ? "xl:text-2xl" : "xl:text-5xl"
            }`}
          >
            {tituloSeccion}
          </h2>
          <div className="rounded-border-decoration top-0 -right-10  after:left-0  after:border-[#4d4d50]"></div>
          <div className="rounded-border-decoration -bottom-10 -left-0 after:left-0 after:border-[#4d4d50]"></div>
        </header>
        <div className="section-container  sm:px-4 md:px-6 lg:px-8 w-full max-w-[1440px] mx-auto px-2">
          {children}
        </div>
        {destino && nombreDestino && (
          <footer className="h-12 md:h-14 lg:h-16 w-fit bg-main-black pl-2 sm:pl-3 md:pl-4 lg:pl-6 pr-4 sm:pr-6 md:pr-8 lg:pr-10 flex items-center rounded-tl-xl self-end border border-[#4d4d50] border-b-0 border-r-0 relative -bottom-[1px] -right-[1px]">
            <div className="rounded-border-decoration -top-10 right-0  after:right-0 after:bottom-0  after:border-[#4d4d50]"></div>
            <div className="rounded-border-decoration -bottom-0 -left-10 after:right-0 after:bottom-0 after:border-[#4d4d50]"></div>
            <Link
              href={destino}
              className={`uppercase md:text-xl lg:text-2xl font-bold tracking-tight italic ${
                asideSection ? "xl:text-xl" : "xl:text-3xl"
              }`}
            >
              {nombreDestino}
            </Link>
          </footer>
        )}
      </div>
    </section>
  );
}
