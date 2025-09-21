
import { FiCoffee, FiUsers, FiAward, FiHeart } from "react-icons/fi";
import type { JSX } from "react";
import Button from "../components/button";
function CardSmall({ label, number, icon }: { icon: JSX.Element, number:string, label: string }) {
    return <>
        <div className="text-4xl text-primary mb-3 flex justify-center">{icon}</div>
        <div className="text-3xl font-bold text-dark">{number}</div>
        <p className="text-dark/70">{label}</p></>

}

export default function Accueil() {
    const stats = [
        { icon: <FiCoffee />, number: "10+", label: "Années" },
        { icon: <FiUsers />, number: "5k+", label: "Clients" },
        { icon: <FiAward />, number: "15", label: "Récompenses" },
        { icon: <FiHeart />, number: "100%", label: "Passion" },
    ];

    return (
        <section className="bg-gray-50">
            {/* HERO FULL SCREEN */}
            <div className="relative h-[70vh]  sm:h-screen flex items-center justify-center text-center overflow-hidden">
                <img
                    src="/photo3.jpg"
                    alt="Hero"
                    className="absolute inset-0 w-full md:h-full object-cover"
                    
                />
                <div/>
                <div
                    className="text-white z-20"
                    
                >
                    <h1 className="text-md md:text-6xl font-heading mb-4">
                        L’Expérience Café Réinventée
                    </h1>
                    <p className="text-md md:text-xl mb-8">
                        Goûtez à la perfection de grains torréfiés avec passion et innovation.
                    </p>
                    <Button className="bg-primary text-white px-6 py-3 rounded-full">
                        Découvrir
                    </Button>
                </div>
            </div>

            {/* MISSION SPLIT */}
            <div className="container mx-auto px-10 py-10 grid md:grid-cols-2 gap-12 items-center">
                <div
                    
                >
                    <h2 className="text-3xl text-primary text-center font-heading mb-6">Notre Mission</h2>
                    <p className="text-dark/80 leading-relaxed">
                        Offrir un café qui sublime chaque instant, respectueux de l’humain et
                        de la nature. Notre savoir-faire artisanal et notre passion garantissent
                        une expérience unique.
                    </p>
                </div>
                <img
                    src="/photo3.jpg"
                    alt="Mission"
                    className="w-full h-[250px] md:h-[400px] object-cover rounded-2xl shadow-lg"
                />
            </div>

            <div className="container mx-auto px-6 py-10 mb-5  grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((prop, i) => (
                    <div
                        key={i}
                        className="p-4 rounded-3xl backdrop-blur-md shadow-md text-center transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                    >
                      <CardSmall {...prop} />  
                    </div>
                ))}
            </div>
            

        </section>
    );
}
