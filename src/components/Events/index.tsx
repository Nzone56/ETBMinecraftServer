"use client";

import React from "react";

export const Events = () => {
  return (
    <section id="events" className="min-h-[60vh] w-full bg-background text-foreground py-16 px-4 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-minecraft text-primary mb-6 text-center">Próximos eventos</h2>

      <div className="bg-secondary border border-tertiary rounded-xl p-6 text-sm md:text-base text-center max-w-md shadow-lg">
        <h3 className="text-lg font-bold text-primary mb-2">🎉 Inauguración oficial</h3>
        <p>
          📅 Fecha: <strong>25 de Julio</strong>
        </p>
        <p>
          🕖 Hora: <strong>7:00 PM (COL)</strong>
        </p>
        <p className="mt-2 text-muted-foreground">Prepárate para explorar, construir y sobrevivir junto a todos los participantes en el mundo de Minecraft ETB.</p>
      </div>
    </section>
  );
};
