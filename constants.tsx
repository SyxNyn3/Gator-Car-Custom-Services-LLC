
import React from 'react';
import { 
  Wrench, 
  Paintbrush, 
  Music, 
  Sun, 
  Car, 
  Settings, 
  ShieldCheck, 
  Zap, 
  Volume2, 
  Wheelchair, 
  Sparkles,
  Trophy
} from 'lucide-react';
import { Service, RentalVehicle, RentalPackage } from './types';

export const BUSINESS_INFO = {
  name: "Gator Car Custom Services LLC",
  address: "2821 NE 20th Way, Suite A, Gainesville, Florida 32609",
  phone: "(352) 231-2397",
  email: "info@gatorcarcustoms.com",
  socials: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com"
  }
};

export const SERVICES: Service[] = [
  {
    id: 'paint-body',
    title: 'Paint & Body',
    description: 'From custom candy coats to showroom-quality restoration. Our paint booth is where masterpieces are born.',
    icon: 'Paintbrush',
    image: 'https://picsum.photos/seed/paint/800/600'
  },
  {
    id: 'collision-insurance',
    title: 'Collision & Insurance',
    description: 'Professional repair work that meets factory standards. We work with all major insurance carriers.',
    icon: 'ShieldCheck',
    image: 'https://picsum.photos/seed/collision/800/600'
  },
  {
    id: 'rims-tires',
    title: 'Rims & Tires',
    description: 'The right stance defines your ride. Huge selection of premium wheels and performance tires.',
    icon: 'Settings',
    image: 'https://picsum.photos/seed/rims/800/600'
  },
  {
    id: 'audio-visual',
    title: 'Audio & Lighting',
    description: 'Ground-pounding bass and brilliant LED setups. Transform your driving experience into a concert.',
    icon: 'Music',
    image: 'https://picsum.photos/seed/audio/800/600'
  },
  {
    id: 'vinyl-tint',
    title: 'Vinyl Wrap & Tint',
    description: 'Full color changes and high-heat rejection window films. Protect your interior and look sharp.',
    icon: 'Sun',
    image: 'https://picsum.photos/seed/tint/800/600'
  },
  {
    id: 'detailing',
    title: 'Master Detailing',
    description: 'Ceramic coating, paint correction, and interior restoration. We make your car feel brand new.',
    icon: 'Sparkles',
    image: 'https://picsum.photos/seed/detail/800/600'
  }
];

export const RENTAL_VEHICLES: RentalVehicle[] = [
  {
    id: 'party-bus',
    name: 'Gator Party Bus',
    description: 'The ultimate nightlife on wheels. Perfect for up to 25 passengers.',
    amenities: ['Fiber optic lighting', 'High-end sound system', 'Built-in bar', 'Bluetooth connectivity', 'Leather wrap-around seating'],
    image: 'https://picsum.photos/seed/bus/1200/800'
  },
  {
    id: 'escalade-limo',
    name: 'Cadillac Escalade Limousine',
    description: 'Commanding presence for weddings and corporate events.',
    amenities: ['Sleek white exterior', 'Privacy partition', 'Multi-zone AC', 'Champagne coolers', 'Premium interior'],
    image: 'https://picsum.photos/seed/limo/1200/800'
  }
];

export const RENTAL_PACKAGES: RentalPackage[] = [
  {
    name: 'The Night Out',
    price: 'Starting at $499',
    features: ['4 Hours of Service', 'Professional Driver', 'Complimentary Ice & Water', 'Local Gainesville Travel']
  },
  {
    name: 'The Wedding Elite',
    price: 'Starting at $899',
    features: ['6 Hours of Service', 'Champagne Toast Included', 'Red Carpet Service', 'Anywhere in North Florida']
  },
  {
    name: 'The Game Day',
    price: 'Starting at $1,200',
    features: ['8 Hours of Service', 'Tailgate Ready Setup', 'Premium VIP Support', 'Priority Pickup/Dropoff']
  }
];
