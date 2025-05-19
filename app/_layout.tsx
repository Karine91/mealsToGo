import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { Stack } from "expo-router";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { PaperProvider } from "react-native-paper";
import { ThemeProvider } from "styled-components/native";

import { theme } from "@/infrastructure/theme";
import { FavoritesContextProvider } from "@/services/favorites/favorites.context";
import { LocationContextProvider } from "@/services/location/location.context";
import { RestaurantsContextProvider } from "@/services/restaurants/restaurants.context";

export default function RootLayout() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <PaperProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <FavoritesContextProvider>
            <LocationContextProvider>
              <RestaurantsContextProvider>
                <Stack screenOptions={{ headerShown: false }}>
                  <Stack.Screen name="(tabs)" />
                  <Stack.Screen name="+not-found" />
                </Stack>
              </RestaurantsContextProvider>
            </LocationContextProvider>
          </FavoritesContextProvider>
        </ThemeProvider>
      </PaperProvider>

      <ExpoStatusBar />
    </>
  );
}
