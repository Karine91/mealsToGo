import React from "react";
import { View, TouchableOpacity } from "react-native";

import RestaurantCompactInfo from "@/features/restaurants/components/restaurant-compact-view/RestaurantCompactInfo";
import { RestaurantsItem } from "@/services/restaurants/restaurants.service";

import { Text } from "../Typography";

import { FavoritesContainer, ScrollViewContainer } from "./styles";

type FavoritesBarProps = {
  favorites: RestaurantsItem[];
  onDetail: (restaurant: RestaurantsItem) => void;
};

const FavoritesBar = ({ favorites, onDetail }: FavoritesBarProps) => {
  if (!favorites.length) return null;
  return (
    <FavoritesContainer>
      <Text variant="caption">Favorites</Text>
      <ScrollViewContainer horizontal showsHorizontalScrollIndicator={false}>
        {favorites.map((restaurant) => (
          <TouchableOpacity
            key={restaurant.name}
            onPress={() => onDetail(restaurant)}
          >
            <RestaurantCompactInfo restaurant={restaurant} />
          </TouchableOpacity>
        ))}
      </ScrollViewContainer>
    </FavoritesContainer>
  );
};

export default FavoritesBar;
