// Imports
import { useEffect, useState } from "react";

export const useWindowSize = () => {
  const getSize = () => {
    return {
      width: typeof window !== "undefined" ? window.innerWidth : 0,
      height: typeof window !== "undefined" ? window.innerHeight : 0,
    };
  };

  // call getSize function on initial load to return the width and height of the window
  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(getSize());
    };

    // on resize call the  handleResize function to setWindowSize by calling the getSize function to return the updated width and height of the window
    window.addEventListener("resize", handleResize);

    // cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

export default useWindowSize;
