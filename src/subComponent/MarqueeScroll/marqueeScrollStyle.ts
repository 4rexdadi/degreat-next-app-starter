// Imports
import styled from "styled-components";

export const MarqueeScrollContainer = styled.div`
  display: flex;
  overflow: hidden;
  will-change: transform;

  .inner {
    display: flex;
    white-space: nowrap;
    transform: translate3d(var(--marquee-progress), 0, 0);
  }
`;
