
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

interface DestinationCardProps {
  image: string;
  name: string;
  location: string;
  price: string;
  rating: number;
}

const DestinationCard = ({ image, name, location, price, rating }: DestinationCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="relative h-64 w-full overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-3 right-3 bg-white py-1 px-2 rounded-full text-sm font-semibold">
          {'★'.repeat(rating)}{rating % 1 > 0 ? '½' : ''}{' '}
          <span className="text-gray-500">{rating}/5</span>
        </div>
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold">{name}</h3>
          <p className="text-travel-blue font-bold">{price}</p>
        </div>
        <div className="flex items-center text-gray-500 mb-4">
          <MapPin size={16} className="mr-1" />
          <span className="text-sm">{location}</span>
        </div>
        <Button className="w-full bg-travel-blue hover:bg-travel-blue/90">Explore Now</Button>
      </CardContent>
    </Card>
  );
};

export default DestinationCard;
