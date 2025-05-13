import { Redirect, useLocalSearchParams } from "expo-router";
import React from "react";

import RestaurantDetails from "@/features/restaurants/components/restaurant-details";
import RestaurantInfoCard from "@/features/restaurants/components/restaurant-info-card/RestaurantInfoCard";
import { useRestaurant } from "@/features/restaurants/hooks/useRestaurant";

const RestaurantsDetail = () => {
  const { id } = useLocalSearchParams();
  const restaurant = useRestaurant(id as string);

  if (!restaurant) {
    return <Redirect href="/+not-found" />;
  }

  return (
    <>
      <RestaurantInfoCard restaurant={restaurant} />
      <RestaurantDetails />
    </>
  );
};

export default RestaurantsDetail;
