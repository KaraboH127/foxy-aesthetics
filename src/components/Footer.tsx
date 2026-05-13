import { Link } from 'react-router-dom';
import { Sparkles, Camera, MessageCircle, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { navLinks } from '@/data/navigation';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gray-50 dark:bg-gray-950 border-t border-gray-100 dark:border-gray-900">
      {/* Top gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-300 dark:via-brand-700 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center shadow-lg shadow-brand-200">
                <Sparkles size={18} className="text-white" />
              </div>
              <span className="font-serif text-xl font-bold text-gray-900 dark:text-white">
                Foxy<span className="text-brand-500 dark:text-brand-400">.</span>
              </span>
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
              Luxury lash experiences designed to enhance your natural beauty. Crafting confidence, one set at a time.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-brand-500 hover:border-brand-300 transition-all"
              >
                <Camera size={16} />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-brand-500 hover:border-brand-300 transition-all"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
                  <path d="M15 8h.01" />
                  <path d="M21 12c0 1.66-.44 3.22-1.22 4.57l-.02.04" />
                  <path d="M3 10.21C3 14.02 5.42 17.1 8.62 18.4" />
                  <path d="M20.78 19.57c.78-1.35 1.22-2.91 1.22-4.57" />
                </svg>
              </a>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-green-500 hover:border-green-300 transition-all"
              >
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-base font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-gray-500 dark:text-gray-400 hover:text-brand-500 dark:hover:text-brand-400 transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight size={12} className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-base font-semibold text-gray-900 dark:text-white mb-4">Services</h4>
            <ul className="space-y-2.5">
              {['Classic Lashes', 'Hybrid Lashes', 'Volume Lashes', 'Lash Lift & Tint', 'Brow Lamination', 'Wispy Sets'].map((svc) => (
                <li key={svc}>
                  <Link
                    to="/services"
                    className="text-sm text-gray-500 dark:text-gray-400 hover:text-brand-500 dark:hover:text-brand-400 transition-colors"
                  >
                    {svc}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-base font-semibold text-gray-900 dark:text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-brand-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  123 Beauty Lane, Suite 200<br />Los Angeles, CA 90028
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-brand-400 flex-shrink-0" />
                <a href="mailto:hello@foxyaesthetics.com" className="text-sm text-gray-500 dark:text-gray-400 hover:text-brand-500 transition-colors">
                  hello@foxyaesthetics.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle size={16} className="text-brand-400 flex-shrink-0" />
                <a href="https://wa.me/1234567890" className="text-sm text-gray-500 dark:text-gray-400 hover:text-brand-500 transition-colors">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 md:mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400 dark:text-gray-500">
            &copy; {currentYear} Foxy Aesthetics. All rights reserved.
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-500">
            Crafting Confidence, One Set at a Time.
          </p>
        </div>
      </div>
    </footer>
  );
}
