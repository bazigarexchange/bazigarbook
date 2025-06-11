'use client';

import { FaCertificate, FaBolt, FaGift, FaWhatsapp, FaShieldAlt } from 'react-icons/fa';

export default function WhyChoose() {
  const reasons = [
    {
      icon: <FaCertificate className="text-yellow-400 text-3xl" />,
      title: '100% Skill-Based',
      description: 'No chance games.',
    },
    {
      icon: <FaGift className="text-pink-400 text-3xl" />,
      title: 'Bonus Booster',
      description: '₹300 joining + 5% referral.',
    },
    {
      icon: <FaBolt className="text-blue-400 text-3xl" />,
      title: 'Instant Payouts & Refills',
      description: 'Anytime access.',
    },
    {
      icon: <FaWhatsapp className="text-green-400 text-3xl" />,
      title: '24×7 WhatsApp Support',
      description: 'Talk to our team anytime.',
    },
    {
      icon: <FaShieldAlt className="text-purple-400 text-3xl" />,
      title: 'Trusted & Secure',
      description: 'Verified platform.',
    },
  ];

  return (
    <section className="bg-zinc-950 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-yellow-500">🏆 Why Choose Bazigar</h2>

        <div className="grid md:grid-cols-5 sm:grid-cols-2 gap-8">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="bg-zinc-900 p-6 rounded-xl shadow hover:shadow-yellow-500/20 transition"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
              <p className="text-zinc-400 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
