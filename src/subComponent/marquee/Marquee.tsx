// Imports
import { FC, ReactNode, useEffect, useRef, useState } from "react";

import { useWindowSize } from "../../hooks/useWindowSize";
// Imports Styles
import { MarqueeContainer } from "./marqueeStyle";

interface MarqueeProps {
  children: ReactNode;
  repeat: number;
  duration: number;
  offset: number;
  spacing: number;
  inverted: boolean;
  className: string;
  animationStart: boolean;
}

const Marquee: FC<MarqueeProps> = ({
  children,
  repeat = 2,
  duration = 10,
  offset = 0,
  spacing = 20,
  inverted = false,
  className,
  animationStart = true,
}) => {
  const innerRef = useRef<HTMLDivElement>(null);

  const [innerWidth, setInnerWidth] = useState<number>(0);
  // find out if window resize using useWindowSize hook to rerender and setInnerWidth to the updated value
  const isResizing = useWindowSize();

  useEffect(() => {
    // get passed element clientWidth and setInnerWidth to fit in the moving element
    const inner = innerRef.current;

    if (inner) {
      setInnerWidth(inner.clientWidth - spacing - spacing + 10);
    }
  }, [isResizing, spacing]);

  return (
    <MarqueeContainer
      className={`${className} ${inverted && "inverted"}`}
      style={
        {
          opacity: innerWidth ? 1 : 0,
          "--duration": `${duration}s`,
          "--innerWidth": `${innerWidth}px`,
          "--innerSpacing": `${spacing}px`,
          "--offset": `${offset % 100}%`,
          "--animation-status": animationStart ? "running" : "paused",
        } as React.CSSProperties
      }
    >
      {new Array(repeat).fill(children).map((_, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <div ref={innerRef} key={i} className={`inner ${i}`}>
          {children}
        </div>
      ))}
    </MarqueeContainer>
  );
};

export default Marquee;
