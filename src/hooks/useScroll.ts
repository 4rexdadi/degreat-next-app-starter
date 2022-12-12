// Imports
import { useEffect } from "react";
import { useSelector } from "react-redux";

import { scrollProps } from "../store/scrollSlice";

export const useScroll = (callback: Function, deps: Element[] = []) => {
  const lenis = useSelector(
    (state: { scrollSlice: scrollProps }) => state.scrollSlice.lenis
  );

  useEffect(() => {
    if (!lenis) return;
    lenis.on("scroll", callback);
    lenis.notify();

    return () => {
      lenis.off("scroll", callback);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lenis, callback, [...deps]]);
};

export default useScroll;
