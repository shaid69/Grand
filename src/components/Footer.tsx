import React from 'react';
import { HOTEL_INFO, HOTEL_IMAGES } from '../data/hotelData';
import { Leaf } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#060C1C] text-stone-400 text-xs border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={HOTEL_IMAGES.logo}
                alt="Grand Riverview Hotel Logo"
                referrerPolicy="no-referrer"
                className="h-12 w-auto object-contain"
              />
              <span className="font-serif text-xl font-bold text-stone-100 tracking-wide block">
                Grand Riverview Hotel
              </span>
            </div>
            <p className="text-stone-400 text-xs leading-relaxed">
              Rajshahi’s premier 4-star destination overlooking the historic Padma River. Where hospitality
              meets timeless luxury.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href={HOTEL_INFO.facebook}
                target="_blank"
                rel="noreferrer"
                className="text-stone-400 hover:text-[#DFB97F] transition-colors"
              >
                Facebook
              </a>
              <span aria-hidden="true">·</span>
              <a
                href={HOTEL_INFO.instagram}
                target="_blank"
                rel="noreferrer"
                className="text-stone-400 hover:text-[#DFB97F] transition-colors"
              >
                Instagram
              </a>
              <span aria-hidden="true">·</span>
              <a
                href={HOTEL_INFO.youtube}
                target="_blank"
                rel="noreferrer"
                className="text-stone-400 hover:text-[#DFB97F] transition-colors"
              >
                YouTube
              </a>
            </div>
            <div className="flex items-center gap-1.5 text-emerald-400 text-[11px]">
              <Leaf className="w-3.5 h-3.5" />
              <span>Committed to Rajshahi Clean & Green City Standards</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-stone-200 mb-4">
              Accommodations
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#accommodations" className="hover:text-[#DFB97F] transition-colors">
                  Deluxe King Room
                </a>
              </li>
              <li>
                <a href="#accommodations" className="hover:text-[#DFB97F] transition-colors">
                  Executive Riverview Suite
                </a>
              </li>
              <li>
                <a href="#accommodations" className="hover:text-[#DFB97F] transition-colors">
                  Deluxe Twin Room
                </a>
              </li>
              <li>
                <a href="#accommodations" className="hover:text-[#DFB97F] transition-colors">
                  Deluxe Queen Room
                </a>
              </li>
              <li>
                <a href="#accommodations" className="hover:text-[#DFB97F] transition-colors">
                  Presidential River Suite
                </a>
              </li>
            </ul>
          </div>

          {/* Facilities */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-stone-200 mb-4">
              Dining & Venues
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#dining" className="hover:text-[#DFB97F] transition-colors">
                  Karnaphuli Multi Cuisine
                </a>
              </li>
              <li>
                <a href="#dining" className="hover:text-[#DFB97F] transition-colors">
                  GRV Food Court (Level 10)
                </a>
              </li>
              <li>
                <a href="#cineplex" className="hover:text-[#DFB97F] transition-colors">
                  GRV 4K VIP Cineplex
                </a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-[#DFB97F] transition-colors">
                  Rooftop Infinity Pool
                </a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-[#DFB97F] transition-colors">
                  The Grand Ballroom
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-stone-200 mb-4">
              Direct Inquiries
            </h4>
            <p className="text-xs text-stone-400 mb-2">{HOTEL_INFO.address}</p>
            <p className="font-mono text-stone-300 text-xs mb-1">
              Tel: {HOTEL_INFO.phone1}
            </p>
            <p className="font-mono text-stone-300 text-xs mb-3">
              Tel: {HOTEL_INFO.phone2}
            </p>
            <a
              href={`mailto:${HOTEL_INFO.email}`}
              className="text-[#DFB97F] hover:underline block text-xs"
            >
              {HOTEL_INFO.email}
            </a>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-stone-500">
          <p>© {new Date().getFullYear()} Grand Riverview Hotel Rajshahi. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-stone-300 transition-colors">
              Privacy Policy
            </a>
            <span aria-hidden="true">·</span>
            <a href="#" className="hover:text-stone-300 transition-colors">
              Terms of Hospitality
            </a>
            <span aria-hidden="true">·</span>
            <a href="#contact" className="hover:text-stone-300 transition-colors">
              Concierge Desk
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
