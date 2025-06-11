import React from "react";

import { SafeAreaContainerView } from "@/components/SafeAreaContainer";
import CheckoutComponent from "@/features/checkout/components/checkout-component/CheckoutComponent";

const Checkout = () => {
  return (
    <SafeAreaContainerView>
      <CheckoutComponent />
    </SafeAreaContainerView>
  );
};

export default Checkout;
