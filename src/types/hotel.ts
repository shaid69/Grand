export interface Room {
  id: string;
  name: string;
  category: 'deluxe' | 'executive' | 'suite';
  priceBDT: number;
  priceUSD: number;
  sizeSqFt: number;
  bedType: string;
  occupancy: string;
  view: string;
  image: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export interface MenuItem {
  id: string;
  name: string;
  venue: 'karnaphuli' | 'foodcourt' | 'cafe';
  category: string;
  priceBDT: number;
  priceUSD: number;
  description: string;
  isSpecial?: boolean;
  dietary?: string[];
}

export interface Facility {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  highlights: string[];
  hours: string;
}

export interface MovieShow {
  id: string;
  title: string;
  genre: string;
  runtime: string;
  rating: string;
  times: string[];
  hall: string;
}

export interface BookingPayload {
  room: Room;
  checkIn: string;
  checkOut: string;
  adults: number;
  children: number;
  roomCount: number;
  guestName: string;
  guestEmail: string;
  guestPhone: string;
  specialRequests: string;
  needAirportTransfer: boolean;
  bookingRef: string;
  totalNights: number;
  totalCostBDT: number;
  totalCostUSD: number;
}
