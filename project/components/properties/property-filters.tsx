'use client';

import { usePropertyFilters } from '@/lib/hooks/use-property-filters';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';

export function PropertyFilters() {
  const { filters, setFilters } = usePropertyFilters([], 'rent');

  return (
    <Card>
      <CardContent className="p-6 space-y-6">
        <div className="space-y-2">
          <Label>Location</Label>
          <Input 
            placeholder="Enter location..."
            value={filters.location}
            onChange={(e) => setFilters({ ...filters, location: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <Label>Price Range</Label>
          <Slider
            value={[filters.priceRange[0], filters.priceRange[1]]}
            max={1000000}
            step={1000}
            onValueChange={(value) => 
              setFilters({ ...filters, priceRange: value as [number, number] })}
          />
          <div className="flex justify-between text-sm text-gray-500">
            <span>{filters.priceRange[0]} ETB</span>
            <span>{filters.priceRange[1]} ETB</span>
          </div>
        </div>

        <div className="space-y-2">
          <Label>Bedrooms</Label>
          <div className="flex gap-2">
            {[1, 2, 3, 4, '5+'].map((num) => (
              <Checkbox
                key={num}
                id={`bed-${num}`}
                checked={filters.bedrooms.includes(Number(num))}
                onCheckedChange={(checked) => {
                  const newBedrooms = checked
                    ? [...filters.bedrooms, Number(num)]
                    : filters.bedrooms.filter(b => b !== Number(num));
                  setFilters({ ...filters, bedrooms: newBedrooms });
                }}
              />
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <Label>Minimum Area (m²)</Label>
          <Input
            type="number"
            placeholder="Enter minimum area..."
            value={filters.minArea || ''}
            onChange={(e) => 
              setFilters({ ...filters, minArea: Number(e.target.value) || null })}
          />
        </div>
      </CardContent>
    </Card>
  );
}