import { RoomType, AmenityItem, GalleryItem } from '../types';

export const PG_INFO = {
  name: 'Andhra Prince PG',
  tagline: 'Premium Co-Living & Homely Stay',
  subtitle: 'Executive accommodation with authentic 3-time homely meals, high-speed WiFi, modern lift, laundry, and zero brokerage.',
  phone: '+91 98765 43210',
  altPhone: '+91 98765 43211',
  whatsapp: '919876543210',
  email: 'contact@andhraprincepg.com',
  address: 'Andhra PG, Raipur Khadar, Sector 126 (Near Amity University), Noida, UP - 201313',
  city: 'Sector 126, Raipur Khadar, Noida',
  visitingHours: '8:00 AM - 9:30 PM (All 7 Days)',
  googleMapsEmbedUrl: 'https://maps.google.com/maps?q=Andhra+Pg+126+Raipur+khadar+noida&t=&z=16&ie=UTF8&iwloc=&output=embed',
  googleMapsDirectionsUrl: 'https://maps.app.goo.gl/3wHhDM9ifixp5dK38',
  stats: {
    happyResidents: '2,500+',
    rating: '4.9 ★',
    foodMeals: '3 Times Daily',
    brokerage: '0% Brokerage'
  }
};

export const ROOMS_DATA: RoomType[] = [
  {
    id: 'single-sharing',
    name: 'Single Sharing Room',
    category: 'single',
    title: 'Private Executive Suite',
    sharingCount: 1,
    tagline: '100% Personal Space & Dedicated Workstation',
    description: 'A completely private, premium room designed for professionals and students seeking peaceful living. Equipped with a comfortable orthopaedic bed, ergonomic study table, 3-door wardrobe, attached private washroom with geyser, and optional split AC.',
    sizeSqFt: 180,
    hasAC: true,
    badge: 'Executive Choice',
    images: [
      'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1540518614846-7ede433c4ef0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80'
    ],
    features: [
      '100% Private Room (No Roommates)',
      'Plush Bed with Orthopaedic Mattress',
      'Ergonomic Work Desk & Executive Chair',
      'Spacious Lockable 3-Door Wardrobe',
      'Attached Modern Washroom with 24/7 Geyser',
      'Split Air Conditioner & Ceiling Fan',
      'High-Speed 300 Mbps Fiber WiFi Included',
      '3-Times Homely Andhra & North Indian Meals'
    ],
    keyAmenities: ['Private Room', 'Attached Bath', 'Split AC', 'Work Desk', '3 Meals Included', '300 Mbps WiFi']
  },
  {
    id: 'double-sharing',
    name: 'Double Sharing Room',
    category: 'double',
    title: 'Deluxe Twin Suite',
    sharingCount: 2,
    tagline: 'Spacious & Comfortable Twin Living',
    description: 'An airy, well-ventilated twin-sharing room featuring two independent solid-wood beds with premium mattresses, individual personal wardrobes with digital locks, two study desks, and an attached modern bathroom.',
    sizeSqFt: 220,
    hasAC: true,
    badge: 'Most Popular',
    images: [
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80'
    ],
    features: [
      '2 Separate Beds with Ortho Mattresses',
      '2 Independent Lockable Wardrobes',
      'Individual Study Desks & Reading Setup',
      'Attached Clean Tiled Bathroom with Geyser',
      'Split Inverter AC & High-Airflow Fans',
      'Shoe Rack & Fresh Clean Bedding',
      '3-Times Homely Andhra & North Indian Meals',
      'Daily Housekeeping & Room Sanitization'
    ],
    keyAmenities: ['Twin Sharing', 'Attached Bath', 'Split AC', '2 Wardrobes', '3 Meals Included', 'Daily Cleaning']
  },
  {
    id: 'triple-sharing',
    name: 'Triple Sharing Room',
    category: 'triple',
    title: 'Classic Comfort Suite',
    sharingCount: 3,
    tagline: 'Economical, Spacious & Fully Furnished',
    description: 'A spacious and well-lit three-sharing room with ample natural sunlight, individual beds with storage, personal lockable wardrobes, attached bathroom with geyser, and high-speed fiber internet.',
    sizeSqFt: 260,
    hasAC: true,
    badge: 'Best Value',
    images: [
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1540518614846-7ede433c4ef0?auto=format&fit=crop&w=1200&q=80'
    ],
    features: [
      '3 Comfortable Single Beds with Cushioned Mattresses',
      '3 Separate Lockable Wardrobe Units',
      'Attached Washroom with 24/7 Hot Water Geyser',
      'Air Conditioner / Cool Air Ventilation',
      'Dedicated Power Points near Every Bed',
      'High-Speed 300 Mbps Dual-Band WiFi',
      '3-Times Unlimited Homely Andhra Meals',
      'Daily Dusting, Mopping & Garbage Clearance'
    ],
    keyAmenities: ['Triple Sharing', 'Attached Bath', 'AC/Non-AC', '3 Lockers', '3 Meals Included', 'Super Fast WiFi']
  }
];

