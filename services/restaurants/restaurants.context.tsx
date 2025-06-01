import React, {
  useState,
  createContext,
  useEffect,
  PropsWithChildren,
  useContext,
} from "react";
import { Toast } from "toastify-react-native";

import { LocationContext } from "../location/location.context";
import type { Location } from "../location/location.service";

import {
  restaurantsRequest,
  restaurantsTransform,
  type RestaurantsItem,
} from "./restaurants.service";

export const RestaurantsContext = createContext({
  restaurants: [] as RestaurantsItem[],
  isLoading: false,
  error: null,
});

export const RestaurantsContextProvider = ({ children }: PropsWithChildren) => {
  const [restaurants, setRestaurants] = useState<RestaurantsItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useContext(LocationContext);

  function retrieveRestaurants(location: Location) {
    const locationStr = `${location.lat},${location.lng}` as const;
    setIsLoading(true);
    setTimeout(() => {
      restaurantsRequest(locationStr)
        .then(restaurantsTransform)
        .then(setRestaurants)
        .catch((error) => {
          setError(error.toString());
        })
        .finally(() => setIsLoading(false));
    }, 2000);
  }

  useEffect(() => {
    if (location) {
      retrieveRestaurants(location);
    } else {
      setRestaurants([]);
    }
  }, [location]);

  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        isLoading,
        error,
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
