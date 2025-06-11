import { FaTelegramPlane } from 'react-icons/fa';

export default function JoinTelegram() {
  return (
    <section className="bg-zinc-950 text-white py-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-500 mb-4">
          📢 Join Our Telegram Channel
        </h2>
        <p className="text-zinc-300 text-lg mb-8">
          Stay updated with the latest contests, bonus drops, and winners. Be part of our active community!
        </p>
        <a
          href="https://t.me/bazigarbook777" // replace with your actual Telegram link
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-400 transition duration-300"
        >
          <FaTelegramPlane className="text-xl" />
          Join Now on Telegram
        </a>
      </div>
    </section>
  );
}
