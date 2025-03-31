
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">About FitGear</h1>
          
          <div className="mb-10 rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1539794830467-1f1755804d13?w=1200&auto=format&fit=crop" 
              alt="Team at FitGear" 
              className="w-full h-auto"
            />
          </div>
          
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Our Mission</h2>
            <p className="text-gray-700">
              At FitGear, our mission is to make high-quality fitness equipment and sportswear accessible to everyone. We believe that everyone deserves the tools they need to achieve their fitness goals, regardless of their experience level or budget.
            </p>
            
            <h2 className="text-2xl font-semibold pt-4">Our Story</h2>
            <p className="text-gray-700">
              FitGear was founded in 2018 by a group of fitness enthusiasts who were frustrated with the lack of affordable, high-quality fitness equipment on the market. We started with a small collection of dumbbells and yoga mats, and have since expanded our product line to include everything from cardio machines to recovery tools.
            </p>
            <p className="text-gray-700">
              Our team combines decades of experience in fitness, product design, and retail to create products that are not only effective and durable, but also beautifully designed. We work directly with manufacturers to ensure that every product meets our high standards before it reaches our customers.
            </p>
            
            <h2 className="text-2xl font-semibold pt-4">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-medium mb-2">Quality</h3>
                <p className="text-gray-700">
                  We never compromise on quality. Every product goes through rigorous testing to ensure it will stand up to the demands of your workout routine.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-medium mb-2">Affordability</h3>
                <p className="text-gray-700">
                  We believe that fitness should be accessible to everyone. That's why we work hard to keep our prices competitive without sacrificing quality.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-medium mb-2">Customer Service</h3>
                <p className="text-gray-700">
                  Our team is dedicated to providing exceptional customer service. We're here to help you find the right products for your needs and answer any questions you may have.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-medium mb-2">Sustainability</h3>
                <p className="text-gray-700">
                  We're committed to reducing our environmental impact. That's why we use eco-friendly materials whenever possible and minimize packaging waste.
                </p>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold pt-4">Our Team</h2>
            <p className="text-gray-700">
              Our team consists of fitness enthusiasts, athletes, and industry experts who are passionate about helping others achieve their fitness goals. We're committed to providing exceptional customer service and expert advice to help you find the right products for your needs.
            </p>
            
            <div className="flex justify-center mt-8">
              <Button asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
