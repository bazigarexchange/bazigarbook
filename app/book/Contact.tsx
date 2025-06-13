import { FaWhatsapp, FaInstagram, FaFacebook, FaTelegram } from 'react-icons/fa';

export default function ContactUs() {
  return (
    <section className="bg-zinc-900 text-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-500 mb-4">📞 Contact Us</h2>
        <p className="text-zinc-300 mb-8">
          Our team is here to assist you 24×7. Get in touch via WhatsApp or follow us on social media.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
          <a
            href="https://wa.me/919286300847"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full transition"
          >
            <FaWhatsapp className="text-xl" />
            Chat on WhatsApp
          </a>

          <div className="flex gap-4 text-2xl text-white">
            <a href="https://instagram.com/bazigarexch" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition">
              <FaInstagram />
            </a>
            <a href="https://facebook.com/share/19AL8VHBRp" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
              <FaFacebook />
            </a>
            <a href="https://t.me/bazigarbook777" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition">
              <FaTelegram />
            </a>
          </div>
        </div>

        <div className="text-zinc-400 text-sm">
          📍 Headquarters: Mumbai, India <br />
          📞 +1 534 253 4883 <br />
          © {new Date().getFullYear()} Bazigar Book. All rights reserved.
        </div>
      </div>
    </section>
  );
}
