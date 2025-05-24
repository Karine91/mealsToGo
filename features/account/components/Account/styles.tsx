import { View } from "react-native";
import { Button } from "react-native-paper";
import styled from "styled-components/native";

export const AccountContainer = styled(View)(({ theme }) => ({
  padding: theme.space[4],
  backgroundColor: "rgba(255,255,255,0.7)",
  marginTop: theme.space[2],
  gap: theme.space[3],
  width: "60%",
}));

export const AuthButton = styled(Button).attrs(({ theme }) => ({
  color: theme.colors.primary,
  contentStyle: {
    padding: theme.space[2],
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  uppercase: true,
}))``;
