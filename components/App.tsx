import { Stack } from "expo-router";
import React, { useContext } from "react";

import { AuthContext } from "@/services/auth/auth.context";

const App = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Protected guard={!isAuthenticated}>
        <Stack.Screen name="index" />
        <Stack.Screen name="login" />
        <Stack.Screen name="register" />
      </Stack.Protected>

      <Stack.Protected guard={isAuthenticated}>
        <Stack.Screen name="private/(tabs)" />
      </Stack.Protected>
      <Stack.Screen name="+not-found" />
    </Stack>
  );
};

export default App;
