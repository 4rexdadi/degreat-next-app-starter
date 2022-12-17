// import
import { createGlobalStyle } from "styled-components";

const styled = { createGlobalStyle };

export const FontStyle = styled.createGlobalStyle`
  // imports and use local fonts using @font-face
  @font-face {
    font-family: "Brandon Grotesque Black";
    src: local("Brandon Grotesque Black"),
      url("/assets/fonts/Brandon-Grotesque/brandon-grotesque-black.otf")
        format("opentype");
    font-display: swap;
    font-style: normal;
  }

  @font-face {
    font-family: "Proxima Nova Regular";
    src: local("Proxima Nova Regular"),
      url("/assets/fonts/Proxima-Nova/Proxima-Nova-Regular.otf")
        format("opentype");
    font-display: swap;
    font-style: normal;
  }

  @font-face {
    font-family: "Proxima Nova Bold";
    src: local("Proxima Nova Bold"),
      url("/assets/fonts/Proxima-Nova/Proxima-Nova-Bold.otf") format("opentype");
    font-display: swap;
    font-style: normal;
  }

  @font-face {
    font-family: "Proxima Nova Extrabold";
    src: local("Proxima Nova Extrabold"),
      url("/assets/fonts/Proxima-Nova/Proxima-Nova-Extrabold.otf")
        format("opentype");
    font-display: swap;
    font-style: normal;
  }

  :root {
    // fonts sizes
    --h1: 7.438rem; // 119px
    --h2: 5.25rem; // 84px;
    --h3: 3.688rem; // 59px;
    --h4: 2.625rem; // 42px;
    --h5: 1.875rem; // 30px;
    --h6: 1.313rem; // 21px;
    --fontbg: 1.313rem; // 21px
    --fontmd: 0.931rem; // 14.9px
    --fontsm: 0.656rem; // 10.5px

    // line heights
    --lh1: 9rem; // 144px
    --lh2: 7rem; // 112px;
    --lh3: 4.5rem; // 72px;
    --lh4: 3rem; // 48px;
    --lh5: 2.5rem; // 40px;
    --lh6: 1.875rem; // 30px;
    --lhbg: 1.875rem; // 30px
    --lhmd: 127.3%; // 14.9px
    --lhsm: 127.3%; // 10.5px

    //fonts
    --secondary-font-black: "Brandon Grotesque Black", sans-serif;
    --base-font-regular: "Proxima Nova Regular", sans-serif;
    --base-font-bold: "Proxima Nova Bold", sans-serif;
    --base-font-extrabold: "Proxima Nova Extrabold", sans-serif;
  }

  body {
    /* font-family: var(--base-font-regular);
    font-size: var(--fontsm);
    line-height: var(--lhsm);
    overflow-x: hidden; */
  }
`;

export default FontStyle;
