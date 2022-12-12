// Imports
import styled from "styled-components";

import { convertPxtoRem } from "../../../utils/maths";

export const HeaderStyle = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: var(--black);
  color: var(--white);
  width: 100%;
  height: ${convertPxtoRem(96)};

  text-transform: uppercase;
  position: relative;

  h2 {
    font-size: var(--fontsm);
    line-height: var(--lhsm);
    font-family: var(--base-font-bold);

    @media only screen and (min-width: 744px) {
      br {
        display: none;
      }
    }

    @media only screen and (min-width: 1023px) {
      font-size: var(--fontmd);
      line-height: var(--lhmd);
      font-family: var(--base-font-bold);
    }
  }

  .contact {
    display: flex;
    align-items: center;
    justify-content: center;

    @media only screen and (min-width: 744px) {
      gap: ${convertPxtoRem(56)};
    }

    span {
      font-size: var(--fontsm);
      line-height: var(--lhsm);
      font-family: var(--base-font-regular);

      @media only screen and (min-width: 1023px) {
        font-size: var(--fontmd);
        line-height: var(--lhmd);
        font-family: var(--base-font-regular);
      }
    }

    button {
      font-size: var(--fontsm);
      font-family: var(--base-font-bold);

      position: absolute;
      bottom: ${convertPxtoRem(-22)};
      z-index: 5;

      @media only screen and (min-width: 744px) {
        position: unset;
      }

      @media only screen and (min-width: 1023px) {
        font-size: var(--fontmd);
        font-family: var(--base-font-bold);
      }
    }
  }
`;
