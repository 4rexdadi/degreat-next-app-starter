// import
import { createGlobalStyle } from "styled-components";
import { convertPxtoRem } from "../../utils/maths";

const styled = { createGlobalStyle };

export const UtilityClassStyle = styled.createGlobalStyle`
  .mainContainer {
    width: 100vw;
    padding-inline: ${convertPxtoRem(8)};

    @media only screen and (min-width: 375px) {
      padding-inline: ${convertPxtoRem(16)};
    }

    @media only screen and (min-width: 744px) {
      padding-inline: ${convertPxtoRem(40)};
    }

    @media only screen and (min-width: 1023px) {
      padding-inline: ${convertPxtoRem(64)};
    }
  }

  .btn {
    background: transparent;
    color: var(--white);
    width: ${convertPxtoRem(81)};
    height: ${convertPxtoRem(29)};

    border: solid 1.5px var(--white);
    border-radius: ${convertPxtoRem(32)};
    padding: ${convertPxtoRem(8)} ${convertPxtoRem(16)};

    font-size: var(--fontsm);
    font-family: var(--base-font-bold);

    transition: border-color 0.2s ease;
    transition: color 0.2s ease;

    &:hover {
      border-color: var(--black);
      color: var(--secondary);
    }

    @media only screen and (min-width: 1023px) {
      width: ${convertPxtoRem(101)};
      height: ${convertPxtoRem(35)};
    }
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap; /* added line */
    border: 0;
  }

  .uppercase {
    text-transform: uppercase;
  }

  .lowercase {
    text-transform: lowercase;
  }

  .hide_for_mobile {
    display: none;
  }

  .hide_for_desktop {
    display: none;
  }
`;

export default UtilityClassStyle;
