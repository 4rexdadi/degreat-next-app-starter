// Imports
import { useEffect, useState } from "react";

export const useResponsive = () => {
  // get window innerWidth on initial load and call handleWindowSizeChange function on every client resize to update values
  const [width, setWidth] = useState(window.innerWidth);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      // cleanup
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return {
    isSm: width <= 640,
    isMd: width > 640 && width <= 768,
    isLg: width > 768 && width <= 1024,
    isXl: width > 1024 && width <= 1280,
    is2xl: width > 1280 && width < 1536,
  };
};

export default useResponsive;
