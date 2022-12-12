// imports
import styled from "styled-components";

import { convertPxtoRem } from "../../utils/maths";

export const LoaderContainer = styled.div`
  width: 100vw;
  height: 100vh;
  color: var(--black);
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  overflow: hidden !important;
  z-index: 20;
`;

export const Loading = styled.div`
  height: 100%;
  width: 100%;
  background-color: var(--black);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
`;

export const Follow = styled.div`
  position: absolute;
  background-color: var(--secondary);
  height: ${convertPxtoRem(2)};
  width: 0;
  left: 0;
  z-index: 2;
`;

export const ProgressBar = styled.div`
  position: absolute;
  left: 0;
  background-color: var(--white);
  height: ${convertPxtoRem(2)};
  width: 0;
  transition: 0.4s ease-out;
`;

export const Count = styled.p`
  position: absolute;
  font-size: var(--h1);
  line-height: var(--lh1);
  color: var(--white);
  left: 50%;
  transform: translate(-50%, 0);

  @media only screen and (min-width: 1023px) {
    * {
      scrollbar-width: none; /* Firefox */
      -ms-overflow-style: none; /* Internet Explorer 10+ */
    }

    *::-webkit-scrollbar {
      /* WebKit */
      width: 0;
      height: 0;
    }
  }
`;

export const ContentDisplay = styled.div`
  position: relative;
  height: 100vh;
  width: 0%;
  background-color: var(--black);
  z-index: 2;
`;
