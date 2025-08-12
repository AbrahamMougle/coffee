import React from 'react';
import Button from './button';
interface CoffeeCardProps {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  ctaText: string;
}

const CoffeeCard: React.FC<CoffeeCardProps> = ({ 
  title, 
  description, 
  imageUrl, 
  ctaText 
}) => {
  return (
    <div className="group overflow-hidden rounded-xl bg-light/50 hover:bg-light transition-colors duration-300 border border-accent/10">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/20 to-transparent" />
      </div>

      <div className="p-5">
        <h3 className="text-xl font-heading text-dark mb-2">{title}</h3>
        <p className="text-dark/70 text-sm">
          {description}
        </p>
        <Button className="w-[200]" variant='primary' size='lg'>
          {ctaText} →
        </Button>
      </div>
    </div>
  );
};

export default CoffeeCard;