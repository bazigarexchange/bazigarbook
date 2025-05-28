'use client'

// app/components/Contact.tsx
import React from 'react';
import { FaWhatsapp, FaTelegramPlane } from 'react-icons/fa';

export default function Contact() {
  return (
    <section className="bg-gray-950 text-white py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
      <div className="text-center max-w-xl mx-auto space-y-6">
        <p className="text-gray-300">
          Need assistance? Our support team is available 24/7 to help you with registration, withdrawals, and any queries.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="https://wa.me/919286300847?text=Support"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 px-5 py-3 rounded-full text-white"
          >
            <FaWhatsapp className="text-xl" /> WhatsApp Support
          </a>
          <a
            href="https://t.me/Bazigarexch"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-full text-white"
          >
            <FaTelegramPlane className="text-xl" /> Telegram Support
          </a>
        </div>
      </div>
    </section>
  );
}
