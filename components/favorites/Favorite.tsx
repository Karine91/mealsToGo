import { AntDesign } from "@expo/vector-icons";
import React, { useContext } from "react";

import { FavoritesContext } from "@/services/favorites/favorites.context";
import { RestaurantsItem } from "@/services/restaurants/restaurants.service";

import { FavoriteButton } from "./styles";

type FavoritesProps = {
  restaurant: RestaurantsItem;
};

const Favorite = ({ restaurant }: FavoritesProps) => {
  const { addToFavorites, removeFromFavorites, favorites } =
    useContext(FavoritesContext);

  const isFavorite = favorites.find(
    (item) => item.placeId === restaurant.placeId
  );

  return (
    <FavoriteButton
      onPress={() =>
        isFavorite
          ? removeFromFavorites(restaurant.placeId)
          : addToFavorites(restaurant)
      }
    >
      <AntDesign
        name={isFavorite ? "heart" : "hearto"}
        size={24}
        color={isFavorite ? "red" : "white"}
      />
    </FavoriteButton>
  );
};

export default Favorite;
