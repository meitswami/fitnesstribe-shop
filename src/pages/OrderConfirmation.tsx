
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const OrderConfirmation: React.FC = () => {
  const { orderId } = useParams<{ orderId: string }>();
  
  const successMessages = [
    "Your order has been successfully placed! Get ready to elevate your fitness journey.",
    "Thanks for your purchase! Your fitness equipment is on its way to help you crush your goals.",
    "Order confirmed! We're excited to be part of your fitness journey.",
    "Success! Your fitness gear will be with you soon. Time to get pumped!",
    "Your order is confirmed! We're packing your items with care to help you achieve your fitness dreams."
  ];
  
  // Generate a random success message
  const randomMessage = successMessages[Math.floor(Math.random() * successMessages.length)];
  
  // Generate a random delivery date (3-7 days from now)
  const deliveryDays = Math.floor(Math.random() * 5) + 3;
  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + deliveryDays);
  const formattedDeliveryDate = deliveryDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
          
          <h1 className="text-3xl font-bold mb-4">Order Confirmed!</h1>
          
          <p className="text-lg text-gray-700 mb-8">{randomMessage}</p>
          
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold mb-2">Order Details</h2>
            <div className="flex justify-between mb-2">
              <span className="font-medium">Order Number:</span>
              <span>{orderId}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="font-medium">Estimated Delivery:</span>
              <span>{formattedDeliveryDate}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Payment Method:</span>
              <span>Cash on Delivery (COD)</span>
            </div>
          </div>
          
          <p className="text-gray-600 mb-8">
            We've sent a confirmation email with your order details. If you have any questions, please contact our customer support team.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link to="/">
                Continue Shopping
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/contact">
                Contact Support
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OrderConfirmation;
