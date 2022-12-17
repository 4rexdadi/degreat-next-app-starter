// import
import { createGlobalStyle } from "styled-components";

const styled = { createGlobalStyle };

export const BoilerplateStyle = styled.createGlobalStyle`
  html {
    font-size: 100%;
    box-sizing: border-box;
    overscroll-behavior: none;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    color: inherit;
    margin: 0px;
  }

  ul,
  ol {
    list-style: none;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  li,
  button {
    cursor: pointer;
  }

  button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    position: relative;
    display: inline-block;
    text-transform: uppercase;
  }

  a,
  a:visited,
  a:active {
    text-decoration: none;
    cursor: pointer;
  }

  img {
    max-width: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    line-height: 1.1;
    font-weight: inherit;
  }

  /* make images easier to work with */
  img,
  picture {
    max-width: 100%;
    display: block;
  }

  /* make form elements easier to work with */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }
`;

export default BoilerplateStyle;
