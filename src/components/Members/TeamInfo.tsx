import { Team } from "@/interfaces";
import Image from "next/image";
import React from "react";
import { AllMembers } from "./data/members";
import { SkinViewerFace } from "./SkinViewerFace";

interface Props {
  team: Team;
}

export const TeamInfo = ({ team }: Props) => {
  return (
    <div className="flex flex-col w-full max-w-4xl rounded-lg shadow-md overflow-hidden" style={{ backgroundColor: team.maincolor, color: team.foregroundcolor }}>
      <div
        className="text-center text-xl px-2 py-2 border-4 font-bold"
        style={{
          backgroundColor: team.secondcolor,
          borderColor: team.detailcolor,
        }}
      >
        {team.name}
      </div>

      <div className="flex flex-row items-center justify-between gap-8 p-8" >
        {/* Banner */}
        {team.name !== "Qin State" ? (
          <div className="sm:mx-4 flex items-center justify-center border-2 border-gray-800" style={{ minWidth: "64px", minHeight: "125px" }} title={team.name}>
            {team.name.slice(0,3)}
          </div>
        ) : (
          <Image src={`/images/teams/banners/${team.logo}_banner.png`} alt={`Banner de ${team.name}`} width={64} height={125} className="sm:mx-4" title={team.name}/>
        )}

        {/* Info */}
        <div className="flex flex-col flex-1 space-y-4">
          {/* Coordenadas */}
          <div className="text-sm">
            <p className="font-semibold">📍 Coordenadas:</p>
            {team.baseCoords && (
              <p>
                <strong>Base:</strong> X: {team.baseCoords.x}, Y: {team.baseCoords.y}, Z: {team.baseCoords.z}
              </p>
            )}
            {team.endCoords && (
              <p>
                <strong>End:</strong> X: {team.endCoords.x}, Y: {team.endCoords.y}, Z: {team.endCoords.z}
              </p>
            )}
          </div>

          {/* Members */}
          <div>
            <span className="font-semibold ">👥 Miembros:</span>
            <div className="flex items-center justify-start gap-4 mt-2 overflow-x-auto w-[150px] sm:w-[300px] thumbnail-scroll-faces-team">
              {AllMembers.filter((member) => member.team === team.name).map((teamMember, index) => (
                <div key={teamMember.uid} className="flex flex-col items-center">
                  {/* <div title={teamMember.name} className={`cursor-pointer flex items-center justify-center`} style={{ minWidth: "64px", minHeight: "64px" }}>
                    <Image src={`https://mc-heads.net/combo/${teamMember.uid}?size=64`} alt={`Avatar de ${teamMember.name}`} width={64} height={64} />
                  </div> */}
                  <SkinViewerFace key={index} uid={teamMember.uid} username={teamMember.name} size={64} />
                  <span className="text-xs mt-1">{teamMember.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Map */}
      {team.mapImage ? (
        <div className="w-full border-t-2 p-2 text-center" style={{ borderColor: team.detailcolor }}>
          <iframe src={team.mapImage} title={`Mapa de ${team.name}`} width="100%" height="500" className="rounded border w-full" allowFullScreen />
          <p className="mt-2 text-sm italic text-gray-500">Vista en vivo desde Dynmap</p>
        </div>
      ) : (
        <div className="w-full border-t-2 p-2 text-center" style={{ borderColor: team.detailcolor }}>
          <Image src="/images/map/default.webp" alt={`Mapa de ${team.name}`} width={300} height={500} className="w-full h-auto object-cover rounded border" />
          <p className="mt-2 text-sm italic text-gray-500">Mapa de ejemplo</p>
        </div>
      )}
    </div>
  );
};
