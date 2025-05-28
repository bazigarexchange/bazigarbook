'use client'
// app/components/HowItWorks.tsx
import React from 'react';

export default function HowItWorks() {
  const steps = [
    {
      title: "Contact Us on WhatsApp",
      description: "Reach out to our support team instantly.",
    },
    {
      title: "Get Your Betting ID",
      description: "Fast registration with secure access.",
    },
    {
      title: "Start Playing & Winning",
      description: "Access top games like Teen Patti, Dragon Tiger & more.",
    },
  ];

  return (
    <section className="bg-gray-950 text-white py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-xl shadow-lg text-center hover:bg-gray-800 transition"
          >
            <div className="text-5xl font-bold text-green-400 mb-2">{index + 1}</div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-sm text-gray-300">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
