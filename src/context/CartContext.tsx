
import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem, Product, ProductVariant } from '@/types';
import { toast } from 'sonner';

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product, quantity: number, variant?: ProductVariant) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [totalItems, setTotalItems] = useState(0);
  const [subtotal, setSubtotal] = useState(0);

  // Load cart from localStorage on initial render
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (e) {
        console.error('Error parsing cart from localStorage:', e);
        localStorage.removeItem('cart');
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
    
    // Calculate total items and subtotal
    const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    setTotalItems(itemCount);
    
    const total = cartItems.reduce((sum, item) => {
      const price = item.product.discountPercentage
        ? item.product.price * (1 - item.product.discountPercentage / 100)
        : item.product.price;
      return sum + price * item.quantity;
    }, 0);
    setSubtotal(total);
  }, [cartItems]);

  const addToCart = (product: Product, quantity: number, variant?: ProductVariant) => {
    setCartItems(prevItems => {
      // Check if item is already in cart with same variant
      const existingItemIndex = prevItems.findIndex(
        item => item.product.id === product.id && 
        (!variant || !item.variant || item.variant.id === variant.id)
      );

      if (existingItemIndex >= 0) {
        // Update quantity of existing item
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + quantity
        };
        toast.success(`Updated ${product.name} quantity in cart`);
        return updatedItems;
      } else {
        // Add new item
        toast.success(`Added ${product.name} to cart`);
        return [...prevItems, { product, quantity, variant }];
      }
    });
  };

  const removeFromCart = (itemId: string) => {
    const itemToRemove = cartItems.find(item => 
      item.variant ? `${item.product.id}-${item.variant.id}` === itemId : item.product.id === itemId
    );
    
    if (itemToRemove) {
      setCartItems(prevItems => 
        prevItems.filter(item => 
          item.variant 
            ? `${item.product.id}-${item.variant.id}` !== itemId 
            : item.product.id !== itemId
        )
      );
      toast.info(`Removed ${itemToRemove.product.name} from cart`);
    }
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
      return;
    }

    setCartItems(prevItems => 
      prevItems.map(item => {
        const currentItemId = item.variant 
          ? `${item.product.id}-${item.variant.id}` 
          : item.product.id;
          
        if (currentItemId === itemId) {
          return { ...item, quantity };
        }
        return item;
      })
    );
  };

  const clearCart = () => {
    setCartItems([]);
    toast.info('Cart has been cleared');
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      totalItems,
      subtotal
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
