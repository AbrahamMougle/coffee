
import Button from "./components/button";
import MenuCard from "./components/menuCard";
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

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Expresso Signature",
    description: "Notre blend maison torréfié lentement pour une intensité parfaite",
    price: "4.50€",
    image: "photo1.jpg",
    tags: ["Populaire", "Torréfaction noire"],
    preparation: "2 min",
    temperature: "92°C",
  },
  {
    id: 2,
    name: "Cappuccino Artisanal",
    description: "Mousse onctueuse et équilibre parfait entre espresso et lait vapeur",
    price: "5.20€",
    image: "photo2.jpg",
    tags: ["Crémeux", "Classique"],
    preparation: "3 min",
    temperature: "65°C",
  },
  {
    id: 3,
    name: "Latte Macchiato",
    description: "Couches distinctes de lait, mousse et espresso d'exception",
    price: "5.50€",
    image: "photo4.jpg",
    tags: ["Visuel", "Doux"],
    preparation: "4 min",
    temperature: "60°C",
  },
  {
    id: 4,
    name: "Cold Brew Premium",
    description: "Infusion lente de 24 heures pour une douceur naturelle exceptionnelle",
    price: "6.00€",
    image: "photo5.jpg",
    tags: ["Rafraîchissant", "Longue infusion"],
    preparation: "0 min",
    temperature: "4°C",
  },
  {
    id: 5,
    name: "Mocha Gourmand",
    description: "Harmonie parfaite entre chocolat artisanal et espresso intense",
    price: "5.80€",
    image: "photo2.jpg",
    tags: ["Chocolaté", "Gourmand"],
    preparation: "3 min",
    temperature: "70°C",
  },
  {
    id: 6,
    name: "Flat White Australien",
    description: "Ratio parfait d'espresso et de micro-mousse veloutée",
    price: "5.40€",
    image: "photo1.jpg",
    tags: ["Dense", "Corsé"],
    preparation: "3 min",
    temperature: "68°C",
  },
];



export default function Menu() {
  return (
    <section className="py-20 bg-white" id="menu">
      <div className="container mx-auto px-6">
        <header className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-heading text-dark mb-6">
            Notre Menu Signature
          </h2>
          <p className="text-lg text-dark/80 leading-relaxed">
            Découvrez une sélection de créations artisanales où chaque détail
            compte. Des cafés d'exception préparés avec passion par nos baristas
            certifiés.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <MenuCard key={item.id} item={item} index={index} />
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-dark/80 mb-6">
            Vous avez des allergies ou des préférences spécifiques ? Notre équipe
            se fera un plaisir de vous conseiller.
          </p>
         <div className="flex items-center justify-center">
                   <Button  variant="primary" size="lg">
                   voir Menu
                 </Button>
                 </div>
        </div>
      </div>
    </section>
  );
}
