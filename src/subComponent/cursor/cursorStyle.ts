// Imports
import styled from "styled-components";

import { convertPxtoRem } from "../../utils/maths";

export const CursorContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: 10000;
  pointer-events: none;
  overflow: hidden;
  mix-blend-mode: difference;

  .cursor {
    position: absolute;
    transform: translate(-50%, -50%);
    border-radius: 100%;
    width: ${convertPxtoRem(40)};
    height: ${convertPxtoRem(40)};
    background-color: transparent;
    border: ${convertPxtoRem(1.5)} var(--secondary) solid;
    mix-blend-mode: difference;
    border-radius: 100%;
    opacity: 1;
    transition: transform 1s var(--ease-out-expo);

    &.pointer {
      transform: translate(-50%, -50%) scale(0.1);
    }
  }
`;
