import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function SearchGridContainer({ children }: Props) {
  return (
    <div className="w-full grid gap-4 items-center justify-items-center justify-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {children}
    </div>
  );
}
