import styled, { CSSProperties, DefaultTheme } from "styled-components/native";
import { Text as NativeText } from "react-native";
import { ComponentProps } from "react";

type StyleDef = (theme: DefaultTheme) => CSSProperties;

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

const variants = {
  body,
  label,
  caption,
  error,
  hint,
};

const TextComponent = ({
  variant,
  ...props
}: ComponentProps<typeof NativeText> & { variant?: keyof typeof variants }) => (
  <NativeText {...props} />
);

export const Text = styled(TextComponent)(({ theme, variant = "body" }) => ({
  ...defaultTextStyles(theme),
  ...variants[variant](theme),
}));
