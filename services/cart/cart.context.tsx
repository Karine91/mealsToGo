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

export const CartContext = createContext<CartContextValue>({
  restaurant: null,
  cart: [],
  addToCart: () => {},
  totalPrice: 0,
});

type CartContextValue = {
  cart: CartItem[];
  addToCart: (item: CartItem, rst: RestaurantsItem) => void;
  restaurant: RestaurantsItem | null;
  totalPrice: number;
};

export type CartItem = {
  item: string;
  price: number;
};

export const CartContextProvider = ({ children }: PropsWithChildren) => {
  const { user } = useContext(AuthContext);
  const [restaurant, setRestaurant] = useState<RestaurantsItem | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [totalPrice, setTotalPrice] = useState(() => getTotalPrice(cart));

  function getTotalPrice(cart: CartItem[]) {
    return cart.reduce((acc, cur) => {
      return acc + cur.price;
    }, 0);
  }

  useEffect(() => {
    const total = getTotalPrice(cart);
    setTotalPrice(total);
  }, [cart]);

  const addToCart = (item: CartItem, rst: RestaurantsItem) => {
    if (rst.placeId !== restaurant?.placeId) {
      setCart([item]);
      setRestaurant(rst);
    } else {
      setCart((state) => [...state, item]);
    }
  };

  return (
    <CartContext.Provider value={{ addToCart, cart, restaurant, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};
