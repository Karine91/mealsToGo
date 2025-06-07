import { createContext, PropsWithChildren, useState } from "react";

const CheckoutContext = createContext<{
  customerId: null | string;
  setCustomerId: (id: string) => void;
}>({
  customerId: null,
  setCustomerId: () => {},
});

export const CheckoutContextProvider = ({ children }: PropsWithChildren) => {
  const [customerId, setCustomerId] = useState<string | null>(null);

  return (
    <CheckoutContext.Provider value={{ customerId, setCustomerId }}>
      {children}
    </CheckoutContext.Provider>
  );
};
