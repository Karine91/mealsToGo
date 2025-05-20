import { useLocalSearchParams } from "expo-router";
import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";

import RestaurantDetails from "@/features/restaurants/components/restaurant-details";
import RestaurantInfoCard from "@/features/restaurants/components/restaurant-info-card/RestaurantInfoCard";
import { useRestaurant } from "@/features/restaurants/hooks/useRestaurant";

const ScreenView = styled(View)(({ theme }) => ({
  backgroundColor: theme.colors.bg.primary,
  flex: 1,
}));

const RestaurantsDetail = () => {
  const { id } = useLocalSearchParams();
  const restaurant = useRestaurant(id as string);

  if (!restaurant) {
    return (
      <ScreenView style={{ alignItems: "center", justifyContent: "center" }}>
        <Text>Restaurant not found</Text>
      </ScreenView>
    );
  }

  return (
    <ScreenView>
      <RestaurantInfoCard restaurant={restaurant} />
      <RestaurantDetails />
    </ScreenView>
  );
};

export default RestaurantsDetail;