export const AMENITIES_LIST: AmenityItem[] = [
  {
    id: 'lift',
    title: 'Automatic Lift / Elevator',
    description: 'Smooth and fast 8-passenger automatic elevator with automatic rescue device connecting all residential floors.',
    iconName: 'ArrowUpDown',
    badge: 'Convenience'
  },
  {
    id: 'laundry',
    title: 'Laundry & Washing Machine',
    description: 'Fully automatic top & front-load washing machines with dedicated terrace drying area and iron station.',
    iconName: 'Shirt',
    badge: 'Included'
  },
  {
    id: 'food',
    title: '3 Times Homely Food',
    description: 'Unlimited authentic Andhra Mess & North Indian home-style breakfast, lunch, and dinner, plus special Sunday Hyderabadi Biryani feasts.',
    iconName: 'Utensils',
    badge: 'Authentic Taste'
  },
  {
    id: 'furnished',
    title: 'Fully Furnished Rooms',
    description: 'Solid wooden beds, orthopaedic mattresses, wardrobes with lockers, study tables, curtains, and attached clean bathrooms.',
    iconName: 'Bed',
    badge: 'Ready to Move'
  },
  {
    id: 'ro-water',
    title: 'RO Water Dispenser',
    description: 'Multi-stage commercial RO + UV water purification system with instant hot, cold, and normal water dispensers on every floor.',
    iconName: 'Droplets',
    badge: '100% Pure'
  },
  {
    id: 'wifi',
    title: 'High-Speed Fiber WiFi',
    description: 'Commercial 300 Mbps dual-band optical fiber WiFi with dedicated access points on every floor for lag-free WFH and streaming.',
    iconName: 'Wifi',
    badge: '300 Mbps'
  },
  {
    id: 'security',
    title: '24/7 CCTV & Security',
    description: 'Comprehensive CCTV surveillance across all corridors, biometric entry access, and round-the-clock security guard.',
    iconName: 'ShieldCheck',
    badge: 'Safe & Secure'
  },
  {
    id: 'power-backup',
    title: '24/7 Power Backup',
    description: 'Heavy duty diesel generator (DG) for seamless power backup to ensure lights, fans, and WiFi never stop during outages.',
    iconName: 'Zap',
    badge: 'Uninterrupted'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: '1',
    title: 'Executive Single AC Bedroom',
    category: 'Rooms',
    url: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: '2',
    title: 'Spacious Deluxe Twin Bedroom',
    category: 'Rooms',
    url: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: '3',
    title: 'Hygienic Andhra Mess & Dining Hall',
    category: 'Dining',
    url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: '4',
    title: 'Authentic 3-Time Homely Andhra Meals',
    category: 'Food',
    url: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: '5',
    title: 'Sunday Hyderabadi Dum Biryani Feast',
    category: 'Food',
    url: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: '6',
    title: 'Clean Attached Bathroom with Geyser',
    category: 'Bathrooms',
    url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: '7',
    title: 'Modern Automatic Lift & Corridors',
    category: 'Facilities',
    url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: '8',
    title: 'Laundry Zone & Automatic Washing Machines',
    category: 'Facilities',
    url: 'https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&w=1200&q=80'
  }
];
