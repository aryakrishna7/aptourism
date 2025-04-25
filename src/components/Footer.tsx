
import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Dream Destination</h3>
            <p className="text-gray-400 mb-6">Creating unforgettable travel experiences since 2014. Let us help you discover the world.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#destinations" className="text-gray-400 hover:text-white transition-colors">Destinations</a></li>
              <li><a href="#packages" className="text-gray-400 hover:text-white transition-colors">Tour Packages</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Popular Destinations</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Bali, Indonesia</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Paris, France</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Santorini, Greece</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Tokyo, Japan</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">New York, USA</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for travel tips and exclusive offers.</p>
            <div className="flex space-x-2 mb-4">
              <Input placeholder="Your email" className="bg-gray-800 border-gray-700" />
              <Button className="bg-travel-blue hover:bg-travel-blue/90">
                <Mail size={16} />
              </Button>
            </div>
            <p className="text-sm text-gray-500">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 pb-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Dream Destination AP Tours. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
