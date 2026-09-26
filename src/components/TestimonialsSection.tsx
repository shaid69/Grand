import React from 'react';
import { Star, Quote, CheckCircle } from 'lucide-react';
import { HOTEL_INFO, TESTIMONIALS } from '../data/hotelData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-widest text-[#AB8D62] font-semibold mb-2">
            Guest Testimonials & Trust
          </p>
          <h2
            className="font-serif text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight mb-4"
            style={{ textWrap: 'balance' }}
          >
            Endorsed by Travelers from Around the Globe
          </h2>
          <div className="flex items-center justify-center gap-2 text-stone-600 text-sm">
            <div className="flex items-center text-[#AB8D62]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#AB8D62]" />
              ))}
            </div>
            <span className="font-semibold text-stone-900 font-mono">
              {HOTEL_INFO.googleRating} out of 5.0
            </span>
            <span aria-hidden="true">·</span>
            <span>Based on {HOTEL_INFO.reviewCount.toLocaleString()} verified Google reviews</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-2xl bg-[#FAF8F5] border border-stone-200 flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-[#AB8D62]/40 mb-4" />
                <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-6 font-light">
                  "{item.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-stone-200/80 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0A1128] text-[#DFB97F] flex items-center justify-center font-bold text-xs">
                  {item.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-xs sm:text-sm text-stone-900 flex items-center gap-1.5">
                    <span>{item.name}</span>
                    <span title="Verified Guest">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                    </span>
                  </h4>
                  <p className="text-[11px] text-stone-500">{item.role}</p>
                  <p className="text-[10px] text-[#AB8D62] font-medium mt-0.5">{item.stayType}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
