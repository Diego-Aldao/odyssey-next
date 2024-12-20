"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface Props {
  newUrl: string;
}

export default function InfiniteScroll({ newUrl }: Props) {
  const router = useRouter();
  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      router.push(newUrl, { scroll: false });
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className="spinner col-span-full flex items-center justify-center h-12"
    >
      <span className="loader"></span>
    </div>
  );
}
