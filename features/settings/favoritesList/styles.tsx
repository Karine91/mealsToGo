import { View } from "react-native";
import styled from "styled-components/native";

export const NoDataContainer = styled(View)(({ theme }) => ({
  padding: theme.space[3],
  flex: 1,
  backgroundColor: theme.colors.background,
}));

export const FavoritesContainer = styled(View)(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.colors.background,
}));
