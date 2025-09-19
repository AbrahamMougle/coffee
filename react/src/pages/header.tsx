import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX, FiHome, FiBookOpen, FiInfo, FiPhone } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import Button from "../components/button";
function NavLinkStyle({to,linkName}:{to:string,isActiveStyle?:string,noIsActivestyle?:string,linkName:string}) {
  return  <> 
   <NavLink
                  to={to}
                  className={({ isActive }) =>
                    ` font-body transition-colors duration-300 ${
                      isActive ? 'text-primary font-medium bg-primary/5':"text-dark/90 hover:text-primary hover:bg-primary/5"
                    }`
                  }
                >
                  
                  {linkName}
                </NavLink>
  </>
  
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Accueil", to: "/", icon: <FiHome className="inline-block mr-2" /> },
    { name: "Menu", to: "menu", icon: <FiBookOpen className="inline-block mr-2" /> },
    { name: "À propos", to: "about", icon: <FiInfo className="inline-block mr-2" /> },
    { name: "Contact", to: "contact", icon: <FiPhone className="inline-block mr-2" /> },
  ];

  const menuVariants: Variants = {
    hidden: { x: "100%" },
    visible: { x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } },
    exit: { x: "100%", transition: { type: "spring", stiffness: 300, damping: 30 } },
  };

  const linkVariants: Variants = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.3 } },
    hover: { scale: 1.05, rotate: 1, transition: { type: "spring", stiffness: 300 } },
  };

  const buttonVariants: Variants = {
    hover: { scale: 1.1, boxShadow: "0px 8px 15px rgba(0,0,0,0.3)", transition: { type: "spring", stiffness: 300 } },
  };

  return (
    <header className="bg-light text-dark px-6 py-4 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="text-4xl font-heading font-bold text-primary">Coffee</NavLink>

        {/* Desktop nav */}
        <div className="hidden md:flex  items-center gap-8">
          <nav className="flex items-center gap-6">
            {navLinks.map((link) => (
              <motion.div key={link.to} variants={linkVariants} whileHover="hover">
                <NavLinkStyle to={link.to} linkName= {link.name}/>
              </motion.div>
            ))}
          </nav>

          {/* Bouton Réserver avec animation */}
          <motion.div variants={buttonVariants} whileHover="hover">
            <Button variant="primary" size="lg">Réserver</Button>
          </motion.div>
        </div>

        {/* Hamburger button */}
        <button
          className="md:hidden text-2xl text-dark transition-colors p-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label="Menu"
        >
          {isMenuOpen ? <FiX className="transform scale-110" /> : <FiMenu />}
        </button>
      </div>

      {/* AnimatePresence menu mobile */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/30 z-30 md:hidden"
              onClick={() => setIsMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Menu mobile */}
            <motion.div
              className="fixed top-0 right-0 h-full w-64 bg-light/95 backdrop-blur-sm shadow-lg z-40 md:hidden"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.div
                className="pt-20 px-4 flex flex-col gap-4"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{ visible: { transition: { staggerChildren: 3 } } }}
              >
                {navLinks.map((link) => (
                  <motion.div key={link.to} variants={linkVariants} whileHover="hover">
                    <NavLink
                      to={link.to}
                      className={({ isActive }) =>
                        `flex items-center py-3 px-4 rounded-lg transition-colors duration-300 ${
                          isActive
                            ? "text-primary font-medium bg-primary/5"
                            : "text-dark/90 hover:text-primary hover:bg-primary/5"
                        }`
                      }
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.icon}
                      {link.name}
                    </NavLink>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
