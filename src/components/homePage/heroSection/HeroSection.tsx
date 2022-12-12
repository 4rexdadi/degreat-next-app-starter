// Imports
import React, { useEffect, useRef, FC } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { ArrowDown } from "../../../../public/assets/svg/Svg";

// Imports Styles
import { HeroContainer } from "./heroSectionStyle";

interface HeroSectionProps {}

const HeroSection: FC<HeroSectionProps> = ({}) => {
  const HeroContainerRef = useRef(null);

  useEffect(() => {
    let Elem = HeroContainerRef.current;

    let trigger = ScrollTrigger.create({
      trigger: Elem,
      start: "top top",
      pin: true,
      scrub: true,
      pinSpacing: false,
      // markers: true,
    });

    return () => {
      if (trigger) trigger.kill();
    };
  }, []);

  return (
    <HeroContainer className="mainContainer" ref={HeroContainerRef}>
      <h1>
        <span className="headline">
          <span className="left__headline">be</span>

          <span className="middle__headline">
            <span>different</span>

            <span className="line"></span>

            <span>get</span>
          </span>

          <span className="right__headline">noticed</span>
        </span>

        <span className="about">
          <span>ABOUT</span>

          <span>
            I am a <span>front-end web developer</span> based in
            <a href=""> Lagos, Nigeria </a>
            focused on building and occasionally designing exceptional
            interactive digital experiences using modern technologies.
          </span>

          <span>
            Check out my <a href="">Selected Projeccts</a>,
            <a href=""> Playground </a>or get my <a href=""> Resumé</a>...
          </span>
        </span>
      </h1>

      <span className="scroll">
        <p>Keep Scrolling</p>

        <ArrowDown />
      </span>
    </HeroContainer>
  );
};

export default HeroSection;
