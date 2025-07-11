"use client";

import React, { useEffect, useState } from "react";
import { SkinViewer3D } from "./SkinViewer3D";
import { AllMembers } from "./Variables";
import { Member } from "@/interfaces";

export const Members = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentParticipant: Member = AllMembers[currentIndex];

  // ANIMATION STATES
  const [prevParticipant, setPrevParticipant] = useState<Member>({name: '', role: '', team: '', highlights: []});
  const [animatingOut, setAnimatingOut] = useState(false);
  const [showNew, setShowNew] = useState(false);

  const handlePrevious = () => setCurrentIndex((prev) => (prev === 0 ? AllMembers.length - 1 : prev - 1));

  const handleNext = () => setCurrentIndex((prev) => (prev === AllMembers.length - 1 ? 0 : prev + 1));

  useEffect(() => {
    if (!currentParticipant) return;

    if (prevParticipant) {
      // Out animation start 
      setAnimatingOut(true);
      setShowNew(false);

      setTimeout(() => {
        // Change char when animation ends
        setPrevParticipant(currentParticipant);
        setAnimatingOut(false);
        setShowNew(true);
      }, 2000); // spin-up-out duration
    } else {
      // Primer render
      setPrevParticipant(currentParticipant);
      setShowNew(true);
    }
    //eslint-disable-next-line
  }, [currentParticipant]);

  return (
    <section id="members" className="min-h-[100vh] w-full bg-background text-foreground py-32 px-4 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-minecraft text-primary mb-10 text-center">Miembros del servidor</h2>
      <div className="flex items-center justify-center lg:justify-between max-w-[1200px] w-full flex-grow-1 flex-col lg:flex-row">
        {/* IMAGE WITH SELECTOR */}
        <div className="flex items-center justify-center w-full max-w-4xl">
          {/* Previous button */}
          <button onClick={handlePrevious} className="text-3xl cursor-pointer" aria-label="Anterior">
            ◀️
          </button>

          {/* Participant name */}
          {/* Current participant viewer */}
          <div className={`relative flex flex-col items-center`}>
            {/* Animación de salida */}
            {animatingOut && prevParticipant && (
              <div className="animate-spin-up-out">
                <SkinViewer3D username={prevParticipant.name} />
              </div>
            )}

            {/* Nueva entrada */}
            {showNew && prevParticipant && (
              <div className="animate-fall-in">
                <SkinViewer3D username={prevParticipant.name} />
              </div>
            )}
          </div>

          {/* Next button */}
          <button onClick={handleNext} className="text-3xl cursor-pointer" aria-label="Siguiente">
            ▶️
          </button>
        </div> 
        {/* SELECTED MEMBER INFO */}
        <div className="flex flex-col w-full max-w-4xl px-4 ">
          <span className="mt-2 text-2xl font-bold text-center">{prevParticipant.name}</span>

          <div className="mt-4 text-lg space-y-1 text-center lg:text-start">
            <p>
              <strong>Rol:</strong> {prevParticipant.role}
            </p>
            <p>
              <strong>Equipo:</strong> {prevParticipant.team}
            </p>
          </div>

          <ul className="mt-3 text-lg text-center lg:text-left list-disc list-inside">
            {prevParticipant.highlights.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
