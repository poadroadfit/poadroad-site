export default function CanceledPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-sky-50 to-white px-6">
      <div className="max-w-lg w-full rounded-3xl border border-slate-200 bg-white p-8 shadow-sm text-center">
        <h1 className="text-3xl font-extrabold">Checkout canceled</h1>
        <p className="mt-3 text-slate-700">
          No worries — your card was not charged.
        </p>
        <div className="mt-6 flex flex-col gap-3">
          <a
            href="/"
            className="rounded-2xl px-6 py-4 font-semibold bg-sky-600 text-white hover:bg-sky-700 transition"
          >
            Try booking again
          </a>
          <a
            href="mailto:poadroadfit@gmail.com?subject=Waitlist%20or%20Booking%20Help"
            className="rounded-2xl px-6 py-4 font-semibold border-2 border-slate-900 text-slate-900 hover:bg-slate-50 transition"
          >
            Email for help
          </a>
        </div>
      </div>
    </main>
  );
}