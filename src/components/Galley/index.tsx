"use client";

import React from "react";

export const Gallery = () => {
  return (
    <section id="gallery" className="min-h-[60vh] w-full bg-background text-foreground py-16 px-4 flex flex-col items-center justify-center">
      <h2 className="text-3xl md:text-4xl font-minecraft text-primary mb-6 text-center">Galería del servidor</h2>

      <p className="text-sm md:text-base text-center max-w-md text-muted-foreground">
        🧱 ¡La galería estará disponible una vez inicie el servidor! Pronto verás aquí screenshots y momentos épicos de los jugadores.
      </p>
    </section>
  );
};
