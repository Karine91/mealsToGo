import { View } from "react-native";
import { Avatar, Icon } from "react-native-paper";
import styled from "styled-components/native";

export const NoCartContainer = styled(View)(({ theme }) => ({
  alignItems: "center",
  justifyContent: "center",
  flex: 1,
  gap: theme.space[2],
  backgroundColor: theme.colors.bg.primary,
}));

export const CartIcon = styled(Avatar.Icon).attrs({
  size: 128,
})``;

export const CheckoutContainer = styled(View)(({ theme }) => ({
  padding: theme.space[3],
  gap: theme.space[3],
  backgroundColor: theme.colors.bg.primary,
  flex: 1,
}));
