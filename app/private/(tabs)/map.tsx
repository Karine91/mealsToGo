import React from "react";
import { View } from "react-native";

import { SafeAreaContainerView } from "@/components/SafeAreaContainer";
import MapViewComponent from "@/features/map/components/MapViewComponent";
import Search from "@/features/map/components/Search";

const Maps = () => {
  return (
    <SafeAreaContainerView>
      <View style={{ flex: 1 }}>
        <Search />
        <MapViewComponent />
      </View>
    </SafeAreaContainerView>
  );
};

export default Maps;
