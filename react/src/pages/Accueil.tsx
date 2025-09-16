import Button from "../components/button";
import CoffeeCard from "../components/coffeeCard";
import { motion,  useScroll, useTransform } from "framer-motion";
import type { Variants } from "framer-motion";
const coffeeItems = [
    {
      id: 1,
      title: "Expresso Classique",
      description: "L'intensité pure d'un café italien traditionnel, avec une crème dorée.",
      imageUrl: "/photo3.jpg",
      ctaText: "Voir la technique"
    },
    {
      id: 2,
      title: "Cappuccino Crémeux",
      description: "Harmonie parfaite entre espresso, lait chaud et mousse onctueuse.",
      imageUrl: "/photo2.jpg",
      ctaText: "Découvrir l'histoire"
    },
    {
      id: 3,
      title: "Latte Artistique",
      description: "Notre signature dans une tasse, avec des motifs réalisés à la main.",
      imageUrl: "/photo5.jpg",
      ctaText: "Explorer les designs"
    },
    {
      id: 4,
      title: "Cold Brew Glacé",
      description: "Infusion lente pour une douceur naturelle et des arômes complexes.",
      imageUrl: "/photo4.jpg",
      ctaText: "Apprendre la méthode"
    }
  ];




const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};


export default function Accueil() {
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 300], [0, -20]); // micro-parallax bg

  return (
    <>
      {/* Section Héro */}
      <motion.section
        className="relative flex-grow flex items-center justify-end h-[80vh] overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }} // <-- réversible
        variants={sectionVariants}
      >
        <motion.div
          className="absolute inset-0 bg-[url('/photo5.jpg')] bg-cover bg-center"
          style={{ y: yParallax, filter: "brightness(110%) saturate(120%)", clipPath: "inset(0 0 0 0)" }}
        />
        <div className="relative h-full w-full bg-gradient-to-r from-dark/30 via-transparent to-light/20" />
        <motion.div
          className="relative container mx-auto px-6 md:px-12 py-24 max-w-md bg-white/70 p-8 rounded-xl backdrop-blur-[2px] border border-white/80 shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="text-3xl font-heading text-dark mb-4">L'Art du Café</h2>
          <p className="text-dark/90 mb-6">
            Découvrez nos créations signatures, où chaque grain raconte une histoire.
          </p>
          <Button variant="primary" size="lg" className="w-[200px]">
            Explorer la sélection
          </Button>
        </motion.div>
      </motion.section>

      {/* Section Présentation */}
      <section className="py-16 bg-white">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <h1 className="text-3xl font-heading text-dark mb-4">Nos Créations</h1>
          <p className="text-dark/70">
            Une sélection de nos cafés d'exception, préparés avec passion.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          {coffeeItems.map((coffee) => (
            <CoffeeCard key={coffee.id} {...coffee} />
          ))}
        </motion.div>
      </section>
    </>
  );
}