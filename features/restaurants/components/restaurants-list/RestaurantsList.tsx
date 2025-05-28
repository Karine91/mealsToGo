import React from "react";
import { TouchableOpacity } from "react-native";

import RestaurantInfoCard from "@/features/restaurants/components/restaurant-info-card/RestaurantInfoCard";
import { RestaurantsItem } from "@/services/restaurants/restaurants.service";

import { RestaurantListWrapper } from "./styles";

const RestaurantsList = ({
  data,
  onItemClick,
}: {
  data: RestaurantsItem[];
  onItemClick: (item: RestaurantsItem) => void;
}) => {
  return (
    <RestaurantListWrapper
      data={data}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity onPress={() => onItemClick(item)}>
            <RestaurantInfoCard restaurant={item} />
          </TouchableOpacity>
        );
      }}
      keyExtractor={(item) => item.name}
    />
  );
};

export default RestaurantsList;
