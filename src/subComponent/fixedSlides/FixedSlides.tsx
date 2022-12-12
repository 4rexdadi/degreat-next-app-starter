import { FC, ReactElement, cloneElement, useEffect, useState } from "react";

// Imports Styles
import { FixedSlidesContainer } from "./fixedSlidesStyle";
import ProgressBar from "./ProgressBar";
import useIsVisible from "../../hooks/useIsVisible";
// Imports
import { useRect } from "@studio-freight/hamo";
import useScroll from "../../hooks/useScroll";
import useWindowSize from "../../hooks/useWindowSize";

interface FixedSlidesProps {
  children?: ReactElement[];
  length: number;
}

const FixedSlides: FC<FixedSlidesProps> = ({ length, children }) => {
  const [contentIndex, setContentIndex] = useState<number>(0);
  const [setRef, rect] = useRect();
  const { setRef: viewRef, inView } = useIsVisible({ threshold: 0.2 });
  const { height: windowHeight } = useWindowSize();

  useScroll(({ scroll }: { scroll: number }) => {
    if (scroll > rect.top) {
      setContentIndex(Math.floor((scroll - rect.top) / windowHeight));
    }
  });

  useEffect(() => {
    console.log(inView);
  }, [inView]);

  return (
    <FixedSlidesContainer
      className={"fixed-slides"}
      ref={(node) => {
        viewRef(node);
        setRef(node);
      }}
      style={{ "--length": `${(length + 1) * 100}vh` } as React.CSSProperties}
    >
      <div className={"sticky-wrapper"}>
        <div className={"sticky"}>
          {children?.map((child: ReactElement, id: number) => {
            return cloneElement(child, { index: contentIndex, key: id });
          })}
        </div>
      </div>
      {inView && (
        <ProgressBar progress={`${((contentIndex + 1) * 100) / length}%`} />
      )}
    </FixedSlidesContainer>
  );
};

export default FixedSlides;
