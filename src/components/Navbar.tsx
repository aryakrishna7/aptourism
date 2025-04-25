
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold text-travel-blue">Dream Destination</span>
              <span className="text-2xl font-bold text-travel-orange ml-1">AP Tours</span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a href="#home" className="text-gray-700 hover:text-travel-blue px-3 py-2 text-sm font-medium">Home</a>
              <a href="#destinations" className="text-gray-700 hover:text-travel-blue px-3 py-2 text-sm font-medium">Destinations</a>
              <a href="#packages" className="text-gray-700 hover:text-travel-blue px-3 py-2 text-sm font-medium">Packages</a>
              <a href="#about" className="text-gray-700 hover:text-travel-blue px-3 py-2 text-sm font-medium">About</a>
              <a href="#contact" className="text-gray-700 hover:text-travel-blue px-3 py-2 text-sm font-medium">Contact</a>
              <Button className="bg-travel-blue hover:bg-travel-blue/90">Book Now</Button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-travel-blue">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={cn(
        "md:hidden",
        isMenuOpen ? "block" : "hidden"
      )}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#home" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-travel-blue">Home</a>
          <a href="#destinations" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-travel-blue">Destinations</a>
          <a href="#packages" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-travel-blue">Packages</a>
          <a href="#about" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-travel-blue">About</a>
          <a href="#contact" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-travel-blue">Contact</a>
          <Button className="w-full mt-3 bg-travel-blue hover:bg-travel-blue/90">Book Now</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
