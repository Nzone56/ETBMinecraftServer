"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Usa lucide para íconos

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/members", label: "Miembros" },
    { href: "/rules", label: "Reglas" },
    { href: "/gallery", label: "Galería" },
    { href: "/news", label: "Novedades" },
    { href: "/guides", label: "Guias" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-secondary border-b border-tertiary py-4 px-6">
      <div className="flex items-center justify-between">
        <h1 className="text-primary font-minecraft text-xl tracking-wide">
          <a href={'/'}>
            🧱METBS6
          </a>
        </h1>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden sm:flex space-x-4 text-sm">
          {links.map(({ href, label }) => (
            <a key={href} href={href} className="text-foreground hover:text-primary transition-colors">
              {label}
            </a>
          ))}
        </nav>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden text-foreground focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <nav className="sm:hidden mt-4 flex flex-col gap-2 text-sm border-t border-tertiary pt-4">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setIsOpen(false)}
              className="text-foreground hover:text-primary transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};
