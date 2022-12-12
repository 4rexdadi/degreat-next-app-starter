// Imports
import React, { useEffect, useRef, useState, FC } from "react";
import { useSelector } from "react-redux";
import useMeasure from "react-use-measure";

import { useWindowSize } from "../../hooks/useWindowSize";
import { useScroll } from "../../hooks/useScroll";
import { clamp, mapRange } from "../../utils/maths";
import { scrollProps } from "../../store/scrollSlice";

// Imports Styles
import { ScrollbarContainer, Inner, Thumb } from "./scrollbarStyle";

interface ScrollbarProps {}

const Scrollbar: FC<ScrollbarProps> = ({}) => {
  const thumb = useRef<HTMLDivElement | null>(null);
  const { width: windowWidth, height: windowHeight } = useWindowSize();
  const lenis = useSelector(
    (state: { scrollSlice: scrollProps }) => state.scrollSlice.lenis
  );
  const overflow = useSelector(
    (state: { scrollSlice: scrollProps }) => state.scrollSlice.overflow
  );

  const [innerMeasureRef, { height: innerHeight }] = useMeasure();
  const [thumbMeasureRef, { height: thumbHeight }] = useMeasure();

  useScroll(({ scroll, limit }: { scroll: number; limit: number }) => {
    const progress = scroll / limit;

    if (thumb.current) {
      thumb.current.style.transform = `translate3d(0,${
        progress * (innerHeight - thumbHeight)
      }px,0)`;
    }
  });

  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (!clicked) return;

    function onPointerMove(e: MouseEvent) {
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

      lenis.direction === "vertical"
        ? window.scrollTo(0, newPos)
        : window.scrollTo(newPos, 0);
    }

    function onPointerUp() {
      setClicked(false);
    }

    window.addEventListener("pointermove", onPointerMove, false);
    window.addEventListener("pointerup", onPointerUp, false);

    return () => {
      window.removeEventListener("pointermove", onPointerMove, false);
      window.removeEventListener("pointerup", onPointerUp, false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clicked, windowHeight, windowWidth, lenis]);

  return (
    <ScrollbarContainer>
      <Inner ref={innerMeasureRef}>
        <Thumb
          style={{ pointerEvents: `${overflow ? "visible" : "none"}` }}
          ref={(node) => {
            thumb.current = node;
            thumbMeasureRef(node);
          }}
          onPointerDown={() => {
            setClicked(true);
          }}
        />
      </Inner>
    </ScrollbarContainer>
  );
};

export default Scrollbar;
