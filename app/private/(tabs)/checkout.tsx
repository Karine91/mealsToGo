import { useStripe } from "@stripe/stripe-react-native";
import * as Linking from "expo-linking";
import React, { useState, useEffect, useContext } from "react";
import { View, Text, Alert } from "react-native";
import { Button } from "react-native-paper";

import { SafeAreaContainerView } from "@/components/SafeAreaContainer";
import { AuthContext } from "@/services/auth/auth.context";
import { fetchPaymentSheetParams } from "@/services/checkout/checkout.service";

const Checkout = () => {
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [isLoading, setIsLoading] = useState(false);
  const { user, customerId } = useContext(AuthContext);

  const initializePaymentSheet = async () => {
    const { paymentIntent, ephemeralKey } = await fetchPaymentSheetParams({
      customerId,
      amount: 10,
    });

    // Use Mock payment data: https://docs.stripe.com/payments/accept-a-payment?platform=react-native&ui=payment-sheet#react-native-test
    const { error } = await initPaymentSheet({
      merchantDisplayName: "MealsToGo",

      customerId,
      customerEphemeralKeySecret: ephemeralKey,
      paymentIntentClientSecret: paymentIntent,
      // Set `allowsDelayedPaymentMethods` to true if your business can handle payment
      //methods that complete payment after a delay, like SEPA Debit and Sofort.
      allowsDelayedPaymentMethods: true,
      defaultBillingDetails: {
        name: "Jane Doe",
        email: user!.email!,
        phone: "888-888-8888",
      },
      returnURL: Linking.createURL("stripe-redirect"),
    });
    if (!error) {
      setIsLoading(true);
    }
  };

  const openPaymentSheet = async () => {
    const { error } = await presentPaymentSheet();

    if (error) {
      // Alert.alert(`Error code: ${error.code}`, error.message);
    } else {
      Alert.alert("Success", "Your order is confirmed!");
    }
  };

  useEffect(() => {
    initializePaymentSheet();
  }, []);

  return (
    <SafeAreaContainerView>
      <Text>Checkout</Text>
      <Button mode="contained" onPress={openPaymentSheet}>
        Pay 10$
      </Button>
    </SafeAreaContainerView>
  );
};

export default Checkout;
