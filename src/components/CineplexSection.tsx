import React, { useState } from 'react';
import { Film, Volume2, Armchair, Clock, Ticket, CheckCircle2 } from 'lucide-react';
import { HOTEL_IMAGES, CINEPLEX_SHOWS } from '../data/hotelData';
import { MovieShow } from '../types/hotel';

export const CineplexSection: React.FC = () => {
  const [selectedMovie, setSelectedMovie] = useState<MovieShow | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [ticketsCount, setTicketsCount] = useState(2);
  const [guestPhone, setGuestPhone] = useState('');

  const handleBookTicket = (movie: MovieShow, time: string) => {
    setSelectedMovie(movie);
    setSelectedTime(time);
    setBookingSuccess(false);
  };

  const handleConfirmCineplex = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestPhone) return;
    setBookingSuccess(true);
  };

  return (
    <section id="cineplex" className="py-24 bg-stone-900 text-stone-100 relative overflow-hidden">
      {/* Decorative subtle ambient backdrop */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <img
          src={HOTEL_IMAGES.cineplex}
          alt="Cineplex background"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover blur-2xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#DFB97F] font-semibold mb-2">
              <Film className="w-3.5 h-3.5" />
              <span>City’s Premier Cinema Experience</span>
            </div>
            <h2
              className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white"
              style={{ textWrap: 'balance' }}
            >
              GRV 4K VIP Cineplex
            </h2>
            <p className="text-stone-400 text-sm sm:text-base max-w-2xl mt-3 leading-relaxed">
              Grand Riverview is home to Rajshahi’s exclusive boutique 4K Cineplex. Sink into motorized
              leather recliners and revel in cinema sound calibrated to perfection.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs text-stone-300">
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-stone-800/80 border border-stone-700">
              <Volume2 className="w-3.5 h-3.5 text-[#DFB97F]" />
              <span>Dolby Atmos Audio</span>
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-stone-800/80 border border-stone-700">
              <Armchair className="w-3.5 h-3.5 text-[#DFB97F]" />
              <span>Electric VIP Recliners</span>
            </span>
          </div>
        </div>

        {/* Feature Spotlight Banner & Schedule Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Left Column: Image Card */}
          <div className="lg:col-span-5 rounded-2xl overflow-hidden bg-stone-950 border border-stone-800 shadow-2xl">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={HOTEL_IMAGES.cineplex}
                alt="GRV 4K VIP Cineplex Auditorium"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white text-xs">
                <span className="font-semibold block text-[#DFB97F]">Luxury Screening Hall</span>
                <span>Motorized recliners with in-seat gourmet dining service</span>
              </div>
            </div>

            <div className="p-6">
              <h3 className="font-serif text-xl font-bold text-white mb-2">
                Private Auditorium Screenings
              </h3>
              <p className="text-xs text-stone-400 leading-relaxed mb-4">
                Host unforgettable private screenings, birthday cinema parties, or corporate launches in our VIP theater.
                Custom food & beverage packages curated by Karnaphuli chefs.
              </p>
              <div className="text-xs text-[#DFB97F] font-mono">
                Daily Box Office: +880 1877-766966
              </div>
            </div>
          </div>

          {/* Right Column: Today's Showtimes & Instant Reservation */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-stone-800">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-300">
                Now Showing · Today's Screenings
              </h3>
              <span className="text-xs text-stone-500 font-mono">Select a time to reserve tickets</span>
            </div>

            <div className="space-y-4">
              {CINEPLEX_SHOWS.map((movie) => (
                <div
                  key={movie.id}
                  className="p-5 rounded-xl bg-stone-950/70 border border-stone-800 hover:border-[#DFB97F]/40 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="max-w-md">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-mono px-2 py-0.5 rounded bg-stone-800 text-[#DFB97F]">
                        {movie.rating}
                      </span>
                      <span className="text-xs text-stone-400 font-mono">
                        {movie.runtime}
                      </span>
                      <span aria-hidden="true" className="text-stone-600">·</span>
                      <span className="text-xs text-stone-400">{movie.genre}</span>
                    </div>

                    <h4 className="font-serif text-xl font-bold text-white mb-1">
                      {movie.title}
                    </h4>

                    <p className="text-xs text-stone-400 flex items-center gap-1.5">
                      <Volume2 className="w-3.5 h-3.5 text-[#DFB97F]" />
                      <span>{movie.hall}</span>
                    </p>
                  </div>

                  {/* Showtimes */}
                  <div className="flex flex-wrap gap-2 shrink-0">
                    {movie.times.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => handleBookTicket(movie, time)}
                        className="px-3 py-1.5 text-xs font-medium rounded border border-stone-700 hover:border-[#DFB97F] hover:bg-[#DFB97F] hover:text-[#0A1128] transition-all flex items-center gap-1 cursor-pointer font-mono"
                      >
                        <Clock className="w-3 h-3" />
                        <span>{time}</span>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* In-Line Ticket Modal/Drawer if a movie is selected */}
            {selectedMovie && (
              <div className="mt-6 p-6 rounded-xl bg-stone-950 border border-[#DFB97F]/40 shadow-xl animate-in fade-in duration-300">
                {!bookingSuccess ? (
                  <form onSubmit={handleConfirmCineplex} className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs uppercase tracking-wider text-[#DFB97F] font-semibold">
                          Confirming VIP Seats
                        </span>
                        <h4 className="font-serif text-lg font-bold text-white">
                          {selectedMovie.title} at {selectedTime}
                        </h4>
                      </div>
                      <button
                        type="button"
                        onClick={() => setSelectedMovie(null)}
                        className="text-xs text-stone-400 hover:text-white"
                      >
                        Change Movie
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs text-stone-400 mb-1">
                          VIP Recliner Tickets (৳ 650 / seat)
                        </label>
                        <select
                          value={ticketsCount}
                          onChange={(e) => setTicketsCount(Number(e.target.value))}
                          className="w-full bg-stone-900 border border-stone-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-[#DFB97F]"
                        >
                          <option value={1}>1 VIP Recliner (৳ 650)</option>
                          <option value={2}>2 VIP Recliners (৳ 1,300)</option>
                          <option value={3}>3 VIP Recliners (৳ 1,950)</option>
                          <option value={4}>4 VIP Recliners (৳ 2,600)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs text-stone-400 mb-1">
                          Mobile Number for SMS Ticket Voucher
                        </label>
                        <input
                          type="tel"
                          placeholder="+880 17XX-XXXXXX"
                          value={guestPhone}
                          onChange={(e) => setGuestPhone(e.target.value)}
                          required
                          className="w-full bg-stone-900 border border-stone-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-[#DFB97F]"
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <div className="text-xs text-stone-400">
                        Total:{' '}
                        <span className="font-bold text-white font-mono">
                          ৳ {(ticketsCount * 650).toLocaleString()} BDT
                        </span>{' '}
                        (Payable at Cineplex Box Office)
                      </div>
                      <button
                        type="submit"
                        className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-[#0A1128] bg-[#DFB97F] hover:bg-[#EAD09F] rounded-lg transition-colors cursor-pointer flex items-center gap-1.5"
                      >
                        <Ticket className="w-3.5 h-3.5" />
                        <span>Reserve Seats Now</span>
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="text-center py-4">
                    <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto mb-2" />
                    <h4 className="font-serif text-xl font-bold text-white mb-1">
                      Seats Reserved Successfully!
                    </h4>
                    <p className="text-xs text-stone-300 max-w-md mx-auto mb-4">
                      Your VIP seats for{' '}
                      <span className="text-[#DFB97F] font-semibold">{selectedMovie.title}</span> at{' '}
                      <span className="text-[#DFB97F] font-semibold">{selectedTime}</span> ({ticketsCount} Recliners)
                      are held under mobile number <span className="font-mono text-white">{guestPhone}</span>.
                      Please present this at the Cineplex Box Office 20 minutes prior to showtime.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedMovie(null);
                        setBookingSuccess(false);
                      }}
                      className="px-4 py-1.5 text-xs font-semibold text-[#0A1128] bg-[#DFB97F] rounded"
                    >
                      Close Confirmation
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
