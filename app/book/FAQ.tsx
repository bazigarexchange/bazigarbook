'use client';

import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const faqs = [
  {
    question: 'Is Bazigar Book legal in India?',
    answer:
      'Yes — we operate fully under India’s Skill Gaming regulations. No chance-based games.',
  },
  {
    question: 'How do I join?',
    answer:
      'Tap “Get Your Player ID Now” to chat with us on WhatsApp and register instantly.',
  },
  {
    question: 'What’s the minimum to start?',
    answer: 'Just ₹300 to get your player ID and join contests.',
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-yellow-500 mb-10">📚 Frequently Asked Questions</h2>
        <div className="space-y-6 text-left">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-zinc-800 rounded-xl p-4">
              <button
                className="flex justify-between w-full text-lg font-medium"
                onClick={() => toggle(index)}
              >
                <span>{faq.question}</span>
                <FaChevronDown
                  className={`transform transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <p className="mt-3 text-zinc-400 text-sm">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
