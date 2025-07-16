"use client";

import { Team } from "@/interfaces";
import Image from "next/image";

type Props = {
  team: Team;
  selected?: boolean;
  handleSelectIcon?: () => void;
};

export const TeamPreview = ({ team, selected, handleSelectIcon }: Props) => {
  return (
    <div
      title={team.name}
      className={`rounded transition-all duration-300 cursor-pointer flex items-center justify-center ${selected ? "border-2 border-primary animate-banner-wave" : ""}`}
      style={{ width: "64px", height: "125px" }}
      onClick={handleSelectIcon}
    >
      {team.name === "TBD" ? (
        <div className={"flex items-center justify-center border-2 border-gray-800"} style={{width: "64px", height: "125px"}}>
          TBD
        </div>
      ) : (

      
          <Image src={`/images/teams/banners/${team.logo}_banner.png`} alt={`Banner de ${team.name}`} width={64} height={125} style={{ width: "64px", height: "125px", objectFit: "cover" }} className={`rounded`} />


     
      )}
    </div>
  );
};
