import { useStripe } from "@stripe/stripe-react-native";
import * as Linking from "expo-linking";
import { useFocusEffect } from "expo-router";
import React, { useState, useContext, useCallback } from "react";
import { Alert, ScrollView } from "react-native";
import { List } from "react-native-paper";

import { Text } from "@/components/Typography";
import RestaurantInfoCard from "@/features/restaurants/components/restaurant-info-card/RestaurantInfoCard";
import { CartContext } from "@/services/cart/cart.context";
import { CheckoutContext } from "@/services/checkout/checkout.context";
import { fetchPaymentSheetParams } from "@/services/checkout/checkout.service";

import {
  NoCartContainer,
  CartIcon,
  CheckoutContainer,
  OrderDetailsContainer,
  ClearButton,
  PayButton,
  ButtonsGroup,
} from "./styles";

const CheckoutComponent = () => {
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [isLoaded, setIsLoaded] = useState(false);
  const { cart, restaurant, totalPrice, clearCart } = useContext(CartContext);

  const { customerId } = useContext(CheckoutContext);

  const initializePaymentSheet = async () => {
    if (!customerId) return;

    const { paymentIntent, ephemeralKey } = await fetchPaymentSheetParams({
      customerId,
      amount: totalPrice,
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
      returnURL: Linking.createURL("stripe-redirect"),
    });
    if (!error) {
      setIsLoaded(true);
    }
  };

  const openPaymentSheet = async () => {
    try {
      const { error } = await presentPaymentSheet();

      if (error) {
        if (error.code === "Canceled") return;
        Alert.alert(`Error code: ${error.code}`, error.message);
      } else {
        clearCart();
        Alert.alert("Success", "Your order is confirmed!");
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Something went wrong.");
    }
  };

  useFocusEffect(
    useCallback(() => {
      if (cart.length && customerId) {
        initializePaymentSheet();
      }
    }, [customerId, cart])
  );

  if (!cart.length || !restaurant) {
    return (
      <NoCartContainer>
        <CartIcon icon="cart-off" />
        <Text variant="label">Your cart is empty</Text>
      </NoCartContainer>
    );
  }

  return (
    <CheckoutContainer>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <OrderDetailsContainer>
          <Text variant="heading" headingSize="h5">
            Your order
          </Text>
          <List.Section>
            {cart.map(({ item, price }, ind) => (
              <List.Item key={ind} title={`${item} - ${price}$`}></List.Item>
            ))}
          </List.Section>
          <Text variant="heading" headingSize="h5">
            Total: {totalPrice}$
          </Text>
        </OrderDetailsContainer>
      </ScrollView>
      <ButtonsGroup>
        <PayButton
          mode="contained"
          icon="cash-multiple"
          disabled={!isLoaded}
          onPress={openPaymentSheet}
        >
          Pay {totalPrice}$
        </PayButton>

        <ClearButton icon="cart-off" mode="contained" onPress={clearCart}>
          Clear Cart
        </ClearButton>
      </ButtonsGroup>
    </CheckoutContainer>
  );
};

export default CheckoutComponent;
