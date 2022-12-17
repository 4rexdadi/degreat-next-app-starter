// imports
import { useFrame } from "@studio-freight/hamo";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { FC, ReactNode, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useIsTouchDevice } from "../../hooks/useIsTouchDevice";
import { useLayoutEffect } from "../../hooks/useLayoutEffect";
import { ScrollProps, setLenis } from "../../store/scrollSlice";
import Cursor from "../cursor/Cursor";
import Scrollbar from "./Scrollbar";

gsap.registerPlugin(ScrollTrigger);

interface ScrollContainerProps {
  children: ReactNode;
  mouseMultiplier: number;
  infinite?: boolean;
  duration?: number;
  direction?: "vertical" | "horizontal";
  gestureDirection?: "vertical" | "horizontal" | "both";
  smooth?: boolean;
  smoothTouch?: boolean;
  touchMultiplier?: number;
}

const ScrollContainer: FC<ScrollContainerProps> = ({
  children,
  mouseMultiplier = 1,
  infinite = false,
  duration = 1.2,
  direction = "vertical",
  gestureDirection = "vertical",
  smooth = true,
  smoothTouch = false,
  touchMultiplier = 2,
}) => {
  const dispatch = useDispatch();

  // Get isTouchDevice to enable and disable Cursor and Scrollbar
  const isTouchDevice = useIsTouchDevice();

  // Creating a smooth scroll with Lenis and overflow to disable scrolling when false
  const lenis = useSelector(
    (state: { scrollSlice: ScrollProps }) => state.scrollSlice.lenis
  );
  const overflow = useSelector(
    (state: { scrollSlice: ScrollProps }) => state.scrollSlice.overflow
  );

  useLayoutEffect(() => {
    window.scrollTo(0, 0);

    // Lenis smooth scrolling instantiation
    const lenis = new Lenis({
      duration,
      easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      direction,
      gestureDirection,
      smooth,
      smoothTouch,
      mouseMultiplier,
      touchMultiplier,
      infinite,
    });

    // dispatch Lenis to be used globally
    dispatch(setLenis(lenis));

    return () => {
      // cleanup
      lenis.destroy();
      setLenis(null);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    infinite,
    mouseMultiplier,
    duration,
    direction,
    touchMultiplier,
    gestureDirection,
    smooth,
    smoothTouch,
  ]);

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
    // refresh ScrollTrigger so gsap works properly
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

      {children}
    </>
  );
};

export default ScrollContainer;
