import Link from "next/link";

export default function SuccessPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-sky-50 to-white px-6">
      <div className="max-w-lg w-full rounded-3xl border border-slate-200 bg-white p-8 shadow-sm text-center">
        <h1 className="text-3xl font-extrabold">You’re booked ✅</h1>
        <p className="mt-3 text-slate-700">
          See you at <b>Kaimana Beach</b>. Classes run <b>Mon • Thu • Fri</b> from <b>7:00–8:00 AM</b>.
        </p>

        <div className="mt-6 flex flex-col gap-3">
          <a
            href="https://calendar.google.com/calendar/r/eventedit?text=PoadRoad+Beach+Workout&details=Kaimana+Beach+Workout&location=Kaimana+Beach"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl px-6 py-4 font-semibold border-2 border-sky-600 text-sky-800 hover:bg-sky-50 transition"
          >
            Add to Google Calendar
          </a>

          <a
            href="mailto:poadroadfit@gmail.com?subject=Question%20about%20PoadRoad%20Beach%20Workouts"
            className="rounded-2xl px-6 py-4 font-semibold bg-slate-900 text-white hover:bg-slate-800 transition"
          >
            Email Gabe
          </a>

          <Link href="/" className="text-sm font-semibold text-slate-700 hover:text-slate-900">
            Back to homepage →
          </Link>
        </div>
      </div>
    </main>
  );
}
