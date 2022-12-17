// Imports
import { useOnScreen } from "@/hooks/useOnScreen";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { FC, ReactNode, useEffect, useRef } from "react";

import { useScroll } from "../../hooks/useScroll";
import { useWindowSize } from "../../hooks/useWindowSize";
import { truncate } from "../../utils/maths";

// Imports Styles
import { MarqueeScrollContainer } from "./marqueeScrollStyle";

gsap.registerPlugin(ScrollTrigger);
interface MarqueeScrollProps {
  children: ReactNode;
  repeat: number;
  pin: boolean;
  pinStart?: string;
  pinEnd?: string;
  pinSpacing?: boolean;
  className?: string;
}

const MarqueeScroll: FC<MarqueeScrollProps> = ({
  children,
  className = "Marquee-scroll",
  pin,
  pinStart = "top center",
  pinEnd = "bottom top",
  pinSpacing = false,
  repeat,
}) => {
  // MarqueeScrollContainer element and pass to useOnScreen to know if element is visible
  const el = useRef<any>(null);

  const { IntersectingElement } = useOnScreen(el, 0);
  // get window height using the useWindowSize hook
  const { height: windowHeight } = useWindowSize();

  useEffect(() => {
    // ScrollTrigger to pin pass element so scrolling element can be visible for the passed in endTime
    const Elem = el.current;

    const trigger = ScrollTrigger.create({
      trigger: Elem,
      start: pinStart,
      end: pinEnd,
      pin,
      scrub: true,
      pinSpacing,
      // markers: true,
    });

    return () => {
      if (trigger) trigger.kill();
    };
  }, [pin, pinEnd, pinSpacing, pinStart]);

  useScroll(
    // useScroll hook to get progress of scroll and move element on scroll
    // IntersectingElement to know if element is inView before moving element
    ({ scroll }: { scroll: number }) => {
      if (!IntersectingElement) return;
      const scrollY = scroll;

      const progress = -truncate((scrollY * 0.1) % 100, 3);

      const inView = IntersectingElement.isIntersecting;

      if (inView) {
        el.current.style.setProperty("--marquee-progress", `${progress}%`);
      }
    },
    [IntersectingElement, windowHeight]
  );

  return (
    <MarqueeScrollContainer ref={el} className={className}>
      <div className={className} style={{ display: "flex" }}>
        {new Array(repeat).fill(children).map((_, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={i} className="inner">
            {children}
          </div>
        ))}
      </div>
    </MarqueeScrollContainer>
  );
};

export default MarqueeScroll;
