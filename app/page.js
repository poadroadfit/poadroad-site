"use client";

import { useMemo, useState } from "react";

export default function Page() {
  const handleCheckout = async (type) => {
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ type }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        alert(data?.error || "Unable to start checkout. Please try again.");
        return;
      }

      if (!data?.url) {
        alert("Checkout URL was not returned. Please try again.");
        return;
      }

      window.location.href = data.url;
    } catch {
      alert("Network error while starting checkout. Please try again.");
    }
  };

  const maxSpots = 10;
  const [spotsTaken, setSpotsTaken] = useState(0);

  const spotsRemaining = useMemo(
    () => Math.max(maxSpots - spotsTaken, 0),
    [maxSpots, spotsTaken]
  );

  const classFull = spotsRemaining === 0;

  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-white text-slate-900">
      {/* Top bar */}
      <div className="sticky top-0 z-20 backdrop-blur bg-white/70 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/PoadRoad-2.png" alt="PoadRoad" className="h-8 w-auto" />
            <span className="font-semibold tracking-tight">PoadRoad Beach Workouts</span>
          </div>
          <div className="flex items-center gap-3">
            <a
              className="text-sm font-medium text-slate-700 hover:text-slate-900"
              href="#pricing"
            >
              Pricing
            </a>
            <a
              className="text-sm font-medium text-slate-700 hover:text-slate-900"
              href="#coaching"
            >
              Coaching
            </a>
            <a
              className="text-sm font-medium text-slate-700 hover:text-slate-900"
              href="mailto:poadroadfit@gmail.com"
            >
              Email
            </a>
          </div>
        </div>
      </div>

      {/* Hero */}
      <header className="max-w-6xl mx-auto px-6 pt-14 pb-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="inline-flex items-center rounded-full bg-sky-100 px-3 py-1 text-sm font-semibold text-sky-900">
              Kaimana Beach • Honolulu • Small Group (10 max)
            </p>

            <h1 className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight">
              Train like a Hawaii lifeguard.
              <span className="block text-sky-700 mt-2">Strong. Fast. Capable.</span>
            </h1>

            <p className="mt-5 text-lg md:text-xl text-slate-700 max-w-xl">
              Lifeguard-style beach conditioning designed for all levels.
              Expect fun and challenging workouts featuring intervals, strength circuits, core, and mobility training.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-600">
              <span className="rounded-full bg-white border border-slate-200 px-3 py-1">
                Mon • Thu • Fri
              </span>
              <span className="rounded-full bg-white border border-slate-200 px-3 py-1">
                7:00–8:00 AM
              </span>
              <span className="rounded-full bg-white border border-slate-200 px-3 py-1">
                No equipment needed
              </span>
              <span className="rounded-full bg-white border border-slate-200 px-3 py-1">
                Visitors welcome
              </span>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
  <button
    onClick={() => handleCheckout("dropin")}
    className="rounded-2xl px-6 py-4 text-base md:text-lg font-semibold bg-sky-600 text-white hover:bg-sky-700"
  >
    Drop-In — $30
  </button>

  <button
    onClick={() => handleCheckout("pack3")}
    className="rounded-2xl px-6 py-4 text-base md:text-lg font-semibold border border-sky-600 text-sky-700 hover:bg-sky-50"
  >
    Visitor Pack (3) — $81
  </button>

  <button
    onClick={() => handleCheckout("pack6")}
    className="rounded-2xl px-6 py-4 text-base md:text-lg font-semibold border border-sky-600 text-sky-700 hover:bg-sky-50"
  >
    Extended Stay Pack (6) — $150
  </button>

              <a
                href="mailto:poadroadfit@gmail.com"
                className="rounded-2xl px-6 py-4 text-base md:text-lg font-semibold border border-sky-600 text-sky-700 hover:bg-sky-50"
              >
                Email Us
              </a>
            </div>

              <a
                href="https://calendar.google.com/calendar/r/eventedit?text=PoadRoad+Beach+Workout&details=Kaimana+Beach+Workout&location=Kaimana+Beach"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-slate-700 hover:text-slate-900"
              >
                Add to Google Calendar →
              </a>
            </div>

            <p className="mt-4 text-sm text-slate-500">
              Led by a Professional Lifeguard and Certified Personal Trainer • Kaimana Beach
            </p>
          </div>

          {/* Hero images */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/CE6CA954-FBCB-401F-9B86-0C7336744F72.jpg"
              alt="Lifeguard workout"
              className="rounded-3xl shadow-lg object-cover w-full h-64 md:h-80"
            />
            <img
              src="/0D8D433E-DC1E-495F-B66A-9E505F0D30BB.jpg"
              alt="Beach training"
              className="rounded-3xl shadow-lg object-cover w-full h-64 md:h-80 mt-10"
            />
            <div className="col-span-2 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <p className="text-sm font-semibold text-slate-600">Spots Remaining</p>
                  <p className="text-3xl font-extrabold">{spotsRemaining} / {maxSpots}</p>
                </div>

                {!classFull ? (
                  <button
                    onClick={() => setSpotsTaken((s) => Math.min(s + 1, maxSpots))}
                    className="rounded-2xl px-5 py-3 font-semibold bg-slate-900 text-white hover:bg-slate-800 transition"
                  >
                    Reserve Spot
                  </button>
                ) : (
                  <a
                    href="mailto:poadroadfit@gmail.com?subject=Waitlist Request - PoadRoad Beach Workout"
                    className="rounded-2xl px-5 py-3 font-semibold border-2 border-slate-900 text-slate-900 hover:bg-slate-50 transition"
                  >
                    Class Full — Join Waitlist
                  </a>
                )}
              </div>
              <p className="mt-3 text-sm text-slate-500">
                (This counter is temporary. In Step 5 we’ll make it real + automatic.)
              </p>
            </div>
          </div>
      </header>

      {/* What to expect */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-2xl md:text-3xl font-bold">What you’ll do</h2>
        <div className="mt-6 grid md:grid-cols-4 gap-4">
          {[
            ["Warm-up + mobility", "Move better and feel good."],
            ["Sand-based training", "Conditioning like no other."],
            ["Bodyweight strength circuits", "Functional, athletic movement patterns."],
            ["Cool down", "Stretch + recovery tips."],
          ].map(([title, desc]) => (
            <div key={title} className="rounded-3xl bg-white border border-slate-200 p-6 shadow-sm">
              <p className="font-semibold">{title}</p>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Coaching upsell */}
      <section id="coaching" className="max-w-6xl mx-auto px-6 py-12">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Want to keep going?</h2>
            <p className="mt-3 text-slate-700">
              Upgrade to fully customized online coaching: Stay accountable and take your health and performance to the next level.
            </p>

            <ul className="mt-5 space-y-2 text-slate-700">
              <li>• Personalized programming (strength + conditioning)</li>
              <li>• Nutrition targets + adjustments</li>
              <li>• Weekly check-ins</li>
              <li>• Trainerize app delivery</li>
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="mailto:poadroadfit@gmail.com?subject=Online Coaching - PoadRoad"
                className="rounded-2xl px-6 py-4 font-semibold bg-slate-900 text-white hover:bg-slate-800 transition"
              >
                Apply for Online Coaching
              </a>
              <p className="text-sm text-slate-500 self-center">
                (In Step 5 this becomes an automated recurring membership.)
              </p>
            </div>
          </div>

          <div className="rounded-3xl bg-slate-900 text-white p-7">
            <p className="text-sm font-semibold text-white/80">Local search keywords we’ll rank for</p>
            <p className="mt-3 font-semibold">
              “Honolulu beach workout” • “Kaimana beach workout” • “Waikiki fitness class” • “Outdoor bootcamp Oahu”
            </p>
            <p className="mt-4 text-white/80 text-sm">
              Next we’ll add SEO metadata + Google Business Profile signals (Step 4/5).
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-slate-500 text-sm">
        © {new Date().getFullYear()} PoadRoad Beach Workouts • Kaimana Beach • Honolulu
      </footer>
    </main>
  );
}
