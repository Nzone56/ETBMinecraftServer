import React from "react";

const sections = [
  {
    title: "1. Instalar Minecraft",
    steps: [
      "Abre la Microsoft Store.",
      "Busca Aplicación Xbox e instálala.",
      "Crea una cuenta Microsoft o inicia sesión con una existente.",
      "Compra el Game Pass o Minecraft: Java Edition directamente.",
    ],
  },
  {
    title: "2. Instalar Java",
    steps: [
      <>
        Si no tienes Java, descárgalo desde{" "}
        <a
          href="https://www.java.com/es/download/manual.jsp"
          className="text-blue-500 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          java.com
        </a>.
      </>,
    ],
  },
  {
    title: "3. Iniciar Minecraft en la versión 1.21.8",
    steps: [
      "Abre el Launcher de Minecraft.",
      "En Instalaciones, crea una nueva con la versión 1.21.8.",
      "Ejecuta el juego una vez para que se genere la carpeta necesaria.",
    ],
  },
  {
    title: "4. Instalar Fabric o Forge",
    steps: [
      <>
        Ve a{" "}
        <a
          href="https://fabricmc.net/use/"
          className="text-blue-500 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          fabricmc.net
        </a>{" "}
        o{" "}
        <a
          href="https://files.minecraftforge.net/"
          className="text-blue-500 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Forge
        </a>.
      </>,
      "Descarga el instalador para la versión 1.21.8.",
      "Ejecuta el archivo `.jar` del instalador.",
      "Selecciona Client y asegúrate de que apunte a la carpeta `.minecraft`.",
      "Instala y luego selecciona esa versión en el launcher.",
    ],
  },
  {
    title: "5. Instalar Mods (Xaero’s Minimap y Xaero’s World Map)",
    steps: [
      <>
        Ve a{" "}
        <a
          href="https://www.curseforge.com/minecraft/mc-mods/xaeros-minimap"
          className="text-blue-500 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          CurseForge - Xaero’s Minimap
        </a>{" "}
        y descarga la versión para <strong>Fabric</strong> o <strong>Forge</strong>, según lo que hayas instalado.
      </>,
      <>
        Haz lo mismo con{" "}
        <a
          href="https://www.curseforge.com/minecraft/mc-mods/xaeros-world-map"
          className="text-blue-500 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Xaero’s World Map
        </a>.
      </>,
      "Coloca ambos archivos `.jar` en la carpeta .minecraft/mods.",
    ],
  },
];

export const Installation = () => {
  return (
    <section className="animate-fade-in max-w-4xl mx-auto p-6 text-foreground rounded-2xl shadow-lg space-y-6">
      <h2 className="text-3xl font-bold text-center text-primary mb-6">🛠️ Guía de Instalación</h2>

      <div className="space-y-4">
        {sections.map(({ title, steps }, i) => (
          <div key={i} className="bg-secondary p-4 rounded">
            <h3 className="text-2xl font-semibold text-primary mb-2">{title}</h3>
            <ul className="list-disc list-inside space-y-1 text-sm">
              {steps.map((step, idx) => (
                <li key={idx}>{step}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
