import { View } from "react-native";
import { List } from "react-native-paper";
import styled from "styled-components/native";

export const SettingsItem = styled(List.Item)(({ theme }) => ({
  padding: theme.space[3],
  backgroundColor: "rgba(255,255,255,0.3)",
}));

export const AvatarContainer = styled(View)(({ theme }) => ({
  alignItems: "center",
  gap: theme.space[2],
  padding: theme.space[3],
}));

export const SettingsListSection = styled(List.Section)(({ theme }) => ({
  gap: theme.space[2],
}));
