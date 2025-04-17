import { Stack } from "expo-router";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { theme } from "@/infrastructure/theme";

export default function RootLayout() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Stack>
          <Stack.Screen name="(restaurant)" />
        </Stack>
      </ThemeProvider>

      <ExpoStatusBar />
    </>
  );
}
