import React from "react";
import { View } from "react-native";
import MapView from "react-native-maps";
import styled from "styled-components/native";

import { SafeAreaContainerView } from "@/components/SafeAreaContainer";
import Search from "@/features/map/components/Search";

const Map = styled(MapView)(() => ({
  width: "100%",
  height: "100%",
}));

const Maps = () => {
  return (
    <SafeAreaContainerView>
      <View>
        <Search />
        <Map />
      </View>
    </SafeAreaContainerView>
  );
};

export default Maps;
