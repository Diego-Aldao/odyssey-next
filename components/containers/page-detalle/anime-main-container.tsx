import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function AnimeMainContainer({ children }: Props) {
  return (
    <main className="flex flex-col gap-12 overflow-hidden relative px-2 md:px-8 lg:px-10 z-[2]">
      {children}
    </main>
  );
}
