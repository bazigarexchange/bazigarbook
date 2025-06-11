'use client'

// app/components/TrustedBy.tsx
import React from 'react';

const logos = [
  '/images/partner/99exch.jpg',
  '/images/partner/bet365.png',
  '/images/partner/betfair.jpeg',
  '/images/partner/diamond.jpeg',
  '/images/partner/lotus365_new.png',
  '/images/partner/world777.png',
];

export default function TrustedBy() {
  return (
    <section className="bg-black text-white py-4 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">Play On</h2>
      <div className="flex flex-wrap justify-center items-center gap-8 max-w-5xl mx-auto hover:scale-105 transition-transform duration-300 blink">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Partner ${index + 1}`}
            className="h-25"
          />
        ))}
      </div>
    </section>
  );
}
