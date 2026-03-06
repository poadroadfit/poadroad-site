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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/PoadRoad-2.png" alt="PoadRoad" className="h-8 w-auto" />
            <span className="font-semibold tracking-tight">PoadRoad Beach Workouts</span>
          </div>
          <div className="flex items-center gap-3">
            <a
              className="text-sm font-medium text-slate-700 hover:text-slate-900"
              href="#book"
            >
              Book
            </a>
            <a
              className="text-sm font-medium text-slate-700 hover:text-slate-900"
              href="#workout"
            >
              Workout
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
      <header className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 sm:pt-14 pb-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-start">
          <div>
            <p className="inline-flex items-center rounded-full bg-sky-100 px-3 py-1 text-sm font-semibold text-sky-900">
              Kaimana Beach • Honolulu • Small Group (10 max)
            </p>

            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight">
              Train like a Hawaii lifeguard.
              <span className="block text-sky-700 mt-2">Strong. Fast. Capable.</span>
            </h1>

            <p className="mt-4 text-lg text-slate-700 max-w-xl">
              Outdoor beach conditioning built for visitors and locals, with scalable coaching for every fitness level.
            </p>
            <p className="mt-2 text-base font-medium text-slate-800">
              Perfect for visitors who want to stay active while in Honolulu.
            </p>

            <div className="mt-5 flex flex-wrap gap-2.5 text-sm text-slate-700">
              <span className="rounded-full bg-white border border-slate-200 px-3 py-1 font-medium">
                Mon • Thu • Fri
              </span>
              <span className="rounded-full bg-white border border-slate-200 px-3 py-1 font-medium">
                7:00–8:00 AM
              </span>
              <span className="rounded-full bg-white border border-slate-200 px-3 py-1 font-medium">
                Kaimana Beach
              </span>
              <span className="rounded-full bg-white border border-slate-200 px-3 py-1 font-medium">
                No equipment needed
              </span>
            </div>

            <div id="book" className="mt-7 grid gap-3 sm:grid-cols-3">
              <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-sm font-semibold text-slate-900">Drop-In — $30</p>
                <p className="mt-1 text-xs text-slate-600">Best for trying one class</p>
                <button
                  onClick={() => handleCheckout("dropin")}
                  className="mt-3 w-full rounded-xl px-4 py-3 text-sm font-semibold bg-slate-900 text-white hover:bg-slate-800"
                >
                  Book Drop-In
                </button>
              </div>

              <div className="rounded-3xl border-2 border-sky-500 bg-sky-50 p-4 shadow-sm ring-2 ring-sky-200">
                <p className="inline-flex rounded-full bg-sky-600 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
                  Most Popular
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-900">Visitor Pack (3) — $81</p>
                <p className="mt-1 text-xs text-slate-700">Most popular for 1-week stays</p>
                <button
                  onClick={() => handleCheckout("pack3")}
                  className="mt-3 w-full rounded-xl px-4 py-3 text-sm font-semibold bg-sky-600 text-white hover:bg-sky-700"
                >
                  Book Visitor Pack
                </button>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-sm font-semibold text-slate-900">Extended Stay Pack (6) — $150</p>
                <p className="mt-1 text-xs text-slate-600">Best value for 1–2 week stays</p>
                <button
                  onClick={() => handleCheckout("pack6")}
                  className="mt-3 w-full rounded-xl px-4 py-3 text-sm font-semibold bg-slate-900 text-white hover:bg-slate-800"
                >
                  Book Extended Stay
                </button>
              </div>
            </div>

            <p className="mt-4 text-sm font-medium text-slate-700">
              Small group training led by a certified lifeguard and trainer.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm font-semibold">
              <a
                href="https://calendar.google.com/calendar/r/eventedit?text=PoadRoad+Beach+Workout&details=Kaimana+Beach+Workout&location=Kaimana+Beach"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-slate-700 hover:text-slate-900"
              >
                Add to Google Calendar →
              </a>
              <a
                href="mailto:poadroadfit@gmail.com"
                className="text-sm font-semibold text-sky-700 hover:text-sky-800"
              >
                Questions? Email us
              </a>
            </div>
          </div>

          {/* Hero images */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
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
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">This week at Kaimana</p>
                  <p className="mt-1 text-sm text-slate-700">Monday, Thursday, Friday • 7:00–8:00 AM</p>
                  <p className="mt-3 text-sm font-semibold text-slate-600">Spots Remaining</p>
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
                Travelers welcome. Arrive 10 minutes early for a quick intro.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* What to expect */}
      <section id="workout" className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <h2 className="text-2xl md:text-3xl font-bold">What you’ll do</h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            ["Warm-up + mobility", "Move better and feel good."],
            ["Sand-based training", "Build balance, stamina, and resilience."],
            ["Bodyweight strength circuits", "Functional, athletic movement patterns."],
            ["Conditioning intervals", "Short bursts to challenge your pace safely."],
            ["Cool down", "Stretch and recovery tips for tomorrow."],
          ].map(([title, desc]) => (
            <div key={title} className="rounded-3xl bg-white border border-slate-200 p-6 shadow-sm">
              <p className="font-semibold">{title}</p>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-12">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm grid md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-xl md:text-2xl font-bold">Know Before You Go</h2>
            <p className="mt-3 text-slate-700">
              Beginner-friendly coaching, oceanfront setting, and efficient one-hour sessions designed for travel schedules.
            </p>
            <p className="mt-4 text-sm text-slate-600">
              Bring water and athletic shoes. We handle the workout plan.
            </p>
          </div>
          <div className="rounded-2xl bg-slate-900 text-white p-6">
            <p className="text-sm font-semibold text-white/80">Meeting details</p>
            <p className="mt-2 font-semibold">Kaimana Beach, Honolulu</p>
            <p className="mt-2 text-sm text-white/90">
              Monday • Thursday • Friday
            </p>
            <p className="text-sm text-white/90">7:00–8:00 AM</p>
            <p className="mt-4 text-sm text-white/80">
              Questions before booking? Email <a className="underline" href="mailto:poadroadfit@gmail.com">poadroadfit@gmail.com</a>
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
