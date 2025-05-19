import { ScrollView, View } from "react-native";
import styled from "styled-components/native";

export const FavoritesContainer = styled(View)(({ theme }) => ({
  padding: theme.space[3],
}));

export const ScrollViewContainer = styled(ScrollView).attrs(({ theme }) => ({
  contentContainerStyle: {
    gap: theme.space[3],
    boxSizing: "border-box",
  },
}))``;
