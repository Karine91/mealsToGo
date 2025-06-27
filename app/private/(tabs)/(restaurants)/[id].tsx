import { useLocalSearchParams, Stack, useRouter } from "expo-router";
import React, { useContext } from "react";
import { Text, SafeAreaView, View } from "react-native";
import { Button } from "react-native-paper";
import styled from "styled-components/native";

import RestaurantDetails from "@/features/restaurants/components/restaurant-details";
import RestaurantInfoCard from "@/features/restaurants/components/restaurant-info-card/RestaurantInfoCard";
import { useRestaurant } from "@/features/restaurants/hooks/useRestaurant";
import { CartContext } from "@/services/cart/cart.context";

const ScreenView = styled(SafeAreaView)(({ theme }) => ({
  backgroundColor: theme.colors.bg.primary,
  flex: 1,
}));

const SpecialOrderContainer = styled(View)(({ theme }) => ({
  padding: theme.space[3],
  backgroundColor: theme.colors.bg.primary,
}));

const DetailsContainer = styled(View)(({ theme }) => ({
  padding: theme.space[3],
  flex: 2,
}));

const CardContainer = styled(View)(({ theme }) => ({
  flex: 2,
  zIndex: 1,
  paddingLeft: theme.space[3],
  paddingRight: theme.space[3],
  paddingTop: theme.space[2],
  paddingBottom: theme.space[2],
}));

const SpecialOrderButton = styled(Button).attrs(({ theme }) => ({
  color: theme.colors.primary,
}))(({ theme }) => ({
  width: "80%",
  padding: theme.space[2],
  alignSelf: "center",
  flexShrink: 0,
}));

const RestaurantsDetail = () => {
  const { id } = useLocalSearchParams();
  const restaurant = useRestaurant(id as string);
  const { addToCart } = useContext(CartContext);
  const router = useRouter();

  if (!restaurant) {
    return (
      <ScreenView style={{ alignItems: "center", justifyContent: "center" }}>
        <Stack.Screen options={{ title: "Not found", headerShown: true }} />
        <Text>Restaurant not found</Text>
      </ScreenView>
    );
  }

  return (
    <ScreenView>
      <Stack.Screen options={{ title: restaurant.name, headerShown: true }} />
      <CardContainer>
        <RestaurantInfoCard restaurant={restaurant} />
      </CardContainer>
      <DetailsContainer>
        <RestaurantDetails />
      </DetailsContainer>
      <SpecialOrderContainer>
        <SpecialOrderButton
          compact
          mode="contained"
          icon="cash-multiple"
          uppercase
          onPress={() => {
            addToCart(
              {
                item: "special",
                price: 12.99,
              },
              restaurant
            );
            router.dismissAll();
            router.navigate("/private/checkout");
          }}
        >
          Order special only 12.99$!
        </SpecialOrderButton>
      </SpecialOrderContainer>
    </ScreenView>
  );
};

export default RestaurantsDetail;
