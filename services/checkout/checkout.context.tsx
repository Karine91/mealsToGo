import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  createContext,
  PropsWithChildren,
  useState,
  useContext,
  useEffect,
} from "react";

import { AuthContext } from "../auth/auth.context";

import { createCustomerRequest } from "./checkout.service";

export const CheckoutContext = createContext<{
  getCustomerId: () => Promise<string>;
}>({
  getCustomerId: () => Promise.resolve(""),
});

export const CheckoutContextProvider = ({ children }: PropsWithChildren) => {
  const [customerId, setCustomerId] = useState<string | null>(null);
  const { user } = useContext(AuthContext);
  const STORAGE_KEY = `@customerId-${user!.uid}`;

  const createCustomer = async () => {
    try {
      const { customer } = await createCustomerRequest({ email: user!.email! });
      setCustomerId(customer);
      AsyncStorage.setItem(STORAGE_KEY, customer);
      return customer;
    } catch (error) {
      console.log(error);
    }
  };

  const getStoredCustomerId = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
      return jsonValue;
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getStoredCustomerId().then((id) => id && setCustomerId(id));
  }, []);

  const getCustomerId = async () => {
    if (!customerId) {
      const id = await createCustomer();
      return id;
    }
    return customerId;
  };

  return (
    <CheckoutContext.Provider value={{ getCustomerId }}>
      {children}
    </CheckoutContext.Provider>
  );
};
