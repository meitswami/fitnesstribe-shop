
import React from 'react';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import CategorySection from '@/components/home/CategorySection';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import DiscountSection from '@/components/home/DiscountSection';

const Index: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <CategorySection />
      <FeaturedProducts />
      <DiscountSection />
    </Layout>
  );
};

export default Index;
