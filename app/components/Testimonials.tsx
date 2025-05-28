'use client'

// app/components/Testimonials.tsx
import React from 'react';

const testimonials = [
  {
    name: "Amit S.",
    message: "Got my ID within 2 minutes. Very fast service!",
  },
  {
    name: "Priya R.",
    message: "Loved the support. Always available to help!",
  },
  {
    name: "Rahul D.",
    message: "Best platform for betting. Safe and secure.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gray-950 text-white py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">What Our Users Say</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-xl shadow-md text-center hover:bg-gray-800 transition"
          >
            <p className="italic text-gray-300 mb-4">“{t.message}”</p>
            <h4 className="font-semibold text-white">- {t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
