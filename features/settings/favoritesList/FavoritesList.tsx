import { useRouter } from "expo-router";
import { useContext } from "react";

import { Text } from "@/components/Typography";
import RestaurantsList from "@/features/restaurants/components/restaurants-list/RestaurantsList";
import { FavoritesContext } from "@/services/favorites/favorites.context";
import { RestaurantsItem } from "@/services/restaurants/restaurants.service";

import { NoDataContainer, FavoritesContainer } from "./styles";

const FavoritesList = () => {
  const { favorites } = useContext(FavoritesContext);
  const { navigate } = useRouter();

  const navigateToRestaurantsDetail = (item: RestaurantsItem) => {
    navigate({
      pathname: "/private/(tabs)/(restaurants)/[id]",
      params: { id: item.placeId },
    });
  };

  if (!favorites.length)
    return (
      <NoDataContainer>
        <Text variant="heading" headingSize="h5">
          No favorites yet.
        </Text>
      </NoDataContainer>
    );

  return (
    <FavoritesContainer>
      <RestaurantsList
        data={favorites}
        onItemClick={navigateToRestaurantsDetail}
      />
    </FavoritesContainer>
  );
};

export default FavoritesList;
