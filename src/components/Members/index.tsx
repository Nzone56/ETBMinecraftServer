"use client";

import React, { useState } from "react";
import { MembersView } from "./MembersView";
import { TeamsView } from "./TeamsView";

export const Members = () => {
  const [view, setView] = useState("members");


  return (
    <section id="members" className="min-h-[100vh] w-full bg-background text-foreground py-32 px-4 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-minecraft text-primary mb-10 text-center">
      {
        view === "members" 
          ? "Miembros del Servidor"
          : "Equipos del servidor"
      }  
      </h2>
      <div className="flex gap-2 mb-6">
        <button
          className={`px-4 py-2 rounded cursor-pointer ${view === "members" ? "bg-primary text-black" : "bg-secondary text-foreground"}`}
          onClick={() => setView("members")}
        >
          Miembros
        </button>
        <button
          className={`px-4 py-2 rounded cursor-pointer ${view === "teams" ? "bg-primary text-black" : "bg-secondary text-foreground"}`}
          onClick={() => setView("teams")}
        >
          Equipos
        </button>
      </div>
      {
        view === "members"
          ? <MembersView />
          : <TeamsView />
      }
    </section>
  );
};
