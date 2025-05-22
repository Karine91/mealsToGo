import React, { useContext } from "react";
import { View } from "react-native";
import MapView from "react-native-maps";
import styled from "styled-components/native";

import { SafeAreaContainerView } from "@/components/SafeAreaContainer";
import MapMarker from "@/features/map/components/mapMarker/MapMarker";
import Search from "@/features/map/components/Search";
import { LocationContext } from "@/services/location/location.context";
import { RestaurantsContext } from "@/services/restaurants/restaurants.context";

const Map = styled(MapView)(() => ({
  width: "100%",
  height: "100%",
}));

const Maps = () => {
  const { location } = useContext(LocationContext);
  const { restaurants } = useContext(RestaurantsContext);

  const getMapPosition = () => {
    const { viewport } = location!;
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;

    return northeastLat - southwestLat;
  };

  if (!location) return null;

  const latDelta = getMapPosition();

  return (
    <SafeAreaContainerView>
      <View>
        <Search />
        <Map
          region={{
            latitude: location.lat,
            longitude: location.lng,
            latitudeDelta: latDelta,
            longitudeDelta: 0.02,
          }}
        >
          {restaurants.map((restaurant) => {
            return <MapMarker key={restaurant.name} restaurant={restaurant} />;
          })}
        </Map>
      </View>
    </SafeAreaContainerView>
  );
};

export default Maps;
