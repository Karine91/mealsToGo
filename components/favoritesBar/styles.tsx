import { ScrollView, View } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

export const FavoritesContainer = styled(View)(({ theme }) => ({
  backgroundColor: "transparent",
  zIndex: 999,
}));

export const FavoritesCard = styled(Card).attrs({
  elevation: 3,
})(({ theme }) => ({
  padding: theme.space[3],
  backgroundColor: theme.colors.background,
  borderRadius: 10,
  borderTopLeftRadius: 0,
  borderTopRightRadius: 0,
}));

export const ScrollViewContainer = styled(ScrollView).attrs(({ theme }) => ({
  contentContainerStyle: {
    gap: theme.space[3],
    boxSizing: "border-box",
  },
}))``;
