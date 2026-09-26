import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X } from 'lucide-react';
import { HOTEL_INFO, HOTEL_IMAGES } from '../data/hotelData';

interface NavbarProps {
  currency: 'BDT' | 'USD';
  setCurrency: (c: 'BDT' | 'USD') => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currency, setCurrency, onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A1128]/95 backdrop-blur-md border-b border-[#C5A880]/20 shadow-lg py-3 text-stone-100'
          : 'bg-gradient-to-b from-[#0A1128]/85 via-[#0A1128]/50 to-transparent py-4 text-stone-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strictly adheres to Top Bar Contract: 3 zones */}
        <div className="flex items-center justify-between">
          {/* Zone 1: Brand Zone with original logo */}
          <a
            href="#"
            className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A880]"
          >
            <img
              src={HOTEL_IMAGES.logo}
              alt="Grand Riverview Hotel Logo"
              referrerPolicy="no-referrer"
              className="h-10 sm:h-12 w-auto object-contain drop-shadow"
            />
            <span className="font-serif text-lg sm:text-2xl font-bold tracking-wider text-stone-100 group-hover:text-[#DFB97F] transition-colors hidden sm:inline-block">
              Grand Riverview Hotel
            </span>
          </a>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium tracking-wide">
            <a
              href="#accommodations"
              className="text-stone-300 hover:text-[#DFB97F] transition-colors"
            >
              Accommodations
            </a>
            <a
              href="#dining"
              className="text-stone-300 hover:text-[#DFB97F] transition-colors"
            >
              Dining & Lounges
            </a>
            <a
              href="#facilities"
              className="text-stone-300 hover:text-[#DFB97F] transition-colors"
            >
              Facilities
            </a>
            <a
              href="#cineplex"
              className="text-stone-300 hover:text-[#DFB97F] transition-colors"
            >
              4K Cineplex
            </a>
            <a
              href="#experiences"
              className="text-stone-300 hover:text-[#DFB97F] transition-colors"
            >
              Rajshahi Guide
            </a>
            <a
              href="#contact"
              className="text-stone-300 hover:text-[#DFB97F] transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Zone 3: 1-2 primary actions & currency control */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Currency Switcher */}
            <div className="flex items-center bg-black/40 border border-stone-700/60 rounded p-0.5 text-xs font-medium">
              <button
                type="button"
                onClick={() => setCurrency('BDT')}
                className={`px-2 py-1 rounded transition-colors whitespace-nowrap ${
                  currency === 'BDT'
                    ? 'bg-[#C5A880] text-[#0A1128] font-bold'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                ৳ BDT
              </button>
              <button
                type="button"
                onClick={() => setCurrency('USD')}
                className={`px-2 py-1 rounded transition-colors whitespace-nowrap ${
                  currency === 'USD'
                    ? 'bg-[#C5A880] text-[#0A1128] font-bold'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                $ USD
              </button>
            </div>

            {/* Quick Call Affordance */}
            <a
              href={`tel:${HOTEL_INFO.phone1}`}
              className="hidden sm:flex items-center gap-1.5 text-xs text-stone-300 hover:text-[#DFB97F] transition-colors py-1.5 px-2.5 rounded border border-stone-700/60 hover:border-[#C5A880]/50"
            >
              <Phone className="w-3.5 h-3.5 text-[#DFB97F]" />
              <span className="font-mono tabular-nums">{HOTEL_INFO.phone1}</span>
            </a>

            {/* Primary Action Button */}
            <button
              type="button"
              onClick={onOpenBooking}
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#0A1128] bg-gradient-to-r from-[#DFB97F] to-[#C5A880] hover:from-[#EAD09F] hover:to-[#DFB97F] rounded transition-all shadow-md active:scale-95 whitespace-nowrap"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Stay</span>
            </button>

            {/* Mobile menu toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 text-stone-300 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A1128] border-b border-[#C5A880]/20 px-6 py-5 shadow-2xl">
          <nav className="flex flex-col gap-4 text-base">
            <a
              href="#accommodations"
              onClick={() => setMobileMenuOpen(false)}
              className="text-stone-200 hover:text-[#DFB97F] transition-colors py-1 border-b border-stone-800"
            >
              Accommodations
            </a>
            <a
              href="#dining"
              onClick={() => setMobileMenuOpen(false)}
              className="text-stone-200 hover:text-[#DFB97F] transition-colors py-1 border-b border-stone-800"
            >
              Dining & Lounges
            </a>
            <a
              href="#facilities"
              onClick={() => setMobileMenuOpen(false)}
              className="text-stone-200 hover:text-[#DFB97F] transition-colors py-1 border-b border-stone-800"
            >
              Facilities & Pool
            </a>
            <a
              href="#cineplex"
              onClick={() => setMobileMenuOpen(false)}
              className="text-stone-200 hover:text-[#DFB97F] transition-colors py-1 border-b border-stone-800"
            >
              GRV 4K Cineplex
            </a>
            <a
              href="#experiences"
              onClick={() => setMobileMenuOpen(false)}
              className="text-stone-200 hover:text-[#DFB97F] transition-colors py-1 border-b border-stone-800"
            >
              Rajshahi Experience
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-stone-200 hover:text-[#DFB97F] transition-colors py-1 border-b border-stone-800"
            >
              Contact & Directions
            </a>

            <div className="pt-2 flex flex-col gap-3">
              <a
                href={`tel:${HOTEL_INFO.phone1}`}
                className="flex items-center gap-2 text-sm text-stone-300"
              >
                <Phone className="w-4 h-4 text-[#DFB97F]" />
                <span>Direct Hotline: {HOTEL_INFO.phone1}</span>
              </a>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full text-center py-2.5 font-semibold text-xs uppercase tracking-wider text-[#0A1128] bg-[#C5A880] rounded"
              >
                Instant Reservation
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
