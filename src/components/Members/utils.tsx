



const roleColors: Record<string, string> = {
  admin: "text-red-600 font-semibold",
  mod: "text-blue-500 font-semibold",
  member: "text-green-500 font-semibold",
  guest: "text-yellow-500 font-semibold",
};

const teamColors: Record<string, string> = {
  "qin state": "text-amber-500 font-semibold",
  tbd: "text-muted-foreground italic",
};

export const getRoleColor = (role: string) =>
  roleColors[role.toLowerCase()] || "text-foreground";

export const getTeamColor = (team: string) =>
  teamColors[team.toLowerCase()] || "text-slate-400";

