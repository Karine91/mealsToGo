import { Stack } from "expo-router";
import React from "react";

import { SafeAreaContainerView } from "@/components/SafeAreaContainer";

const RestaurantsStack = () => {
  return (
    <SafeAreaContainerView>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: "#fff" },
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="[id]" options={{ presentation: "modal" }} />
      </Stack>
    </SafeAreaContainerView>
  );
};

export default RestaurantsStack;
