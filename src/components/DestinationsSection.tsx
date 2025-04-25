
import React from 'react';
import DestinationCard from './DestinationCard';

const destinations = [
  {
    id: 1,
    image: '/bali.jpg',
    name: 'Bali Paradise',
    location: 'Bali, Indonesia',
    price: 'From $899',
    rating: 4.8
  },
  {
    id: 2,
    image: '/paris.jpg',
    name: 'Romantic Paris',
    location: 'Paris, France',
    price: 'From $1,199',
    rating: 4.7
  },
  {
    id: 3,
    image: '/santorini.jpg',
    name: 'Santorini Escape',
    location: 'Santorini, Greece',
    price: 'From $1,299',
    rating: 4.9
  },
  {
    id: 4,
    image: '/newyork.jpg',
    name: 'New York City',
    location: 'New York, USA',
    price: 'From $999',
    rating: 4.6
  }
];

const DestinationsSection = () => {
  return (
    <section id="destinations" className="section-container bg-travel-light-gray">
      <h2 className="section-title">Popular Destinations</h2>
      <p className="section-subtitle">Explore our carefully selected destinations around the world</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-slide-up">
        {destinations.map((destination) => (
          <DestinationCard 
            key={destination.id}
            image={destination.image}
            name={destination.name}
            location={destination.location}
            price={destination.price}
            rating={destination.rating}
          />
        ))}
      </div>
    </section>
  );
};

export default DestinationsSection;
