import { useRouter } from "expo-router";
import React from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";
import styled from "styled-components/native";

import AccountImageBg from "@/features/account/components/AccountImageBg/AccountImageBg";

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

const Account = () => {
  const router = useRouter();

  return (
    <AccountImageBg>
      <AccountContainer>
        <AuthButton
          mode="contained"
          icon="lock-open-outline"
          onPress={() => router.navigate("/login")}
        >
          Login
        </AuthButton>
        <AuthButton
          mode="contained"
          icon="email-outline"
          onPress={() => router.navigate("/register")}
        >
          Register
        </AuthButton>
      </AccountContainer>
    </AccountImageBg>
  );
};

export default Account;
