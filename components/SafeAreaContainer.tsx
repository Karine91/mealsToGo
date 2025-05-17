import { SafeAreaView, StatusBar } from "react-native";
import styled from "styled-components/native";

export const SafeAreaContainerView = styled(SafeAreaView)({
  flex: 1,
  marginTop: StatusBar.currentHeight,
});
