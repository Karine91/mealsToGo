import React, { createContext, PropsWithChildren, useContext } from "react";

import { useStorageValue } from "@/hooks/useStorageValue";

import { AuthContext } from "../auth/auth.context";
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
  const { user } = useContext(AuthContext);
  const [favorites, setFavorites] = useStorageValue<RestaurantsItem[]>(
    `@favorites-${user!.uid}`,
    []
  );

  const handleSetFavorites = (newFavorites: RestaurantsItem[]) => {
    setFavorites(newFavorites);
  };

  const addToFavorites = (restaurant: RestaurantsItem) => {
    handleSetFavorites([...favorites, restaurant]);
  };

  const removeFromFavorites = (id: string) => {
    handleSetFavorites(favorites.filter((item) => item.placeId !== id));
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
