import { Room, MenuItem, Facility, MovieShow } from '../types/hotel';

// Original hotel images from grandriverviewbd.com
import originalLogo from '../assets/original/logo-golden.png';
import heroSlider1 from '../assets/original/hero-slider-1.jpg';
import heroSlider2 from '../assets/original/hero-slider-2.jpg';
import poolOriginal from '../assets/original/rooftop-swimming.jpg';
import restoOriginal from '../assets/original/resto.jpg';
import room1Original from '../assets/original/rooms-1.jpg';
import room2Original from '../assets/original/rooms-2.jpg';
import room3Original from '../assets/original/rooms-3.jpg';
import room4Original from '../assets/original/rooms-4.jpg';
import room5Original from '../assets/original/rooms-5.jpg';
import gallery14 from '../assets/original/gallery-14.jpg';
import insta1 from '../assets/original/insta-1.jpg';
import insta2 from '../assets/original/insta-2.jpg';
import insta3 from '../assets/original/insta-3.jpg';
import insta4 from '../assets/original/insta-4.jpg';

// Cineplex asset
import cineplexImg from '../assets/images/cineplex_lounge_1790419080817.jpg';

export const HOTEL_IMAGES = {
  logo: originalLogo,
  hero: heroSlider1,
  heroAlt: heroSlider2,
  pool: poolOriginal,
  dining: restoOriginal,
  cineplex: cineplexImg,
  gallery: [gallery14, insta1, insta2, insta3, insta4],
};

export const HOTEL_INFO = {
  name: 'Grand Riverview Hotel',
  tagline: "Rajshahi's First 4-Star Hotel",
  rating: '4-Star Luxury',
  city: 'Rajshahi, Bangladesh',
  address: '232 Kazihata, C&B Mor, Rajshahi 6000, Bangladesh',
  phone1: '01877-766966',
  phone2: '01877-766967',
  salesHotline: '01877-766953, 01877-766956',
  email: 'reservation@grandriverviewbd.com',
  website: 'https://grandriverviewbd.com',
  facebook: 'https://www.facebook.com/grvhbd',
  instagram: 'https://www.instagram.com/grvhbd',
  youtube: 'https://www.youtube.com/@grandriverviewhotel4367',
  googleRating: 4.3,
  reviewCount: 1392,
  totalRooms: 105,
  checkInTime: '14:00 (2:00 PM)',
  checkOutTime: '12:00 (12:00 PM)',
};

