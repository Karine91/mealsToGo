import { Stack } from "expo-router";

import { SafeAreaContainerView } from "@/components/SafeAreaContainer";

const Settings = () => {
  return (
    <SafeAreaContainerView>
      <Stack
        screenOptions={{
          headerShown: true,
        }}
      >
        <Stack.Screen name="index" options={{ title: "Settings" }} />
        <Stack.Screen name="favorites" options={{ title: "Favorites" }} />
        <Stack.Screen name="camera" options={{ title: "Camera" }} />
      </Stack>
    </SafeAreaContainerView>
  );
};

export default Settings;
