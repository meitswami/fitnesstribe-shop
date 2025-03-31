
import React from 'react';
import Layout from '@/components/layout/Layout';

const Privacy: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose max-w-none">
            <p className="text-gray-700">
              Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
            
            <p className="text-gray-700 mt-6">
              At FitGear, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or make a purchase from our online store.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
            
            <p className="text-gray-700">
              We collect information that you provide directly to us, such as when you:
            </p>
            
            <ul className="list-disc pl-8 mt-4 space-y-2 text-gray-700">
              <li>Create an account</li>
              <li>Make a purchase</li>
              <li>Sign up for our newsletter</li>
              <li>Contact our customer service</li>
              <li>Participate in contests, surveys, or promotions</li>
            </ul>
            
            <p className="text-gray-700 mt-4">
              The types of information we may collect include your name, email address, postal address, phone number, payment information, and any other information you choose to provide.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
            
            <p className="text-gray-700">
              We may use the information we collect to:
            </p>
            
            <ul className="list-disc pl-8 mt-4 space-y-2 text-gray-700">
              <li>Process and fulfill your orders</li>
              <li>Communicate with you about products, services, promotions, and events</li>
              <li>Provide customer service and respond to your inquiries</li>
              <li>Improve and optimize our website and services</li>
              <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
              <li>Comply with legal obligations</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Sharing Your Information</h2>
            
            <p className="text-gray-700">
              We may share your information with:
            </p>
            
            <ul className="list-disc pl-8 mt-4 space-y-2 text-gray-700">
              <li>Service providers who perform services on our behalf</li>
              <li>Partners with whom we offer co-branded services or products</li>
              <li>Law enforcement or other third parties in response to legal process or when we believe in good faith that the law requires it</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Your Choices</h2>
            
            <p className="text-gray-700">
              You have certain choices about how we use your information:
            </p>
            
            <ul className="list-disc pl-8 mt-4 space-y-2 text-gray-700">
              <li>You can opt out of receiving our marketing emails by following the unsubscribe instructions in those emails</li>
              <li>You can update or correct your account information by logging into your account</li>
              <li>You can request access to your personal information or ask us to delete your personal information</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Security</h2>
            
            <p className="text-gray-700">
              We take reasonable measures to help protect the information we collect from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to This Privacy Policy</h2>
            
            <p className="text-gray-700">
              We may update this Privacy Policy from time to time. If we make changes, we will notify you by revising the date at the top of the policy and, in some cases, we may provide you with additional notice.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
            
            <p className="text-gray-700">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            
            <p className="text-gray-700 mt-4">
              FitGear<br />
              123 Fitness Avenue<br />
              New York, NY 10001<br />
              Email: privacy@fitgear.com<br />
              Phone: +1 (800) 555-GEAR
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Privacy;
