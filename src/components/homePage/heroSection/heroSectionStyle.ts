// Imports
import styled from "styled-components";

import { convertPxtoRem } from "../../../utils/maths";

export const HeroContainer = styled.section`
  width: 100%;
  background: var(--black);
  color: var(--white);

  h1 {
    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and (min-width: 1023px) {
      align-items: flex-start;
    }

    .headline {
      display: flex;
      flex-direction: column;
      padding-top: ${convertPxtoRem(81)};
      width: 100%;

      font-size: var(--h5);
      line-height: var(--lh5);
      font-family: var(--secondary-font-black);
      text-transform: uppercase;

      @media only screen and (min-width: 744px) {
        font-size: var(--h3);
        line-height: var(--lh3);
        padding-top: ${convertPxtoRem(131)};
      }

      @media only screen and (min-width: 1023px) {
        font-size: var(--h2);
        line-height: var(--lh2);
        padding-top: ${convertPxtoRem(0)};
      }

      @media only screen and (min-width: 1400px) {
        font-size: var(--h1);
        line-height: var(--lh1);
      }

      @media only screen and (min-height: 1100px) {
        padding-top: ${convertPxtoRem(50)};
      }

      @media only screen and (min-height: 1200px) {
        padding-top: ${convertPxtoRem(100)};
      }

      .right__headline {
        text-align: right;
      }

      .left__headline {
        text-align: left;
      }

      .middle__headline {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: ${convertPxtoRem(16)};

        .line {
          width: 100%;
          height: 1.5px;
          background: var(--white);
        }
      }
    }

    .about {
      display: inline-block;
      width: 100%;
      padding-top: ${convertPxtoRem(60)};

      @media only screen and (min-width: 330px) {
        width: ${convertPxtoRem(310)};
      }

      @media only screen and (min-width: 744px) {
        width: ${convertPxtoRem(422)};
        padding-top: ${convertPxtoRem(44)};
      }

      @media only screen and (min-width: 1023px) {
        padding-top: ${convertPxtoRem(0)};
        margin-left: 9%;
      }

      @media only screen and (min-width: 1400px) {
        width: ${convertPxtoRem(590)};
        padding-top: ${convertPxtoRem(0)};
        margin-left: 7%;
      }

      & > span:nth-child(1) {
        margin-right: 10px;
        font-size: var(--fontsm);
        line-height: var(--lhsm);
        font-family: var(--base-font-regular);
        text-transform: uppercase;

        @media only screen and (min-width: 1400px) {
          font-size: var(--fontmd);
          line-height: var(--lhmd);
        }
      }

      & > span:nth-child(2) {
        font-size: var(--fontmd);
        line-height: var(--lhmd);
        font-family: var(--base-font-bold);

        @media only screen and (min-width: 1400px) {
          font-size: var(--fontbg);
          line-height: var(--lhbg);
        }

        span {
          color: var(--secondary);
        }
      }

      & > span:nth-child(3) {
        display: inline-block;
        width: 100%;
        padding-top: ${convertPxtoRem(22)};

        font-size: var(--fontsm);
        line-height: var(--lhsm);
        font-family: var(--base-font-bold);

        @media only screen and (min-width: 330px) {
          width: ${convertPxtoRem(313)};
        }

        @media only screen and (min-width: 744px) {
          padding-top: ${convertPxtoRem(30)};
        }

        @media only screen and (min-width: 1400px) {
          font-size: var(--fontmd);
          line-height: var(--lhmd);
          width: 100%;
        }
      }
    }
  }

  .scroll {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 8px;
    padding: ${convertPxtoRem(60)} 0px 4px 0px;

    @media only screen and (min-width: 744px) {
      padding-bottom: 8px;
    }

    @media only screen and (min-height: 760px) {
      padding-top: ${convertPxtoRem(150)};
    }

    p {
      font-size: var(--fontsm);
      line-height: var(--lhsm);
      font-family: var(--base-font-bold);

      @media only screen and (min-width: 744px) {
        font-size: var(--fontmd);
        line-height: var(--lhmd);
      }
    }

    svg {
      width: 16px;
      height: 14px;
      stroke: var(--secondary);

      @media only screen and (min-width: 744px) {
      }
    }
  }

  a {
    position: relative;

    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1.1px;
      background: var(--white);
      transition: all 0.2s ease;
    }

    &:hover::after {
      background: var(--secondary);
    }
  }
`;
