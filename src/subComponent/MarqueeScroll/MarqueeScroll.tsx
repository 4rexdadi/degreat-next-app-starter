// Imports
import { useRect } from "@studio-freight/hamo";
import { ReactNode } from "react";
import { useRef, FC } from "react";

import { useWindowSize } from "../../hooks/useWindowSize";
import useScroll from "../../hooks/useScroll";
import { truncate } from "../../utils/maths";

// Imports Styles
import { MarqueeScrollContainer } from "./marqueeScrollStyle";

interface MarqueeScrollProps {
  children?: ReactNode;
  repeat: number;
  className: string;
}

const MarqueeScroll: FC<MarqueeScrollProps> = ({
  children,
  className,
  repeat = 1,
}) => {
  const el = useRef<any>(null);

  const [setRef, rect] = useRect();
  const { height: windowHeight } = useWindowSize();

  useScroll(
    ({ scroll }: { scroll: number }) => {
      if (!rect.top) return;
      const scrollY = scroll;

      const progress = -truncate((scrollY * 0.1) % 100, 3);

      const top = rect.top - scrollY;

      const inView = top + rect.height > 0 && top < windowHeight;

      if (inView) {
        el.current.style.setProperty("--marquee-progress", progress + "%");
      }
    },
    [rect, windowHeight]
  );

  return (
    <MarqueeScrollContainer
      ref={(node) => {
        el.current = node;
        setRef(node);
      }}
      className={className}
    >
      <div className={className}>
        {new Array(repeat).fill(children).map((_, i) => (
          <div key={i} className={"inner"}>
            {children}
          </div>
        ))}
      </div>
    </MarqueeScrollContainer>
  );
};

export default MarqueeScroll;
