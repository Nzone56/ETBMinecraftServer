import React from "react";
import { SkinViewerFace } from "./SkinViewerFace";
import { getRoleColor, getTeamColor } from "./utils";

import { SkinViewer3D } from "./SkinViewer3D";
import { AllMembers } from "./data/members";
import { useItemSelector } from "@/hooks/useItemSelector";
import { Member } from "@/interfaces";

export const MembersView = () => {
  const { currentIndex, setCurrentIndex, handlePrevious, handleNext, prevItem, animatingOut, showNew } = useItemSelector<Member>({ itemsArray: AllMembers });

  return (
    <>
      {/* FACE MEMBER SELECTOR */}
      <div className="px-6 flex items-center justify-center w-full max-w-[1200px] mb-8">
        <div className="flex items-center justify-start gap-2 overflow-x-auto overflow-y-hidden p-2 thumbnail-scroll-preview">
          {AllMembers.map((member, index) => (
            <SkinViewerFace
              key={index}
              uid={member.uid}
              username={member.name}
              size={64}
              selected={currentIndex === index}
              handleSelectIcon={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center lg:justify-between max-w-[1200px] w-full flex-grow-1 flex-col lg:flex-row">
        {/* IMAGE WITH SELECTOR */}
        <div className="flex items-center justify-center w-full max-w-4xl">
          {/* Previous button */}
          <button onClick={handlePrevious} className="text-3xl cursor-pointer" aria-label="Anterior">
            ◀️
          </button>

          {/* Member name */}
          {/* Current Member viewer */}
          <div className={`w-[300px] h-[300px] relative flex flex-col items-center`}>
            {/* Animación de salida */}
            {animatingOut && prevItem && (
              <div className="animate-spin-up-out">
                <SkinViewer3D username={prevItem.name} />
              </div>
            )}

            {/* Nueva entrada */}
            {showNew && prevItem && (
              <div className="animate-fall-in">
                <SkinViewer3D username={prevItem.name} />
              </div>
            )}
          </div>

          {/* Next button */}
          <button onClick={handleNext} className="text-3xl cursor-pointer" aria-label="Siguiente">
            ▶️
          </button>
        </div>
        {/* SELECTED MEMBER INFO */}
        {prevItem && (
          <div className="flex flex-col w-full max-w-4xl px-4 ">
            <span className="mt-2 text-2xl font-bold text-center">{prevItem?.name}</span>

            <div className="mt-4 text-lg space-y-1 text-center lg:text-start">
              <p>
                <strong>Rol:</strong> <span className={getRoleColor(prevItem.role)}>{prevItem.role}</span>
              </p>
              <p>
                <strong>Equipo:</strong> <span className={getTeamColor(prevItem.team)}>{prevItem.team}</span>
              </p>
            </div>

            <ul className="mt-3 text-lg text-center lg:text-left list-disc list-inside">
              {prevItem.highlights.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};
