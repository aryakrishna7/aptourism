
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const heroBackgrounds = [
  '/bali.jpg',
  '/paris.jpg',
  '/santorini.jpg',
  '/newyork.jpg'
];

const HeroSection = () => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => 
        prevIndex === heroBackgrounds.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero-section">
      {heroBackgrounds.map((bg, index) => (
        <div
          key={bg}
          className="absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out bg-cover bg-center"
          style={{
            backgroundImage: `url(${bg})`,
            opacity: index === currentBgIndex ? 1 : 0,
            zIndex: index === currentBgIndex ? 5 : 1,
          }}
        />
      ))}
      <div className="hero-overlay"></div>
      <div className="hero-content animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Discover Your Dream Destination</h1>
        <p className="text-xl text-white mb-8 max-w-2xl">Explore the world with our expertly crafted travel experiences and create memories that last a lifetime.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" className="bg-travel-blue hover:bg-travel-blue/90 text-white">Explore Destinations</Button>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-travel-blue">
            View Tour Packages
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
