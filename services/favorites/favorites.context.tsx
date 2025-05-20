import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {
  createContext,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";

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

  useEffect(() => {
    getFavorites().then((data) => data && setFavorites(data));
  }, []);

  useEffect(() => {
    saveFavorites(favorites);
  }, [favorites]);

  const saveFavorites = async (value: RestaurantsItem[]) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@favorites", jsonValue);
    } catch (e) {
      console.log(e);
    }
  };

  const getFavorites = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@favorites");
      return jsonValue != null
        ? (JSON.parse(jsonValue) as RestaurantsItem[])
        : null;
    } catch (e) {
      console.log(e);
    }
  };

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
