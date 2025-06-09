// app/page.tsx
import WhyChoose from './components/WhyChoose';
import HowItWorks from './components/HowItWorks';
import LiveGames from './components/LiveGames';
import TelegramCTA from './components/TelegramCTA';
import Testimonials from './components/Testimonials';
import TrustedBy from './components/TrustedBy';
import PrivacyGuarantee from './components/PrivacyGuarantee';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Image from 'next/image'
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans p-4 flex flex-col items-center space-y-6">
      {/* Circular Logo */}
      <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-yellow-400">
        <Image
          src="/bazigarlogo.jpg" // <--- Place your logo file in public/logo.png
          alt="Bazigar Logo"
          width={96}
          height={96}
          className="object-cover"
        />
      </div>

      {/* Title */}
      <h1 className="text-4xl sm:text-5xl font-bold text-yellow-400 tracking-wide text-center">
        BAZIGAR BOOK
      </h1>

      {/* Tagline */}
      <p className="text-center text-gray-300 text-lg">
        IMANDARI EK MEHNGA SHOK HAI
      </p>
      <p className="text-sm text-yellow-200 uppercase tracking-wider">
        Trusted Since 2 Years
      </p>

      {/* WhatsApp CTA */}
        <a
          href="https://wa.me/919286300847?text=Hi%20Get%20New%20%20ID."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white font-semibold px-6 py-3 rounded-full text-lg flex items-center space-x-3 animate-pulse hover:scale-105 hover:shadow-lg transition-transform duration-200"
          >
          <img
            src="/WhatsApp.svg.webp"
            alt="Logo"
            className="w-6 h-6 rounded-full object-cover"
          />
          <span>GET I’D NOW</span>
        </a>

      {/* Refill/Service Info */}
      <div className="space-y-2 text-center">
        <div className="bg-yellow-400 text-black px-4 py-2 text-sm font-bold">
          24*7 DEPOSITE
        </div>
        <div className="bg-yellow-400 text-black px-4 py-2 text-sm font-bold">
          24*7 WITHDRAWL
        </div>
      </div>

      {/* Game Icons */}
      <div className="flex flex-wrap justify-center gap-4 pt-2">
        {['🏏 Cricket', '⚽ Football', '🎾 Tennis', '🃏 Teen Patti', '🎰 Casino', '🎯 Roulette'].map(
          (label) => (
            <div
              key={label}
              className="flex flex-col items-center text-center text-xs text-gray-300"
            >
              <div className="text-3xl">{label.split(' ')[0]}</div>
              <div>{label.split(' ')[1]}</div>
            </div>
          )
        )}
      </div>
      <TrustedBy/>
      {/* Disclaimer & About */}
      <div className="text-xs text-gray-400 text-center max-w-md pt-2 space-y-2">
        <p>
          Disclaimer: This Website is only for 18+ users. If you are from Telangana, Orissa, Assam, Sikkim and Nagaland, please leave the website immediately. Be aware of fraudsters, we only deal via WhatsApp.
        </p>
      </div>

      <WhyChoose />
      <HowItWorks/>
      <LiveGames/>
      <TelegramCTA/>
      <Testimonials/>
      <PrivacyGuarantee/>
      <FAQ/>
      <Contact/>

      <Footer/>
      {/* Footer */}
      <p className="text-yellow-500 pt-1 text-sm text-center">
        <a
          href="https://www.bazigarexchange.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-yellow-300 transition-colors"
          >
          WWW.BAZIGAREXCHANGE.COM
        </a>
      </p>
      
    </main>
  )
}
