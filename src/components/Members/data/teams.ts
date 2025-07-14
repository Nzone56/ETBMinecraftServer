import { Team } from "@/interfaces";
import { AllMembers } from "./members";

const teamStyles: Record<string, { logo: string; maincolor: string; secondcolor: string, foregroundcolor: string, detailcolor: string}> = {
  "Qin State": {
    logo: "qin",
    maincolor: "#3b0500", 
    secondcolor: "#110801",
    foregroundcolor:  "#e9c166",
    detailcolor: "#230a00"
  },
  "TBD": {
    logo: "default",
    maincolor: "#808080", 
    secondcolor: "#A9A9A9",
    foregroundcolor:  "#e9c166",
    detailcolor: "#230a00"
  },
};

const uniqueTeams = [...new Set(AllMembers.map(m => m.team))];

export const AllTeams: Team[] = uniqueTeams.map(teamName => {
  const style = teamStyles[teamName] || {
    logo: "default",
    maincolor: "#444",
    secondcolor: "#888",
    foregroundcolor: "#666",
    detailcolor: "#222"
  };

  return {
    uid: teamName.toLowerCase().replace(/\s+/g, "_"),
    name: teamName,
    members: AllMembers.filter(member => member.team === teamName),
    ...style,
  };
});