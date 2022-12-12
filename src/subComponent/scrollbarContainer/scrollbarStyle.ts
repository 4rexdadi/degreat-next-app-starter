// Imports
import styled from "styled-components";

import { convertPxtoRem } from "../../utils/maths";

export const ScrollbarContainer = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: 500;
  padding: ${convertPxtoRem(24)} 0;
`;

export const Inner = styled.div`
  height: 100%;
  position: relative;
`;

export const Thumb = styled.div`
  min-height: ${convertPxtoRem(48)};
  width: ${convertPxtoRem(1.5)};
  background-color: var(--secondary);
  position: absolute;
  right: ${convertPxtoRem(8)};
  border-radius: ${convertPxtoRem(4)};
  border: ${convertPxtoRem(1)} solid transparent;
  cursor: grab;
`;
