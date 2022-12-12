// Imports
import { useState, useEffect } from "react";

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState(getSize);

  function getSize() {
    return {
      width: typeof window !== "undefined" ? window.innerWidth : 0,
      height: typeof window !== "undefined" ? window.innerHeight : 0,
    };
  }

  useEffect(() => {
    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

export default useWindowSize;
