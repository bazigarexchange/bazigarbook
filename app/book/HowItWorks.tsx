'use client';

import Link from 'next/link';
import { FaWhatsapp, FaUserCheck, FaGamepad, FaGift } from 'react-icons/fa';

export default function HowItWorks() {
  const steps = [
    {
      icon: <FaWhatsapp className="text-green-400 text-3xl" />,
      title: 'Connect on WhatsApp',
      description: 'Securely verify your number.',
    },
    {
      icon: <FaUserCheck className="text-yellow-400 text-3xl" />,
      title: 'Get Your Player ID',
      description: 'Instant, no signup forms.',
    },
    {
      icon: <FaGamepad className="text-blue-400 text-3xl" />,
      title: 'Join Skill-Based Contests',
      description: 'Win points and bonuses.',
    },
    {
      icon: <FaGift className="text-pink-400 text-3xl" />,
      title: 'Redeem & Refill',
      description: 'Purchase points or get rewards anytime.',
    },
  ];

  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-yellow-400">🔧 How It Works</h2>

        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-zinc-900 p-6 rounded-xl shadow hover:shadow-yellow-500/30 transition"
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-zinc-400 text-sm">{step.description}</p>
            </div>
          ))}
        </div>

        <Link
          href="https://wa.me/918979536388"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition shadow-lg"
        >
          🟢 Start Playing Today
        </Link>
      </div>
    </section>
  );
}
