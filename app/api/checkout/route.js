import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  const { type } = await req.json();

  let priceId;

  if (type === "dropin") {
    priceId = process.env.STRIPE_PRICE_DROPIN;
  } else if (type === "pack3") {
    priceId = process.env.STRIPE_PRICE_PACK3;
  } else if (type === "pack6") {
    priceId = process.env.STRIPE_PRICE_PACK6;
  } else {
    return new Response("Invalid product type", { status: 400 });
  }

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success`,
    cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/canceled`,
  });

  return Response.json({ url: session.url });
}