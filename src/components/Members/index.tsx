"use client";

import React, { useState } from "react";
import { SkinViewer3D } from "./SkinViewer";
import { AllMembers } from "./Variables";

export const Members = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentParticipant = AllMembers[currentIndex];

  const handlePrevious = () => setCurrentIndex((prev) => (prev === 0 ? AllMembers.length - 1 : prev - 1));

  const handleNext = () => setCurrentIndex((prev) => (prev === AllMembers.length - 1 ? 0 : prev + 1));

  return (
    <section id="members" className="min-h-[50vh] w-full bg-background text-foreground py-32 px-4 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-minecraft text-primary mb-10 text-center">Miembros del servidor</h2>
      <div className="flex items-center justify-between max-w-[1200px] w-full flex-grow-1">
        <div className="flex items-center gap-4 w-full max-w-4xl">
          {/* Previous button */}
          <button onClick={handlePrevious} className="text-3xl cursor-pointer" aria-label="Anterior">
            ◀️
          </button>

          {/* Participant name */}
          {/* Current participant viewer */}
          <div className="flex flex-col items-center">
            <SkinViewer3D username={currentParticipant.name} />
          </div>

          {/* Next button */}
          <button onClick={handleNext} className="text-3xl cursor-pointer" aria-label="Siguiente">
            ▶️
          </button>
        </div>
        <div className="flex flex-col w-full max-w-4xl px-4 ">
          <span className="mt-2 text-2xl font-bold text-center">{currentParticipant.name}</span>

          <div className="mt-4 text-lg space-y-1">
            <p>
              <strong>Rol:</strong> {currentParticipant.role}
            </p>
            <p>
              <strong>Equipo:</strong> {currentParticipant.team}
            </p>
          </div>

          <ul className="mt-3 text-lg text-left list-disc list-inside">
            {currentParticipant.highlights.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
