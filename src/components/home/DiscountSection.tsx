
import React from 'react';
import { Link } from 'react-router-dom';
import { getDiscountedProducts } from '@/data/products';
import ProductCard from '@/components/shop/ProductCard';

const DiscountSection: React.FC = () => {
  const discountedProducts = getDiscountedProducts();

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Special Offers</h2>
          <Link to="/shop" className="text-primary hover:underline">
            View All Deals
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {discountedProducts.slice(0, 4).map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiscountSection;
