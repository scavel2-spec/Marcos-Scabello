export interface ApartmentFeature {
  icon: string;
  title: string;
  description: string;
}

export interface GalleryImage {
  id: string;
  title: string;
  category: 'todos' | 'living' | 'quartos' | 'varanda' | 'lazer' | 'fachada';
  url: string;
  description: string;
}

export interface RoomDetail {
  id: string;
  name: string;
  area: string;
  description: string;
  features: string[];
  x: number; // percentage coordinates for interactive floor plan hotspot
  y: number;
}

export interface Amenity {
  icon: string;
  title: string;
  category: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface NeighborhoodSpot {
  name: string;
  time: string;
  type: string;
  distance: string;
}
