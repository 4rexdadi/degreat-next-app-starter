// import
import { createGlobalStyle } from "styled-components";

const styled = { createGlobalStyle };

export const SmoothScroll = styled.createGlobalStyle`
  /* WebKit Hide Scrollbar */

  * {
    scrollbar-color: var(--secondary) transparent;
  }

  *::-webkit-scrollbar-track {
    background: var(--secondary);
  }

  *::-webkit-scrollbar-thumb {
    background-color: var(--secondary);
  }

  @media only screen and (min-width: 1025px) {
    html {
      scrollbar-width: none !important;

      body {
        -ms-overflow-style: none;
      }

      body::-webkit-scrollbar {
        width: 0 !important;
        height: 0 !important;
      }
    }
  }
`;

export default SmoothScroll;
