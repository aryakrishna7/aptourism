
import React from 'react';
import { Check } from 'lucide-react';

const benefits = [
  'Expertly crafted travel itineraries',
  'Local guides and authentic experiences',
  'Premium accommodations and transportation',
  'Personalized customer service',
  '24/7 support during your trip',
  '100% satisfaction guarantee'
];

const AboutSection = () => {
  return (
    <section id="about" className="section-container">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="rounded-lg overflow-hidden">
            <img 
              src="/about-image.jpg" 
              alt="About Dream Destination AP Tours" 
              className="w-full h-auto rounded-lg object-cover" 
            />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden md:block">
            <img 
              src="/about-accent.jpg" 
              alt="" 
              className="w-48 h-48 object-cover rounded-lg border-4 border-white shadow-lg" 
            />
          </div>
        </div>
        
        <div className="animate-slide-up">
          <h2 className="text-3xl font-bold mb-4">About Dream Destination AP Tours</h2>
          <div className="w-20 h-1 bg-travel-blue mb-6"></div>
          <p className="mb-6 text-gray-700">
            Dream Destination AP Tours has been creating unforgettable travel experiences for over 10 years. 
            Our passion is to help travelers discover new destinations, cultures, and experiences around the world.
          </p>
          <p className="mb-8 text-gray-700">
            What sets us apart is our dedication to authentic travel experiences, attention to detail, 
            and commitment to responsible tourism that benefits local communities.
          </p>
          
          <h3 className="text-xl font-bold mb-4">Why Choose Us</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="bg-travel-blue rounded-full p-1 flex items-center justify-center">
                  <Check size={14} className="text-white" />
                </div>
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
