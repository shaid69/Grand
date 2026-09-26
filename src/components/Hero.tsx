import React from 'react';
import { ChevronRight, Star, ShieldCheck, MapPin, Sparkles } from 'lucide-react';
import { HOTEL_IMAGES, HOTEL_INFO } from '../data/hotelData';

interface HeroProps {
  onExploreRooms: () => void;
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreRooms, onOpenBooking }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#0A1128]">
      {/* Background Photography with Measured Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={HOTEL_IMAGES.hero}
          alt="Grand Riverview Hotel Rajshahi by the Padma River at twilight"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 animate-in fade-in duration-1000"
        />
        {/* Measured dark gradient scrim for WCAG AA readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060C1C] via-[#0A1128]/75 to-[#0A1128]/60" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#060C1C]/40 to-[#060C1C]/90" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-stone-100">
        {/* Quiet Location Lead-in with subtle divider */}
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#DFB97F] mb-6 font-medium">
          <MapPin className="w-3.5 h-3.5 text-[#DFB97F]" />
          <span>Rajshahi, Bangladesh</span>
          <span aria-hidden="true">·</span>
          <span>Banks of the Padma River</span>
          <span aria-hidden="true">·</span>
          <span>4-Star Premier Luxury</span>
        </div>

        {/* Display Headline */}
        <h1
          className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.12]"
          style={{ textWrap: 'balance' }}
        >
          The Oasis of Luxury on the Banks of the Padma
        </h1>

        {/* Lead Narrative */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-stone-300 font-light leading-relaxed mb-10">
          Welcome to Grand Riverview Hotel, Rajshahi’s premier hospitality destination.
          Immerse yourself in 105 riverfront accommodations, rooftop infinity waters,
          the grand 80-dish Karnaphuli multi-cuisine dining experience, and the city’s exclusive 4K VIP Cineplex.
        </p>

        {/* Action Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <button
            type="button"
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold tracking-wider uppercase text-[#0A1128] bg-gradient-to-r from-[#DFB97F] to-[#C5A880] hover:from-[#EAD09F] hover:to-[#DFB97F] rounded transition-all shadow-xl active:scale-95 cursor-pointer"
          >
            Check Availability & Rates
          </button>
          <button
            type="button"
            onClick={onExploreRooms}
            className="w-full sm:w-auto px-7 py-3.5 text-sm font-medium tracking-wide text-stone-200 hover:text-white border border-stone-500/50 hover:border-[#DFB97F] bg-black/30 backdrop-blur-sm rounded transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Explore Accommodations</span>
            <ChevronRight className="w-4 h-4 text-[#DFB97F]" />
          </button>
        </div>

        {/* Claim-to-Proof Adjacency Bar (Clean unboxed text, no candy badges) */}
        <div className="pt-8 border-t border-stone-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1 text-[#DFB97F] mb-1">
              <Star className="w-4 h-4 fill-[#DFB97F]" />
              <span className="font-semibold text-lg text-white font-mono tabular-nums">
                {HOTEL_INFO.googleRating}
              </span>
              <span className="text-xs text-stone-400">/ 5.0</span>
            </div>
            <p className="text-xs text-stone-400">
              Over {HOTEL_INFO.reviewCount.toLocaleString()} Google Reviews
            </p>
          </div>

          <div className="flex flex-col items-center">
            <span className="font-semibold text-lg text-white font-mono tabular-nums mb-1">
              {HOTEL_INFO.totalRooms}
            </span>
            <p className="text-xs text-stone-400">
              Luxury Rooms & River Suites
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1.5 text-white mb-1">
              <Sparkles className="w-4 h-4 text-[#DFB97F]" />
              <span className="font-semibold text-lg">Level 10</span>
            </div>
            <p className="text-xs text-stone-400">
              Rooftop River-Breeze Food Court
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1.5 text-white mb-1">
              <ShieldCheck className="w-4 h-4 text-[#DFB97F]" />
              <span className="font-semibold text-lg">4K Cineplex</span>
            </div>
            <p className="text-xs text-stone-400">
              VIP Recliner Theater On-Site
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
