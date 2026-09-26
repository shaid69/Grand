import React, { useState } from 'react';
import { Calendar, Users, BedDouble, Search } from 'lucide-react';
import { ROOMS } from '../data/hotelData';
import { Room } from '../types/hotel';

interface BookingBarProps {
  onSearch: (params: {
    checkIn: string;
    checkOut: string;
    roomId: string;
    adults: number;
    children: number;
  }) => void;
}

export const BookingBar: React.FC<BookingBarProps> = ({ onSearch }) => {
  // Generate sensible defaults for today and day after
  const today = new Date().toISOString().split('T')[0];
  const nextDay = new Date(Date.now() + 2 * 24 * 60 * 60 * 1000)
    .toISOString()
    .split('T')[0];

  const [checkIn, setCheckIn] = useState(today);
  const [checkOut, setCheckOut] = useState(nextDay);
  const [selectedRoomId, setSelectedRoomId] = useState(ROOMS[0].id);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({
      checkIn,
      checkOut,
      roomId: selectedRoomId,
      adults,
      children,
    });
  };

  return (
    <div className="relative z-20 -mt-8 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="bg-white rounded-xl shadow-2xl border border-stone-200/80 p-4 sm:p-6 text-stone-800">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end"
        >
          {/* Check-In */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold uppercase tracking-wider text-stone-500 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#AB8D62]" />
              <span>Check-In</span>
            </label>
            <input
              type="date"
              value={checkIn}
              min={today}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3 py-2 text-sm font-medium text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#C5A880] transition-colors"
              required
            />
          </div>

          {/* Check-Out */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold uppercase tracking-wider text-stone-500 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#AB8D62]" />
              <span>Check-Out</span>
            </label>
            <input
              type="date"
              value={checkOut}
              min={checkIn || today}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3 py-2 text-sm font-medium text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#C5A880] transition-colors"
              required
            />
          </div>

          {/* Room Type */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold uppercase tracking-wider text-stone-500 flex items-center gap-1.5">
              <BedDouble className="w-3.5 h-3.5 text-[#AB8D62]" />
              <span>Accommodation</span>
            </label>
            <select
              value={selectedRoomId}
              onChange={(e) => setSelectedRoomId(e.target.value)}
              className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3 py-2 text-sm font-medium text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#C5A880] transition-colors truncate"
            >
              {ROOMS.map((r: Room) => (
                <option key={r.id} value={r.id}>
                  {r.name}
                </option>
              ))}
            </select>
          </div>

          {/* Guests */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold uppercase tracking-wider text-stone-500 flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-[#AB8D62]" />
              <span>Guests</span>
            </label>
            <div className="flex items-center gap-2">
              <select
                value={adults}
                onChange={(e) => setAdults(Number(e.target.value))}
                className="w-1/2 bg-stone-50 border border-stone-200 rounded-lg px-2.5 py-2 text-sm font-medium text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#C5A880]"
              >
                <option value={1}>1 Adult</option>
                <option value={2}>2 Adults</option>
                <option value={3}>3 Adults</option>
                <option value={4}>4 Adults</option>
              </select>
              <select
                value={children}
                onChange={(e) => setChildren(Number(e.target.value))}
                className="w-1/2 bg-stone-50 border border-stone-200 rounded-lg px-2.5 py-2 text-sm font-medium text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#C5A880]"
              >
                <option value={0}>0 Child</option>
                <option value={1}>1 Child</option>
                <option value={2}>2 Kids</option>
              </select>
            </div>
          </div>

          {/* Submit Action */}
          <div className="space-y-1.5">
            <span className="hidden lg:block text-xs font-semibold uppercase tracking-wider text-transparent select-none">
              Search
            </span>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold uppercase tracking-wider text-white bg-[#0A1128] hover:bg-[#162248] rounded-lg transition-colors shadow hover:shadow-md cursor-pointer whitespace-nowrap"
            >
              <Search className="w-4 h-4 text-[#DFB97F]" />
              <span>Search Rates</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
