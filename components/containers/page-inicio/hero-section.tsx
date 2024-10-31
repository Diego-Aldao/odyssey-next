import React from "react";
interface Props {
  children: React.ReactNode;
}

export default function HeroSection({ children }: Props) {
  return (
    <section className="flex flex-col sm:gap-y-12 md:px-4 lg:px-6 w-full max-w-[1440px] mx-auto px-2 pt-6 sm:pt-8">
      {children}
    </section>
  );
}
