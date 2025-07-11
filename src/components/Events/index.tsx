"use client";

import { Event } from "@/interfaces";
import React from "react";

const events: Event[] = [
  {
    title: "📣 Anuncio oficial",
    date: "1 de Julio",
    time: "7:00 PM (COL)",
    description:
      "Se anuncio la 4edición (creo) del METBS.",
    end: true,
  },
  {
    title: "🎉 Inauguración oficial",
    date: "25 de Julio",
    time: "7:00 PM (COL)",
    description:
      "Prepárate para explorar, construir y sobrevivir junto a todos los participantes en el mundo de Minecraft ETB.",
    end: false,
  },
  {
    title: "🐉 Evento Dragona",
    date: "TBD",
    time: "TBD",
    description:
      "Matar a la dragona, a Axel y conseguir Elytras",
    end: false,
  },
];

export const Events = () => {
  return (
    <section
      id="events"
      className="min-h-[100vh] w-full bg-background text-foreground py-16 px-4 flex flex-col items-center"
    >
      <h2 className="text-3xl md:text-4xl font-minecraft text-primary mb-6 text-center">
        Próximos eventos
      </h2>

      <div className="flex flex-wrap gap-6 items-center justify-center w-full max-w-5xl">
        {events.map((event, index) => (
          <div
            key={index}
            className={`w-[300px] h-[260px] flex flex-col border rounded-xl p-6 text-sm md:text-base text-center shadow-lg ${
              event.end
                ? "bg-muted border-dashed border-border text-muted-foreground"
                : "bg-secondary border-tertiary"
            }`}
          >
            <h3 className="text-lg font-bold text-primary mb-2">{event.title}</h3>
              <>
                <p>
                  📅 Fecha: <strong>{event.date}</strong>
                </p>
                <p>
                  🕖 Hora: <strong>{event.time}</strong>
                </p>
              </>
            <p className="mt-2">{event.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
