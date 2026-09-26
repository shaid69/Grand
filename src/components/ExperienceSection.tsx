import React from 'react';
import { Compass, Clock, MapPin, ExternalLink } from 'lucide-react';
import { LOCAL_EXPERIENCES } from '../data/hotelData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experiences" className="py-24 bg-[#FAF8F5] border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#AB8D62] font-semibold mb-2">
            <Compass className="w-3.5 h-3.5 text-[#AB8D62]" />
            <span>Discover Rajshahi</span>
          </div>
          <h2
            className="font-serif text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight mb-4"
            style={{ textWrap: 'balance' }}
          >
            Padma Riverfront & Heritage Excursions
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Positioned at Kazihata by C&B Mor, Grand Riverview is the ideal launchpad to explore
            the silk craftsmanship, ancient terracotta palaces, and breathtaking delta sunsets of Rajshahi.
          </p>
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {LOCAL_EXPERIENCES.map((exp, index) => (
            <div
              key={exp.id}
              className="bg-white rounded-xl p-6 border border-stone-200 shadow-sm hover:shadow-md hover:border-[#AB8D62]/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-stone-500 mb-3 font-mono">
                  <span className="text-[#AB8D62] font-semibold">0{index + 1}.</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-stone-400" />
                    <span>{exp.duration}</span>
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-stone-900 mb-2">
                  {exp.title}
                </h3>

                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-4">
                  {exp.description}
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs">
                <span className="flex items-center gap-1 text-stone-500">
                  <MapPin className="w-3.5 h-3.5 text-[#AB8D62]" />
                  <span>{exp.distance}</span>
                </span>

                <a
                  href="#contact"
                  className="text-[#AB8D62] hover:text-stone-900 font-medium inline-flex items-center gap-1 transition-colors"
                >
                  <span>Concierge Tour</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Concierge Assistance Callout */}
        <div className="mt-12 p-6 rounded-xl bg-stone-100 border border-stone-200 text-center max-w-2xl mx-auto">
          <p className="text-xs text-stone-600">
            Our 24-hour concierge desk organizes chauffeured vehicle rentals, professional English/Bengali guides,
            and private sunset boat charters on the Padma River. Speak with our front desk upon arrival or call <span className="font-mono text-stone-900 font-semibold">+880 1877-766966</span>.
          </p>
        </div>
      </div>
    </section>
  );
};
