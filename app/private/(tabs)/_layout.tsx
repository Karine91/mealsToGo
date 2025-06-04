import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";
import styled from "styled-components/native";

import StripeProvider from "@/services/checkout/ExpoStripeProvider";
import { FavoritesContextProvider } from "@/services/favorites/favorites.context";
import { LocationContextProvider } from "@/services/location/location.context";
import { RestaurantsContextProvider } from "@/services/restaurants/restaurants.context";

const TabsStyled = styled(Tabs).attrs(({ theme }) => ({
  screenOptions: {
    tabBarActiveTintColor: theme.colors.primary,
  },
}))``;

const TAB_ICON = {
  RESTAURANT: "restaurant-sharp",
  MAP: "map-outline",
  SETTINGS: "settings",
  CHECKOUT: "cart",
} as const;

type TabIconProps = {
  name: (typeof TAB_ICON)[keyof typeof TAB_ICON];
};

const tabBarIcon = (name: TabIconProps["name"]) => {
  function TabBarIconComponent({ color }: { color: string }) {
    return <Ionicons name={name} size={24} color={color} />;
  }
  return TabBarIconComponent;
};

export default function TabsLayout() {
  return (
    <StripeProvider>
      <FavoritesContextProvider>
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <TabsStyled>
              <Tabs.Screen
                name="(restaurants)"
                options={{
                  title: "Restaurant",
                  tabBarIcon: tabBarIcon(TAB_ICON.RESTAURANT),
                  headerShown: false,
                }}
              />
              <Tabs.Screen
                name="checkout"
                options={{
                  title: "Checkout",
                  tabBarIcon: tabBarIcon(TAB_ICON.CHECKOUT),
                  headerShown: false,
                }}
              />
              <Tabs.Screen
                name="map"
                options={{
                  title: "Map",
                  tabBarIcon: tabBarIcon(TAB_ICON.MAP),
                  headerShown: false,
                }}
              />
              <Tabs.Screen
                name="settings"
                options={{
                  title: "Settings",
                  tabBarIcon: tabBarIcon(TAB_ICON.SETTINGS),
                  headerShown: false,
                }}
              />
            </TabsStyled>
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </FavoritesContextProvider>
    </StripeProvider>
  );
}
