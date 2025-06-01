import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { PaperProvider } from "react-native-paper";
import { ThemeProvider } from "styled-components/native";
import ToastManager from "toastify-react-native";

import App from "@/components/App";
import { theme } from "@/infrastructure/theme";
import { AuthContextProvider } from "@/services/auth/auth.context";

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
          <AuthContextProvider>
            <App />
          </AuthContextProvider>
        </ThemeProvider>
      </PaperProvider>
      <ToastManager
        position="bottom"
        showProgressBar={false}
        bottomOffset={100}
      />
      <ExpoStatusBar />
    </>
  );
}
