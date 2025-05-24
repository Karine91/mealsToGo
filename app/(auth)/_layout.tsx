import { Stack } from "expo-router";
import React from "react";

import AuthLayout from "@/features/account/components/AuthLayout";

const AuthRootLayout = () => {
  return (
    <AuthLayout>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: "transparent",
          },
        }}
      >
        <Stack.Screen name="login" />
        <Stack.Screen name="register" />
      </Stack>
    </AuthLayout>
  );
};

export default AuthRootLayout;
