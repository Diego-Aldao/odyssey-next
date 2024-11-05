"use client";
import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function CardsBaseGrid({ children }: Props) {
  return (
    <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-4 xl:gap-6">
      {children}
    </div>
  );
}