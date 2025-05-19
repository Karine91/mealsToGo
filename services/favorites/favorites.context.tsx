import React, { createContext, PropsWithChildren, useState } from "react";

import { RestaurantsItem } from "../restaurants/restaurants.service";

export type FavoritesContextValue = {
  favorites: RestaurantsItem[];
  addToFavorites: (id: RestaurantsItem) => void;
  removeFromFavorites: (id: string) => void;
};

export const FavoritesContext = createContext<FavoritesContextValue>({
  favorites: [],
  addToFavorites: () => {},
  removeFromFavorites: () => {},
});

export const FavoritesContextProvider = ({ children }: PropsWithChildren) => {
  const [favorites, setFavorites] = useState<RestaurantsItem[]>([]);

  const addToFavorites = (restaurant: RestaurantsItem) => {
    setFavorites((state) => [...state, restaurant]);
  };

  const removeFromFavorites = (id: string) => {
    setFavorites((state) => state.filter((item) => item.placeId !== id));
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
