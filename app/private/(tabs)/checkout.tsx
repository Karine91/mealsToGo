import React from "react";

import { SafeAreaContainerView } from "@/components/SafeAreaContainer";
import CheckoutComponent from "@/features/checkout/components/CheckoutComponent";
import { CheckoutContextProvider } from "@/services/checkout/checkout.context";

const Checkout = () => {
  return (
    <SafeAreaContainerView>
      <CheckoutContextProvider>
        <CheckoutComponent />
      </CheckoutContextProvider>
    </SafeAreaContainerView>
  );
};

export default Checkout;
