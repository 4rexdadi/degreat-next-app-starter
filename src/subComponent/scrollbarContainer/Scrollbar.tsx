// Imports
import { FC, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

import { useElementPosition } from "../../hooks/useElementPosition";
import { useScroll } from "../../hooks/useScroll";
import { useWindowSize } from "../../hooks/useWindowSize";
import { ScrollProps } from "../../store/scrollSlice";
import { clamp, mapRange, scrollProgress } from "../../utils/maths";

// Imports Styles
import { ScrollbarContainer } from "./scrollbarStyle";

interface ScrollbarProps {}

const Scrollbar: FC<ScrollbarProps> = () => {
  // Scrollbar thumb and inner for side scrollbar
  const thumb = useRef<HTMLDivElement | null>(null);
  const inner = useRef<HTMLDivElement | null>(null);

  // Ger window width and height for side scrollbar
  const { width: windowWidth, height: windowHeight } = useWindowSize();

  // Lenis object to calculate scroll positions and overflow to disable pointerEvents when false
  const lenis = useSelector(
    (state: { scrollSlice: ScrollProps }) => state.scrollSlice.lenis
  );
  const overflow = useSelector(
    (state: { scrollSlice: ScrollProps }) => state.scrollSlice.overflow
  );

  // Get offsetHeight for inner and thumb to calculate scroll progress
  const { offsetHeight: innerHeight } = useElementPosition(inner);
  const { offsetHeight: thumbHeight } = useElementPosition(thumb);

  // useScroll hook to move thumb positions according to scroll progress
  useScroll(({ scroll, limit }: { scroll: number; limit: number }) => {
    const progress = scrollProgress(scroll, limit);

    if (thumb.current) {
      thumb.current.style.transform = `translate3d(0,${
        progress * (innerHeight - thumbHeight)
      }px,0)`;
    }
  });

  // on clicked and pointermove move the scrollbar according to how user drags
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (!clicked) return undefined;

    const onPointerMove = (e: MouseEvent) => {
      if (!lenis) return undefined;
      e.preventDefault();

      const offset = (windowHeight - innerHeight) / 2;

      const y = mapRange(
        0,
        windowHeight,
        e.clientY,
        -offset,
        innerHeight + offset
      );

      const progress = clamp(0, y / innerHeight, 1);

      const newPos = lenis.limit * progress;

      if (lenis.direction === "vertical") {
        window.scrollTo(0, newPos);
      } else window.scrollTo(newPos, 0);

      return undefined;
    };

    const onPointerUp = () => {
      setClicked(false);
    };

    window.addEventListener("pointermove", onPointerMove, false);
    window.addEventListener("pointerup", onPointerUp, false);

    return () => {
      window.removeEventListener("pointermove", onPointerMove, false);
      window.removeEventListener("pointerup", onPointerUp, false);
    };
  }, [clicked, windowHeight, windowWidth, lenis, innerHeight]);

  return (
    <ScrollbarContainer>
      <div className="Inner" ref={inner}>
        <div
          className="Thumb"
          style={{ pointerEvents: `${overflow ? "visible" : "none"}` }}
          ref={thumb}
          onPointerDown={() => {
            setClicked(true);
          }}
        />
      </div>
    </ScrollbarContainer>
  );
};

export default Scrollbar;
