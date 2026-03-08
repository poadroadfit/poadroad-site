"use client";

import { useMemo, useState } from "react";

const CLASS_DAYS = ["Monday", "Thursday", "Friday"];

export default function Page() {
  const [selectedDays, setSelectedDays] = useState([]);

  const toggleDay = (day) => {
    setSelectedDays((current) =>
      current.includes(day)
        ? current.filter((item) => item !== day)
        : [...current, day]
    );
  };

  const handleCheckout = async (type) => {
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ type, attendanceDays: selectedDays }),
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
              href="mailto:poadroadfit@gmail.com"
            >
              Email
            </a>
          </div>
        </div>
      </div>

      <div className="border-b border-slate-200 bg-white/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-3 pb-2">
          <div className="h-12 sm:h-14 w-full rounded-2xl border border-slate-200/70 bg-sky-50/60 overflow-hidden">
            <img
              src="/PoadRoad-2.png"
              alt="PoadRoad banner"
              className="h-full w-full object-cover opacity-25"
            />
          </div>
        </div>
      </div>

      {/* Hero */}
      <header className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 sm:pt-14 pb-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-start">
          <div>
            <p className="inline-flex items-center rounded-full bg-sky-100 px-3 py-1 text-sm font-semibold text-sky-900">
              Kaimana Beach • Honolulu • Small Group
            </p>

            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight">
              Train like a Hawaii lifeguard.
              <span className="block text-sky-700 mt-2">Strong. Fast. Capable.</span>
            </h1>

            <p className="mt-4 text-lg text-slate-700 max-w-xl">
              Outdoor beach workouts for both visitors and locals. Designed to be fun, challenging, and open to all fitness levels.
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

            <div id="book" className="mt-7 grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3">
              <div className="rounded-3xl border border-slate-200 bg-white p-3.5 sm:p-4 shadow-sm">
                <p className="text-sm font-semibold text-slate-900">Drop-In — $30</p>
                <p className="mt-1 text-xs text-slate-600">Best for trying one class</p>
                <button
                  onClick={() => handleCheckout("dropin")}
                  className="mt-2.5 w-full rounded-xl px-3 py-2.5 text-sm font-semibold bg-slate-900 text-white hover:bg-slate-800"
                >
                  Book Drop-In
                </button>
              </div>

              <div className="rounded-3xl border-2 border-sky-500 bg-sky-50 p-3.5 sm:p-4 shadow-sm ring-2 ring-sky-200">
                <p className="inline-flex rounded-full bg-sky-600 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
                  Most Popular
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-900">Visitor Pack (3) — $81</p>
                <p className="mt-1 text-xs text-slate-700">Most popular for 1-week stays</p>
                <button
                  onClick={() => handleCheckout("pack3")}
                  className="mt-2.5 w-full rounded-xl px-3 py-2.5 text-sm font-semibold bg-sky-600 text-white hover:bg-sky-700"
                >
                  Book Visitor Pack
                </button>
              </div>

              <div className="col-span-2 lg:col-span-1 rounded-3xl border border-slate-200 bg-white p-3.5 sm:p-4 shadow-sm">
                <p className="text-sm font-semibold text-slate-900">Extended Stay Pack (6) — $150</p>
                <p className="mt-1 text-xs text-slate-600">Best value for 1–2 week stays</p>
                <button
                  onClick={() => handleCheckout("pack6")}
                  className="mt-2.5 w-full rounded-xl px-3 py-2.5 text-sm font-semibold bg-slate-900 text-white hover:bg-slate-800"
                >
                  Book Extended Stay
                </button>
              </div>
            </div>

            <div className="mt-5 rounded-3xl border border-slate-200 bg-white p-4 sm:p-5">
              <p className="text-sm font-semibold text-slate-900">Pick the days you plan to attend</p>
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {CLASS_DAYS.map((day) => {
                  const active = selectedDays.includes(day);
                  return (
                    <label
                      key={day}
                      className={`flex items-center gap-2.5 rounded-xl border px-3 py-2.5 text-sm font-medium cursor-pointer transition ${
                        active
                          ? "border-sky-500 bg-sky-50 text-sky-900"
                          : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={active}
                        onChange={() => toggleDay(day)}
                        className="h-4 w-4 accent-sky-600"
                      />
                      {day}
                    </label>
                  );
                })}
              </div>
              <a
                href="https://calendar.google.com/calendar/r/eventedit?text=PoadRoad+Beach+Workout&details=Kaimana+Beach+Workout&location=Kaimana+Beach"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex text-sm font-semibold text-slate-700 hover:text-slate-900"
              >
                Add to Google Calendar →
              </a>
            </div>
          </div>

          {/* Hero images */}
          <div>
            <p className="mb-3 rounded-2xl border border-sky-200 bg-sky-50 px-4 py-3 text-center text-sm sm:text-base font-bold tracking-wide text-sky-900">
              Led by Professional Lifeguard and Certified Personal Trainer.
            </p>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <img
              src="/CE6CA954-FBCB-401F-9B86-0C7336744F72.jpg"
              alt="Lifeguard workout"
              className="rounded-3xl shadow-lg object-cover w-full h-56 sm:h-64 md:h-80"
            />
            <img
              src="/0D8D433E-DC1E-495F-B66A-9E505F0D30BB.jpg"
              alt="Beach training"
              className="rounded-3xl shadow-lg object-cover w-full h-56 sm:h-64 md:h-80 -mt-2 sm:mt-6"
            />
            <div className="col-span-2 rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm">
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
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-12">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm grid md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-xl md:text-2xl font-bold">Know Before You Go</h2>
            <p className="mt-4 text-base sm:text-lg text-slate-700">
              Bring water and a towel, athletic shoes optional. We’ll handle the workout.
            </p>
          </div>
          <div className="rounded-2xl bg-slate-900 text-white p-6">
            <p className="text-sm font-semibold text-white/80">Meeting details</p>
            <p className="mt-2 font-semibold">Kaimana Beach, Honolulu</p>
            <p className="mt-2 text-sm text-white/90">
              Monday • Thursday • Friday
            </p>
            <p className="text-sm text-white/90">7:00–8:00 AM</p>
            <p className="mt-3 text-sm text-white/80">
              Questions? Email: <a className="underline" href="mailto:poadroadfit@gmail.com">poadroadfit@gmail.com</a>
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
