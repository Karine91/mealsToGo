export async function fetchPaymentSheetParams({
  customerId,
  amount,
}: {
  customerId: string;
  amount: number;
}): Promise<{
  paymentIntent: string;
  ephemeralKey: string;
  customer: string;
}> {
  return fetch("/api/payment-sheet", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ amount, customerId }),
  }).then((res) => res.json());
}
