// import
import { BoilerplateStyle } from "./globals/BoilerplateStyle";
import { ColorStyle } from "./globals/ColorStyle";
import { FontStyle } from "./globals/FontStyle";
import { SmoothScroll } from "./globals/SmoothScroll";
import { UtilityClassStyle } from "./globals/UtilityClassStyle";
import { VariableStyle } from "./globals/VariableStyle";

function GlobalStyle() {
  return (
    <>
      <FontStyle />
      <ColorStyle />
      <VariableStyle />
      <BoilerplateStyle />
      <UtilityClassStyle />
      <SmoothScroll />
    </>
  );
}

export default GlobalStyle;
