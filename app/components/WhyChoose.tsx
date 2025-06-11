'use client'
// app/components/WhyChoose.tsx
import React from 'react';

export default function WhyChoose() {
  const features = [
    "Trusted by 10,000+ Users",
    "Fast ID Creation",
    "24/7 Customer Support",
    "Instant refill & payouts",
    "Private & Secure",
  ];

  return (
    <section className="bg-black text-white py-10 px-6">
      <h2 className="text-3xl font-bold text-center mb-6">Why Choose Bazigar Book?</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {features.map((item, i) => (
          <div
            key={i}
            className="bg-gray-900 rounded-2xl p-4 shadow-md text-center hover:bg-gray-800 transition"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
