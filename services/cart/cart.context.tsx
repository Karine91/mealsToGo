import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  PropsWithChildren,
} from "react";

import { AuthContext } from "../auth/auth.context";
import { RestaurantsItem } from "../restaurants/restaurants.service";
import { useStorageValue } from "@/hooks/useStorageValue";

export const CartContext = createContext<CartContextValue>({
  restaurant: null,
  cart: [],
  addToCart: () => {},
  clearCart: () => {},
  totalPrice: 0,
});

type CartContextValue = {
  cart: CartItem[];
  addToCart: (item: CartItem, rst: RestaurantsItem) => void;
  clearCart: () => void;
  restaurant: RestaurantsItem | null;
  totalPrice: number;
};

export type CartItem = {
  item: string;
  price: number;
};

export const CartContextProvider = ({ children }: PropsWithChildren) => {
  const { user } = useContext(AuthContext);
  const [restaurant, setRestaurant] = useStorageValue<RestaurantsItem | null>(
    `@restaurant-${user!.uid}`,
    null
  );
  const [cart, setCart] = useStorageValue<CartItem[]>(`@cart-${user!.uid}`, []);
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

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ addToCart, cart, restaurant, totalPrice, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
