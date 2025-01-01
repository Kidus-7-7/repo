export interface Property {
  id: number;
  title: string;
  type: 'rent' | 'buy';
  price: number;
  location: {
    address: string;
    city: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  bedrooms: number;
  bathrooms: number;
  area: number;
  images: string[];
  features: string[];
  description: string;
  agent: {
    id: number;
    name: string;
  };
}

export interface PropertyFilters {
  priceRange: [number, number];
  bedrooms: number[];
  propertyTypes: string[];
  location: string;
  minArea: number | null;
}