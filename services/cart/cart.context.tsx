import React, { createContext, useContext, PropsWithChildren } from "react";

import { useStorageValue } from "@/hooks/useStorageValue";

import { AuthContext } from "../auth/auth.context";
import { RestaurantsItem } from "../restaurants/restaurants.service";

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

  function getTotalPrice(cart: CartItem[]) {
    return cart.reduce((acc, cur) => {
      return acc + cur.price;
    }, 0);
  }

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
      value={{
        addToCart,
        cart,
        restaurant,
        totalPrice: getTotalPrice(cart),
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
