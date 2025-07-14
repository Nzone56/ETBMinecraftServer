import { Team } from "@/interfaces";
import Image from "next/image";
import React from "react";
import { AllMembers } from "./data/members";

interface Props {
  team: Team
}
export const TeamInfo = ({ team }: Props) => {
  return (
    <div className="flex flex-col w-full max-w-4xl" style={{backgroundColor: team.maincolor, color: team.foregroundcolor}}>
      <div className="text-center text-xl px-2 border-4" style={{backgroundColor: team.secondcolor, borderColor: team.detailcolor}}>
          {team.name}
      </div>
      <div className="flex items-center justify-between gap-8 p-8">
      {team.name === "TBD" ? (
        <div className={"flex items-center justify-center border-2 border-gray-800"} style={{minWidth: "64px", minHeight: "125px"}}>
          TBD
        </div>
      ) : (
        <Image src={`/images/teams/banners/${team.logo}_banner.png`} alt={`Banner de ${team.name}`} width={64} height={125} className={`rounded`} />
      )} 
        <div className="flex items-center justify-center flex-wrap">
          {
            AllMembers.filter(member => member.team === team.name).map(teamMember => (
              <div key={teamMember.uid} className="flex items-center flex-col p-2">
                <Image  src={`https://mc-heads.net/combo/${teamMember.uid}?size=64`} alt={`Avatar de ${teamMember.name}`} width={64} height={64} className={`rounded`} />
                <span>{teamMember.name}</span>
              </div>
            ))
          }
        </div>
      </div>

    </div>
  );
};
