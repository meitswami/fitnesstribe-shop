
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CategorySection: React.FC = () => {
  const categories = [
    {
      id: 'gym_equipment',
      title: 'Gym Equipment',
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&auto=format&fit=crop',
      description: 'Professional-grade equipment for your home gym'
    },
    {
      id: 'sportswear',
      title: 'Sportswear',
      image: 'https://images.unsplash.com/photo-1536922246289-88c42f957773?w=800&auto=format&fit=crop',
      description: 'Performance apparel for every workout'
    },
    {
      id: 'yoga_meditation',
      title: 'Yoga & Meditation',
      image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&auto=format&fit=crop',
      description: 'Everything you need for your inner peace journey'
    },
    {
      id: 'recovery_wellness',
      title: 'Recovery & Wellness',
      image: 'https://images.unsplash.com/photo-1519311965067-36d3e5f33d39?w=800&auto=format&fit=crop',
      description: 'Tools and supplements to help you recover faster'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Shop By Category</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div key={category.id} className="bg-white rounded-lg shadow-md overflow-hidden product-card">
              <div 
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${category.image})` }}
              ></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <Link to={`/shop?category=${category.id}`}>
                  <Button variant="outline" className="w-full">Explore</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
