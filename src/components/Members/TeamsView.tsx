import React from "react";
import { TeamPreview } from "./TeamPreview";
import { AllTeams } from "./data/teams";
import { useItemSelector } from "@/hooks/useItemSelector";
import { Team } from "@/interfaces";
import { TeamInfo } from "./TeamInfo";

export const TeamsView = () => {
  const { currentIndex, setCurrentIndex, prevItem, animatingOut, showNew } = useItemSelector<Team>({ itemsArray: AllTeams, duration: 600 });

  return (
    <>
      {/* IMAGE WITH SELECTOR */}
      <div className="px-6 flex items-center justify-center w-full max-w-[1200px] mb-8">
        <div className="flex items-center justify-start gap-2 overflow-x-auto overflow-y-hidden p-3 thumbnail-scroll-preview">
          {AllTeams.map((team, index) => (
            <TeamPreview key={index} team={team} selected={currentIndex === index} handleSelectIcon={() => setCurrentIndex(index)} />
          ))}
        </div>
      </div>
      {/* Current Team viewer */}
      <div className="flex items-center justify-center max-w-[1200px] w-full flex-grow-1 flex-col lg:flex-row">
        <div className="flex items-center justify-center w-full max-w-4xl">
          <div className="min-w-[300px] w-[500px] min-h-[865px] relative flex flex-col items-center mx-2 overflow-hidden">
            {/* Out */}
            {animatingOut && prevItem && (
              <div className="absolute inset-0 animate-wipe-out-left">
                <TeamInfo team={prevItem} />
              </div>
            )}

            {/* In */}
            {showNew && prevItem && (
              <div className="absolute inset-0 animate-wipe-in-right">
                <TeamInfo team={prevItem} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
