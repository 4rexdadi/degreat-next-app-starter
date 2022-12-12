// Imports
import styled from "styled-components";

import { convertPxtoRem } from "../../utils/maths";

export const Cursor = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: ${convertPxtoRem(400)};
  left: ${convertPxtoRem(400)};
  width: ${convertPxtoRem(32)};
  height: ${convertPxtoRem(32)};
  background: transparent;
  border: ${convertPxtoRem(1.5)} solid var(--secondary);
  mix-blend-mode: difference;
  border-radius: 100%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 999;

  transition: all 20ms ease;
`;

export const CursorDot = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: ${convertPxtoRem(400)};
  left: ${convertPxtoRem(400)};
  width: ${convertPxtoRem(2.5)};
  height: ${convertPxtoRem(2.5)};
  background: var(--secondary);
  mix-blend-mode: difference;
  border-radius: 100%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 999;
`;
