import { FiStar, FiClock, FiThermometer } from "react-icons/fi";
import { motion } from "framer-motion";
import Button from "./button";
type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  tags: string[];
  preparation: string;
  temperature: string;
};
export default function MenuCard({ item, index }: { item: MenuItem; index: number }) {
  return (
    <motion.article
      className="group relative bg-light/50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent" />

        {/* Tags */}
        <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
          {item.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-primary/90 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Badge Populaire */}
        {item.tags.includes("Populaire") && (
          <div className="absolute top-4 right-4">
            <FiStar className="text-yellow-400 text-xl drop-shadow-lg" />
          </div>
        )}
      </div>

      {/* Contenu */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-heading text-dark">{item.name}</h3>
          <span className="text-2xl font-bold text-primary">{item.price}</span>
        </div>

        <p className="text-dark/70 mb-4 text-sm leading-relaxed">
          {item.description}
        </p>

        <div className="flex items-center gap-4 text-sm text-dark/60">
          <div className="flex items-center gap-1">
            <FiClock className="text-primary" />
            {item.preparation}
          </div>
          <div className="flex items-center gap-1">
            <FiThermometer className="text-primary" />
            {item.temperature}
          </div>
        </div>
<div className="flex items-center justify-center">
          <Button className="flex-grow" variant="primary" size="lg">
          commander 
        </Button>
        </div>
      </div>
    </motion.article>
  );
}