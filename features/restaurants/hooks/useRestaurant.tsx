import { useContext } from "react";

import { RestaurantsContext } from "@/services/restaurants/restaurants.context";

export function useRestaurant(id: string) {
  const context = useContext(RestaurantsContext);

  if (typeof context === "undefined") {
    throw Error("Should be used within RestaurantContext Provider");
  }

  return context.restaurants.find((item) => item.placeId === id);
}
