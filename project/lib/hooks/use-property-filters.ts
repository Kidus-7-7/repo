'use client';

import { useState } from 'react';
import { Property, PropertyFilters } from '@/lib/types/property';

const initialFilters: PropertyFilters = {
  priceRange: [0, 1000000],
  bedrooms: [],
  propertyTypes: [],
  location: '',
  minArea: null,
};

export function usePropertyFilters(properties: Property[], type: 'rent' | 'buy') {
  const [filters, setFilters] = useState<PropertyFilters>(initialFilters);

  const filteredProperties = properties.filter((property) => {
    if (property.type !== type) return false;

    const matchesPrice = property.price >= filters.priceRange[0] && 
                        property.price <= filters.priceRange[1];
    
    const matchesBedrooms = filters.bedrooms.length === 0 || 
                           filters.bedrooms.includes(property.bedrooms);
    
    const matchesLocation = !filters.location || 
      property.location.city.toLowerCase().includes(filters.location.toLowerCase());
    
    const matchesArea = !filters.minArea || property.area >= filters.minArea;

    return matchesPrice && matchesBedrooms && matchesLocation && matchesArea;
  });

  return {
    filters,
    setFilters,
    filteredProperties,
  };
}