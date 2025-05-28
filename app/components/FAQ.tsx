'use client'

// app/components/FAQ.tsx
import React from 'react';

const faqs = [
  {
    question: 'Is Bazigar Book legal and safe?',
    answer: 'Yes, we prioritize safety and follow fair play practices. Our platform is secure and trusted by thousands.'
  },
  {
    question: 'How do I create a betting ID?',
    answer: 'Click the WhatsApp button and message us. Our support team will guide you instantly.'
  },
  {
    question: 'What games can I play?',
    answer: 'You can enjoy Teen Patti, Poker, Dragon Tiger, Andar Bahar, Aviator, Roulette and many more.'
  },
  {
    question: 'How fast are withdrawals?',
    answer: 'Withdrawals are processed instantly to your preferred method upon request.'
  }
];

export default function FAQ() {
  return (
    <section className="bg-black text-white py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div className="max-w-4xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-700 pb-4">
            <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
            <p className="text-gray-300">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}