import React, { useState } from 'react';
import { Bed, Maximize2, Users, Eye, Check, ArrowRight } from 'lucide-react';
import { ROOMS } from '../data/hotelData';
import { Room } from '../types/hotel';

interface RoomsSectionProps {
  currency: 'BDT' | 'USD';
  onSelectRoom: (room: Room) => void;
  onOpenRoomDetails: (room: Room) => void;
}

export const RoomsSection: React.FC<RoomsSectionProps> = ({
  currency,
  onSelectRoom,
  onOpenRoomDetails,
}) => {
  const [filter, setFilter] = useState<'all' | 'deluxe' | 'executive' | 'suite'>('all');

  const filteredRooms = ROOMS.filter((room) => {
    if (filter === 'all') return true;
    if (filter === 'suite') return room.category === 'suite' || room.category === 'executive';
    return room.category === filter;
  });

  return (
    <section id="accommodations" className="py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs uppercase tracking-widest text-[#AB8D62] font-semibold mb-2">
            Sanctuaries of Quiet Refinement
          </p>
          <h2
            className="font-serif text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight mb-4"
            style={{ textWrap: 'balance' }}
          >
            Rooms & Suites at Grand Riverview
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Every room at Grand Riverview is tailored with bespoke furnishings,
            orthopedic bedding, sound-insulated glass, and curated views of the tranquil Padma river or Rajshahi skyline.
          </p>

          {/* Interactive Filter Tabs (Functional segmented controls) */}
          <div className="inline-flex items-center gap-1.5 p-1.5 bg-stone-200/70 rounded-lg mt-8">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-4 py-2 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                filter === 'all'
                  ? 'bg-white text-stone-900 shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              All Accommodations ({ROOMS.length})
            </button>
            <button
              type="button"
              onClick={() => setFilter('deluxe')}
              className={`px-4 py-2 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                filter === 'deluxe'
                  ? 'bg-white text-stone-900 shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Deluxe Collection
            </button>
            <button
              type="button"
              onClick={() => setFilter('suite')}
              className={`px-4 py-2 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                filter === 'suite'
                  ? 'bg-white text-stone-900 shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Executive & River Suites
            </button>
          </div>
        </div>

        {/* Accommodations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRooms.map((room) => {
            const price = currency === 'BDT' ? `৳ ${room.priceBDT.toLocaleString()}` : `$ ${room.priceUSD}`;
            return (
              <div
                key={room.id}
                className="bg-white rounded-xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                {/* Visual Image Slot */}
                <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                  <img
                    src={room.image}
                    alt={room.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                  {/* Clean unboxed category marker */}
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-stone-200 text-xs px-2.5 py-1 rounded font-medium">
                    {room.category.toUpperCase()}
                  </div>

                  {room.popular && (
                    <div className="absolute top-4 right-4 bg-[#DFB97F] text-[#0A1128] text-xs font-bold px-2.5 py-1 rounded shadow">
                      Most Selected
                    </div>
                  )}

                  <div className="absolute bottom-3 left-4 right-4 text-white text-xs flex items-center justify-between">
                    <span className="font-light">{room.view}</span>
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Unboxed Metadata Line with typographic separators */}
                    <div className="flex items-center gap-2 text-xs text-stone-500 mb-2">
                      <span className="flex items-center gap-1">
                        <Maximize2 className="w-3 h-3 text-stone-400" />
                        <span className="font-mono tabular-nums">{room.sizeSqFt}</span> sq ft
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="flex items-center gap-1">
                        <Bed className="w-3 h-3 text-stone-400" />
                        {room.bedType}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="flex items-center gap-1">
                        <Users className="w-3 h-3 text-stone-400" />
                        {room.occupancy.split(',')[0]}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl font-bold text-stone-900 group-hover:text-[#AB8D62] transition-colors mb-2">
                      {room.name}
                    </h3>

                    <p className="text-stone-600 text-xs sm:text-sm line-clamp-2 mb-4 leading-relaxed">
                      {room.description}
                    </p>

                    {/* Features list */}
                    <ul className="space-y-1.5 mb-6 text-xs text-stone-600">
                      {room.features.slice(0, 3).map((feat, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-[#AB8D62] shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Price and CTA row */}
                  <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-stone-400 block font-normal">Nightly rate from</span>
                      <span className="font-serif text-2xl font-bold text-stone-900 font-mono tabular-nums">
                        {price}
                      </span>
                      <span className="text-xs text-stone-500"> / night</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => onOpenRoomDetails(room)}
                        className="p-2 text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-lg transition-colors cursor-pointer"
                        title="View room details and features"
                      >
                        <Eye className="w-4 h-4" />
                      </button>

                      <button
                        type="button"
                        onClick={() => onSelectRoom(room)}
                        className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#0A1128] hover:bg-[#AB8D62] rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
                      >
                        <span>Reserve</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
