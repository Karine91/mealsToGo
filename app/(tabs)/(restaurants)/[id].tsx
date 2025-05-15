import { Redirect, useLocalSearchParams } from "expo-router";
import React from "react";
import { View } from "react-native";
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
    return <Redirect href="/+not-found" />;
  }

  return (
    <ScreenView>
      <RestaurantInfoCard restaurant={restaurant} />
      <RestaurantDetails />
    </ScreenView>
  );
};

export default RestaurantsDetail;
