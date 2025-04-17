import { colors } from "./colors";
import { space, lineHeights } from "./spacings";
import { sizes } from "./sizes";
import { fonts, fontWeights, fontSizes } from "./fonts";

export const theme = {
  colors,
  space,
  lineHeights,
  sizes,
  fonts,
  fontSizes,
  fontWeights,
};

declare module "styled-components/native" {
  export interface DefaultTheme extends Theme {}
}

export type Theme = typeof theme;
