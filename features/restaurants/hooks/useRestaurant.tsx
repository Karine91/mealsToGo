import { useContext } from "react";

import { FavoritesContext } from "@/services/favorites/favorites.context";
import { RestaurantsContext } from "@/services/restaurants/restaurants.context";

export function useRestaurant(id: string) {
  const context = useContext(RestaurantsContext);
  const favorites = useContext(FavoritesContext);

  if (typeof context === "undefined") {
    throw Error("Should be used within RestaurantContext Provider");
  }

  if (typeof favorites === "undefined") {
    throw Error("Should be used within FavoritesContext Provider");
  }

  return (
    context.restaurants.find((item) => item.placeId === id) ||
    favorites.favorites.find((item) => item.placeId === id)
  );
}
