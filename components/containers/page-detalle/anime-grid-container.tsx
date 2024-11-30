import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function AnimeGridContainer({ children }: Props) {
  return (
    <div className="grid gap-12 gap-x-8 xl:grid-cols-[70%,1fr] xl:gap-x-12 pb-[1px]">
      {children}
    </div>
  );
}
