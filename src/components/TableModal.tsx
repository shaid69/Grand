import React, { useState } from 'react';
import { X, Calendar, Clock, Users, Utensils, CheckCircle2 } from 'lucide-react';
import { DINING_VENUES } from '../data/hotelData';

interface TableModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultVenueName?: string;
}

export const TableModal: React.FC<TableModalProps> = ({
  isOpen,
  onClose,
  defaultVenueName,
}) => {
  if (!isOpen) return null;

  const today = new Date().toISOString().split('T')[0];

  const [venue, setVenue] = useState(
    defaultVenueName || DINING_VENUES[0].name
  );
  const [date, setDate] = useState(today);
  const [time, setTime] = useState('19:30');
  const [guests, setGuests] = useState(2);
  const [preference, setPreference] = useState('Padma River View Window');
  const [guestName, setGuestName] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [reservationCode, setReservationCode] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName || !guestPhone) return;
    const code = `DINE-${Math.floor(1000 + Math.random() * 9000)}`;
    setReservationCode(code);
    setConfirmed(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden text-stone-800">
        {/* Header */}
        <div className="px-6 py-4 bg-[#0A1128] text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Utensils className="w-5 h-5 text-[#DFB97F]" />
            <div>
              <span className="text-xs uppercase tracking-widest text-[#DFB97F] font-semibold block">
                Grand Riverview Gastronomy
              </span>
              <h3 className="font-serif text-xl font-bold">Reserve a Dining Table</h3>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-white rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {!confirmed ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1">
                  Restaurant Venue
                </label>
                <select
                  value={venue}
                  onChange={(e) => setVenue(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-300 rounded-lg px-3 py-2 text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#C5A880]"
                >
                  {DINING_VENUES.map((v) => (
                    <option key={v.id} value={v.name}>
                      {v.name} ({v.level})
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#AB8D62]" />
                    <span>Date</span>
                  </label>
                  <input
                    type="date"
                    min={today}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                    className="w-full bg-stone-50 border border-stone-300 rounded-lg px-3 py-2 text-sm text-stone-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#AB8D62]" />
                    <span>Time</span>
                  </label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-300 rounded-lg px-3 py-2 text-sm text-stone-900"
                  >
                    <option value="12:30">12:30 PM (Lunch)</option>
                    <option value="13:30">01:30 PM (Lunch)</option>
                    <option value="18:30">06:30 PM (Dinner)</option>
                    <option value="19:30">07:30 PM (Dinner)</option>
                    <option value="20:30">08:30 PM (Dinner)</option>
                    <option value="21:30">09:30 PM (Late Dinner)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1 flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-[#AB8D62]" />
                    <span>Party Size</span>
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                    className="w-full bg-stone-50 border border-stone-300 rounded-lg px-3 py-2 text-sm text-stone-900"
                  >
                    {[1, 2, 3, 4, 5, 6, 8, 10, 12].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1">
                    Seating Area
                  </label>
                  <select
                    value={preference}
                    onChange={(e) => setPreference(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-300 rounded-lg px-3 py-2 text-sm text-stone-900 truncate"
                  >
                    <option value="Padma River View Window">Padma Riverview Window</option>
                    <option value="Level 10 Rooftop Open Air">Level 10 Rooftop Breeze</option>
                    <option value="Quiet Center Dining">Intimate Center Dining</option>
                    <option value="Private Family Alcove">Private Family Alcove</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-stone-600 mb-1">
                    Contact Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Guest Name"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-300 rounded-lg px-3 py-2 text-sm text-stone-900"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-600 mb-1">
                    Mobile Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+880 18XX-XXXXXX"
                    value={guestPhone}
                    onChange={(e) => setGuestPhone(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-300 rounded-lg px-3 py-2 text-sm text-stone-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-600 mb-1">
                  Special Dining Notes (Optional)
                </label>
                <input
                  type="text"
                  placeholder="Birthday cake setup, high chair needed, dietary restrictions..."
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-300 rounded-lg px-3 py-2 text-sm text-stone-900"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-semibold text-stone-600 hover:text-stone-900 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#0A1128] hover:bg-[#AB8D62] rounded-lg transition-colors cursor-pointer"
                >
                  Confirm Table Booking
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-6 space-y-4">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h4 className="font-serif text-2xl font-bold text-stone-900">
                Table Reserved!
              </h4>
              <p className="text-xs text-stone-600 max-w-sm mx-auto">
                Thank you, <span className="font-semibold">{guestName}</span>. Your table for{' '}
                <span className="font-semibold">{guests} Guests</span> at{' '}
                <span className="text-[#AB8D62] font-semibold">{venue}</span> on{' '}
                <span className="font-semibold">{date} at {time}</span> has been confirmed.
              </p>
              <div className="p-3 bg-stone-100 rounded-lg font-mono text-sm font-bold text-[#0A1128] max-w-xs mx-auto">
                Pass Code: {reservationCode}
              </div>
              <p className="text-[11px] text-stone-400">
                Tables are held for 15 minutes past reserved time. Please contact the front desk if delayed.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2 text-xs font-semibold text-white bg-[#0A1128] rounded-lg"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
