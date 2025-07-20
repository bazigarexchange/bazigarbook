// components/BonusPopup.tsx
'use client';
import { useEffect, useState } from 'react';

export default function BonusPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 12000); // 6 seconds delay
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-white max-w-sm p-6 rounded-2xl shadow-lg text-center relative animate-bounce">
        <h2 className="text-2xl font-bold mb-2 text-green-600">🎉 Limited Time Offer!</h2>
        <p className="text-gray-700 mb-4">
          Get an <strong>extra 3% – 10% joining bonus</strong><br />
          when you sign up Now on WhatsApp!
        </p>
        <a
            href="https://wa.me/919286300847?text=Hey%2C%20I%20want%20to%20claim%20my%203%25%20joining%20bonus!"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-full transition">
            Claim Now on WhatsApp
        </a>
        <button
          onClick={() => setShow(false)}
          className="absolute top-2 right-3 text-gray-500 hover:text-gray-700 text-xl"
        >
          ×
        </button>
      </div>
    </div>
  );
}
