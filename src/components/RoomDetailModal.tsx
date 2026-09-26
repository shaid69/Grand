import React from 'react';
import { X, Maximize2, Bed, Users, Check, Shield, Coffee, Waves, Wifi, Tv } from 'lucide-react';
import { Room } from '../types/hotel';

interface RoomDetailModalProps {
  room: Room | null;
  onClose: () => void;
  onBook: (room: Room) => void;
  currency: 'BDT' | 'USD';
}

export const RoomDetailModal: React.FC<RoomDetailModalProps> = ({
  room,
  onClose,
  onBook,
  currency,
}) => {
  if (!room) return null;

  const price = currency === 'BDT' ? `৳ ${room.priceBDT.toLocaleString()}` : `$ ${room.priceUSD}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden max-h-[92vh] flex flex-col text-stone-800">
        {/* Close Button Floating */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-white bg-black/50 hover:bg-black/80 rounded-full backdrop-blur-md transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image */}
        <div className="relative aspect-[16/9] w-full bg-stone-900 shrink-0">
          <img
            src={room.image}
            alt={room.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <span className="text-xs uppercase tracking-widest text-[#DFB97F] font-semibold block mb-1">
              {room.category.toUpperCase()} COLLECTION · {room.view}
            </span>
            <h3 className="font-serif text-3xl font-bold">
              {room.name}
            </h3>
          </div>
        </div>

        {/* Scrollable details */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Key Metrics Bar */}
          <div className="grid grid-cols-3 gap-4 p-4 rounded-xl bg-stone-50 border border-stone-200 text-center">
            <div>
              <span className="text-xs text-stone-500 block mb-1 flex items-center justify-center gap-1">
                <Maximize2 className="w-3.5 h-3.5 text-[#AB8D62]" />
                <span>Room Dimension</span>
              </span>
              <span className="font-bold text-base text-stone-900 font-mono tabular-nums">
                {room.sizeSqFt} sq ft
              </span>
            </div>
            <div>
              <span className="text-xs text-stone-500 block mb-1 flex items-center justify-center gap-1">
                <Bed className="w-3.5 h-3.5 text-[#AB8D62]" />
                <span>Bed Configuration</span>
              </span>
              <span className="font-bold text-base text-stone-900">
                {room.bedType}
              </span>
            </div>
            <div>
              <span className="text-xs text-stone-500 block mb-1 flex items-center justify-center gap-1">
                <Users className="w-3.5 h-3.5 text-[#AB8D62]" />
                <span>Max Occupancy</span>
              </span>
              <span className="font-bold text-base text-stone-900">
                {room.occupancy}
              </span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-stone-500 mb-2">
              Accommodation Overview
            </h4>
            <p className="text-stone-700 text-sm leading-relaxed">
              {room.description}
            </p>
          </div>

          {/* Amenities checklist */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-stone-500 mb-3">
              Included Amenities & Suite Inclusions
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {room.features.map((feat, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-stone-700">
                  <Check className="w-4 h-4 text-[#AB8D62] shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Perks */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            <div className="p-3 rounded-lg border border-stone-200 text-center text-xs">
              <Coffee className="w-4 h-4 text-[#AB8D62] mx-auto mb-1" />
              <span className="font-medium text-stone-800 block">Buffet Breakfast</span>
              <span className="text-[10px] text-stone-500">Included daily</span>
            </div>
            <div className="p-3 rounded-lg border border-stone-200 text-center text-xs">
              <Waves className="w-4 h-4 text-[#AB8D62] mx-auto mb-1" />
              <span className="font-medium text-stone-800 block">Infinity Pool</span>
              <span className="text-[10px] text-stone-500">Rooftop access</span>
            </div>
            <div className="p-3 rounded-lg border border-stone-200 text-center text-xs">
              <Wifi className="w-4 h-4 text-[#AB8D62] mx-auto mb-1" />
              <span className="font-medium text-stone-800 block">High-Speed Wi-Fi</span>
              <span className="text-[10px] text-stone-500">Dedicated fibre</span>
            </div>
            <div className="p-3 rounded-lg border border-stone-200 text-center text-xs">
              <Tv className="w-4 h-4 text-[#AB8D62] mx-auto mb-1" />
              <span className="font-medium text-stone-800 block">Smart TV 48"</span>
              <span className="text-[10px] text-stone-500">Satellite channels</span>
            </div>
          </div>

          {/* Policies */}
          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-600 flex items-start gap-3">
            <Shield className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-stone-900 block mb-0.5">Flexible Cancellation</span>
              <span>
                Free cancellation up to 24 hours prior to check-in (14:00 local time). No advance credit card charge required.
              </span>
            </div>
          </div>
        </div>

        {/* Modal Bottom CTA Bar */}
        <div className="px-6 py-4 bg-stone-100 border-t border-stone-200 flex items-center justify-between">
          <div>
            <span className="text-xs text-stone-500 block">Nightly rate from</span>
            <span className="font-serif text-2xl font-bold text-stone-900 font-mono tabular-nums">
              {price}
            </span>
            <span className="text-xs text-stone-500"> / night</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-stone-600 hover:text-stone-900 cursor-pointer"
            >
              Back
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                onBook(room);
              }}
              className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#0A1128] hover:bg-[#AB8D62] rounded-lg transition-colors cursor-pointer shadow-sm"
            >
              Book This Room
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
