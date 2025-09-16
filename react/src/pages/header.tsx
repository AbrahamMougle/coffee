import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FiHome, FiBookOpen, FiInfo, FiPhone } from "react-icons/fi";

import Button from "../components/button";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
  { name: "Accueil", to: "/", icon: <FiHome className="inline-block mr-2" /> },
  { name: "Menu", to: "menu", icon: <FiBookOpen className="inline-block mr-2" /> },
  { name: "À propos", to: "about", icon: <FiInfo className="inline-block mr-2" /> },
  { name: "Contact", to: "contact", icon: <FiPhone className="inline-block mr-2" /> },
];


  const baseLink =
    "font-body transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full";
  const activeLink = "text-primary font-semibold";
  const inactiveLink = "text-dark/80 hover:text-primary";

  return (
    <header className="bg-light text-dark px-6 py-4 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-4xl font-heading font-bold text-primary"
        >
          Coffee
        </NavLink>

        {/* Navigation Desktop + Bouton Réserver */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `${baseLink} ${isActive ? activeLink : inactiveLink}`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
          <Button variant="primary" size="lg">
            Réserver
          </Button>
        </div>

        {/* Bouton Hamburger (Mobile) */}
        <button
          className="md:hidden text-2xl text-dark transition-colors p-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label="Menu"
        >
          {isMenuOpen ? <FiX className="transform scale-110" /> : <FiMenu />}
        </button>
      </div>

      {/* Menu Mobile avec slide-in depuis la droite */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-light/95 backdrop-blur-sm shadow-lg transform transition-transform duration-300 ease-in-out md:hidden z-40 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="pt-20 px-4 space-y-4 flex flex-col">
          {navLinks.map((link, index) => (
  <NavLink
    key={link.to}
    to={link.to}
    className={({ isActive }) =>
      `flex items-center font-body py-3 px-4 rounded-lg transition-all duration-300 ${
        isActive
          ? "text-primary font-medium bg-primary/5"
          : "text-dark/90 hover:text-primary hover:bg-primary/5"
      } ${isMenuOpen ? `opacity-100 translate-x-0 delay-[${index * 75}ms]` : "opacity-0 -translate-x-6"}`
    }
    onClick={() => setIsMenuOpen(false)}
    style={{ transitionProperty: "transform, opacity" }}
  >
    {link.icon}
    {link.name}
  </NavLink>
))}

        </div>
      </div>

      {/* Overlay pour fermer le menu en cliquant à l'extérieur */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 md:hidden z-30"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  );
}
