// Imports
import styled, { keyframes } from "styled-components";

const marquee = keyframes`
  0% {
      transform: translate3d(calc(var(--offset) * -1), 0, 0);
    }

    100% {
      transform: translate3d(calc(-100% - var(--offset)), 0, 0);
    }
`;

const marqueeInverted = keyframes`
  0% {
      transform: translate3d(calc(-100% - var(--offset)), 0, 0);
    }

    100% {
      transform: translate3d(calc(var(--offset) * -1), 0, 0);
    }
`;

export const MarqueeContainer = styled.span`
  width: var(--innerWidth);
  display: flex;
  overflow: hidden;
  will-change: transform;
  opacity: 0;

  /* @media (prefers-reduced-motion: reduce) {
    --duration: 50s !important;
  } */

  .inner {
    display: flex;
    padding: 0 var(--innerSpacing);
    white-space: nowrap;
    animation: ${marquee} var(--duration) linear infinite;
    animation-play-state: var(--animation-status);
  }

  &.inverted {
    .inner {
      animation: ${marqueeInverted} var(--duration) linear infinite;
      animation-play-state: var(--animation-status);
    }
  }
`;
