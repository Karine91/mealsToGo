import { useRouter } from "expo-router";
import React from "react";
import { Marker } from "react-native-maps";

import RestaurantCompactInfo from "@/features/restaurants/components/restaurant-compact-view/RestaurantCompactInfo";
import { RestaurantsItem } from "@/services/restaurants/restaurants.service";

import { MapCallout } from "./styles";

type MapMarkerProps = {
  restaurant: RestaurantsItem;
};

const MapMarker = ({ restaurant }: MapMarkerProps) => {
  const { name, geometry } = restaurant;
  const router = useRouter();

  return (
    <Marker
      key={name}
      title={name}
      coordinate={{
        latitude: geometry.location.lat,
        longitude: geometry.location.lng,
      }}
      calloutOffset={{ x: 0, y: -50 }}
    >
      <MapCallout
        onPress={() =>
          router.navigate({
            pathname: "/private/(tabs)/(restaurants)/[id]",
            params: { id: restaurant.placeId },
          })
        }
      >
        <RestaurantCompactInfo isMap restaurant={restaurant} />
      </MapCallout>
    </Marker>
  );
};

export default MapMarker;
