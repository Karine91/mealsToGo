import { ImageBackground, View } from "react-native";
import styled from "styled-components/native";

export const BackgroundImageCover = styled(ImageBackground).attrs({
  source: require("@/assets/images/home_bg.jpg"),
  resizeMode: "cover",
})({
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
});

export const AccountCover = styled(View)(({ theme }) => ({
  position: "absolute",
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(255,255,255,0.3)",
}));
