import React from "react";
import { TeamPreview } from "./TeamPreview";
import { AllTeams } from "./data/teams";
import { useItemSelector } from "@/hooks/useItemSelector";
import { Team } from "@/interfaces";
import { TeamInfo } from "./TeamInfo";

export const TeamsView = () => {

  const { currentIndex, setCurrentIndex, handlePrevious, handleNext, prevItem, animatingOut, showNew } = useItemSelector<Team>({itemsArray: AllTeams, duration: 600});

  return (
    <>
      <div className="px-6 flex items-center justify-center w-full max-w-[1200px] mb-8">
        <div className="flex items-center justify-start gap-2 overflow-x-auto overflow-y-hidden p-3 thumbnail-scroll-preview">
          {AllTeams.map((team, index) => (
            <TeamPreview
              key={index}
              team={team}
              selected={currentIndex === index}
              handleSelectIcon={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center max-w-[1200px] w-full flex-grow-1 flex-col lg:flex-row">
        {/* IMAGE WITH SELECTOR */}
        <div className="flex items-center justify-center w-full max-w-4xl">
          {/* Previous button */}
          <button onClick={handlePrevious} className="text-3xl cursor-pointer" aria-label="Anterior">
            ◀️
          </button>

          {/* Member name */}
          {/* Current Member viewer */}
          <div className="min-w-[300px] w-[300px] min-h-[365px] relative flex flex-col items-center mx-2 overflow-hidden">
            {/* Salida (cortando de izquierda a derecha) */}
            {animatingOut && prevItem && (
              <div className="absolute inset-0 animate-wipe-out-left">
                <TeamInfo team={prevItem} />
              </div>
            )}

            {/* Entrada (apareciendo desde la izquierda) */}
            {showNew && prevItem && (
              <div className="absolute inset-0 animate-wipe-in-right">
                <TeamInfo team={prevItem} />
              </div>
            )}
          </div>

          {/* Next button */}
          <button onClick={handleNext} className="text-3xl cursor-pointer" aria-label="Siguiente">
            ▶️
          </button>
        </div>
        {/* SELECTED MEMBER INFO */}
      </div>
    </>
  )
};
