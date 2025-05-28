'use client'
// app/components/LiveGames.tsx
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const games = [
  { name: 'Teen Patti', image: '/images/teen-patti.jpeg' },
  { name: 'Dragon Tiger', image: '/images/dragon-tiger.png' },
  { name: 'Poker', image: '/images/poker.webp' },
  { name: 'Andar Bahar', image: '/images/andar-bahar.jpg' },
  { name: 'Aviator', image: '/images/aviator.jpg' },
  { name: 'Roulette', image: '/images/roulette.webp' },
];

export default function LiveGames() {
  return (
    <section className="bg-black text-white py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">Live Betting Games</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {games.map((game, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition transform cursor-pointer"
            onClick={() =>
              window.open(
                `https://wa.me/919286300847?text=Hi, I want to play ${encodeURIComponent(
                  game.name
                )}`,
                '_blank'
              )
            }
          >
            <img src={game.image} alt={game.name} className="w-full h-40 object-cover" />
            <div className="p-4 flex justify-between items-center">
              <span className="text-lg font-medium">{game.name}</span>
              <FaWhatsapp className="text-green-400 text-xl" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
