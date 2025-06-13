// app/page.tsx
import WhyChoose from './book/WhyChoose';
import HowItWorks from './book/HowItWorks';
import LiveGames from './book/LiveGames';
import TelegramCTA from './book/TelegramCTA';
import Testimonials from './book/Testimonials';
import TrustedBy from './components/TrustedBy';
import FAQ from './book/FAQ';
import Contact from './book/Contact';
import Image from 'next/image'
import Link from 'next/link';
import PrivacyFairPlay from './book/PrivacyFairPlay';

export default function Home() {
  return (
    <main>
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 py-12 bg-gradient-to-b from-black via-zinc-900 to-black text-white">
      {/* Optional background effect */}
      <div className="absolute inset-0 opacity-10 bg-[url('/casino-bg.jpg')] bg-cover bg-center pointer-events-none"></div>

      <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-yellow-400">
        <Image
          src="/bazigarlogo.jpg" // <--- Place your logo file in public/logo.png
          alt="Bazigar Logo"
          width={96}
          height={96}
          className="object-cover"
        />
      </div>

      <div className="relative z-10 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Bazigar Book – <span className="text-yellow-400">India’s Trusted Skill Gaming Hub</span>
        </h1>

        <p className="text-xl italic text-zinc-300 mb-6">
          Imaandari Ek Mehenga Shauk Hai
        </p>

        <p className="text-lg md:text-xl mb-8 text-zinc-200">
          Join over <strong>20,000+ players</strong> sharing their love for strategy, quizzes, and fantasy sports. Fast signup, secure platform, 24×7 support!
        </p>

        <Link
          href="https://wa.me/919286300847"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition shadow-lg"
        >
          🟢 Get Your Player ID Now
        </Link>

        <p className="mt-6 text-sm text-zinc-400">
          ⚡ Instant refill & payouts • 🎁 ₹300 joining bonus • 🔐 Secure & verified
        </p>
      </div>
          {/* Disclaimer & About */}
      <div className="text-xs text-gray-400 text-center max-w-md pt-2 space-y-2">
        <p>
          Disclaimer: Players must be 18+ years old.
Users from Telangana, Orissa, Assam, Sikkim, Nagaland are restricted.
Our services are available only via WhatsApp for real security and clarity.
        </p>
      </div>
    </section>

    <TrustedBy/>
    <HowItWorks/>
    <WhyChoose/>
    <LiveGames/>
    <TelegramCTA/>
    <Testimonials/>
    <PrivacyFairPlay/>
    <FAQ/>
    <Contact/>

      
    </main>
  )
}
