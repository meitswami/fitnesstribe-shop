
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';

const Hero: React.FC = () => {
  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&auto=format&fit=crop",
      title: "Premium Fitness Equipment",
      description: "Gear up for success with our professional-grade equipment",
      buttonText: "Shop Equipment",
      link: "/shop?category=gym_equipment"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=1600&auto=format&fit=crop",
      title: "Yoga & Meditation Essentials",
      description: "Find your inner peace with our yoga and meditation collection",
      buttonText: "Shop Yoga",
      link: "/shop?category=yoga_meditation"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?w=1600&auto=format&fit=crop",
      title: "Athletic Footwear & Apparel",
      description: "Elevate your performance with our premium sportswear range",
      buttonText: "Shop Sportswear",
      link: "/shop?category=sportswear"
    }
  ];

  return (
    <div className="relative overflow-hidden">
      <Carousel className="w-full">
        <CarouselContent>
          {slides.map((slide) => (
            <CarouselItem key={slide.id}>
              <div className="relative h-[70vh] w-full">
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${slide.image})` }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center px-6 md:px-16">
                    <div className="max-w-lg">
                      <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">{slide.title}</h1>
                      <p className="text-white text-lg mb-8">{slide.description}</p>
                      <Link to={slide.link}>
                        <Button size="lg" className="bg-accent hover:bg-accent/90">
                          {slide.buttonText}
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </div>
  );
};

export default Hero;
