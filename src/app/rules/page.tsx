"use client";

import React from "react";

const rules = [
  "❌ Prohibido robar, hacer griefing o destruir construcciones ajenas.",
  "🔥 No uses las granjas de otros sin su permiso.",
  "💣 Las bases deben construirse al menos a 5,000 bloques del spawn.",
  "🏠 No se permite construir dentro de un radio de 5,000 bloques del spawn.",
  "🗺️ El único mod permitido es el minimapa.",
  "🔨 Prohibido matar a otros jugadores.",
];

export default function Rules ()  {
  return (
    <section id="rules" className="animate-fade-in min-h-[100vh] bg-background text-foreground py-16 px-4 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-minecraft text-primary mb-10 text-center">Reglas del servidor</h2>

      <ul className="text-sm md:text-base list-disc list-inside space-y-3 max-w-xl">
        {rules.map((rule, index) => (
          <li key={index}>{rule}</li>
        ))}
      </ul>
    </section>
  );
};
