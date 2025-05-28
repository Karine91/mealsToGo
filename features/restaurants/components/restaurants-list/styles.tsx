import { FlatList } from "react-native";
import styled from "styled-components/native";

import { RestaurantsItem } from "@/services/restaurants/restaurants.service";

export const RestaurantListWrapper = styled(FlatList<RestaurantsItem>).attrs(
  ({ theme }) => ({
    contentContainerStyle: { padding: theme.space[3], gap: theme.space[3] },
  })
)``;
