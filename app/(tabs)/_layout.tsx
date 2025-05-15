import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";
import styled from "styled-components/native";

const TabsStyled = styled(Tabs).attrs(({ theme }) => ({
  screenOptions: {
    tabBarActiveTintColor: theme.colors.primary,
  },
}))``;

const TAB_ICON = {
  RESTAURANT: "restaurant-sharp",
  MAP: "map-outline",
  SETTINGS: "settings",
} as const;

type TabIconProps = {
  name: (typeof TAB_ICON)[keyof typeof TAB_ICON];
};

const tabBarIcon =
  (name: TabIconProps["name"]) =>
  ({ color }: { color: string }) => (
    <Ionicons name={name} size={24} color={color} />
  );

export default function TabsLayout() {
  return (
    <TabsStyled>
      <Tabs.Screen
        name="(restaurants)"
        options={{
          title: "Restaurant",
          tabBarIcon: tabBarIcon("restaurant-sharp"),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="map"
        options={{
          title: "Map",
          tabBarIcon: tabBarIcon("map-outline"),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: tabBarIcon("settings"),
          headerShown: false,
        }}
      />
    </TabsStyled>
  );
}
