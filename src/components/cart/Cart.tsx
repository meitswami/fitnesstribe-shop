
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ShoppingBag, Trash, Plus, Minus } from 'lucide-react';

interface CartProps {
  setCartOpen?: (open: boolean) => void;
}

const Cart: React.FC<CartProps> = ({ setCartOpen }) => {
  const { cartItems, removeFromCart, updateQuantity, subtotal, clearCart } = useCart();

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Your Cart</h2>
        {cartItems.length > 0 && (
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => clearCart()}
            className="text-red-500 hover:text-red-700"
          >
            Clear Cart
          </Button>
        )}
      </div>

      {cartItems.length === 0 ? (
        <div className="text-center py-10">
          <ShoppingBag className="mx-auto h-12 w-12 text-gray-400 mb-4" />
          <h3 className="text-lg font-medium mb-2">Your cart is empty</h3>
          <p className="text-gray-500 mb-6">Looks like you haven't added any items to your cart yet.</p>
          <Button asChild onClick={() => setCartOpen && setCartOpen(false)}>
            <Link to="/shop">
              Start Shopping
            </Link>
          </Button>
        </div>
      ) : (
        <>
          <div className="space-y-4 max-h-[400px] overflow-y-auto mb-6 pr-2">
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
                <div key={itemId} className="flex items-center space-x-4">
                  <div className="flex-shrink-0 h-16 w-16 rounded bg-gray-100 overflow-hidden">
                    <img 
                      src={item.product.images[0]} 
                      alt={item.product.name} 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-grow min-w-0">
                    <Link 
                      to={`/product/${item.product.id}`}
                      className="text-sm font-medium hover:text-primary truncate"
                      onClick={() => setCartOpen && setCartOpen(false)}
                    >
                      {item.product.name}
                    </Link>
                    
                    {variantText && (
                      <p className="text-xs text-gray-500">{variantText}</p>
                    )}
                    
                    <div className="flex items-center mt-1">
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="h-6 w-6 rounded-full"
                        onClick={() => updateQuantity(itemId, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="mx-2 text-sm">{item.quantity}</span>
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="h-6 w-6 rounded-full"
                        onClick={() => updateQuantity(itemId, item.quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-end">
                    <span className="text-sm font-medium">${totalPrice.toFixed(2)}</span>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-6 w-6 text-gray-400 hover:text-red-500"
                      onClick={() => removeFromCart(itemId)}
                    >
                      <Trash className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
          
          <Separator className="my-4" />
          
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="font-medium">Subtotal</span>
              <span className="font-medium">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-500">
              <span>Shipping</span>
              <span>Calculated at checkout</span>
            </div>
            <Separator />
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            
            <Button 
              className="w-full"
              asChild
              onClick={() => setCartOpen && setCartOpen(false)}
            >
              <Link to="/checkout">
                Proceed to Checkout
              </Link>
            </Button>
            
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => setCartOpen && setCartOpen(false)}
            >
              Continue Shopping
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
