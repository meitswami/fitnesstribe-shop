
import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ShoppingCart, Heart, ChevronLeft, ChevronRight, Star, Truck, RotateCcw, ShieldCheck } from 'lucide-react';
import { getProductById } from '@/data/products';
import { Product, ProductVariant } from '@/types';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';
import NotFound from './NotFound';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = getProductById(id || '');

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | undefined>(
    product?.variants && product.variants.length > 0 ? product.variants[0] : undefined
  );

  if (!product) {
    return <NotFound />;
  }

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedVariant);
  };

  const handleQuantityChange = (value: number) => {
    if (value < 1) return;
    if (value > product.stock) {
      toast.error(`Sorry, only ${product.stock} items in stock`);
      return;
    }
    setQuantity(value);
  };

  const discountedPrice = product.discountPercentage
    ? product.price * (1 - product.discountPercentage / 100)
    : product.price;

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-500 mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-primary">Shop</Link>
          <span className="mx-2">/</span>
          <Link 
            to={`/shop?category=${product.category}`} 
            className="hover:text-primary"
          >
            {product.category.split('_').join(' ')}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Product Images */}
          <div className="relative">
            <div className="relative bg-gray-100 rounded-lg overflow-hidden aspect-square">
              <img 
                src={product.images[currentImageIndex]} 
                alt={product.name} 
                className="w-full h-full object-contain p-4"
              />
              
              {product.discountPercentage && product.discountPercentage > 0 && (
                <Badge className="absolute top-4 left-4 bg-accent">
                  {product.discountPercentage}% OFF
                </Badge>
              )}
              
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full"
                onClick={handlePrevImage}
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full"
                onClick={handleNextImage}
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
            
            {/* Thumbnail Images */}
            {product.images.length > 1 && (
              <div className="flex space-x-2 mt-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    className={`w-16 h-16 rounded-md overflow-hidden border-2 ${
                      index === currentImageIndex ? 'border-primary' : 'border-transparent'
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  >
                    <img 
                      src={image} 
                      alt={`${product.name} - view ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            
            <div className="flex items-center mb-4">
              <div className="flex items-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                  />
                ))}
                <span className="text-gray-600 text-sm ml-1">({product.rating})</span>
              </div>
              <Separator orientation="vertical" className="mx-4 h-5" />
              <span className="text-gray-600 text-sm">
                {product.stock > 0 ? `In Stock (${product.stock})` : 'Out of Stock'}
              </span>
            </div>
            
            <div className="mb-6">
              {product.discountPercentage && product.discountPercentage > 0 ? (
                <div className="flex items-center">
                  <span className="text-2xl font-bold">${discountedPrice.toFixed(2)}</span>
                  <span className="text-gray-500 line-through ml-2">${product.price.toFixed(2)}</span>
                  <Badge className="ml-3 bg-accent">Save ${(product.price - discountedPrice).toFixed(2)}</Badge>
                </div>
              ) : (
                <span className="text-2xl font-bold">${product.price.toFixed(2)}</span>
              )}
            </div>
            
            <p className="text-gray-700 mb-6">{product.description}</p>
            
            {/* Variants */}
            {product.variants && product.variants.length > 0 && (
              <div className="mb-6">
                <h3 className="font-medium mb-2">
                  {product.variants[0].color ? 'Color' : 
                   product.variants[0].size ? 'Size' : 
                   product.variants[0].weight ? 'Weight' : 'Variant'}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.variants.map((variant) => {
                    const variantLabel = variant.color || variant.size || variant.weight || 'Default';
                    
                    return (
                      <Button
                        key={variant.id}
                        variant={selectedVariant?.id === variant.id ? "default" : "outline"}
                        onClick={() => setSelectedVariant(variant)}
                        className="min-w-[50px]"
                      >
                        {variantLabel}
                      </Button>
                    );
                  })}
                </div>
              </div>
            )}
            
            {/* Quantity */}
            <div className="mb-6">
              <h3 className="font-medium mb-2">Quantity</h3>
              <div className="flex items-center">
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={() => handleQuantityChange(quantity - 1)}
                  disabled={quantity <= 1}
                >
                  -
                </Button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                  className="w-16 text-center mx-2 p-2 border rounded-md"
                  min="1"
                  max={product.stock}
                />
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={() => handleQuantityChange(quantity + 1)}
                  disabled={quantity >= product.stock}
                >
                  +
                </Button>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                className="flex-1" 
                size="lg" 
                onClick={handleAddToCart}
                disabled={product.stock <= 0}
              >
                <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
              </Button>
              <Button variant="outline" size="lg">
                <Heart className="mr-2 h-5 w-5" /> Add to Wishlist
              </Button>
            </div>
            
            {/* Product Meta */}
            <div className="space-y-4 text-sm">
              <div className="flex items-center">
                <ShieldCheck className="mr-2 h-5 w-5 text-green-600" />
                <span>Secure payment & data protection</span>
              </div>
              <div className="flex items-center">
                <Truck className="mr-2 h-5 w-5 text-blue-600" />
                <span>Free shipping on orders over $50</span>
              </div>
              <div className="flex items-center">
                <RotateCcw className="mr-2 h-5 w-5 text-orange-600" />
                <span>30-day money-back guarantee</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Product Details Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="description">
            <TabsList className="w-full border-b">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="py-6">
              <p className="text-gray-700">{product.description}</p>
              <p className="text-gray-700 mt-4">
                Our {product.name} is designed with quality and performance in mind. Perfect for fitness enthusiasts of all levels, this product combines durability with functionality to enhance your workout experience.
              </p>
              <p className="text-gray-700 mt-4">
                Whether you're a beginner just starting your fitness journey or a seasoned athlete looking to upgrade your equipment, the {product.name} is an excellent choice for achieving your health and fitness goals.
              </p>
            </TabsContent>
            <TabsContent value="specifications" className="py-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Product Details</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Brand: {product.brand.split('_').join(' ')}</li>
                    <li>Category: {product.category.split('_').join(' ')}</li>
                    <li>Activities: {product.activity.join(', ')}</li>
                    <li>Stock: {product.stock} units</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Material & Care</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Premium quality materials</li>
                    <li>Durable construction</li>
                    <li>Easy to clean and maintain</li>
                    <li>See product manual for detailed care instructions</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="py-6">
              <div className="flex items-center mb-6">
                <div className="mr-4">
                  <div className="text-5xl font-bold">{product.rating}</div>
                  <div className="flex mt-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">Based on 24 reviews</div>
                </div>
                <div className="flex-1">
                  <div className="space-y-1">
                    {[5, 4, 3, 2, 1].map((star) => (
                      <div key={star} className="flex items-center">
                        <div className="w-8 text-sm">{star} ★</div>
                        <div className="flex-1 h-2 bg-gray-200 rounded-full mx-2 overflow-hidden">
                          <div 
                            className="h-full bg-yellow-400 rounded-full" 
                            style={{ 
                              width: `${star === Math.round(product.rating) ? '60' : 
                                     star === Math.round(product.rating) + 1 || star === Math.round(product.rating) - 1 ? '25' : '5'}%` 
                            }}
                          ></div>
                        </div>
                        <div className="w-8 text-sm text-right">
                          {star === Math.round(product.rating) ? '15' : 
                           star === Math.round(product.rating) + 1 || star === Math.round(product.rating) - 1 ? '6' : '1'}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <Button>Write a Review</Button>
              <div className="mt-8 space-y-6">
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center mb-2">
                    <div className="font-medium">Sarah J.</div>
                    <div className="flex ml-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-3 h-3 ${i < 5 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <div className="text-xs text-gray-500 ml-auto">3 weeks ago</div>
                  </div>
                  <p className="text-gray-700">
                    Great product! Exactly what I needed for my home workouts. The quality is excellent and it arrived faster than expected.
                  </p>
                </div>
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center mb-2">
                    <div className="font-medium">Michael T.</div>
                    <div className="flex ml-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-3 h-3 ${i < 4 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <div className="text-xs text-gray-500 ml-auto">1 month ago</div>
                  </div>
                  <p className="text-gray-700">
                    Very happy with my purchase. The {product.name} is well-made and durable. Would buy from FitGear again!
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
