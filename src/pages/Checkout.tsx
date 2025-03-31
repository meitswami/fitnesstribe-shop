
import React from 'react';
import Layout from '@/components/layout/Layout';
import CheckoutForm from '@/components/checkout/CheckoutForm';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';
import { ShoppingBag } from 'lucide-react';

const Checkout: React.FC = () => {
  const { cartItems, subtotal } = useCart();

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-16 max-w-md mx-auto">
            <ShoppingBag className="mx-auto h-16 w-16 text-gray-400 mb-6" />
            <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">
              Looks like you haven't added any items to your cart yet. Browse our collections and find something you'll love!
            </p>
            <Button asChild>
              <Link to="/shop">
                Start Shopping
              </Link>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2">
              <CheckoutForm />
            </div>

            {/* Order Summary */}
            <div>
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
                
                <div className="max-h-[300px] overflow-y-auto mb-4 pr-2">
                  {cartItems.map((item) => {
                    const itemId = item.variant 
                      ? `${item.product.id}-${item.variant.id}` 
                      : item.product.id;
                      
                    const price = item.product.discountPercentage
                      ? item.product.price * (1 - item.product.discountPercentage / 100)
                      : item.product.price;
                      
                    const totalPrice = price * item.quantity;
                    const variantText = item.variant
                      ? item.variant.color 
                        ? item.variant.color 
                        : item.variant.size 
                          ? `Size ${item.variant.size}` 
                          : item.variant.weight 
                            ? item.variant.weight 
                            : ''
                      : '';

                    return (
                      <div key={itemId} className="flex items-start py-3">
                        <div className="flex-shrink-0 h-16 w-16 rounded bg-gray-100 overflow-hidden">
                          <img 
                            src={item.product.images[0]} 
                            alt={item.product.name} 
                            className="h-full w-full object-cover"
                          />
                        </div>
                        
                        <div className="ml-4 flex-grow">
                          <p className="font-medium text-sm">{item.product.name}</p>
                          {variantText && (
                            <p className="text-xs text-gray-500">{variantText}</p>
                          )}
                          <div className="flex justify-between items-center mt-1">
                            <span className="text-xs text-gray-500">Qty: {item.quantity}</span>
                            <span className="text-sm font-medium">${totalPrice.toFixed(2)}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                
                <Separator className="my-4" />
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Tax</span>
                    <span>Calculated at next step</span>
                  </div>
                </div>
                
                <Separator className="my-4" />
                
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                
                <p className="text-xs text-gray-500 mt-4">
                  By proceeding to checkout, you agree to our{' '}
                  <Link to="/terms" className="text-primary hover:underline">Terms & Conditions</Link>
                  {' '}and{' '}
                  <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Checkout;
