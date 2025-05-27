import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

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
  const [favorites, setFavorites] = useState<RestaurantsItem[]>([]);
  const { user } = useContext(AuthContext);

  const STORAGE_KEY = `@favorites-${user!.uid}`;

  const handleSetFavorites = (newFavorites: RestaurantsItem[]) => {
    setFavorites(newFavorites);
    try {
      const jsonValue = JSON.stringify(newFavorites);
      AsyncStorage.setItem(STORAGE_KEY, jsonValue);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getFavorites().then((data) => data && handleSetFavorites(data));
  }, []);

  const getFavorites = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
      return jsonValue != null
        ? (JSON.parse(jsonValue) as RestaurantsItem[])
        : null;
    } catch (e) {
      console.log(e);
    }
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
