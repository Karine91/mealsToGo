import { stripe } from "@/services/checkout/stripe-server";

export async function POST(req: Request) {
  const { email } = await req.json();

  const customer = await stripe.customers.create({ email });
  return Response.json({
    customer: customer.id,
  });
}

export async function GET(req: Request) {
  const url = new URL(req.url);
  const id = url.searchParams.get("id");
  const customer = await stripe.customers.retrieve(id!);

  return Response.json({
    customer: customer.deleted ? null : customer.id,
  });
}
