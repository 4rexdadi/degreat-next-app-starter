// Imports
import { useEffect } from "react";
import { useSelector } from "react-redux";

import { ScrollProps } from "../store/scrollSlice";

export const useScroll = (callback: Function, deps: any[] = []) => {
  // get lenis from global store
  const lenis = useSelector(
    (state: { scrollSlice: ScrollProps }) => state.scrollSlice.lenis
  );

  useEffect(() => {
    // check if lenis and on scroll fires the callback function that will be passed as params
    if (!lenis) return undefined;
    lenis.on("scroll", callback);
    lenis.notify();

    return () => {
      // cleanup
      lenis.off("scroll", callback);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lenis, callback, [...deps]]);
};

export default useScroll;
