import { Stack } from "expo-router";
import React from "react";
import styled from "styled-components/native";
import { SafeAreaView } from "react-native";

const SafeAreaVContainerView = styled(SafeAreaView)({
  flex: 1,
});

const RestaurantsStack = () => {
  return (
    <SafeAreaVContainerView>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen
          name="restaurants-detail"
          options={{ presentation: "modal" }}
        />
      </Stack>
    </SafeAreaVContainerView>
  );
};

export default RestaurantsStack;
