import { View } from "react-native";
import { List } from "react-native-paper";
import styled from "styled-components/native";

export const AccordionIcon = styled(List.Icon).attrs(({ theme }) => ({
  color: theme.colors.primary,
}))``;

export const AccordionGroup = styled(View)(({ theme }) => ({
  marginTop: theme.space[2],
  padding: theme.space[3],
}));

export const Accordion = styled(List.Accordion)(({ theme }) => ({
  paddingLeft: theme.space[3],
}));
