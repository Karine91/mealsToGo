import React from "react";
import { View, TouchableOpacity } from "react-native";

import RestaurantCompactInfo from "@/features/restaurants/components/restaurant-compact-view/RestaurantCompactInfo";
import { RestaurantsItem } from "@/services/restaurants/restaurants.service";

import { Text } from "../Typography";

import {
  FavoritesCard,
  FavoritesContainer,
  ScrollViewContainer,
} from "./styles";

type FavoritesBarProps = {
  favorites: RestaurantsItem[];
  onDetail: (restaurant: RestaurantsItem) => void;
};

const FavoritesBar = ({ favorites, onDetail }: FavoritesBarProps) => {
  if (!favorites.length) return null;
  return (
    <FavoritesContainer>
      <FavoritesCard>
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
      </FavoritesCard>
    </FavoritesContainer>
  );
};

export default FavoritesBar;
