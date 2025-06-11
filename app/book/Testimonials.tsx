export default function Testimonials() {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-yellow-500 mb-10">🌟 What Our Players Say</h2>

        <div className="space-y-10">
          <div className="bg-zinc-800 p-6 rounded-2xl shadow-md hover:shadow-yellow-500/20 transition duration-300">
            <p className="text-lg text-zinc-200 italic">
              “Bazigar Book is real fun — skill challenges without luck. Bonus points helped me play more!”
            </p>
            <p className="mt-4 font-semibold text-yellow-400">— Riya S.</p>
          </div>

          <div className="bg-zinc-800 p-6 rounded-2xl shadow-md hover:shadow-yellow-500/20 transition duration-300">
            <p className="text-lg text-zinc-200 italic">
              “Love the instant payouts and smooth WhatsApp signup. Best skill games platform.”
            </p>
            <p className="mt-4 font-semibold text-yellow-400">— Rahul M.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
