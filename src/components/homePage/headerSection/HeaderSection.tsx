// imports
import { FC, useEffect, useRef, useState } from "react";

import Marquee from "../../../subComponent/marquee/Marquee";

// Imports Styles
import { HeaderStyle } from "./HeaderSectionStyle";

interface HeaderSectionProps {}

const HeaderSection: FC<HeaderSectionProps> = ({}) => {
  const spanRef = useRef<HTMLSpanElement>(null);
  const [isReady, setIsReady] = useState<boolean>(false);
  const [animationStart, setAnimationStart] = useState(true);

  useEffect(() => {
    setIsReady(true);
  }, [spanRef.current]);

  return (
    <HeaderStyle className="mainContainer header">
      <h2>
        adedayo <br /> aturu
      </h2>
      <span className="contact">
        <Marquee repeat={2} animationStart={animationStart}>
          <span ref={spanRef}>
            available for freelance <br /> work from dec 2022
          </span>
        </Marquee>

        <button
          className="btn"
          onMouseEnter={() => setAnimationStart(false)}
          onMouseLeave={() => setAnimationStart(true)}
          style={{ opacity: isReady ? 1 : 0 }}
        >
          contact
        </button>
      </span>
    </HeaderStyle>
  );
};

export default HeaderSection;
