import { Stack } from "expo-router";
import React from "react";
import { SafeAreaView } from "react-native";
import styled from "styled-components/native";

const SafeAreaVContainerView = styled(SafeAreaView)({
  flex: 1,
});

const RestaurantsStack = () => {
  return (
    <SafeAreaVContainerView>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="[id]" options={{ presentation: "modal" }} />
      </Stack>
    </SafeAreaVContainerView>
  );
};

export default RestaurantsStack;
