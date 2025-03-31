
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Menu, X, Search, User } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import Cart from '@/components/cart/Cart';
import AuthModal from '@/components/auth/AuthModal';

const Navbar: React.FC = () => {
  const { totalItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-primary flex items-center">
            <span className="mr-2">🏋️‍♂️</span>
            FitGear
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-secondary hover:text-primary transition-colors">Home</Link>
            <Link to="/shop" className="text-secondary hover:text-primary transition-colors">Shop</Link>
            <Link to="/about" className="text-secondary hover:text-primary transition-colors">About</Link>
            <Link to="/contact" className="text-secondary hover:text-primary transition-colors">Contact</Link>
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </DialogTrigger>
              <DialogContent>
                <AuthModal />
              </DialogContent>
            </Dialog>

            <Dialog open={cartOpen} onOpenChange={setCartOpen}>
              <DialogTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="relative"
                >
                  <ShoppingCart className="h-5 w-5" />
                  {totalItems > 0 && (
                    <span className="absolute -top-1 -right-1 bg-accent text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-cart-pulse">
                      {totalItems}
                    </span>
                  )}
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <Cart setCartOpen={setCartOpen} />
              </DialogContent>
            </Dialog>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-4">
            <Dialog open={cartOpen} onOpenChange={setCartOpen}>
              <DialogTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="relative"
                >
                  <ShoppingCart className="h-5 w-5" />
                  {totalItems > 0 && (
                    <span className="absolute -top-1 -right-1 bg-accent text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {totalItems}
                    </span>
                  )}
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <Cart setCartOpen={setCartOpen} />
              </DialogContent>
            </Dialog>
            
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2 border-t mt-4 flex flex-col space-y-4">
            <Link to="/" className="text-secondary hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/shop" className="text-secondary hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Shop</Link>
            <Link to="/about" className="text-secondary hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link to="/contact" className="text-secondary hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            <div className="py-2 flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
              </Button>
              
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <User className="h-5 w-5" />
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <AuthModal />
                </DialogContent>
              </Dialog>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
