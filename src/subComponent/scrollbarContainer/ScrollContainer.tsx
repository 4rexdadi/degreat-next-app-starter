// imports
import { useFrame } from "@studio-freight/hamo";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { FC, ReactNode, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import useIsTouchDevice from "../../hooks/useIsTouchDevice";
import useLayoutEffect from "../../hooks/useLayoutEffect";
import { scrollProps, setLenis } from "../../store/scrollSlice";
import Cursor from "../cursor/Cursor";
import Scrollbar from "./Scrollbar";

gsap.registerPlugin(ScrollTrigger);

interface ScrollContainerProps {
  children: ReactNode;
}

const ScrollContainer: FC<ScrollContainerProps> = ({ children }) => {
  const isTouchDevice = useIsTouchDevice();
  const dispatch = useDispatch();
  const lenis = useSelector(
    (state: { scrollSlice: scrollProps }) => state.scrollSlice.lenis
  );

  const overflow = useSelector(
    (state: { scrollSlice: scrollProps }) => state.scrollSlice.overflow
  );

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      smoothTouch: false,
      mouseMultiplier: 0.5,
      touchMultiplier: 2,
      // infinite: true,
    });

    dispatch(setLenis(lenis));

    return () => {
      lenis.destroy();
      setLenis(null);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (overflow) {
      lenis?.start();
      document.documentElement.style.removeProperty("overflow");
    } else {
      lenis?.stop();
      document.documentElement.style.setProperty("overflow", "hidden");
    }
  }, [lenis, overflow]);

  useLayoutEffect(() => {
    if (lenis) ScrollTrigger.refresh();
  }, [lenis]);

  useLayoutEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  useFrame((time: Number) => {
    lenis?.raf(time);
  }, []);

  return (
    <>
      {isTouchDevice === false && <Cursor />}
      {isTouchDevice === false && <Scrollbar />}

      <>{children}</>
    </>
  );
};

export default ScrollContainer;
