
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '@/types';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  
  const discountedPrice = product.discountPercentage
    ? product.price * (1 - product.discountPercentage / 100)
    : product.price;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden product-card">
      <Link to={`/product/${product.id}`}>
        <div 
          className="h-56 bg-cover bg-center relative"
          style={{ backgroundImage: `url(${product.images[0]})` }}
        >
          {product.discountPercentage && product.discountPercentage > 0 && (
            <Badge className="absolute top-2 right-2 bg-accent">
              {product.discountPercentage}% OFF
            </Badge>
          )}
        </div>
      </Link>
      
      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-semibold text-lg mb-1 hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>
        
        <div className="flex items-center mb-2">
          <div className="flex items-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg 
                key={i} 
                className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="text-gray-600 text-sm ml-1">({product.rating})</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <div>
            {product.discountPercentage && product.discountPercentage > 0 ? (
              <div className="flex items-center">
                <span className="text-xl font-bold">${discountedPrice.toFixed(2)}</span>
                <span className="text-gray-500 line-through ml-2">${product.price.toFixed(2)}</span>
              </div>
            ) : (
              <span className="text-xl font-bold">${product.price.toFixed(2)}</span>
            )}
          </div>
          <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200">
            {product.category.split('_').join(' ')}
          </Badge>
        </div>
        
        <Button 
          className="w-full" 
          onClick={(e) => {
            e.preventDefault();
            addToCart(product, 1);
          }}
        >
          <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
