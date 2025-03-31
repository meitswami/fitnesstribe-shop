
import React from 'react';
import Layout from '@/components/layout/Layout';

const Terms: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>
          
          <div className="prose max-w-none">
            <p className="text-gray-700">
              Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
            
            <p className="text-gray-700 mt-6">
              These Terms & Conditions ("Terms") govern your use of the FitGear website and the purchase of products from our online store. By accessing our website or placing an order, you agree to be bound by these Terms.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Use of Our Website</h2>
            
            <p className="text-gray-700">
              You may use our website for lawful purposes only. You agree not to:
            </p>
            
            <ul className="list-disc pl-8 mt-4 space-y-2 text-gray-700">
              <li>Use our website in any way that violates applicable laws or regulations</li>
              <li>Engage in any conduct that restricts or inhibits anyone's use or enjoyment of our website</li>
              <li>Attempt to gain unauthorized access to our website, computer systems, or networks</li>
              <li>Use any robot, spider, or other automatic device to access our website</li>
              <li>Introduce any viruses, trojans, worms, or other material that is malicious or technologically harmful</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Products and Pricing</h2>
            
            <p className="text-gray-700">
              We strive to provide accurate product descriptions and pricing information. However, we do not warrant that product descriptions or pricing information is accurate, complete, reliable, current, or error-free. In the event of a pricing error, we reserve the right to cancel any orders placed for products listed at the incorrect price.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Orders and Payments</h2>
            
            <p className="text-gray-700">
              When you place an order, you offer to purchase the products at the prices listed. We reserve the right to accept or decline your order for any reason, including but not limited to:
            </p>
            
            <ul className="list-disc pl-8 mt-4 space-y-2 text-gray-700">
              <li>Product availability</li>
              <li>Errors in product or pricing information</li>
              <li>Problems with your payment method</li>
              <li>Suspected fraudulent activity</li>
            </ul>
            
            <p className="text-gray-700 mt-4">
              Payment must be made at the time of placing your order. We accept various payment methods as indicated on our website.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Shipping and Delivery</h2>
            
            <p className="text-gray-700">
              We will make every effort to deliver products within the estimated delivery times indicated on our website. However, delivery times are estimates only and are not guaranteed. We are not responsible for delays that are beyond our control.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Returns and Refunds</h2>
            
            <p className="text-gray-700">
              You may return most new, unopened items within 30 days of delivery for a full refund. If the item is defective or damaged, you may return it within 30 days of delivery for a refund or replacement. Please refer to our Return Policy for detailed information on how to return items and the conditions that apply.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Intellectual Property</h2>
            
            <p className="text-gray-700">
              All content on our website, including text, graphics, logos, images, and software, is the property of FitGear or our content suppliers and is protected by copyright and other intellectual property laws. You may not use, reproduce, distribute, or create derivative works from this content without our express written permission.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Limitation of Liability</h2>
            
            <p className="text-gray-700">
              To the fullest extent permitted by law, FitGear shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or use, arising out of or in connection with your use of our website or the purchase of products from our online store.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to These Terms</h2>
            
            <p className="text-gray-700">
              We may update these Terms from time to time. If we make changes, we will notify you by revising the date at the top of these Terms. Your continued use of our website after any changes indicates your acceptance of the updated Terms.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
            
            <p className="text-gray-700">
              If you have any questions about these Terms, please contact us at:
            </p>
            
            <p className="text-gray-700 mt-4">
              FitGear<br />
              123 Fitness Avenue<br />
              New York, NY 10001<br />
              Email: legal@fitgear.com<br />
              Phone: +1 (800) 555-GEAR
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Terms;
