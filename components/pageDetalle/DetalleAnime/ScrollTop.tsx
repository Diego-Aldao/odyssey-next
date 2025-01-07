"use client";
import React, { useEffect } from "react";

export default function ScrollTop() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return <></>;
}
