import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const FavoriteButton = styled(TouchableOpacity)(() => ({
  position: "absolute",
  top: 30,
  right: 30,
  zIndex: 9,
}));
