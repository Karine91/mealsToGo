import { Image, View } from "react-native";
import WebView from "react-native-webview";
import { styled } from "styled-components/native";

export const CompactImage = styled(Image)(() => ({
  width: 150,
  height: 150,
  borderRadius: 10,
}));

export const CompactWebViewImage = styled(WebView)(() => ({
  width: 150,
  height: 150,
  borderRadius: 10,
}));

export const CompactContainer = styled(View)(({ theme }) => ({
  padding: theme.space[2],
  maxWidth: 150,
  alignItems: "center",
}));
