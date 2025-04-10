import { Stack } from "expo-router";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="index" />
      </Stack>
      <ExpoStatusBar />
    </>
  );
}
