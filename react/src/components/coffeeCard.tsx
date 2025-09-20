import React from "react";
import Button from "./button";
import { motion} from "framer-motion";
import type { Variants } from "framer-motion";

interface CoffeeCardProps {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  ctaText: string;
}

const directions = ["left", "right", "top"] as const;

const getDirectionVariant = (direction: typeof directions[number]): Variants => {
  switch (direction) {
    case "left":
      return { hidden: { x: -50, opacity: 0 }, visible: { x: 0, opacity: 1, transition: { duration: 0.5 } } };
    case "right":
      return { hidden: { x: 50, opacity: 0 }, visible: { x: 0, opacity: 1, transition: { duration: 0.5 } } };
    case "top":
      return { hidden: { y: -50, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.5 } } };
  }
};
// getDirection renvoie le variant selon left, right ,top 
const CoffeeCard: React.FC<CoffeeCardProps> = ({ title, description, imageUrl, ctaText }) => {
  const direction = directions[Math.floor(Math.random() * directions.length)];
  const variants = getDirectionVariant(direction);// le variant  varie et d'ailleur est aleactoire ce qui est justifie la variation aleactoire des card ie a chaque chargement l'animation change.

  return (
    <motion.div
      className="group overflow-hidden rounded-xl bg-light/50 hover:bg-light transition-colors duration-300 border border-accent/10"
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      
    >
      <div className="relative aspect-video overflow-hidden ">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
      </div>

      <div className="p-5">
        <h3 className="text-xl font-heading text-dark mb-2">{title}</h3>
        <p className="text-dark/70 text-sm">{description}</p>
        <div className="flex items-center justify-center">
          <Button className="flex-grow" variant="primary" size="lg">
          {ctaText} 
        </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default CoffeeCard;
