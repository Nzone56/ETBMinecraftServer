import React from "react";

export const Header = () => {
  const links = [
    { href: "#status", label: "Estado" },
    { href: "#members", label: "Miembros" },
    { href: "#rules", label: "Reglas" },
    { href: "#gallery", label: "Galería" },
    { href: "#events", label: "Eventos" },
  ];

  return (
    <header className="flex items-center justify-between sticky top-0 z-50 bg-secondary border-b border-tertiary py-4 px-6">
      <h1 className="text-primary font-minecraft text-xl tracking-wide">🧱METBS4</h1>
      <nav aria-label="Main navigation" className="hidden items-center sm:flex space-x-4 text-sm">
        {links.map(({ href, label }) => (
          <a key={href} href={href} className="text-foreground hover:text-primary transition-colors">
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
};
