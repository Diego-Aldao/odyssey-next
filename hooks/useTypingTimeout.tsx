"use client";
import { useEffect, useState } from "react";

export default function useTypingTimeout() {
  const [isTyping, setIsTyping] = useState<boolean>(false);

  let typingTimeout: NodeJS.Timeout;

  const handleTypingTimeout = () => {
    setIsTyping(true);

    // vaciar el timeout antiguo
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    // un timeout para cambiar isTyping a false despues de 1.5 segundos sin que el usuario tipee
    typingTimeout = setTimeout(() => {
      setIsTyping(false);
    }, 1500);
  };

  useEffect(() => {
    //limpiar el timeout cuando el componente se re-renderiza o desmonta
    return () => {
      if (typingTimeout) {
        clearTimeout(typingTimeout);
      }
    };
  }, []);

  return { handleTypingTimeout, isTyping };
}
