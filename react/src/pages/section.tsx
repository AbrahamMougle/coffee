

import CoffeeCard from "../components/coffeeCard";

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


export default function Section() {


  return <section className="py-16 bg-white">


    <div className="container mx-auto px-6">


      <div className="text-center max-w-2xl mx-auto mb-12">


        <h1 className="text-3xl font-heading text-dark mb-4">Nos Créations</h1>


        <p className="text-dark/70">


          Une sélection de nos cafés d'exception, préparés avec passion.


        </p>


      </div>



      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">


        {coffeeItems.map((coffee) => (


          <CoffeeCard


            key={coffee.id}


            {...coffee} // Spread operator pour passer toutes les props


          />


        ))}


      </div>





    </div>


  </section>





}