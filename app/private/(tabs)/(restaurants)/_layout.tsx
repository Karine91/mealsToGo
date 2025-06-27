import { Stack } from "expo-router";
import React from "react";

import { SafeAreaContainerView } from "@/components/SafeAreaContainer";
import { colors } from "@/infrastructure/theme/colors";

const RestaurantsStack = () => {
  return (
    <SafeAreaContainerView>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: colors.background },
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen
          name="[id]"
          options={{ presentation: "modal", headerShown: true }}
        />
      </Stack>
    </SafeAreaContainerView>
  );
};

export default RestaurantsStack;
