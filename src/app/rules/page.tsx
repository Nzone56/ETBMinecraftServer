"use client";

import React from "react";

const rules = [
  { icon: "❌", text: "Prohibido robar, hacer griefing o destruir construcciones ajenas. (Excepto si las construyó Sabino)." },
  { icon: "🔥", text: "No uses las granjas de otros sin permiso. O al menos deja el cofre de loot con algo." },
  { icon: "💣", text: "Las bases deben construirse al menos a 5.000 bloques del spawn." },
  { icon: "🏠", text: "No se permite construir dentro de un radio de 5.000 bloques del spawn. Ahí se hará un lobby comunitario." },
  { icon: "🗺️", text: "Los únicos mods permitidos (además de los de rendimiento) son Xaero’s World Map y Minimap. No, Maurito, el X-Ray no cuenta como 'mejorar visibilidad'." },
  { icon: "🗡️", text: "Prohibido matar a otros jugadores, salvo si: 1) Se llama Axel. 2) Es fan del Fincho. 3) Le gustan los furros. 4) Está logueado en el server." },
  { icon: "🛏️", text: "Preguntar antes de dormir." },
  { icon: "🐷", text: "Debes esperar mínimo una semana de vida del servidor para usar Ghasts como bombarderos Boeing B-17 Flying Fortress." },
  { icon: "🚧", text: "Si quieres reclamar una estructura, deja un cartel con tu nombre. Sin cartelito no hay delito" },
  { icon: "🏛️", text: "Estructuras cercanas al lobby (como Nether Fortresses, templos o strongholds) son **comunitarias**. No se pueden reclamar ni privatizar." },
  { icon: "🧙‍♂️", text: "Prohíbido pedir TP. Gordo de mierda." },
  { icon: "💎", text: "Nada de clonar objetos ni aprovechar bugs. Si vas a romper algo, que sea a la tia de Axel, no el juego" },
];

export default function Rules() {
  return (
    <section
      id="rules"
      className="animate-fade-in min-h-[100vh] bg-background text-foreground py-16 px-4 flex flex-col items-center"
    >
      <h2 className="text-3xl md:text-4xl font-minecraft text-primary mb-12 text-center drop-shadow-[0_1.5px_0px_rgba(0,0,0,0.3)]">
        Reglas del servidor
      </h2>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 max-w-5xl w-full px-2">
        {rules.map(({ icon, text }, index) => (
          <div
            key={index}
            className="group bg-secondary border border-muted rounded-2xl shadow-lg p-5 flex items-start space-x-4 transition-transform hover:scale-[1.02] hover:border-primary"
          >
            <span className="text-2xl mt-1">{icon}</span>
            <p className="text-sm md:text-base leading-snug text-foreground/90 group-hover:text-foreground">
              {text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
