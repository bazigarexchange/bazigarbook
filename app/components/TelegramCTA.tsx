'use client'

// app/components/TelegramCTA.tsx
import React from 'react';
import { FaTelegramPlane } from 'react-icons/fa';

export default function TelegramCTA() {
  return (
    <section className="bg-gradient-to-br from-blue-900 to-black text-white py-10 px-6 text-center">
      <h2 className="text-3xl font-bold mb-4">Join Our Telegram for Daily Tips & Offers</h2>
      <p className="mb-6 text-gray-300 max-w-2xl mx-auto">
        Get expert betting tips, exclusive bonuses, and real-time updates by joining our Telegram community.
      </p>
      <a
        href="https://t.me/Bazigarexch"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg transition"
      >
        <FaTelegramPlane className="text-xl" /> Join Telegram
      </a>
    </section>
  );
}
