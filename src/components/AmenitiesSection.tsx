import React from 'react';
import { Waves, Sparkles, Dumbbell, Award, ArrowUpRight } from 'lucide-react';
import { HOTEL_FACILITIES } from '../data/hotelData';

interface AmenitiesSectionProps {
  onOpenBooking: () => void;
}

export const AmenitiesSection: React.FC<AmenitiesSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="facilities" className="py-24 bg-[#0A1128] text-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-widest text-[#DFB97F] font-semibold mb-2">
            Recreation & Wellness
          </p>
          <h2
            className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4"
            style={{ textWrap: 'balance' }}
          >
            World-Class Hotel Amenities
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            Designed for total rejuvenation and effortless productivity, featuring Rajshahi’s only
            temperature-regulated rooftop infinity pool and premier health club.
          </p>
        </div>

        {/* Bento Grid Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Card 1: Rooftop Infinity Pool (Large Marquee Bento col-span-7) */}
          <div className="md:col-span-7 rounded-2xl overflow-hidden bg-[#060C1C] border border-stone-800 flex flex-col justify-between group">
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={HOTEL_FACILITIES[0].image}
                alt={HOTEL_FACILITIES[0].title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060C1C] via-[#060C1C]/40 to-transparent" />
              <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded text-xs text-[#DFB97F] font-medium flex items-center gap-1.5">
                <Waves className="w-3.5 h-3.5" />
                <span>Rooftop Horizon</span>
              </div>
            </div>

            <div className="p-8">
              <div className="flex items-center justify-between text-xs text-stone-400 mb-2 font-mono">
                <span>HOURS: {HOTEL_FACILITIES[0].hours}</span>
                <span className="text-[#DFB97F]">COMPLIMENTARY FOR GUESTS</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-3">
                {HOTEL_FACILITIES[0].title}
              </h3>

              <p className="text-stone-300 text-sm leading-relaxed mb-6">
                {HOTEL_FACILITIES[0].description}
              </p>

              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-stone-800 text-xs text-stone-300">
                {HOTEL_FACILITIES[0].highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Sparkles className="w-3 h-3 text-[#DFB97F] shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2: Health Club & Steam Therapy (col-span-5) */}
          <div className="md:col-span-5 rounded-2xl overflow-hidden bg-[#060C1C] border border-stone-800 p-8 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-stone-900 border border-stone-700 flex items-center justify-center text-[#DFB97F] mb-6">
                <Dumbbell className="w-6 h-6" />
              </div>

              <div className="text-xs font-mono text-stone-400 mb-2">
                DAILY: 06:00 AM – 10:00 PM
              </div>

              <h3 className="font-serif text-2xl font-bold text-white mb-3">
                Technogym Health Club & Sauna
              </h3>

              <p className="text-stone-300 text-sm leading-relaxed mb-6">
                Maintain your peak physical condition with advanced Technogym cardio machines, free weight zones,
                and Swedish dry saunas with eucalyptus steam rooms for post-workout restoration.
              </p>

              <ul className="space-y-2.5 text-xs text-stone-300 mb-8">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DFB97F]" />
                  <span>Cardio treadmills, ellipticals & strength stations</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DFB97F]" />
                  <span>Finnish dry sauna & aromatic steam chamber</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DFB97F]" />
                  <span>Certified fitness trainers on-site</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DFB97F]" />
                  <span>Private changing suites and lockers</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-stone-800">
              <span className="text-xs text-stone-400">
                Included with all executive and deluxe bookings
              </span>
            </div>
          </div>

          {/* Card 3: The Grand Ballroom & Conference Center (Full width banner col-span-12) */}
          <div className="md:col-span-12 rounded-2xl bg-gradient-to-r from-[#0F1C3F] to-[#060C1C] border border-stone-800 p-8 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#DFB97F] uppercase tracking-wider mb-2">
                <Award className="w-4 h-4" />
                <span>Events & Celebrations</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-4xl font-bold text-white mb-3">
                The Grand Ballroom & Conference Pavilion
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed mb-4">
                Hosting up to 450 guests in an acoustically refined, pillarless hall. From high-profile corporate
                summits to fairy-tale Rajshahi wedding receptions, our dedicated banqueting team ensures flawless execution.
              </p>
              <div className="flex flex-wrap gap-4 text-xs text-stone-300">
                <span>Capacity: 450 Pax</span>
                <span aria-hidden="true">·</span>
                <span>Pillarless Architecture</span>
                <span aria-hidden="true">·</span>
                <span>Dual High-Lumen Laser Screens</span>
                <span aria-hidden="true">·</span>
                <span>Bespoke Banquet Catering</span>
              </div>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <a
                href="#contact"
                className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white border border-[#DFB97F] hover:bg-[#DFB97F]/10 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <span>Inquire for Events</span>
                <ArrowUpRight className="w-4 h-4 text-[#DFB97F]" />
              </a>
              <button
                type="button"
                onClick={onOpenBooking}
                className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#0A1128] bg-gradient-to-r from-[#DFB97F] to-[#C5A880] hover:from-[#EAD09F] hover:to-[#DFB97F] rounded-lg transition-colors cursor-pointer"
              >
                Reserve Stay
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
