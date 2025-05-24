import { ComponentProps } from "react";
import { Text as NativeText } from "react-native";
import styled, { CSSProperties, DefaultTheme } from "styled-components/native";

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

const TextComponent = ({
  variant,
  ...props
}: ComponentProps<typeof NativeText> & {
  variant?: keyof typeof variants;
  headingSize?: HeadingSize;
}) => <NativeText {...props} />;

export const Text = styled(TextComponent)(
  ({ theme, variant = "body", headingSize }) => ({
    ...defaultTextStyles(theme),
    ...variants[variant](theme, headingSize),
  })
);
