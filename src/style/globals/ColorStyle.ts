// import
import { createGlobalStyle } from "styled-components";

const styled = { createGlobalStyle };

export const ColorStyle = styled.createGlobalStyle`
  :root {
    // Colors
    --black: #000000;
    --white: #f0e7e7;
    --secondary: #00aaa9;

    // gradient
    --gradient: #35c3f3 0%, #8b9fe8 20%, #e681d8 39%, #ffa9a4 76%, #fed2ce 100%;
  }

  body {
    background: var(--black);
    color: var(--white);
  }
`;

export default ColorStyle;
