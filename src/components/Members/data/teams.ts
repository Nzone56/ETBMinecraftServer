import { Team } from "@/interfaces";
import { AllMembers } from "./members";

const teamData: Record<
  string,
  {
    logo: string;
    maincolor: string;
    secondcolor: string;
    foregroundcolor: string;
    detailcolor: string;
    baseCoords?: { x: number; y: number; z: number };
    endCoords?: { x: number; y: number; z: number };
    mapImage?: string;
  }
> = {
  "Qin State": {
    logo: "qin",
    maincolor: "#3b0500",
    secondcolor: "#110801",
    foregroundcolor: "#e9c166",
    detailcolor: "#230a00",
    baseCoords: { x: 0, y: 0, z: 0 },
    endCoords: { x: 0, y: 0, z: 0 },
    mapImage: "",
  },
  Nico: {
    logo: "default",
    maincolor: "#1c1c1c",
    secondcolor: "#2e2e2e",
    foregroundcolor: "#d4c98f",
    detailcolor: "#3d3d3d",
    baseCoords: { x: 0, y: 0, z: 0 },
    endCoords: { x: 0, y: 0, z: 0 },
    mapImage: "",
  },
  Gabo: {
    logo: "default",
    maincolor: "#1c1c1c",
    secondcolor: "#2e2e2e",
    foregroundcolor: "#d4c98f",
    detailcolor: "#3d3d3d",
    baseCoords: { x: 0, y: 0, z: 0 },
    endCoords: { x: 0, y: 0, z: 0 },
    mapImage: "",
  },
  "A/C": {
    logo: "default",
    maincolor: "#1c1c1c",
    secondcolor: "#2e2e2e",
    foregroundcolor: "#d4c98f",
    detailcolor: "#3d3d3d",
    baseCoords: { x: 0, y: 0, z: 0 },
    endCoords: { x: 0, y: 0, z: 0 },
    mapImage: "",
  },
  Fantastic4: {
    logo: "fantastic4",
    maincolor: "#0e4a80",
    secondcolor: "#fff",
    foregroundcolor: "#01050b",
    detailcolor: "#158fd4",
    baseCoords: { x: 0, y: 0, z: 0 },
    endCoords: { x: 0, y: 0, z: 0 },
    mapImage: "",
  },
  Excel: {
    logo: "default",
    maincolor: "#1c1c1c",
    secondcolor: "#2e2e2e",
    foregroundcolor: "#d4c98f",
    detailcolor: "#3d3d3d",
    baseCoords: { x: 0, y: 0, z: 0 },
    endCoords: { x: 0, y: 0, z: 0 },
    mapImage: "",
  },
  TBD: {
    logo: "default",
    maincolor: "#1c1c1c",
    secondcolor: "#2e2e2e",
    foregroundcolor: "#d4c98f",
    detailcolor: "#3d3d3d",
    baseCoords: { x: 0, y: 0, z: 0 },
    endCoords: { x: 0, y: 0, z: 0 },
    mapImage: "",
  },
};

const uniqueTeams = [...new Set(AllMembers.map((m) => m.team))];

export const AllTeams: Team[] = uniqueTeams.map((teamName) => {
  const data = teamData[teamName] || {
    logo: "default",
    maincolor: "#444",
    secondcolor: "#888",
    foregroundcolor: "#666",
    detailcolor: "#222",
    mapImage: "/maps/default_map.png",
  };

  return {
    uid: teamName.toLowerCase().replace(/\s+/g, "_"),
    name: teamName,
    members: AllMembers.filter((member) => member.team === teamName),
    ...data,
  };
});
