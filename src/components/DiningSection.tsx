import React, { useState } from 'react';
import { Utensils, Clock, MapPin, Sparkles, ChefHat } from 'lucide-react';
import { DINING_VENUES, MENU_ITEMS } from '../data/hotelData';
import { MenuItem } from '../types/hotel';

interface DiningSectionProps {
  currency: 'BDT' | 'USD';
  onReserveTable: (venueName: string) => void;
}

export const DiningSection: React.FC<DiningSectionProps> = ({ currency, onReserveTable }) => {
  const [activeVenue, setActiveVenue] = useState<string>('karnaphuli');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', 'GRV Signatures', 'Buffet Experiences', 'Seafood & Asian', 'Desserts & Beverages'];

  const filteredMenuItems = MENU_ITEMS.filter((item) => {
    const venueMatches = item.venue === activeVenue || selectedCategory !== 'all';
    const categoryMatches = selectedCategory === 'all' || item.category === selectedCategory;
    return venueMatches && categoryMatches;
  });

  const currentVenue = DINING_VENUES.find((v) => v.id === activeVenue) || DINING_VENUES[0];

  return (
    <section id="dining" className="py-24 bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-widest text-[#AB8D62] font-semibold mb-2">
            Culinary Art by the Padma
          </p>
          <h2
            className="font-serif text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight mb-4"
            style={{ textWrap: 'balance' }}
          >
            Gastronomy, Buffets & Rooftop Grills
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            From the celebrated 80-dish Weekend Grand Buffet at Karnaphuli to open-air riverside grills
            at the Level 10 Food Court, experience masterfully crafted tastes in Rajshahi.
          </p>

          {/* Venue Selector Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {DINING_VENUES.map((venue) => (
              <button
                key={venue.id}
                type="button"
                onClick={() => {
                  setActiveVenue(venue.id);
                  setSelectedCategory('all');
                }}
                className={`px-5 py-2.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  activeVenue === venue.id
                    ? 'bg-[#0A1128] text-white shadow-md'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                {venue.name.split(' (')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Venue Showcase Box */}
        <div className="bg-[#FAF8F5] rounded-2xl border border-stone-200 overflow-hidden shadow-sm mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Visual Media Slot */}
            <div className="lg:col-span-6 relative min-h-[360px] lg:min-h-full overflow-hidden">
              <img
                src={currentVenue.image}
                alt={currentVenue.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs uppercase tracking-widest text-[#DFB97F] font-semibold block mb-1">
                  {currentVenue.level}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold">
                  {currentVenue.name}
                </h3>
              </div>
            </div>

            {/* Venue Details */}
            <div className="lg:col-span-6 p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 text-xs text-stone-500 mb-4 pb-4 border-b border-stone-200">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#AB8D62]" />
                    <span>{currentVenue.hours}</span>
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#AB8D62]" />
                    <span>{currentVenue.level}</span>
                  </span>
                </div>

                <h4 className="text-sm font-semibold text-stone-900 uppercase tracking-wider mb-2">
                  Culinary Focus: {currentVenue.cuisine}
                </h4>

                <p className="text-stone-600 text-sm leading-relaxed mb-6">
                  {currentVenue.description}
                </p>

                {/* Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {currentVenue.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-stone-700 font-medium">
                      <Sparkles className="w-3.5 h-3.5 text-[#AB8D62] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-stone-500">
                  Daily Breakfast & Weekend Grand Buffets Available
                </div>
                <button
                  type="button"
                  onClick={() => onReserveTable(currentVenue.name)}
                  className="w-full sm:w-auto px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#0A1128] hover:bg-[#AB8D62] rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <Utensils className="w-3.5 h-3.5 text-[#DFB97F]" />
                  <span>Reserve Table</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Curated Menu Browser */}
        <div className="mt-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="font-serif text-2xl font-bold text-stone-900">
                Signature Dishes & Specialties
              </h3>
              <p className="text-xs text-stone-500">
                Handcrafted recipes using organic ingredients, Padma fresh catch, and secret regional spices
              </p>
            </div>

            {/* Menu Category Filter */}
            <div className="flex flex-wrap gap-1.5 p-1 bg-stone-100 rounded-lg">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-white text-stone-900 shadow-xs font-semibold'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  {cat === 'all' ? 'All Dishes' : cat}
                </button>
              ))}
            </div>
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredMenuItems.map((item: MenuItem) => {
              const price =
                currency === 'BDT'
                  ? `৳ ${item.priceBDT.toLocaleString()}`
                  : `$ ${item.priceUSD.toFixed(1)}`;

              return (
                <div
                  key={item.id}
                  className="p-5 rounded-xl border border-stone-200 bg-white hover:border-[#AB8D62]/50 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-1.5">
                      <div className="flex items-center gap-2">
                        {item.isSpecial && (
                          <span title="Chef Specialty">
                            <ChefHat className="w-4 h-4 text-[#AB8D62] shrink-0" />
                          </span>
                        )}
                        <h4 className="font-serif text-lg font-bold text-stone-900">
                          {item.name}
                        </h4>
                      </div>
                      <span className="font-serif text-lg font-bold text-[#AB8D62] shrink-0 font-mono tabular-nums">
                        {price}
                      </span>
                    </div>

                    <p className="text-xs text-stone-600 leading-relaxed mb-3">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-xs text-stone-400 pt-2 border-t border-stone-100">
                    <span className="font-medium text-stone-500 uppercase tracking-wider text-[10px]">
                      {item.category}
                    </span>
                    <span>
                      {item.venue === 'karnaphuli'
                        ? 'Karnaphuli Restaurant'
                        : item.venue === 'foodcourt'
                        ? 'Level 10 Food Court'
                        : 'Lobby Cafe'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
