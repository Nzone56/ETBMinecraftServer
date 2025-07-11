import { Member } from "@/interfaces";

export const AllMembers: Member[] = [
  {
    name: "NicoNicoNii",
    role: "Admin",
    team: "TBD",
    highlights: [
      "El peor admin, con 75% de desaprobación",
      "Cree que es la mezcla entre ElRichMC e ilmango",
      "Esclavista de profesión",
    ],
  },
  {
    name: "YURMMOMMY",
    role: "Mod",
    team: "Qin State",
    highlights: [
      "No termina ninguna base",
      "Solo hace pixel arts",
      "Salta en cofres",
    ],
  },
  {
    name: "Gabomatius",
    role: "Mod",
    team: "TBD",
    highlights: [
      "Solo juega dos días",
      "Se dice que una vez estuvo para matar al dragón",
      "Es metacho",
    ],
  },
  {
    name: "SevenFabian",
    role: "Member",
    team: "TBD",
    highlights: [
      "Es trisexual (hombres, mujeres, furros)",
      "Colecciona esmeraldas porque le recuerdan su rango en el LoL",
      "Le explotó la casa a Maurito",
    ],
  },
  {
    name: "CAM",
    role: "Member",
    team: "TBD",
    highlights: [
      "Distancia total entre todos los servidores: 145 bloques",
      "Le gusta 'cumear'",
      "No sabe qué es un Wither",
    ],
  },
  {
    name: "StarboyXO",
    role: "Member",
    team: "TBD",
    highlights: [
      "Solo ha jugado en un servidor",
      `"Nea, vamos al LoL"`,
      "Le gusta el sábado y domingo",
    ],
  },
  {
    name: "Sabino",
    role: "Member",
    team: "TBD",
    highlights: [
      "Su nickname es literalmente su nombre",
      "🥇 Construyó la peor casa de la historia",
      "Nunca ha jugado en un servidor",
    ],
  },
  {
    name: "ElAndrow",
    role: "Member",
    team: "TBD",
    highlights: [
      "Ha dejado más equipos tirados que bloques en sus granjas",
      "El diamante es más útil que él",
      `"¿Quién pa' LoL? Uhhhh"`,
    ],
  },
  {
    name: "Zakki",
    role: "Member",
    team: "TBD",
    highlights: [
      "El mejor compañero del mundo",
      "El sol que ilumina nuestros días",
      "Solo ha jugado un día en cuatro años",
    ],
  },
  {
    name: "Juanpix",
    role: "Member",
    team: "TBD",
    highlights: [
      "Nunca se ha conectado",
      "Yo creo que nos odia en secreto",
      "Presión social para que en este servidor sí juegue",
    ],
  },
  {
    name: "DJMauroAlfonso",
    role: "Member",
    team: "TBD",
    highlights: [
      "La cabra",
      "Dueño del bar La Jungla",
      "Este sí es la reencarnación de ilmango",
    ],
  },
];

const roleColors: Record<string, string> = {
  admin: "text-red-600 font-semibold",
  mod: "text-yellow-500 font-semibold",
  member: "text-green-500 font-semibold",
};

const teamColors: Record<string, string> = {
  "qin state": "text-cyan-500 font-semibold",
  tbd: "text-muted-foreground italic",
};

export const getRoleColor = (role: string) =>
  roleColors[role.toLowerCase()] || "text-foreground";

export const getTeamColor = (team: string) =>
  teamColors[team.toLowerCase()] || "text-slate-400";

