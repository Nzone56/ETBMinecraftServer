import { NewsEntry } from "@/interfaces";

export const newsData: NewsEntry[] = [
  {
    version: '1.20 – Trails & Tales (Junio 2023)',
    features: [
      { title: '🔨 Nuevas mecánicas', items: [
        'Arqueología: Brush, Suspicious Sand/Gravel, Pottery Shards, Decorated Pots.',
        'Smithing Templates: personalización de armaduras con materiales raros.',
        'Hanging Signs: letreros colgantes con variaciones.'
      ]},
      { title: '🧭 Exploración & mobs', items: [
        'Sniffer: mob antiguo que huele semillas decorativas.',
        'Camello: mob montable con salto largo y soporte para 2 jugadores.'
      ]},
      { title: '🌳 Biomas y bloques', items: [
        'Cherry Grove: nuevo bioma de árboles de cerezo (madera rosa).',
        'Bamboo woodset: bloques de bambú, incluyendo Raft (balsa sin bordes).'
      ]},
      { title: '🧼 Calidad de vida', items: [
        'Emotes, nuevas opciones de skin.',
        'Mejoras de rendimiento y accesibilidad.'
      ]},
    ],
    video: 'https://www.youtube.com/embed/IlzR7bW5Uic',
  },
  {
    version: '1.20.5 – Armadillos & Lobos reforzados (Abril 2024)',
    features: [
      { title: '🦔 Nuevos mobs', items: [
        'Armadillo: mob que aparece en climas cálidos, se enrolla al sentir peligro.',
        'Armadillo Scutes: drop que permite crear armadura para lobos.'
      ]},
      { title: '🐺 Lobos con armadura', items: [
        'Los lobos ahora pueden usar Wolf Armor (equivalente a iron).',
        'Se puede quitar con tijeras y reparar con más scutes.'
      ]},
    ],
    video: 'https://www.youtube.com/embed/3R_6P_KOMyk',
  },
  {
    version: '1.21 – Tricky Trials (Julio 2024)',
    features: [
      { title: '🔨 Nuevas mecánicas', items: [
        'Trial Chambers: dungeons generadas proceduralmente con retos.',
        'Trial Spawner: genera mobs según el número de jugadores.',
        'Mace: arma de impacto que causa daño al caer desde altura.',
        'Ominous Trials: modo difícil con llaves especiales y mejores recompensas.'
      ]},
      { title: '💨 Mobs y combate', items: [
        'Breeze: mob ágil que lanza ráfagas de viento con retroceso.'
      ]},
      { title: '🧱 Nuevos bloques', items: [
        'Crafter: máquina automática de crafteo vía redstone.',
        'Copper Bulb: fuente de luz que se oxida con el tiempo.',
        'Tuff blocks: nuevo set de construcción basado en tuff.'
      ]},
      { title: '🎵 Ambientación y loot', items: [
        'Decorated Pots: nuevos diseños con los Shards.',
        'Music Disc "Relic": se consigue en las Trial Chambers.'
      ]},
    ],
    video: 'https://www.youtube.com/embed/VWSPxkbpd4c',
  },
  {
    version: '1.21.2 – Bundles are back!',
    features: [
      { title: '📦 Almacenamiento', items: [
        'Bundles (Bolsas): permiten almacenar múltiples ítems pequeños en un solo slot.',
        'Interfaz visual renovada, útil para mineros y exploradores.'
      ]}
    ],
    video: 'https://www.youtube.com/embed/4pjk0wQ2KGY',
  },
  {
    version: '1.21.4 – The Garden Awakens',
    features: [
      { title: '🌿 Bioma y bloques naturales', items: [
        'Pale Garden: variante boscosa con atmósfera misteriosa.',
        'Bloques nuevos: Pale Oak, Pale Moss, Pale Hanging Moss, Resin Blocks, Eyeblossoms.'
      ]},
      { title: '👻 Nuevos mobs', items: [
        'Creaking: mob tipo árbol que deja el ítem Creaking Heart.'
      ]}
    ],
    video: 'https://www.youtube.com/embed/2D-uAVqdz3k',
  },
  {
    version: '1.21.5 – Spring to Life',
    features: [
      { title: '🐄 Variantes naturales', items: [
        'Vacas, cerdos y pollos tienen variantes de bioma (frías/cálidas).',
        'Ovejas ahora nacen con lana adaptada al bioma.'
      ]}
    ]
  },
  {
    version: '1.21.6 – Chase the Skies',
    features: [
      { title: '🛫 Mobs voladores y vuelo cooperativo', items: [
        'Happy Ghast: montura aérea para hasta 4 jugadores.',
        'Ghastling & Dried Ghast: nuevas criaturas del Nether.'
      ]},
      { title: '🧰 Ítems y sistema de orientación', items: [
        'Harness: se equipa para montar criaturas grandes.',
        'Locator Bar: nueva interfaz que indica la dirección en vuelos.'
      ]},
      { title: '🎨 Gráficos y sonido', items: [
        'Vibrant Visuals: shader gráfico oficial activable.',
        'Música nueva: incluye tema "Tears" y 5 canciones por Amos Roddy.'
      ]}
    ],
    video: 'https://www.youtube.com/embed/d1DszBBH86w',
  },
  {
    version: '1.21.7 – Detalles artísticos',
    features: [
      { title: '🎵 Ítems visuales y de sonido', items: [
        'Disco “Lava Chicken”: dropea al eliminar Chicken Jockeys.',
        'Nueva pintura “Good Boy”: canvas decorativo de 3x3 bloques.'
      ]}
    ],
    video: 'https://www.youtube.com/embed/9oKxqRZhwVg',
  },
  {
    version: '1.21.8 – Correcciones técnicas',
    features: [
      { title: '🖥️ Fixes de rendimiento', items: [
        'Soluciona artefactos visuales en tarjetas gráficas Intel y AMD.',
        'Mejora de compatibilidad sin contenido jugable nuevo.'
      ]}
    ]
  }
];
