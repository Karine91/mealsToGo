import { View, SafeAreaView, FlatList } from "react-native";

import { ActivityIndicator } from "react-native-paper";
import RestaurantInfoCard from "@/features/restaurants/components/restaurant-info-card/RestaurantInfoCard";
import styled from "styled-components/native";
import { RestaurantsContext } from "@/services/restaurants/restaurants.context";
import { useContext } from "react";
import type { RestaurantsItem } from "@/services/restaurants/restaurants.service";
import Search from "@/features/restaurants/components/Search";

const ContainerView = styled(SafeAreaView)({
  flex: 1,
});

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

export default function Index() {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);

  return (
    <ContainerView>
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
              return <RestaurantInfoCard restaurant={item} />;
            }}
            keyExtractor={(item) => item.name}
          />
        </>
      )}
    </ContainerView>
  );
}
