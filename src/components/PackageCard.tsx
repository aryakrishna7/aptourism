
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, Users, Calendar, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface PackageCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  groupSize: string;
  date: string;
  featured?: boolean;
}

const PackageCard = ({ 
  image, 
  title, 
  description, 
  price, 
  duration, 
  groupSize, 
  date, 
  featured 
}: PackageCardProps) => {
  return (
    <Card className={`overflow-hidden hover:shadow-lg transition-all ${featured ? 'border-travel-blue border-2' : ''}`}>
      <div className="relative">
        <img src={image} alt={title} className="h-48 w-full object-cover" />
        {featured && (
          <Badge className="absolute top-3 left-3 bg-travel-orange">Featured</Badge>
        )}
      </div>
      <CardContent className="p-5">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>
        
        <div className="grid grid-cols-2 gap-3 text-sm mb-4">
          <div className="flex items-center">
            <Clock size={16} className="mr-2 text-travel-blue" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center">
            <Users size={16} className="mr-2 text-travel-blue" />
            <span>{groupSize}</span>
          </div>
          <div className="flex items-center col-span-2">
            <Calendar size={16} className="mr-2 text-travel-blue" />
            <span>{date}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between border-t pt-4">
          <div className="flex items-baseline">
            <span className="text-xl font-bold text-travel-blue">{price}</span>
            <span className="text-gray-500 text-xs ml-1">/ person</span>
          </div>
          <div className="flex items-center">
            <Star size={16} className="text-yellow-400 fill-yellow-400" />
            <Star size={16} className="text-yellow-400 fill-yellow-400" />
            <Star size={16} className="text-yellow-400 fill-yellow-400" />
            <Star size={16} className="text-yellow-400 fill-yellow-400" />
            <Star size={16} className="text-yellow-400 fill-yellow-400" />
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-5 pt-0">
        <Button className="w-full bg-travel-blue hover:bg-travel-blue/90">Book Now</Button>
      </CardFooter>
    </Card>
  );
};

export default PackageCard;
