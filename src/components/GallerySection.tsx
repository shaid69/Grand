import React, { useState } from 'react';
import { Camera, Eye, X } from 'lucide-react';
import { HOTEL_IMAGES } from '../data/hotelData';

export const GallerySection: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  const galleryItems = [
    {
      src: HOTEL_IMAGES.hero,
      title: 'Grand Riverview Hotel Building & Entrance',
      tag: 'Architecture',
    },
    {
      src: HOTEL_IMAGES.pool,
      title: 'Rooftop Infinity Swimming Pool & Padma Horizon',
      tag: 'Facilities',
    },
    {
      src: HOTEL_IMAGES.dining,
      title: 'Karnaphuli Multi Cuisine Restaurant Dining Hall',
      tag: 'Gastronomy',
    },
    {
      src: HOTEL_IMAGES.heroAlt,
      title: 'The Grand Ballroom & Event Pavilion',
      tag: 'Banquets',
    },
    {
      src: HOTEL_IMAGES.gallery[0], // gallery-14.jpg
      title: 'Padma Riverview Sunset Terrace View',
      tag: 'Padma River',
    },
    {
      src: HOTEL_IMAGES.gallery[1], // insta-1.jpg
      title: 'Luxury Hotel Suite Interiors',
      tag: 'Living',
    },
    {
      src: HOTEL_IMAGES.gallery[2], // insta-2.jpg
      title: 'Fine Dining Buffet & Hospitality Service',
      tag: 'Culinary',
    },
    {
      src: HOTEL_IMAGES.gallery[3], // insta-3.jpg
      title: 'Rooftop Lounge & Evening Ambience',
      tag: 'Terrace',
    },
    {
      src: HOTEL_IMAGES.gallery[4], // insta-4.jpg
      title: 'Rajshahi Riverfront Evening Lighting',
      tag: 'Scenic',
    },
  ];

  return (
    <section className="py-24 bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#AB8D62] font-semibold mb-2">
            <Camera className="w-3.5 h-3.5" />
            <span>Authentic Photo Gallery</span>
          </div>
          <h2
            className="font-serif text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight mb-4"
            style={{ textWrap: 'balance' }}
          >
            Visual Moments at Grand Riverview
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Glimpses into our riverside architecture, infinity pool, suites, and dining spaces.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedPhoto(item.src)}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 border border-stone-200 shadow-xs hover:shadow-xl transition-all cursor-pointer"
            >
              <img
                src={item.src}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-5 text-white">
                <span className="text-[10px] uppercase tracking-wider text-[#DFB97F] font-semibold">
                  {item.tag}
                </span>
                <h4 className="font-serif text-lg font-bold">
                  {item.title}
                </h4>
                <div className="flex items-center gap-1.5 text-xs text-stone-300 mt-1">
                  <Eye className="w-3.5 h-3.5 text-[#DFB97F]" />
                  <span>Click to expand high-resolution</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedPhoto(null)}
            className="absolute top-6 right-6 p-2 text-white bg-white/10 hover:bg-white/20 rounded-full cursor-pointer transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <div
            className="max-w-5xl max-h-[85vh] overflow-hidden rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedPhoto}
              alt="Grand Riverview Hotel"
              referrerPolicy="no-referrer"
              className="max-w-full max-h-[85vh] object-contain rounded-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};
