
import React from 'react';
import PackageCard from './PackageCard';

const packages = [
  {
    id: 1,
    image: '/bali-package.jpg',
    title: 'Bali Bliss Retreat',
    description: 'Experience the ultimate relaxation in Bali with spa treatments, beach visits, and cultural excursions.',
    price: '$1,299',
    duration: '7 Days',
    groupSize: '10 People',
    date: 'Available all year',
    featured: true
  },
  {
    id: 2,
    image: '/europe-package.jpg',
    title: 'European Explorer',
    description: 'Visit the most iconic cities in Europe: Paris, Rome, Barcelona, and Amsterdam in one amazing trip.',
    price: '$2,499',
    duration: '14 Days',
    groupSize: '12 People',
    date: 'Mar - Oct 2025',
    featured: false
  },
  {
    id: 3,
    image: '/japan-package.jpg',
    title: 'Japan Discovery',
    description: 'Immerse yourself in the rich culture of Japan, from bustling Tokyo to peaceful Kyoto temples.',
    price: '$2,199',
    duration: '10 Days',
    groupSize: '8 People',
    date: 'Apr - Nov 2025',
    featured: false
  }
];

const PackagesSection = () => {
  return (
    <section id="packages" className="section-container">
      <h2 className="section-title">Popular Tour Packages</h2>
      <p className="section-subtitle">Carefully crafted tours designed to give you the best experiences</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-up">
        {packages.map(pkg => (
          <PackageCard
            key={pkg.id}
            image={pkg.image}
            title={pkg.title}
            description={pkg.description}
            price={pkg.price}
            duration={pkg.duration}
            groupSize={pkg.groupSize}
            date={pkg.date}
            featured={pkg.featured}
          />
        ))}
      </div>
    </section>
  );
};

export default PackagesSection;
