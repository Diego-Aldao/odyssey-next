import React from "react";
interface Props {
  children: React.ReactNode;
}

export default function PagesNavigationMainContainer({ children }: Props) {
  return (
    <main className="px-4 md:px-6 lg:px-10 2xl:px-0 flex flex-col gap-12 relative z-[2] max-w-[1440px] mx-auto pb-20">
      {children}
    </main>
  );
}
