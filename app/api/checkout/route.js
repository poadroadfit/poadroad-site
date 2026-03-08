import Stripe from "stripe";

export const runtime = "nodejs";

const TYPE_TO_ENV_KEY = {
  dropin: "STRIPE_PRICE_DROPIN",
  pack3: "STRIPE_PRICE_PACK3",
  pack6: "STRIPE_PRICE_PACK6",
};

const REQUIRED_ENV_KEYS = [
  "STRIPE_SECRET_KEY",
  "NEXT_PUBLIC_SITE_URL",
  "STRIPE_PRICE_DROPIN",
  "STRIPE_PRICE_PACK3",
  "STRIPE_PRICE_PACK6",
];

function redactValue(value) {
  if (!value) return "missing";
  if (value.length <= 8) return `${value.slice(0, 2)}***`;
  return `${value.slice(0, 4)}...${value.slice(-4)}`;
}

function json(data, status = 200) {
  return Response.json(data, { status });
}

export async function POST(req) {
  let payload;
  try {
    payload = await req.json();
  } catch {
    return json({ error: "Invalid JSON body." }, 400);
  }

  const type = payload?.type;
  const attendanceDays = Array.isArray(payload?.attendanceDays)
    ? payload.attendanceDays
        .filter((day) => typeof day === "string")
        .map((day) => day.trim())
        .filter((day) => day.length > 0)
        .slice(0, 3)
    : [];
  const priceEnvKey = TYPE_TO_ENV_KEY[type];

  if (!priceEnvKey) {
    console.warn("[checkout] invalid type requested", {
      type: typeof type === "string" ? type : typeof type,
    });
    return json({ error: "Invalid checkout type." }, 400);
  }

  const missingEnv = REQUIRED_ENV_KEYS.filter((key) => !process.env[key]);
  if (missingEnv.length > 0) {
    console.error("[checkout] missing required env vars", { missingEnv });
    return json(
      {
        error: `Missing required server configuration: ${missingEnv.join(", ")}`,
      },
      400
    );
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL.replace(/\/+$/, "");
  const priceId = process.env[priceEnvKey];

  console.info("[checkout] request received", {
    type,
    attendanceDaysCount: attendanceDays.length,
    envPresent: {
      stripeSecretKey: Boolean(process.env.STRIPE_SECRET_KEY),
      siteUrl: Boolean(process.env.NEXT_PUBLIC_SITE_URL),
      priceDropin: Boolean(process.env.STRIPE_PRICE_DROPIN),
      pricePack3: Boolean(process.env.STRIPE_PRICE_PACK3),
      pricePack6: Boolean(process.env.STRIPE_PRICE_PACK6),
    },
    selectedPrice: redactValue(priceId),
  });

  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [{ price: priceId, quantity: 1 }],
      metadata:
        attendanceDays.length > 0
          ? { selected_days: attendanceDays.join(", ") }
          : undefined,
      success_url: `${siteUrl}/success`,
      cancel_url: `${siteUrl}/canceled`,
    });

    if (!session?.url) {
      console.error("[checkout] stripe session missing url", {
        type,
        sessionId: session?.id ? redactValue(session.id) : "missing",
      });
      return json({ error: "Unable to create checkout session." }, 500);
    }

    return json({ url: session.url });
  } catch (error) {
    console.error("[checkout] stripe create session failed", {
      type,
      name: error?.name,
      message: error?.message,
    });
    return json({ error: "Failed to start checkout. Please try again." }, 500);
  }
}
