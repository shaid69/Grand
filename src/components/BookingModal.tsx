import React, { useState } from 'react';
import { X, Calendar, User, Phone, Mail, CheckCircle2, Copy, Check, BedDouble, PlaneTakeoff, ShieldCheck } from 'lucide-react';
import { Room } from '../types/hotel';
import { HOTEL_INFO, ROOMS } from '../data/hotelData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedRoom: Room | null;
  currency: 'BDT' | 'USD';
  initialParams?: {
    checkIn?: string;
    checkOut?: string;
    adults?: number;
    children?: number;
  };
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  selectedRoom,
  currency,
  initialParams,
}) => {
  if (!isOpen) return null;

  const today = new Date().toISOString().split('T')[0];
  const nextDay = new Date(Date.now() + 2 * 24 * 60 * 60 * 1000)
    .toISOString()
    .split('T')[0];

  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [currentRoom, setCurrentRoom] = useState<Room>(selectedRoom || ROOMS[0]);
  const [checkIn, setCheckIn] = useState(initialParams?.checkIn || today);
  const [checkOut, setCheckOut] = useState(initialParams?.checkOut || nextDay);
  const [adults, setAdults] = useState(initialParams?.adults || 2);
  const [children, setChildren] = useState(initialParams?.children || 0);
  const [roomsCount, setRoomsCount] = useState(1);
  const [needAirportTransfer, setNeedAirportTransfer] = useState(false);

  // Guest details
  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [nidPassport, setNidPassport] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');

  // Booking Result
  const [bookingRef, setBookingRef] = useState('');
  const [copied, setCopied] = useState(false);

  // Calculate nights
  const checkInDate = new Date(checkIn);
  const checkOutDate = new Date(checkOut);
  const diffTime = Math.max(1, checkOutDate.getTime() - checkInDate.getTime());
  const nights = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) || 1;

  // Costs
  const nightlyBDT = currentRoom.priceBDT;
  const nightlyUSD = currentRoom.priceUSD;
  const baseCostBDT = nightlyBDT * nights * roomsCount;
  const baseCostUSD = nightlyUSD * nights * roomsCount;
  const airportCostBDT = needAirportTransfer ? 1500 : 0;
  const airportCostUSD = needAirportTransfer ? 12 : 0;

  const totalCostBDT = baseCostBDT + airportCostBDT;
  const totalCostUSD = baseCostUSD + airportCostUSD;

  const handleNextToGuest = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handleConfirmReservation = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName || !guestEmail || !guestPhone) return;
    const refCode = `GRV-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(refCode);
    setStep(3);
  };

  const copyBookingCode = () => {
    navigator.clipboard.writeText(bookingRef);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden max-h-[90vh] flex flex-col">
        {/* Modal Top Header */}
        <div className="px-6 py-4 bg-[#0A1128] text-white flex items-center justify-between border-b border-stone-800">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#DFB97F] font-medium block">
              Grand Riverview Hotel Reservation
            </span>
            <h3 className="font-serif text-xl font-bold">
              {step === 1 && 'Dates & Accommodation'}
              {step === 2 && 'Guest Information & Preferences'}
              {step === 3 && 'Reservation Confirmed'}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-white rounded-lg hover:bg-stone-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Stepper indicator */}
        <div className="px-6 py-2.5 bg-stone-100 border-b border-stone-200 flex items-center justify-between text-xs font-medium text-stone-600">
          <span className={step >= 1 ? 'text-[#AB8D62] font-semibold' : ''}>
            1. Select Room & Dates
          </span>
          <span>→</span>
          <span className={step >= 2 ? 'text-[#AB8D62] font-semibold' : ''}>
            2. Guest Information
          </span>
          <span>→</span>
          <span className={step === 3 ? 'text-emerald-700 font-semibold' : ''}>
            3. Confirmation
          </span>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1 text-stone-800">
          {/* STEP 1: Dates & Room */}
          {step === 1 && (
            <form onSubmit={handleNextToGuest} className="space-y-5">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1.5">
                  Select Accommodation
                </label>
                <select
                  value={currentRoom.id}
                  onChange={(e) => {
                    const r = ROOMS.find((item) => item.id === e.target.value);
                    if (r) setCurrentRoom(r);
                  }}
                  className="w-full bg-stone-50 border border-stone-300 rounded-lg px-3.5 py-2.5 text-sm font-medium text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#C5A880]"
                >
                  {ROOMS.map((r) => (
                    <option key={r.id} value={r.id}>
                      {r.name} — {currency === 'BDT' ? `৳ ${r.priceBDT.toLocaleString()}` : `$ ${r.priceUSD}`} / night ({r.view})
                    </option>
                  ))}
                </select>
              </div>

              {/* Check-In / Check-Out */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1.5 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#AB8D62]" />
                    <span>Check-In Date</span>
                  </label>
                  <input
                    type="date"
                    min={today}
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    required
                    className="w-full bg-stone-50 border border-stone-300 rounded-lg px-3.5 py-2 text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#C5A880]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1.5 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#AB8D62]" />
                    <span>Check-Out Date</span>
                  </label>
                  <input
                    type="date"
                    min={checkIn || today}
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    required
                    className="w-full bg-stone-50 border border-stone-300 rounded-lg px-3.5 py-2 text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#C5A880]"
                  />
                </div>
              </div>

              {/* Guest Counts */}
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-medium text-stone-600 mb-1">
                    Adults
                  </label>
                  <select
                    value={adults}
                    onChange={(e) => setAdults(Number(e.target.value))}
                    className="w-full bg-stone-50 border border-stone-300 rounded-lg px-3 py-2 text-sm text-stone-900"
                  >
                    <option value={1}>1 Adult</option>
                    <option value={2}>2 Adults</option>
                    <option value={3}>3 Adults</option>
                    <option value={4}>4 Adults</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-stone-600 mb-1">
                    Children
                  </label>
                  <select
                    value={children}
                    onChange={(e) => setChildren(Number(e.target.value))}
                    className="w-full bg-stone-50 border border-stone-300 rounded-lg px-3 py-2 text-sm text-stone-900"
                  >
                    <option value={0}>0 Child</option>
                    <option value={1}>1 Child</option>
                    <option value={2}>2 Children</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-stone-600 mb-1">
                    Rooms
                  </label>
                  <select
                    value={roomsCount}
                    onChange={(e) => setRoomsCount(Number(e.target.value))}
                    className="w-full bg-stone-50 border border-stone-300 rounded-lg px-3 py-2 text-sm text-stone-900"
                  >
                    <option value={1}>1 Room</option>
                    <option value={2}>2 Rooms</option>
                    <option value={3}>3 Rooms</option>
                  </select>
                </div>
              </div>

              {/* Add Airport Transfer Addon */}
              <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <PlaneTakeoff className="w-5 h-5 text-[#AB8D62]" />
                  <div>
                    <span className="text-xs font-semibold text-stone-900 block">
                      Shah Makhdum Airport (RJH) Chauffeur Transfer
                    </span>
                    <span className="text-[11px] text-stone-500">
                      Private air-conditioned sedan greeting at Rajshahi airport
                    </span>
                  </div>
                </div>
                <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-stone-800">
                  <input
                    type="checkbox"
                    checked={needAirportTransfer}
                    onChange={(e) => setNeedAirportTransfer(e.target.checked)}
                    className="rounded text-[#0A1128] focus:ring-[#C5A880] w-4 h-4"
                  />
                  <span>+৳1,500</span>
                </label>
              </div>

              {/* Price Calculation Summary Box */}
              <div className="p-4 rounded-xl bg-[#FAF8F5] border border-stone-200 space-y-2 text-xs">
                <div className="flex justify-between text-stone-600">
                  <span>
                    {currentRoom.name} ({nights} {nights === 1 ? 'night' : 'nights'} × {roomsCount} room)
                  </span>
                  <span className="font-mono tabular-nums font-semibold">
                    {currency === 'BDT' ? `৳ ${baseCostBDT.toLocaleString()}` : `$ ${baseCostUSD}`}
                  </span>
                </div>
                {needAirportTransfer && (
                  <div className="flex justify-between text-stone-600">
                    <span>Airport Transfer</span>
                    <span className="font-mono tabular-nums font-semibold">
                      {currency === 'BDT' ? `৳ 1,500` : `$ 12`}
                    </span>
                  </div>
                )}
                <div className="flex justify-between text-stone-600">
                  <span>Complimentary Buffet Breakfast at Karnaphuli</span>
                  <span className="text-emerald-700 font-semibold">Included</span>
                </div>
                <div className="flex justify-between text-stone-600">
                  <span>Rooftop Infinity Pool & Health Club Access</span>
                  <span className="text-emerald-700 font-semibold">Included</span>
                </div>
                <div className="pt-2 border-t border-stone-200 flex justify-between text-sm font-bold text-stone-900">
                  <span>Estimated Total (Taxes Included)</span>
                  <span className="font-serif text-lg text-[#AB8D62] font-mono tabular-nums">
                    {currency === 'BDT' ? `৳ ${totalCostBDT.toLocaleString()} BDT` : `$ ${totalCostUSD} USD`}
                  </span>
                </div>
              </div>

              {/* Action */}
              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#0A1128] hover:bg-[#AB8D62] rounded-lg transition-colors cursor-pointer"
                >
                  Continue to Guest Details →
                </button>
              </div>
            </form>
          )}

          {/* STEP 2: Guest Details */}
          {step === 2 && (
            <form onSubmit={handleConfirmReservation} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#AB8D62]" />
                    <span>Primary Guest Name *</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Mahfuzur Rahman"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-300 rounded-lg px-3 py-2 text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#C5A880]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#AB8D62]" />
                    <span>Mobile Phone Number *</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+880 18XX-XXXXXX"
                    value={guestPhone}
                    onChange={(e) => setGuestPhone(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-300 rounded-lg px-3 py-2 text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#C5A880]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#AB8D62]" />
                    <span>Email for Confirmation *</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={guestEmail}
                    onChange={(e) => setGuestEmail(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-300 rounded-lg px-3 py-2 text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#C5A880]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    National ID or Passport (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="NID / Passport Number"
                    value={nidPassport}
                    onChange={(e) => setNidPassport(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-300 rounded-lg px-3 py-2 text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#C5A880]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">
                  Special Requests / Arrival Notes (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="River view preference, early check-in request, extra pillows, floral setup..."
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-300 rounded-lg px-3 py-2 text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#C5A880] resize-none"
                />
              </div>

              <div className="p-3 bg-stone-50 rounded-lg border border-stone-200 text-xs text-stone-600 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>No advance deposit required. Pay at the hotel upon check-in with Card, Cash, or bKash.</span>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-4 py-2 text-xs font-semibold text-stone-600 hover:text-stone-900 cursor-pointer"
                >
                  ← Back to Dates
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#0A1128] hover:bg-[#AB8D62] rounded-lg transition-colors cursor-pointer"
                >
                  Confirm & Generate Booking Voucher
                </button>
              </div>
            </form>
          )}

          {/* STEP 3: Confirmed Voucher */}
          {step === 3 && (
            <div className="text-center py-4 space-y-5">
              <div className="w-14 h-14 bg-emerald-50 rounded-full flex items-center justify-center mx-auto text-emerald-600 border border-emerald-200">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs uppercase tracking-widest text-[#AB8D62] font-bold block mb-1">
                  Reservation Held
                </span>
                <h3 className="font-serif text-2xl font-bold text-stone-900">
                  Thank You, {guestName}!
                </h3>
                <p className="text-xs text-stone-500 max-w-md mx-auto mt-1">
                  We look forward to welcoming you to Grand Riverview Hotel in Rajshahi. A confirmation email
                  has been dispatched to <span className="font-semibold text-stone-800">{guestEmail}</span>.
                </p>
              </div>

              {/* Reference Code Box */}
              <div className="p-4 bg-stone-50 border border-stone-200 rounded-xl max-w-md mx-auto text-left space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-stone-200">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-stone-500 block">
                      Booking Reference Number
                    </span>
                    <span className="font-mono text-xl font-bold text-[#0A1128]">
                      {bookingRef}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={copyBookingCode}
                    className="p-2 text-stone-600 hover:text-stone-900 bg-white border border-stone-200 rounded-lg flex items-center gap-1.5 text-xs"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs text-stone-600">
                  <div>
                    <span className="text-stone-400 block">Room</span>
                    <span className="font-medium text-stone-900">{currentRoom.name}</span>
                  </div>
                  <div>
                    <span className="text-stone-400 block">Dates</span>
                    <span className="font-medium text-stone-900 font-mono">
                      {checkIn} to {checkOut} ({nights}N)
                    </span>
                  </div>
                  <div>
                    <span className="text-stone-400 block">Guests</span>
                    <span className="font-medium text-stone-900">
                      {adults} Adults, {children} Kids
                    </span>
                  </div>
                  <div>
                    <span className="text-stone-400 block">Payable at Front Desk</span>
                    <span className="font-bold text-[#AB8D62] font-mono">
                      {currency === 'BDT' ? `৳ ${totalCostBDT.toLocaleString()} BDT` : `$ ${totalCostUSD} USD`}
                    </span>
                  </div>
                </div>

                <div className="pt-2 text-[11px] text-stone-500 border-t border-stone-200">
                  <span>Hotel Address: {HOTEL_INFO.address} · Hotline: {HOTEL_INFO.phone1}</span>
                </div>
              </div>

              {/* Close / Done */}
              <div className="pt-2 flex justify-center gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#0A1128] hover:bg-stone-800 rounded-lg transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
