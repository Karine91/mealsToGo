import { useRouter } from "expo-router";
import React from "react";

import { AccountContainer, AuthButton } from "./styles";

const Account = () => {
  const router = useRouter();
  return (
    <AccountContainer>
      <AuthButton
        mode="contained"
        icon="lock-open-outline"
        onPress={() => router.navigate("/(auth)/login")}
      >
        Login
      </AuthButton>
      <AuthButton
        mode="contained"
        icon="email-outline"
        onPress={() => router.navigate("/(auth)/register")}
      >
        Sign up
      </AuthButton>
    </AccountContainer>
  );
};

export default Account;
