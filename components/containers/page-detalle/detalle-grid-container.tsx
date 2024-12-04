import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function DetalleGridContainer({ children }: Props) {
  return (
    <div className="contenido mx-auto max-w-[1440px] overflow-hidden px-2 md:px-8 lg:px-10 bg-gradient-to-b from-main-black to-transparent to-25% md:from-transparent w-full md:grid md:grid-cols-[1fr,2.5fr] lg:grid-cols-[250px,1fr] xl:grid-cols-[300px,1fr] md:gap-8 xl:gap-12 2xl:px-0">
      {children}
    </div>
  );
}
