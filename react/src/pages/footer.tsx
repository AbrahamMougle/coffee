import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin} from 'react-icons/fi';
import Button from '../components/button';
import ListItem from '../components/listItem';
export  default function Footer() {
  // Données pour les listes de liens
  const leftLinks = ["Notre histoire", "Nos cafés", "Événements", "Carrières"];
  const rightLinks = ["Blog", "Presse", "FAQ", "Contact"];
  
  // Témoignages
  const testimonials = [
    {
      quote: "Le meilleur café que j'ai jamais goûté. Une expérience sensorielle unique !",
      author: "Marie D."
    },
    {
      quote: "L'atmosphère et le service sont aussi exceptionnels que leurs grains.",
      author: "Thomas L."
    }
  ];

  // Réseaux sociaux
  const socialIcons = [
    { icon: <FiFacebook />, name: "Facebook" },
    { icon: <FiTwitter />, name: "Twitter" },
    { icon: <FiInstagram />, name: "Instagram" },
    { icon: <FiLinkedin />, name: "LinkedIn" }
  ];

  return (
    <footer className="bg-dark text-light p-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* 1ère Section - Coffee Bean */}
        <div className="space-y-4">
          <h1 className="text-2xl font-heading font-bold text-primary">Coffee Bean</h1>
          <div className="flex gap-8">
            <ul className="space-y-2">
              {leftLinks.map((link) => (
                <ListItem key={link}>{link}</ListItem>
              ))}
            </ul>
            <ul className="space-y-2">
              {rightLinks.map((link) => (
                <ListItem key={link}>{link}</ListItem>
              ))}
            </ul>
          </div>
        </div>

        {/* 2ème Section - Customer */}
        <div className="space-y-4">
          <h1 className="text-2xl font-heading font-bold text-primary">Customer</h1>
          <p className="text-light/80">
            Nous nous engageons à offrir une expérience café exceptionnelle. Votre satisfaction est notre priorité absolue.
          </p>
          <Button className="w-[280]" variant='primary' size='lg'>
            En savoir plus <span>→</span>
          </Button>
        </div>

        {/* 3ème Section - Testimonial */}
        <div className="space-y-4">
          <h1 className="text-2xl font-heading font-bold text-primary">Témoignages</h1>
          <div className="space-y-4">
            {testimonials.map((testimonial, index) => (
              <div key={index}>
                <blockquote className="italic text-light/80">
                  "{testimonial.quote}"
                </blockquote>
                <p className="text-primary">- {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 4ème Section - Réseaux sociaux */}
        <div className="space-y-4">
          <h1 className="text-2xl font-heading font-bold text-primary">Restez connectés</h1>
          <div className="flex gap-4 text-xl">
            {socialIcons.map((social) => (
              <a 
                key={social.name} 
                href="#" 
                className="text-light hover:text-primary transition-colors"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
          
          {/* Barre de recherche */}
          <div className="relative mt-4">
            <input 
              type="text" 
              placeholder="Votre email" 
              className="w-full bg-light/10 border border-accent/20 rounded-lg py-2 px-4 pr-10 text-light placeholder-light/50 focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <Button className="absolute right-2 top-1/2 transform -translate-y-1/2" variant='primary' size='md'>
              envoye
            </Button>
          </div>
          
          <p className="text-sm text-light/60 mt-2">
            Abonnez-vous à notre newsletter pour les dernières nouveautés.
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-accent/20 mt-12 pt-6 text-center text-light/60">
        <p>© {new Date().getFullYear()} Coffee Bean. Tous droits réservés.</p>
      </div>
    </footer>
  );
}