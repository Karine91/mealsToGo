import React from "react";
import { Platform } from "react-native";

import { Text } from "@/components/Typography";
import { RestaurantsItem } from "@/services/restaurants/restaurants.service";

import { CompactContainer, CompactImage, CompactWebViewImage } from "./styles";

type RestaurantCompactInfoProps = {
  restaurant: RestaurantsItem;
  isMap?: boolean;
};

const isAndroid = Platform.OS === "android";

const RestaurantCompactInfo = ({
  restaurant,
  isMap = false,
}: RestaurantCompactInfoProps) => {
  return (
    <CompactContainer>
      {isAndroid && isMap ? (
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
