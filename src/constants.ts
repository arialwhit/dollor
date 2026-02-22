
import { Service, GalleryItem, PriceCategory } from './types.ts';

// Updated phone number: +234-09051969721 becomes 2349051969721
export const SALON_PHONE = "2349051969721"; 

export const PRICE_LIST: PriceCategory[] = [
  {
    category: "Acrylic Nails",
    items: [
      { name: "Short", price: "₦10,000" },
      { name: "Medium", price: "₦13,000" },
      { name: "Long", price: "₦16,000" },
      { name: "X-Long", price: "₦20,000" },
    ]
  },
  {
    category: "Nail Art (Add-ons)",
    items: [
      { name: "Marble Effect", price: "₦3,000" },
      { name: "French Tips", price: "₦3,000" },
      { name: "Ombre", price: "₦4,000" },
      { name: "3D Nail Art", price: "₦3,500" },
      { name: "Charms", price: "₦2,000" },
      { name: "Custom Artwork", price: "₦4,000" },
      { name: "Soak Off", price: "₦5,000" },
      { name: "Encapsulated Design", price: "₦4,000" },
      { name: "Chrome", price: "₦3,000" },
    ]
  },
  {
    category: "Gel Polish",
    items: [
      { name: "Short", price: "₦8,000" },
      { name: "Medium", price: "₦11,000" },
      { name: "Long", price: "₦14,000" },
      { name: "X-Long", price: "₦18,000" },
    ]
  },
  {
    category: "Toes 💅💅💅",
    items: [
      { name: "Acrylic Toes", price: "₦7,000" },
      { name: "GEL - Fixing all toes", price: "₦5,000" },
      { name: "GEL - Only big toe", price: "₦3,000" },
    ]
  }
];

export const SERVICES: Service[] = PRICE_LIST.flatMap((cat, catIdx) => 
  cat.items.map((item, itemIdx) => ({
    id: `${catIdx}-${itemIdx}`,
    name: `${cat.category}: ${item.name}`,
    price: item.price,
    duration: "Varies",
    description: `Premium ${cat.category} service.`
  }))
);

export const ABOUT_VIDEO_URL = "https://player.vimeo.com/video/1167095441";

export const GALLERY_IMAGES: GalleryItem[] = [
  { id: 1, url: 'https://player.vimeo.com/video/1167095317', title: 'Pink Perfection', category: 'Video', type: 'video' },
  { id: 2, url: 'https://player.vimeo.com/video/1167095357', title: 'Glitter Glow', category: 'Video', type: 'video' },
  { id: 3, url: 'https://player.vimeo.com/video/1167095719', title: 'Doll Artistry', category: 'Video', type: 'video' },
  { id: 4, url: 'https://player.vimeo.com/video/1167095807', title: 'Sparkle Set', category: 'Video', type: 'video' },
  { id: 5, url: 'https://player.vimeo.com/video/1167095778', title: 'Luxury Finish', category: 'Video', type: 'video' },
  { id: 6, url: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80', title: 'Velvet Chrome', category: 'Modern', type: 'image' },
  { id: 7, url: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&q=80', title: 'Abstract Linework', category: 'Minimal', type: 'image' },
  { id: 8, url: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&q=80', title: 'Milk Tea Ombre', category: 'Classic', type: 'image' },
  { id: 9, url: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&q=80', title: 'Tortoiseshell Accents', category: 'Trendy', type: 'image' },
];
