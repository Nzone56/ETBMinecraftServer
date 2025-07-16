"use client";

import React from "react";
import Image from "next/image";

export const Gallery = () => {

  const images = Array.from({ length: 9 }, (_, i) => {
    const number = (i + 1).toString().padStart(2, "0"); 
    return `/images/cats/${number}.jpg`;
  });

  return (
    <section id="gallery" className="min-h-[100vh] w-full bg-background text-foreground py-16 px-4 flex flex-col items-center justify-center">
      <h2 className="text-3xl md:text-4xl font-minecraft text-primary mb-6 text-center">Galería del servidor</h2>

      <p className="text-sm md:text-base text-center max-w-md text-muted-foreground">
        🧱 ¡La galería estará disponible una vez inicie el servidor! Pronto verás aquí screenshots y momentos épicos de los jugadores.
        Mientras tanto les dejo fotos de todos mis gatos:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {images.map((src, index) => (
    <div
      key={index}
      className="relative border-4 border-tertiary rounded-lg bg-secondary shadow-md max-w-xs w-full p-2"
    >
      <div className="relative w-[250px] h-[300px] mx-auto">
        <Image
          src={src}
          alt={`Gato ${index + 1}`}
          fill
          sizes="(max-width: 250px)"
          className="rounded object-cover"
        />
      </div>
      <div className="absolute bottom-1 right-2 text-[10px] text-muted-foreground italic">
        Imagen de Gato #{index + 1} 😺
      </div>
    </div>
  ))}
      </div>
    </section>
  );
};