export const ROOMS: Room[] = [
  {
    id: 'deluxe-king',
    name: 'Deluxe King Room',
    category: 'deluxe',
    priceBDT: 5890,
    priceUSD: 49,
    sizeSqFt: 340,
    bedType: '1 King Bed',
    occupancy: '2 Adults, 1 Child',
    view: 'Padma River / Panoramic Skyline',
    image: room1Original,
    description: 'Bespoke king bedroom designed for discerning guests featuring tranquil river views, plush posturepedic mattress, ergonomic workspace, and Italian rain shower.',
    features: [
      'High-speed Wi-Fi',
      '48" Smart LED TV with satellite',
      'Complimentary buffet breakfast at Karnaphuli',
      'Rain shower & organic toiletries',
      'Minibar & electric kettle',
      'Digital safety deposit box',
      '24/7 in-room dining service',
    ],
    popular: true,
  },
  {
    id: 'executive-riverview',
    name: 'Executive Riverview Suite',
    category: 'executive',
    priceBDT: 9800,
    priceUSD: 82,
    sizeSqFt: 520,
    bedType: '1 Super King Bed',
    occupancy: '2 Adults, 2 Children',
    view: 'Unobstructed Padma River Balcony',
    image: room2Original,
    description: 'Our signature corner suite overlooking the majestic curves of the Padma River. Features a separate lounge area, marble bathroom with deep soaking jacuzzi tub, and exclusive executive privileges.',
    features: [
      'Private riverfront balcony with seating',
      'Luxury marble bathroom with Jacuzzi & rain shower',
      'Executive lounge access with evening high tea',
      'Nespresso coffee maker & premium teas',
      '55" 4K Smart TV with premium soundbar',
      'Priority check-in & late checkout (subject to availability)',
      'Complimentary laundry of 2 garments daily',
    ],
    popular: true,
  },
  {
    id: 'deluxe-twin',
    name: 'Deluxe Twin Room',
    category: 'deluxe',
    priceBDT: 6200,
    priceUSD: 52,
    sizeSqFt: 360,
    bedType: '2 Queen Beds',
    occupancy: '2 Adults, 2 Children',
    view: 'City Heritage & Garden View',
    image: room3Original,
    description: 'Spacious accommodation equipped with twin double-queen beds, tailored for colleagues or traveling companions looking for effortless comfort and quiet luxury.',
    features: [
      'Two plush twin/queen beds',
      'High-speed Wi-Fi & work desk with international sockets',
      '48" Smart LED TV',
      'Complimentary breakfast included',
      'Walk-in glass shower',
      'Tea & coffee making station',
      'Electronic touch-panel climate control',
    ],
  },
  {
    id: 'deluxe-queen',
    name: 'Deluxe Queen Room',
    category: 'deluxe',
    priceBDT: 5450,
    priceUSD: 45,
    sizeSqFt: 320,
    bedType: '1 Queen Bed',
    occupancy: '2 Adults',
    view: 'Courtyard & Cityscape',
    image: room4Original,
    description: 'An intimate sanctuary combining understated elegance and modern comforts. Ideal for solo executives and leisure couples visiting Rajshahi.',
    features: [
      'Plush queen mattress with Egyptian cotton linens',
      'Soundproof double-glazed windows',
      'High-speed wireless internet',
      '48" Smart TV',
      'En-suite bathroom with power shower',
      'Complimentary breakfast included',
    ],
  },
  {
    id: 'presidential-family-suite',
    name: 'Presidential River Suite',
    category: 'suite',
    priceBDT: 14500,
    priceUSD: 121,
    sizeSqFt: 780,
    bedType: 'Master King + Connected Twin',
    occupancy: '4 Adults, 2 Children',
    view: '180° Panoramic Padma Riverfront',
    image: room5Original,
    description: 'The pinnacle of luxury in North Bengal. Two expansive bedrooms, lavish living and dining salon, dual marble baths with Jacuzzi, and dedicated 24-hour butler assistance.',
    features: [
      'Two interconnecting private bedrooms with master salon',
      'Dual luxury bathrooms with Jacuzzi & vanity mirrors',
      'Private dining table with butler pantry',
      'Complimentary VIP airport transfer from Rajshahi Shah Makhdum Airport',
      'Unrestricted executive lounge privileges',
      'Complimentary fruit basket & artisan chocolates upon arrival',
      'Express VIP check-in inside the suite',
    ],
  },
];

