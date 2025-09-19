import { motion } from "framer-motion";
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
            <div className="relative h-screen flex items-center justify-center text-center overflow-hidden">
                <motion.img
                    src="/photo3.jpg"
                    alt="Hero"
                    className="absolute inset-0 w-full h-[800px]  md:h-full object-cover"
                    initial={{ scale: 1.1 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 1 }}
                />
                <div/>
                <motion.div
                    className=" max-w-2xl text-white z-10"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
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
                </motion.div>
            </div>

            {/* MISSION SPLIT */}
            <div className="container mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl text-primary font-heading mb-6">Notre Mission</h2>
                    <p className="text-dark/80 leading-relaxed">
                        Offrir un café qui sublime chaque instant, respectueux de l’humain et
                        de la nature. Notre savoir-faire artisanal et notre passion garantissent
                        une expérience unique.
                    </p>
                </motion.div>
                <motion.img
                    src="/photo3.jpg"
                    alt="Mission"
                    className="w-full h-[250px] md:h-[400px] object-cover rounded-2xl shadow-lg"
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
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
