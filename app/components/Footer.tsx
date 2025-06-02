'use client'

// components/Footer.tsx
import { FaInstagram, FaFacebookF, FaTelegramPlane } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Social */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
          <div className="flex justify-center md:justify-start gap-5 text-xl">
            <a href="https://www.instagram.com/bazigarexch/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/share/19AL8VHBRp/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaFacebookF />
            </a>
            <a href="https://t.me/Bazigarexch" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaTelegramPlane />
            </a>
          </div>
        </div>

        {/* Address */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Headquarters</h4>
          <p className="text-sm">
            Bazigar Exchange Pvt Ltd<br />
            C19, 2nd Floor, JMD Megapolis, Gurugram, India<br />
            📞 +1 534 253-4883
          </p>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Legal</h4>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Bazigar Book<br />
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
