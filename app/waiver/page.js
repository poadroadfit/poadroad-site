export default function WaiverPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-white text-slate-900 px-4 sm:px-6 py-10">
      <div className="max-w-3xl mx-auto rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
          PoadRoad Beach Workout Liability Waiver
        </h1>

        <div className="mt-6 space-y-6 text-sm sm:text-base text-slate-700">
          <p className="font-semibold text-slate-900">
            PoadRoad Beach Workouts – Participant Agreement and Liability Waiver
          </p>
          <p>
            By participating in a PoadRoad Beach Workout session, you acknowledge and agree to
            the following terms.
          </p>

          <section className="space-y-3">
            <h2 className="font-bold text-slate-900">1. Acknowledgment of Risk</h2>
            <p>
              I understand that participating in physical exercise and outdoor fitness activities
              involves inherent risks. These risks may include but are not limited to:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>muscle strains, sprains, or other physical injuries</li>
              <li>slips, trips, or falls on sand or uneven terrain</li>
              <li>exposure to sun, heat, wind, and outdoor environmental conditions</li>
              <li>fatigue, dehydration, or overexertion</li>
              <li>hazards associated with proximity to the ocean and beach environment</li>
            </ul>
            <p>I voluntarily assume all risks associated with participation.</p>
          </section>

          <section className="space-y-3">
            <h2 className="font-bold text-slate-900">2. Health and Physical Condition</h2>
            <p>
              I confirm that I am physically capable of participating in fitness activities and
              that I do not have any medical condition that would make participation unsafe.
            </p>
            <p>
              I understand that it is my responsibility to consult a physician before participating
              if I have any health concerns.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-bold text-slate-900">3. Participant Responsibility</h2>
            <p>I agree to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>follow all instructions provided by the trainer</li>
              <li>exercise within my own limits</li>
              <li>inform the instructor if I feel pain, dizziness, or discomfort</li>
              <li>take responsibility for my own safety during the workout</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-bold text-slate-900">4. Release of Liability</h2>
            <p>
              In consideration for being allowed to participate in PoadRoad Beach Workouts, I
              hereby release, waive, and discharge PoadRoad, its instructors, trainers, and
              affiliates from any and all liability, claims, demands, or causes of action arising
              from participation in these workouts.
            </p>
            <p>
              This includes any injury, loss, or damage that may occur during or as a result of
              participation.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-bold text-slate-900">5. Emergency Medical Care</h2>
            <p>
              I authorize PoadRoad staff to seek emergency medical treatment on my behalf if
              necessary during a workout session.
            </p>
            <p>I understand that I am responsible for any medical costs incurred.</p>
          </section>

          <section className="space-y-3">
            <h2 className="font-bold text-slate-900">6. Media Release</h2>
            <p>
              I grant permission for PoadRoad to capture photographs or video during workouts and
              to use these images for promotional purposes including website content, social media,
              and marketing materials.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-bold text-slate-900">7. Acknowledgment</h2>
            <p>
              By participating in a PoadRoad Beach Workout, I acknowledge that I have read,
              understood, and agreed to this waiver and release of liability.
            </p>
          </section>

          <div className="pt-2 text-slate-900">
            <p className="font-semibold">PoadRoad Beach Workouts</p>
            <p>Honolulu, Hawaii</p>
          </div>
        </div>
      </div>
    </main>
  );
}
