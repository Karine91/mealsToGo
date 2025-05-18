import React from "react";
import { View, Platform } from "react-native";

import { Text } from "@/components/Typography";
import { RestaurantsItem } from "@/services/restaurants/restaurants.service";

import { CompactContainer, CompactImage, CompactWebViewImage } from "./styles";

type RestaurantCompactInfoProps = {
  restaurant: RestaurantsItem;
};

const isAndroid = Platform.OS === "android";

const RestaurantCompactInfo = ({ restaurant }: RestaurantCompactInfoProps) => {
  return (
    <CompactContainer>
      {isAndroid ? (
        <CompactWebViewImage source={{ uri: restaurant.photos[0] }} />
      ) : (
        <CompactImage source={{ uri: restaurant.photos[0] }} />
      )}

      <Text variant="caption" numberOfLines={3}>
        {restaurant.name}
      </Text>
    </CompactContainer>
  );
};

export default RestaurantCompactInfo;
