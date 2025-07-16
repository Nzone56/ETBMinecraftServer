import React from "react";
import { TeamPreview } from "./TeamPreview";
import { AllTeams } from "./data/teams";
import { useItemSelector } from "@/hooks/useItemSelector";
import { Team } from "@/interfaces";
import { TeamInfo } from "./TeamInfo";

export const TeamsView = () => {

  const { currentIndex, setCurrentIndex, handlePrevious, handleNext, prevItem, animatingOut, showNew } = useItemSelector<Team>({itemsArray: AllTeams});

  return (
    <>
      <div className="px-6 flex items-center justify-center w-full max-w-[1200px] mb-8">
        <div className="flex items-center justify-start gap-2 overflow-x-auto overflow-y-hidden p-3 thumbnail-scroll-preview">
          {AllTeams.map((team, index) => (
            <TeamPreview
              key={index}
              team={team}
              size={64}
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
          <div className={`min-w-[300px] w-[300px] relative flex flex-col items-center mx-2`}>
            {/* Animación de salida */}
            {animatingOut && prevItem && (
              <div className="animate-spin-up-out w-full">
                <TeamInfo team={prevItem} />
              </div>
            )}

            {/* Nueva entrada */}
            {showNew && prevItem && (
              <div className="animate-fall-in w-full">
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
