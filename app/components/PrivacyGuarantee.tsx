'use client'

// app/components/PrivacyGuarantee.tsx
import React from 'react';

export default function PrivacyGuarantee() {
  return (
    <section className="bg-gray-900 text-white py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-6">Privacy & Fair Play Guarantee</h2>
      <div className="max-w-4xl mx-auto text-center text-gray-300">
        <p className="mb-4">
          At Bazigar Book, your privacy and security are our top priority. All personal information is encrypted
          and stored securely. We never share your data with third parties.
        </p>
        <p className="mb-4">
          We maintain 100% fair play on all our games. Every game is monitored and audited to ensure transparency,
          unbiased outcomes, and a safe environment.
        </p>
        <p>
          You can play with full confidence, knowing that your data and your gameplay are protected at every level.
        </p>
      </div>
    </section>
  );
}
