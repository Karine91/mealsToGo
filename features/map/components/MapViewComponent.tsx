import React, { useContext } from "react";
import MapView from "react-native-maps";
import { ActivityIndicator } from "react-native-paper";
import styled from "styled-components/native";

import { CenteredContainer } from "@/components/CenteredContainer";
import { Text } from "@/components/Typography";
import MapMarker from "@/features/map/components/mapMarker/MapMarker";
import { LocationContext } from "@/services/location/location.context";
import { RestaurantsContext } from "@/services/restaurants/restaurants.context";

const Map = styled(MapView)(() => ({
  width: "100%",
  height: "100%",
}));

const MapViewComponent = () => {
  const { restaurants, isLoading } = useContext(RestaurantsContext);
  const { location, error } = useContext(LocationContext);

  const getMapPosition = () => {
    if (location) {
      const { viewport } = location;
      const northeastLat = viewport.northeast.lat;
      const southwestLat = viewport.southwest.lat;

      return northeastLat - southwestLat;
    }
    return null;
  };

  if (error) {
    return (
      <CenteredContainer>
        <Text
          variant="heading"
          headingSize="h5"
          style={(theme) => ({
            color: theme.colors.text.secondary,
          })}
        >
          {error}
        </Text>
      </CenteredContainer>
    );
  }

  if (isLoading) {
    return (
      <CenteredContainer>
        <ActivityIndicator animating size="large" />
        <Text
          variant="heading"
          headingSize="h5"
          style={(theme) => ({
            color: theme.colors.text.secondary,
          })}
        >
          Loading...
        </Text>
      </CenteredContainer>
    );
  }

  const latDelta = getMapPosition();

  return (
    location &&
    latDelta && (
      <Map
        region={{
          latitude: location.lat,
          longitude: location.lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.01,
        }}
      >
        {restaurants.map((restaurant) => {
          return <MapMarker key={restaurant.name} restaurant={restaurant} />;
        })}
      </Map>
    )
  );
};

export default MapViewComponent;
