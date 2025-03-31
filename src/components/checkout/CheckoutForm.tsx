
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import { toast } from 'sonner';

const CheckoutForm: React.FC = () => {
  const navigate = useNavigate();
  const { cartItems, subtotal, clearCart } = useCart();
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
    sameAsBilling: true
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSameAsBillingChange = (checked: boolean) => {
    setFormData({
      ...formData,
      sameAsBilling: checked
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (cartItems.length === 0) {
      toast.error('Your cart is empty');
      return;
    }

    // In a real app, we would submit the order to an API
    // Here we'll just simulate success
    
    // Generate a random order number
    const orderNumber = Math.floor(Math.random() * 1000000);
    
    // Clear the cart
    clearCart();
    
    // Redirect to confirmation page
    navigate(`/order-confirmation/${orderNumber}`);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Billing Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input 
              id="firstName" 
              name="firstName" 
              value={formData.firstName} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input 
              id="lastName" 
              name="lastName" 
              value={formData.lastName} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input 
              id="email" 
              name="email" 
              type="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input 
              id="phone" 
              name="phone" 
              type="tel" 
              value={formData.phone} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="address">Address</Label>
            <Input 
              id="address" 
              name="address" 
              value={formData.address} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="city">City</Label>
            <Input 
              id="city" 
              name="city" 
              value={formData.city} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="state">State</Label>
            <Input 
              id="state" 
              name="state" 
              value={formData.state} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="zipCode">Zip Code</Label>
            <Input 
              id="zipCode" 
              name="zipCode" 
              value={formData.zipCode} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="country">Country</Label>
            <Input 
              id="country" 
              name="country" 
              value={formData.country} 
              onChange={handleChange} 
              required 
            />
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center space-x-2 mb-4">
          <Checkbox 
            id="sameAsBilling" 
            checked={formData.sameAsBilling} 
            onCheckedChange={handleSameAsBillingChange} 
          />
          <Label htmlFor="sameAsBilling">Shipping address same as billing</Label>
        </div>

        {!formData.sameAsBilling && (
          <div>
            <h3 className="text-lg font-semibold mb-4">Shipping Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Shipping address fields would go here, similar to billing fields */}
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="shippingAddress">Address</Label>
                <Input id="shippingAddress" name="shippingAddress" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="shippingCity">City</Label>
                <Input id="shippingCity" name="shippingCity" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="shippingState">State</Label>
                <Input id="shippingState" name="shippingState" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="shippingZipCode">Zip Code</Label>
                <Input id="shippingZipCode" name="shippingZipCode" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="shippingCountry">Country</Label>
                <Input id="shippingCountry" name="shippingCountry" required defaultValue="United States" />
              </div>
            </div>
          </div>
        )}
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Payment Method</h3>
        <div className="flex items-center space-x-2 p-4 border rounded">
          <Checkbox id="cashOnDelivery" checked={true} disabled />
          <div>
            <Label htmlFor="cashOnDelivery">Cash on Delivery (COD)</Label>
            <p className="text-sm text-gray-500">Pay when your order arrives</p>
          </div>
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <Separator className="my-2" />
          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
        </div>
      </div>

      <Button type="submit" className="w-full" size="lg">
        Place Order
      </Button>
    </form>
  );
};

export default CheckoutForm;
