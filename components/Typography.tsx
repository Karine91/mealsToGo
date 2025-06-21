import { ComponentProps } from "react";
import { Text as NativeText, StyleProp, TextStyle } from "react-native";
import styled, { CSSProperties, DefaultTheme } from "styled-components/native";

import { Theme, theme } from "@/infrastructure/theme";
import { fontSizes } from "@/infrastructure/theme/fonts";

type StyleDef = (
  theme: DefaultTheme,
  headingSize?: HeadingSize
) => CSSProperties;

const defaultTextStyles: StyleDef = (theme) => ({
  fontFamily: theme.fonts.body,
  fontWeight: theme.fontWeights.regular,
  color: theme.colors.text.primary,
  flexWrap: "wrap",
  marginTop: 0,
  marginBottom: 0,
});

const body: StyleDef = (theme) => ({
  fontSize: theme.fontSizes.body,
});

const hint: StyleDef = (theme) => ({
  fontSize: theme.fontSizes.body,
  color: theme.colors.text.secondary,
});

const error: StyleDef = (theme) => ({
  color: theme.colors.text.error,
});

const caption: StyleDef = (theme) => ({
  fontSize: theme.fontSizes.caption,
  fontWeight: theme.fontWeights.bold,
});

const label: StyleDef = (theme) => ({
  fontFamily: theme.fonts.heading,
  fontSize: theme.fontSizes.body,
  fontWeight: theme.fontWeights.medium,
});

const heading: StyleDef = (theme, headingSize = "h4") => ({
  fontSize: theme.fontSizes[headingSize],
  fontFamily: theme.fonts.heading,
  fontWeight: theme.fontWeights.medium,
});

const variants = {
  body,
  label,
  caption,
  error,
  hint,
  heading,
};

type HeadingSize = Extract<keyof typeof fontSizes, `h${number}`>;
type Variant = keyof typeof variants;
type TextComponentProps = {
  variant?: Exclude<Variant, 'heading'>;
  style?: ((theme: Theme) => StyleProp<TextStyle>) | StyleProp<TextStyle>;
  headingSize?: never
} | {
  variant: 'heading',
  headingSize?: HeadingSize;
  style?: ((theme: Theme) => StyleProp<TextStyle>) | StyleProp<TextStyle>;
};

const TextComponent = ({
  variant,
  style,
  ...props
}: Omit<ComponentProps<typeof NativeText>, "style"> &
  TextComponentProps) => (
  <NativeText
    {...props}
    style={typeof style === "function" ? style(theme) : style}
  />
);

export const Text = styled(TextComponent)(
  ({ theme, variant = "body", headingSize }) => ({
    ...defaultTextStyles(theme),
    ...variants[variant](theme, headingSize),
  })
);
