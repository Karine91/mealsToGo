import { View, Image } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

import { Text } from "@/components/Typography";

export const CardStyled = styled(Card)(({ theme }) => ({
  backgroundColor: theme.colors.ui.white,
}));

export const CardCover = styled(Card.Cover)(({ theme }) => ({
  padding: 20,
  backgroundColor: "transparent",
}));

export const Info = styled(Card.Content)(({ theme }) => ({
  padding: theme.space[3],
}));

export const Address = styled(Text)(({ theme }) => ({
  fontFamily: theme.fonts.body,
  fontSize: theme.fontSizes.caption,
}));

export const Rating = styled(View)(({ theme }) => ({
  flexDirection: "row",
  paddingTop: theme.space[2],
  paddingBottom: theme.space[2],
}));

export const Section = styled(View)(() => ({
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const SectionEnd = styled(View)(({ theme }) => ({
  flexDirection: "row",
  gap: theme.space[3],
}));

export const Icon = styled(Image)({
  width: 15,
  height: 15,
});