export const DINING_VENUES = [
  {
    id: 'karnaphuli',
    name: 'Karnaphuli Multi Cuisine Restaurant',
    level: '2nd Floor',
    hours: '06:30 AM – 11:00 PM',
    cuisine: 'International, Thai, Chinese, Indian & Traditional Bengali',
    description: 'The premier fine dining address in Rajshahi. Offering daily lavish buffet breakfasts, à la carte lunches, and our acclaimed weekend Grand Buffet dinners with over 80 authentic dishes prepared by master chefs against panoramic Padma river vistas.',
    features: ['Over 80 Dishes Weekend Buffet', 'Live Teppanyaki & Tandoor Station', 'Panoramic River Vista', 'Private Dining Rooms available'],
    image: restoOriginal,
  },
  {
    id: 'foodcourt',
    name: 'GRV Food Court (Level 10)',
    level: '10th Floor Rooftop',
    hours: '12:00 PM – 11:30 PM',
    cuisine: 'Padma River Grill, Kebabs, Biryani & Fusion Delicacies',
    description: 'Perched high above Rajshahi, the Level 10 Food Court combines breezy open-air terrace dining with signature house creations like the GRV Special Parda Khichuri with Beef Kala Bhuna and sizzling Family Kebab Platters.',
    features: ['Rooftop Padma River Breeze', 'Signature GRV Parda Khichuri', 'Family BBQ Platters', 'Stargazing terrace'],
    image: poolOriginal,
  },
  {
    id: 'cafe',
    name: 'The Riverview Cafe & Lounge',
    level: 'Ground Floor Lobby',
    hours: '07:00 AM – Midnight',
    cuisine: 'Artisan Espresso, Pastries, Shakes & Light Gourmet',
    description: 'An intimate, serene lounge in the hotel lobby designed for informal business meetings and relaxed reading. Serving freshly brewed single-origin coffee, handcrafted French patisserie, and artisanal Rajshahi tea infusions.',
    features: ['Single-origin Espresso', 'Freshly Baked Pastries', 'High-speed business Wi-Fi', 'Artisan Loose-leaf Teas'],
    image: restoOriginal,
  },
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'm1',
    name: 'GRV Special Parda Khichuri with Beef Kala Bhuna',
    venue: 'foodcourt',
    category: 'GRV Signatures',
    priceBDT: 850,
    priceUSD: 7.1,
    description: 'Aromatic chinigura rice baked inside a soft tandoori dough crust with slow-braised Chattogram-style spicy tender beef shank.',
    isSpecial: true,
  },
  {
    id: 'm2',
    name: 'GRV Grand Family Kebab Platter',
    venue: 'foodcourt',
    category: 'GRV Signatures',
    priceBDT: 1950,
    priceUSD: 16.3,
    description: 'An opulent feast of Murgh Malai, Reshmi Kebab, Mutton Seekh, Hariyali Tikka, Garlic Naan, mint chutney and spiced onion salad (serves 3-4).',
    isSpecial: true,
  },
  {
    id: 'm3',
    name: 'Weekend Grand Dinner Buffet (80+ Items)',
    venue: 'karnaphuli',
    category: 'Buffet Experiences',
    priceBDT: 1450,
    priceUSD: 12.1,
    description: 'Every Friday and Saturday. 80+ international delicacies spanning Thai Tom Yum, Peking duck, Hyderabadi biryani, Padma river hilsa, and 15 desserts.',
    isSpecial: true,
  },
  {
    id: 'm4',
    name: 'Karnaphuli Steamed Whole Pomfret in Chili Lime',
    venue: 'karnaphuli',
    category: 'Seafood & Asian',
    priceBDT: 1150,
    priceUSD: 9.6,
    description: 'Fresh white pomfret steamed with lemongrass, fresh Thai bird eye chilies, kaffir lime, garlic, and savory fish broth.',
  },
  {
    id: 'm5',
    name: 'Crispy Butter Golden Prawns',
    venue: 'foodcourt',
    category: 'GRV Signatures',
    priceBDT: 780,
    priceUSD: 6.5,
    description: 'Jumbo river prawns wok-tossed with sweet egg floss, butter, curry leaves and birds eye chili.',
  },
  {
    id: 'm6',
    name: 'Traditional Royal Mutton Kacchi Biryani',
    venue: 'karnaphuli',
    category: 'Bengali & Indian',
    priceBDT: 690,
    priceUSD: 5.8,
    description: 'Fragrant basmati rice layered with spiced baby mutton, saffron potatoes, boiled eggs, and royal fried onions.',
  },
  {
    id: 'm7',
    name: 'Artisan Affogato & Belgian Chocolate Brownie',
    venue: 'cafe',
    category: 'Desserts & Beverages',
    priceBDT: 390,
    priceUSD: 3.3,
    description: 'Warm fudge brownie topped with Madagascan vanilla bean gelato and drowned in a freshly pulled double ristretto shot.',
  },
  {
    id: 'm8',
    name: 'Rajshahi Royal Mango Smoothie (Seasonal / Special)',
    venue: 'cafe',
    category: 'Desserts & Beverages',
    priceBDT: 320,
    priceUSD: 2.7,
    description: 'Crafted with premium ripened Khirshapat / Fazli mango purée from Rajshahi orchards, Greek yogurt and wildflower honey.',
    isSpecial: true,
  },
];

export const HOTEL_FACILITIES: Facility[] = [
  {
    id: 'infinity-pool',
    title: 'Rooftop Infinity Swimming Pool',
    subtitle: 'Where Water Meets the Padma Horizon',
    description: 'Positioned on the hotel rooftop, our temperature-controlled infinity pool provides an uninterrupted view of the sun setting into the Padma River. Features submerged loungers and poolside refreshment service.',
    image: poolOriginal,
    highlights: ['Padma sunset vistas', 'Temperature-controlled', 'Trained poolside lifeguards', 'Private cabanas & sun loungers'],
    hours: '07:00 AM – 09:00 PM',
  },
  {
    id: 'cineplex',
    title: 'GRV 4K Cineplex',
    subtitle: "Rajshahi's Exclusive VIP Cinema Destination",
    description: 'Experience blockbuster cinema in uncompromised luxury. Featuring ultra-plush leather electric recliners, 4K digital projection, and immersive Dolby Atmos surround sound with gourmet in-seat refreshment service.',
    image: cineplexImg,
    highlights: ['Dolby Atmos immersive surround', 'Motorized VIP leather recliners', 'Curated Hollywood & national releases', 'Private auditorium booking available'],
    hours: '11:00 AM – 10:30 PM (Daily)',
  },
  {
    id: 'wellness',
    title: 'Health Club, Sauna & Steam Therapy',
    subtitle: 'Rejuvenate Mind, Body and Spirit',
    description: 'Equipped with commercial-grade Technogym cardio and strength machines, dedicated personal trainers, Swedish sauna, and Eucalyptus steam rooms for your daily wellness retreat.',
    image: gallery14,
    highlights: ['Technogym cardio & free weights', 'Dry heat Finnish sauna', 'Aromatic steam bath', 'Dedicated locker and shower suites'],
    hours: '06:00 AM – 10:00 PM',
  },
  {
    id: 'banquets',
    title: 'The Grand Ballroom & Conference Center',
    subtitle: 'Setting the Benchmark for Regional Events',
    description: 'From dream weddings to high-level summits, our pillarless Grand Ballroom accommodates up to 450 attendees. Features state-of-the-art audiovisual walls, acoustic soundproofing, and bespoke catering.',
    image: heroSlider2,
    highlights: ['Up to 450 guests capacity', 'Pillarless architectural design', 'Advanced high-lumens laser projection', 'Custom wedding & corporate menus'],
    hours: '24/7 By Event Booking',
  },
];

