
export interface PriceItem {
  name: string;
  price: string;
}

export interface PriceCategory {
  category: string;
  items: PriceItem[];
}

export interface Service {
  id: string;
  name: string;
  price: string;
  duration: string;
  description: string;
}

export interface GalleryItem {
  id: number;
  url: string;
  title: string;
  category: string;
  type?: 'image' | 'video';
}

export interface TrendSuggestion {
  title: string;
  description: string;
  elements: string[];
}

export interface BookingFormData {
  name: string;
  service: string;
  date: string;
  time: string;
  notes: string;
}
