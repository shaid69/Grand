/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BookingBar } from './components/BookingBar';
import { RoomsSection } from './components/RoomsSection';
import { DiningSection } from './components/DiningSection';
import { AmenitiesSection } from './components/AmenitiesSection';
import { CineplexSection } from './components/CineplexSection';
import { ExperienceSection } from './components/ExperienceSection';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { RoomDetailModal } from './components/RoomDetailModal';
import { TableModal } from './components/TableModal';
import { Room } from './types/hotel';
import { ROOMS } from './data/hotelData';

export default function App() {
  const [currency, setCurrency] = useState<'BDT' | 'USD'>('BDT');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [detailRoom, setDetailRoom] = useState<Room | null>(null);
  const [isTableModalOpen, setIsTableModalOpen] = useState(false);
  const [targetVenue, setTargetVenue] = useState('Karnaphuli Multi Cuisine Restaurant');
  const [bookingParams, setBookingParams] = useState<{
    checkIn?: string;
    checkOut?: string;
    adults?: number;
    children?: number;
  }>({});

  const handleOpenBooking = (room?: Room) => {
    setSelectedRoom(room || ROOMS[0]);
    setIsBookingOpen(true);
  };

  const handleExploreRooms = () => {
    const el = document.getElementById('accommodations');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSearchRates = (params: {
    checkIn: string;
    checkOut: string;
    roomId: string;
    adults: number;
    children: number;
  }) => {
    const matched = ROOMS.find((r) => r.id === params.roomId) || ROOMS[0];
    setSelectedRoom(matched);
    setBookingParams({
      checkIn: params.checkIn,
      checkOut: params.checkOut,
      adults: params.adults,
      children: params.children,
    });
    setIsBookingOpen(true);
  };

  const handleReserveTable = (venueName: string) => {
    setTargetVenue(venueName);
    setIsTableModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-900 font-sans selection:bg-[#C5A880]/30 selection:text-stone-900">
      {/* Top Bar Navigation */}
      <Navbar
        currency={currency}
        setCurrency={setCurrency}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Hero Section */}
      <Hero
        onExploreRooms={handleExploreRooms}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Interactive Reservation Bar */}
      <BookingBar onSearch={handleSearchRates} />

      {/* Accommodations (Rooms & Suites) */}
      <RoomsSection
        currency={currency}
        onSelectRoom={(room) => handleOpenBooking(room)}
        onOpenRoomDetails={(room) => setDetailRoom(room)}
      />

      {/* Dining & Gastronomy */}
      <DiningSection
        currency={currency}
        onReserveTable={handleReserveTable}
      />

      {/* Amenities & Rooftop Infinity Pool */}
      <AmenitiesSection onOpenBooking={() => handleOpenBooking()} />

      {/* GRV 4K VIP Cineplex */}
      <CineplexSection />

      {/* Rajshahi Riverfront Heritage & Discovery */}
      <ExperienceSection />

      {/* Authentic Photo Gallery from grandriverviewbd.com */}
      <GallerySection />

      {/* Verified Guest Reviews */}
      <TestimonialsSection />

      {/* Contact & Directions */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        selectedRoom={selectedRoom}
        currency={currency}
        initialParams={bookingParams}
      />

      <RoomDetailModal
        room={detailRoom}
        onClose={() => setDetailRoom(null)}
        onBook={(room) => handleOpenBooking(room)}
        currency={currency}
      />

      <TableModal
        isOpen={isTableModalOpen}
        onClose={() => setIsTableModalOpen(false)}
        defaultVenueName={targetVenue}
      />
    </div>
  );
}
