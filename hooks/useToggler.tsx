"use client";

import { useState } from "react";

export default function useToggler() {
  const [toggler, setToggler] = useState<boolean>(false);

  const handleToggler = () => {
    setToggler((toggler) => !toggler);
  };

  return { toggler, handleToggler };
}
