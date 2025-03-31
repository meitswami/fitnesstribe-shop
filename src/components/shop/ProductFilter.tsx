
import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Filter, X } from 'lucide-react';

interface FilterProps {
  onFilterChange: (filters: any) => void;
  defaultFilters?: any;
  isMobile?: boolean;
}

const ProductFilter: React.FC<FilterProps> = ({ onFilterChange, defaultFilters, isMobile = false }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isOpen, setIsOpen] = useState(!isMobile);

  const [filters, setFilters] = useState({
    category: searchParams.get('category') || '',
    activity: searchParams.getAll('activity') || [],
    brand: searchParams.getAll('brand') || [],
    priceRange: [0, 200]
  });

  const handleCategoryChange = (category: string) => {
    const newFilters = { ...filters, category };
    setFilters(newFilters);
    onFilterChange(newFilters);
    
    if (category) {
      searchParams.set('category', category);
    } else {
      searchParams.delete('category');
    }
    setSearchParams(searchParams);
  };

  const handleActivityChange = (activity: string, checked: boolean) => {
    let activities = [...filters.activity];
    
    if (checked) {
      activities.push(activity);
    } else {
      activities = activities.filter(a => a !== activity);
    }
    
    const newFilters = { ...filters, activity: activities };
    setFilters(newFilters);
    onFilterChange(newFilters);
    
    searchParams.delete('activity');
    activities.forEach(a => searchParams.append('activity', a));
    setSearchParams(searchParams);
  };

  const handleBrandChange = (brand: string, checked: boolean) => {
    let brands = [...filters.brand];
    
    if (checked) {
      brands.push(brand);
    } else {
      brands = brands.filter(b => b !== brand);
    }
    
    const newFilters = { ...filters, brand: brands };
    setFilters(newFilters);
    onFilterChange(newFilters);
    
    searchParams.delete('brand');
    brands.forEach(b => searchParams.append('brand', b));
    setSearchParams(searchParams);
  };

  const handlePriceChange = (value: number[]) => {
    const newFilters = { ...filters, priceRange: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
    
    searchParams.set('minPrice', value[0].toString());
    searchParams.set('maxPrice', value[1].toString());
    setSearchParams(searchParams);
  };

  const resetFilters = () => {
    const newFilters = {
      category: '',
      activity: [],
      brand: [],
      priceRange: [0, 200]
    };
    setFilters(newFilters);
    onFilterChange(newFilters);
    setSearchParams({});
  };

  const toggleFilter = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-lg">Filters</h3>
        {isMobile ? (
          <Button variant="ghost" size="icon" onClick={toggleFilter}>
            {isOpen ? <X className="h-5 w-5" /> : <Filter className="h-5 w-5" />}
          </Button>
        ) : (
          <Button variant="outline" size="sm" onClick={resetFilters}>Reset</Button>
        )}
      </div>

      {isOpen && (
        <div className="space-y-6">
          {/* Categories */}
          <div>
            <h4 className="font-medium mb-2">Categories</h4>
            <div className="space-y-1">
              {[
                { id: '', label: 'All Categories' },
                { id: 'gym_equipment', label: 'Gym Equipment' },
                { id: 'cardio_machines', label: 'Cardio Machines' },
                { id: 'sportswear', label: 'Sportswear' },
                { id: 'yoga_meditation', label: 'Yoga & Meditation' },
                { id: 'outdoor_adventure', label: 'Outdoor & Adventure' },
                { id: 'recovery_wellness', label: 'Recovery & Wellness' }
              ].map(category => (
                <div key={category.id} className="flex items-center">
                  <input
                    type="radio"
                    id={`category-${category.id}`}
                    name="category"
                    className="mr-2"
                    checked={filters.category === category.id}
                    onChange={() => handleCategoryChange(category.id)}
                  />
                  <Label htmlFor={`category-${category.id}`}>{category.label}</Label>
                </div>
              ))}
            </div>
          </div>

          {/* Activity Type */}
          <div>
            <h4 className="font-medium mb-2">Activity Type</h4>
            <div className="space-y-1">
              {[
                { id: 'gym', label: 'Gym' },
                { id: 'running', label: 'Running' },
                { id: 'yoga', label: 'Yoga' },
                { id: 'outdoor', label: 'Outdoor' }
              ].map(activity => (
                <div key={activity.id} className="flex items-center">
                  <Checkbox
                    id={`activity-${activity.id}`}
                    checked={filters.activity.includes(activity.id)}
                    onCheckedChange={(checked) => 
                      handleActivityChange(activity.id, checked === true)
                    }
                    className="mr-2"
                  />
                  <Label htmlFor={`activity-${activity.id}`}>{activity.label}</Label>
                </div>
              ))}
            </div>
          </div>

          {/* Brand */}
          <div>
            <h4 className="font-medium mb-2">Brand</h4>
            <div className="space-y-1">
              {[
                { id: 'nike', label: 'Nike' },
                { id: 'adidas', label: 'Adidas' },
                { id: 'under_armour', label: 'Under Armour' },
                { id: 'reebok', label: 'Reebok' },
                { id: 'puma', label: 'Puma' },
                { id: 'new_balance', label: 'New Balance' },
                { id: 'fitgear', label: 'FitGear' }
              ].map(brand => (
                <div key={brand.id} className="flex items-center">
                  <Checkbox
                    id={`brand-${brand.id}`}
                    checked={filters.brand.includes(brand.id)}
                    onCheckedChange={(checked) => 
                      handleBrandChange(brand.id, checked === true)
                    }
                    className="mr-2"
                  />
                  <Label htmlFor={`brand-${brand.id}`}>{brand.label}</Label>
                </div>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div>
            <h4 className="font-medium mb-2">Price Range</h4>
            <div className="px-2">
              <Slider
                defaultValue={[0, 200]}
                max={200}
                step={10}
                value={filters.priceRange}
                onValueChange={handlePriceChange}
                className="my-6"
              />
              <div className="flex justify-between">
                <span>${filters.priceRange[0]}</span>
                <span>${filters.priceRange[1]}</span>
              </div>
            </div>
          </div>

          {isMobile && (
            <Button className="w-full" onClick={() => setIsOpen(false)}>
              Apply Filters
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductFilter;