export const CINEPLEX_SHOWS: MovieShow[] = [
  {
    id: 'mv1',
    title: 'Dune: Part Two',
    genre: 'Sci-Fi / Adventure',
    runtime: '2h 46m',
    rating: 'PG-13',
    times: ['11:30 AM', '03:15 PM', '07:00 PM'],
    hall: 'GRV VIP Audi 1 (Dolby Atmos)',
  },
  {
    id: 'mv2',
    title: 'Toofan (Bengali Blockbuster)',
    genre: 'Action / Crime Thriller',
    runtime: '2h 25m',
    rating: 'UA',
    times: ['01:00 PM', '05:30 PM', '09:00 PM'],
    hall: 'GRV VIP Audi 2 (4K Laser)',
  },
  {
    id: 'mv3',
    title: 'Gladiator II',
    genre: 'Historical Action / Drama',
    runtime: '2h 28m',
    rating: 'R',
    times: ['04:00 PM', '08:15 PM'],
    hall: 'GRV VIP Audi 1 (Dolby Atmos)',
  },
];

export const TESTIMONIALS = [
  {
    id: 't1',
    name: 'Engr. M. A. Rahman',
    role: 'Corporate Director, Dhaka',
    avatar: 'MR',
    text: 'Grand Riverview is unquestionably the gold standard for Rajshahi hospitality. The riverview suite was immaculate, the bed exceptional, and having the Level 10 Food Court with river breeze made our business trip feel like a retreat.',
    rating: 5,
    stayType: 'Business Executive Stay',
  },
  {
    id: 't2',
    name: 'Dr. Sharmin Akter',
    role: 'Rajshahi University Faculty',
    avatar: 'SA',
    text: 'We hosted my brother’s wedding reception at The Grand Ballroom. The staff professionalism, lighting, and the 80+ item buffet from Karnaphuli left all 350 guests thoroughly impressed. Highly recommend!',
    rating: 5,
    stayType: 'Wedding & Banquet Event',
  },
  {
    id: 't3',
    name: 'Christian Van Der Berg',
    role: 'Heritage Researcher, Netherlands',
    avatar: 'CB',
    text: 'A true 4-star oasis in North Bengal. After long field days exploring Puthia temples and the Varendra museum, dipping into the rooftop infinity pool looking out across the Padma river was magical.',
    rating: 5,
    stayType: 'Leisure & Cultural Discovery',
  },
];

export const LOCAL_EXPERIENCES = [
  {
    id: 'exp1',
    title: 'Padma River Sunset Boat Cruise',
    duration: '1.5 Hours',
    distance: '5 mins from Hotel',
    description: 'Board a traditional wooden country boat just outside the hotel at C&B Mor to watch the crimson sun dip beneath the wide delta horizon.',
  },
  {
    id: 'exp2',
    title: 'Varendra Research Museum',
    duration: '2 Hours',
    distance: '1.8 km from Hotel',
    description: 'Bangladesh’s oldest museum housing invaluable 1,000-year-old terracotta sculptures and Pala empire antiquities.',
  },
  {
    id: 'exp3',
    title: 'Rajshahi Silk Handloom Quarter',
    duration: '2 Hours',
    distance: '3.2 km from Hotel',
    description: 'Witness the centuries-old tradition of pure mulberry silk weaving that earned Rajshahi the title of Silk City.',
  },
  {
    id: 'exp4',
    title: 'Puthia Historic Palace & Shiva Temples',
    duration: 'Half Day Excursion',
    distance: '28 km from Hotel',
    description: 'Explore Bengal’s finest cluster of terracotta ornate Hindu palaces and multi-tiered monuments set around serene ponds.',
  },
];
