import { MD3LightTheme as DefaultThemeRP } from "react-native-paper";

import { colors } from "./colors";
import { fonts, fontWeights, fontSizes } from "./fonts";
import { sizes } from "./sizes";
import { space, lineHeights } from "./spacings";

export const theme = {
  ...DefaultThemeRP,
  colors: {
    ...DefaultThemeRP.colors,
    ...colors,
  },
  space,
  lineHeights,
  sizes,
  fonts: {
    ...DefaultThemeRP.fonts,
    ...fonts,
  },
  fontSizes,
  fontWeights,
};

declare module "styled-components/native" {
  export interface DefaultTheme extends Theme {}
}

export type Theme = typeof theme;
