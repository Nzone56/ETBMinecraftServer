import React from "react";

export default function Librarians() {
  return (
    <section className="animate-fade-in max-w-4xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold text-center text-primary mb-6">
        📚 Guía de Libreros – Minecraft 1.20.2
      </h2>
      <p className="text-center text-sm text-muted mb-10">
        Biome-specific enchantments y cómo aprovecharlos con aldeanos.
      </p>

      {/* Sección por biomas */}
      <div className="space-y-8">
        {biomes.map((biome, idx) => (
          <div key={idx} className="bg-secondary rounded-xl p-5 shadow-md">
            <h3 className="text-xl font-bold text-primary mb-1">
              {biome.emoji} {biome.name}
            </h3>
            <p className="text-sm mb-2">
              <strong className="text-green-500">Master Trade:</strong>{" "}
              ✅ {biome.masterTrade}
            </p>
            <p className="text-sm text-muted mb-1">🧾 Otros encantamientos:</p>
            <ul className="list-disc list-inside text-sm text-foreground">
              {biome.otherEnchantments.map((e, i) => (
                <li key={i}>{e}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Tabla resumen */}
      <div className="mt-12">
        <h4 className="text-xl font-semibold text-primary mb-4">🧩 Tabla Resumen</h4>
        <div className="overflow-x-auto">
          <table className="table-auto w-full text-sm border-collapse">
            <thead className="bg-muted text-foreground">
              <tr>
                <th className="p-2 text-left">🌍 Bioma</th>
                <th className="p-2 text-left">✨ Master Trade</th>
                <th className="p-2 text-left">📘 Otros Encantamientos</th>
              </tr>
            </thead>
            <tbody>
              {biomes.map((biome, idx) => (
                <tr key={idx} className="border-b border-muted/50">
                  <td className="p-2">{biome.emoji} {biome.name}</td>
                  <td className="p-2">✅ {biome.masterTrade}</td>
                  <td className="p-2">{biome.otherEnchantments.join(", ")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Tips */}
      <div className="mt-12 space-y-4">
        <h4 className="text-xl font-semibold text-primary">📦 Tips para Jugadores</h4>
        {tips.map((tip, i) => (
          <p key={i} className="text-sm text-foreground">{tip}</p>
        ))}
      </div>

      {/* Advertencia final */}
      <div className="mt-12">
        <h4 className="text-xl font-semibold text-red-500">❌ Nota Final sobre Encantamientos</h4>
        <p className="text-sm text-foreground mt-2">
          Algunos encantamientos no están disponibles en aldeanos:
        </p>
        <ul className="list-disc list-inside text-sm text-muted">
          <li>🎣 <strong>Tridente:</strong> Riptide, Channeling, Loyalty, Impaling</li>
          <li>🪝 <strong>Caña de pescar:</strong> Lure, Luck of the Sea, Unbreaking</li>
          <li>🏹 <strong>Ballesta:</strong> Multishot, Piercing, Quick Charge</li>
        </ul>
        <p className="text-sm text-muted mt-2">
          Estos deben obtenerse mediante cofres de loot, pesca, mesas de encantamientos o reroll con piedra de afilar.
        </p>
      </div>
    </section>
  );
}

// Datos
const biomes = [
  {
    name: "Desert",
    emoji: "🏜️",
    masterTrade: "Efficiency III",
    otherEnchantments: ["Fire Protection", "Thorns", "Infinity"],
  },
  {
    name: "Jungle",
    emoji: "🌴",
    masterTrade: "Unbreaking II",
    otherEnchantments: ["Feather Falling", "Projectile Protection", "Power"],
  },
  {
    name: "Plains",
    emoji: "🌾",
    masterTrade: "Protection III",
    otherEnchantments: ["Punch", "Smite", "Bane of Arthropods"],
  },
  {
    name: "Savanna",
    emoji: "🏕️",
    masterTrade: "Sharpness III",
    otherEnchantments: ["Knockback", "Curse of Binding", "Sweeping Edge"],
  },
  {
    name: "Snow (Taiga)",
    emoji: "❄️",
    masterTrade: "Silk Touch",
    otherEnchantments: ["Aqua Affinity", "Looting", "Frost Walker"],
  },
  {
    name: "Swamp",
    emoji: "🐸",
    masterTrade: "Mending",
    otherEnchantments: ["Depth Strider", "Respiration", "Curse of Vanishing"],
  },
  {
    name: "Taiga",
    emoji: "🌲",
    masterTrade: "Fortune II",
    otherEnchantments: ["Blast Protection", "Fire Aspect", "Flame"],
  },
];

const tips = [
  "🎯 Biomas importan: El trade de encantamiento depende del bioma donde se volvió librero.",
  "🚋 Puedes mover un aldeano a otro bioma, y conservará su trade original.",
  "🛏️ Los bebés aldeanos heredan el bioma de sus padres, no del lugar de nacimiento.",
  "🧟 Curar un aldeano zombi en cierto bioma garantiza el trade de ese bioma.",
  "🪄 El bioma se fija antes de que se convierta en librero. Asegúrate de estar en el bioma correcto antes del cambio de profesión.",
];
