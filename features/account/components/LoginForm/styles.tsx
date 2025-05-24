import { View } from "react-native";
import { Button, HelperText } from "react-native-paper";
import styled from "styled-components/native";

export const LoginContainer = styled(View)(({ theme }) => ({
  justifyContent: "center",
  alignItems: "center",
  flex: 1,
  height: "100%",
}));

export const LoginFormContainer = styled(View)(({ theme }) => ({
  backgroundColor: theme.colors.elevation.level3,
  padding: theme.space[3],
  borderRadius: theme.roundness,
  width: "80%",
  height: "auto",
  alignItems: "center",
  gap: theme.space[3],
}));

export const InputsWrapper = styled(View)(({ theme }) => ({
  gap: theme.space[2],
  width: "100%",
}));

export const LoginButton = styled(Button).attrs(({ theme }) => ({
  color: theme.colors.primary,
  contentStyle: {
    padding: theme.space[2],
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  uppercase: true,
}))({
  width: "100%",
});

export const HelperTextStyled = styled(HelperText)(({ theme }) => ({
  padding: 0,
}));
