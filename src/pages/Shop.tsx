
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import ProductCard from '@/components/shop/ProductCard';
import ProductFilter from '@/components/shop/ProductFilter';
import { Button } from '@/components/ui/button';
import { products } from '@/data/products';
import { Product, Activity } from '@/types';
import { Filter } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useIsMobile } from '@/hooks/use-mobile';

const Shop: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const isMobile = useIsMobile();

  const initialFilters = {
    category: searchParams.get('category') || '',
    activity: searchParams.getAll('activity') || [],
    brand: searchParams.getAll('brand') || [],
    priceRange: [
      parseInt(searchParams.get('minPrice') || '0'),
      parseInt(searchParams.get('maxPrice') || '200')
    ]
  };

  const [sortOption, setSortOption] = useState('featured');

  useEffect(() => {
    applyFilters(initialFilters);
  }, [searchParams]);

  const applyFilters = (filters: any) => {
    let result = [...products];

    // Filter by category
    if (filters.category) {
      result = result.filter(product => product.category === filters.category);
    }

    // Filter by activity
    if (filters.activity && filters.activity.length > 0) {
      result = result.filter(product => 
        filters.activity.some((activity: string) => 
          product.activity.includes(activity as Activity)
        )
      );
    }

    // Filter by brand
    if (filters.brand && filters.brand.length > 0) {
      result = result.filter(product => 
        filters.brand.includes(product.brand)
      );
    }

    // Filter by price range
    if (filters.priceRange && filters.priceRange.length === 2) {
      const [min, max] = filters.priceRange;
      result = result.filter(product => {
        const price = product.discountPercentage
          ? product.price * (1 - product.discountPercentage / 100)
          : product.price;
        return price >= min && price <= max;
      });
    }

    setFilteredProducts(result);
  };

  const sortProducts = (products: Product[]): Product[] => {
    const productsCopy = [...products];

    switch (sortOption) {
      case 'price-low':
        return productsCopy.sort((a, b) => {
          const priceA = a.discountPercentage ? a.price * (1 - a.discountPercentage / 100) : a.price;
          const priceB = b.discountPercentage ? b.price * (1 - b.discountPercentage / 100) : b.price;
          return priceA - priceB;
        });
      case 'price-high':
        return productsCopy.sort((a, b) => {
          const priceA = a.discountPercentage ? a.price * (1 - a.discountPercentage / 100) : a.price;
          const priceB = b.discountPercentage ? b.price * (1 - b.discountPercentage / 100) : b.price;
          return priceB - priceA;
        });
      case 'rating':
        return productsCopy.sort((a, b) => b.rating - a.rating);
      default:
        return productsCopy.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }
  };

  const sortedProducts = sortProducts(filteredProducts);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Shop Our Products</h1>

        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600">{filteredProducts.length} products found</p>

          <div className="flex gap-4 items-center">
            {isMobile && (
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="sm">
                    <Filter className="mr-2 h-4 w-4" /> Filters
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] sm:w-[450px]">
                  <div className="py-4">
                    <ProductFilter onFilterChange={applyFilters} defaultFilters={initialFilters} isMobile={true} />
                  </div>
                </SheetContent>
              </Sheet>
            )}

            <select
              className="bg-white border rounded-md px-3 py-2 text-sm"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Customer Rating</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters - Desktop */}
          {!isMobile && (
            <div className="hidden lg:block sticky top-24 h-fit">
              <ProductFilter onFilterChange={applyFilters} defaultFilters={initialFilters} />
            </div>
          )}

          {/* Products Grid */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedProducts.length > 0 ? (
              sortedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <h3 className="text-xl font-semibold mb-2">No products found</h3>
                <p className="text-gray-500 mb-6">Try adjusting your filters to find what you're looking for.</p>
                <Button onClick={() => applyFilters(initialFilters)}>Reset Filters</Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Shop;
