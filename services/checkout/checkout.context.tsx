import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

import { useStorageValue } from "@/hooks/useStorageValue";

import { AuthContext } from "../auth/auth.context";

import { createCustomerRequest, getCustomerRequest } from "./checkout.service";

export const CheckoutContext = createContext<{
  customerId: string | null;
}>({
  customerId: null,
});

export const CheckoutContextProvider = ({ children }: PropsWithChildren) => {
  const { user } = useContext(AuthContext);
  const [customerId, setCustomerId, isLoaded] = useStorageValue<string | null>(
    `@customerId-${user!.uid}`,
    null
  );
  const [isLoading, setLoading] = useState(true);

  const createCustomer = async () => {
    try {
      const { customer } = await createCustomerRequest({
        email: user!.email!,
      });
      setCustomerId(customer);
      return customer;
    } catch (error) {
      console.log(error);
    }
  };

  const retrieveCustomer = async (customerId: string) => {
    try {
      const { customer } = await getCustomerRequest(customerId);
      console.log("retrieved: ", customer, "requested:", customerId);
      return customer;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const getCustomer = async () => {
    console.log({ customerId, isLoaded });
    if (customerId) {
      const id = await retrieveCustomer(customerId);
      if (!id) {
        await createCustomer();
      }
      setLoading(false);
    } else if (isLoaded) {
      await createCustomer();
      setLoading(false);
    }
  };

  useEffect(() => {
    getCustomer();
  }, [isLoaded]);

  return (
    <CheckoutContext.Provider
      value={{ customerId: isLoading ? null : customerId }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};
