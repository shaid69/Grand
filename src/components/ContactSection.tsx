import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Car, Train, Plane } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Room Reservation Inquiry',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#0A1128] text-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-widest text-[#DFB97F] font-semibold mb-2">
            Connect With Us
          </p>
          <h2
            className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4"
            style={{ textWrap: 'balance' }}
          >
            Location, Directions & Concierge
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            Conveniently situated at Kazihata by C&B Mor in central Rajshahi, minutes away from the Padma River
            and key administrative institutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Details & Transit Info (Col-span-5) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-2xl bg-[#060C1C] border border-stone-800 space-y-6">
              <h3 className="font-serif text-2xl font-bold text-white mb-2">
                Grand Riverview Hotel
              </h3>

              <div className="space-y-4 text-sm text-stone-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#DFB97F] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Address</span>
                    <span>{HOTEL_INFO.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#DFB97F] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">24/7 Hotlines</span>
                    <a
                      href={`tel:${HOTEL_INFO.phone1}`}
                      className="hover:text-[#DFB97F] transition-colors block font-mono"
                    >
                      {HOTEL_INFO.phone1}
                    </a>
                    <a
                      href={`tel:${HOTEL_INFO.phone2}`}
                      className="hover:text-[#DFB97F] transition-colors block font-mono"
                    >
                      {HOTEL_INFO.phone2}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#DFB97F] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Email Reservations</span>
                    <a
                      href={`mailto:${HOTEL_INFO.email}`}
                      className="hover:text-[#DFB97F] transition-colors"
                    >
                      {HOTEL_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#DFB97F] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Check-In / Out Schedule</span>
                    <p className="text-xs text-stone-400">
                      Check-in: {HOTEL_INFO.checkInTime} · Check-out: {HOTEL_INFO.checkOutTime}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Proximity & Transit */}
            <div className="p-6 rounded-2xl bg-[#060C1C] border border-stone-800">
              <h4 className="text-xs uppercase tracking-wider text-[#DFB97F] font-semibold mb-4">
                Getting Here
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-stone-300">
                <div className="flex items-center gap-2.5">
                  <Plane className="w-4 h-4 text-[#DFB97F] shrink-0" />
                  <div>
                    <span className="font-semibold text-white block">Airport</span>
                    <span className="text-stone-400">10 km (20 mins)</span>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <Train className="w-4 h-4 text-[#DFB97F] shrink-0" />
                  <div>
                    <span className="font-semibold text-white block">Railway</span>
                    <span className="text-stone-400">3 km (8 mins)</span>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <Car className="w-4 h-4 text-[#DFB97F] shrink-0" />
                  <div>
                    <span className="font-semibold text-white block">Padma River</span>
                    <span className="text-stone-400">300 meters</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Inquiry Form (Col-span-7) */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-2xl bg-[#060C1C] border border-stone-800">
            <h3 className="font-serif text-2xl font-bold text-white mb-2">
              Send an Inquiry to Front Desk
            </h3>
            <p className="text-xs text-stone-400 mb-6">
              Inquire about room reservations, wedding banquet hall bookings, or corporate event catering.
              Our guest services team replies within 2 hours.
            </p>

            {submitted ? (
              <div className="text-center py-12 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-[#DFB97F] mx-auto" />
                <h4 className="font-serif text-2xl font-bold text-white">
                  Thank You, {formData.name}
                </h4>
                <p className="text-xs text-stone-300 max-w-md mx-auto">
                  Your message regarding{' '}
                  <span className="text-[#DFB97F] font-medium">{formData.subject}</span> has been
                  received by the Grand Riverview Hotel management team. We will call you back at{' '}
                  <span className="font-mono text-white">{formData.phone || formData.email}</span> shortly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      subject: 'Room Reservation Inquiry',
                      message: '',
                    });
                  }}
                  className="mt-4 px-5 py-2 text-xs font-semibold text-[#0A1128] bg-[#DFB97F] rounded-lg"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-stone-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mahfuzur Rahman"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-stone-900 border border-stone-700 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-stone-500 focus:outline-none focus:border-[#DFB97F] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-stone-300 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-stone-900 border border-stone-700 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-stone-500 focus:outline-none focus:border-[#DFB97F] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-stone-300 mb-1">
                      Contact Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+880 18XX-XXXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-stone-900 border border-stone-700 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-stone-500 focus:outline-none focus:border-[#DFB97F] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-stone-300 mb-1">
                      Inquiry Category
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-stone-900 border border-stone-700 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#DFB97F] transition-colors"
                    >
                      <option value="Room Reservation Inquiry">Room Reservation</option>
                      <option value="Grand Ballroom / Wedding Banquet">Grand Ballroom / Wedding Banquet</option>
                      <option value="Corporate Conference Meeting">Corporate Conference</option>
                      <option value="Karnaphuli Restaurant Group Dining">Karnaphuli Dining</option>
                      <option value="GRV 4K Cineplex Booking">4K Cineplex Screening</option>
                      <option value="General Concierge Assistance">General Concierge</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-300 mb-1">
                    Your Message / Specific Requirements *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Provide preferred dates, guest count, or catering questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-stone-900 border border-stone-700 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-stone-500 focus:outline-none focus:border-[#DFB97F] transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <p className="text-xs text-stone-400">
                    We honor your privacy and never share your details.
                  </p>
                  <button
                    type="submit"
                    className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#0A1128] bg-gradient-to-r from-[#DFB97F] to-[#C5A880] hover:from-[#EAD09F] hover:to-[#DFB97F] rounded-lg transition-all flex items-center gap-2 cursor-pointer shadow-md"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Inquiry</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
