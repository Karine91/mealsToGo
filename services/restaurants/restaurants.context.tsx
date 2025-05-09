import React, {
  useState,
  createContext,
  useEffect,
  PropsWithChildren,
} from "react";

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

  function retrieveRestaurants() {
    setIsLoading(true);
    setTimeout(() => {
      restaurantsRequest()
        .then(restaurantsTransform)
        .then(setRestaurants)
        .catch(setError)
        .finally(() => setIsLoading(false));
    }, 2000);
  }

  useEffect(() => {
    retrieveRestaurants();
  }, []);

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
