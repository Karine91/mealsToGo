import { useRouter } from "expo-router";
import { useContext, useState } from "react";
import { View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import styled from "styled-components/native";

import FavoritesBar from "@/components/favoritesBar/FavoritesBar";
import RestaurantsList from "@/features/restaurants/components/restaurants-list/RestaurantsList";
import Search from "@/features/restaurants/components/Search";
import { FavoritesContext } from "@/services/favorites/favorites.context";
import { RestaurantsContext } from "@/services/restaurants/restaurants.context";
import type { RestaurantsItem } from "@/services/restaurants/restaurants.service";

const Loader = styled(ActivityIndicator).attrs(({ theme }) => ({
  color: theme.colors.primary,
}))``;

const LoaderWrapper = styled(View)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flex: 1,
});

export default function Restaurants() {
  const { restaurants, isLoading } = useContext(RestaurantsContext);
  const { favorites } = useContext(FavoritesContext);
  const [showFavorites, setShowFavorites] = useState(false);
  const { navigate } = useRouter();

  const navigateToRestaurantsDetail = (item: RestaurantsItem) => {
    navigate({
      pathname: "/private/(tabs)/(restaurants)/[id]",
      params: { id: item.placeId },
    });
  };

  return (
    <>
      {isLoading ? (
        <LoaderWrapper>
          <Loader animating={true} size={"large"} />
        </LoaderWrapper>
      ) : (
        <>
          <Search
            showFavorites={showFavorites}
            onFavToggle={() => setShowFavorites((val) => !val)}
          />
          {showFavorites && (
            <FavoritesBar
              favorites={favorites}
              onDetail={navigateToRestaurantsDetail}
            />
          )}
          <RestaurantsList
            data={restaurants}
            onItemClick={navigateToRestaurantsDetail}
          />
        </>
      )}
    </>
  );
}
