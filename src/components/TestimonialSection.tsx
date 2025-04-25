
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  location: string;
  image: string;
}

const Testimonial = ({ quote, author, location, image }: TestimonialProps) => (
  <Card className="bg-white shadow-sm rounded-lg overflow-hidden">
    <CardContent className="p-8">
      <div className="flex justify-center mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star 
            key={star} 
            size={20} 
            className="text-yellow-400 fill-yellow-400" 
          />
        ))}
      </div>
      <blockquote className="text-center mb-6 italic text-gray-700">"{quote}"</blockquote>
      <div className="flex items-center justify-center">
        <img src={image} alt={author} className="w-12 h-12 rounded-full object-cover mr-4" />
        <div>
          <p className="font-bold">{author}</p>
          <p className="text-sm text-gray-500">{location}</p>
        </div>
      </div>
    </CardContent>
  </Card>
);

const testimonials = [
  {
    id: 1,
    quote: "Our trip to Bali was absolutely perfect. Every detail was taken care of, and the local experiences were unforgettable.",
    author: "Sarah Johnson",
    location: "New York, USA",
    image: "/testimonial-1.jpg"
  },
  {
    id: 2,
    quote: "Dream Destination helped us plan our honeymoon to Santorini. It was beyond our expectations and truly magical.",
    author: "Michael & Emma",
    location: "London, UK",
    image: "/testimonial-2.jpg"
  },
  {
    id: 3,
    quote: "The Japan tour was well organized with a perfect balance of guided tours and free time to explore on our own.",
    author: "David Lee",
    location: "Toronto, Canada",
    image: "/testimonial-3.jpg"
  }
];

const TestimonialSection = () => {
  return (
    <section className="section-container">
      <h2 className="section-title">What Our Travelers Say</h2>
      <p className="section-subtitle">Read testimonials from travelers who have experienced our tours</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-slide-up">
        {testimonials.map(testimonial => (
          <Testimonial
            key={testimonial.id}
            quote={testimonial.quote}
            author={testimonial.author}
            location={testimonial.location}
            image={testimonial.image}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
