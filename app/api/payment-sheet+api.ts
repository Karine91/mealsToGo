import { stripe } from "@/services/checkout/stripe-server";

export async function POST(req: Request) {
  const { amount, customerId } = await req.json();

  const ephemeralKey = await stripe.ephemeralKeys.create(
    { customer: customerId },
    { apiVersion: "2025-05-28.basil" }
  );

  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount ? Math.floor(amount * 100) : 1000,
    currency: "usd",
    customer: customerId,
  });

  return Response.json({
    paymentIntent: paymentIntent.client_secret,
    ephemeralKey: ephemeralKey.secret,
    customer: customerId,
    publishableKey: process.env.EXPO_PUBLIC_STRIPE_PUBLISHABLE_KEY,
  });
}
