import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  PropsWithChildren,
} from "react";

import { AuthContext } from "../auth/auth.context";
import { RestaurantsItem } from "../restaurants/restaurants.service";

export const CartContext = createContext<CartContextValue>(
  {} as CartContextValue
);

type CartContextValue = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
};

export type CartItem = {
  item: string;
  price: number;
  restaurantId: string;
};

export const CartContextProvider = ({ children }: PropsWithChildren) => {
  const { user } = useContext(AuthContext);

  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCart((state) => [...state, item]);
  };

  return (
    <CartContext.Provider value={{ addToCart, cart }}>
      {children}
    </CartContext.Provider>
  );
};
