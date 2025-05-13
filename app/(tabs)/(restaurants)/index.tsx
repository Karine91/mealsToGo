import { useRouter } from "expo-router";
import { useContext } from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import styled from "styled-components/native";

import RestaurantInfoCard from "@/features/restaurants/components/restaurant-info-card/RestaurantInfoCard";
import Search from "@/features/restaurants/components/Search";
import { RestaurantsContext } from "@/services/restaurants/restaurants.context";
import type { RestaurantsItem } from "@/services/restaurants/restaurants.service";

const RestaurantList = styled(FlatList<RestaurantsItem>).attrs({
  contentContainerStyle: { padding: 16, gap: 16 },
})``;

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
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);
  const { navigate } = useRouter();

  return (
    <>
      {isLoading ? (
        <LoaderWrapper>
          <Loader animating={true} size={"large"} />
        </LoaderWrapper>
      ) : (
        <>
          <Search />
          <RestaurantList
            data={restaurants}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigate({
                      pathname: "/(tabs)/(restaurants)/[id]",
                      params: { id: item.placeId },
                    })
                  }
                >
                  <RestaurantInfoCard restaurant={item} />
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item) => item.name}
          />
        </>
      )}
    </>
  );
}
