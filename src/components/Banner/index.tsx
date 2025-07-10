'use client';

import React, { useEffect, useState } from "react";

export const Banner = () => {
  const serverOnline = false; 
  const serverIP = "mc.etb.gg";
  const launchDate = new Date("2025-07-25T18:00:00");

  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = launchDate.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft("¡Ya está abierto!");
        clearInterval(interval);
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft(
        `${days}d ${hours.toString().padStart(2, "0")}h ${minutes
          .toString()
          .padStart(2, "0")}m ${seconds.toString().padStart(2, "0")}s`
      );
    }, 1000);

    return () => clearInterval(interval);
    //eslint-disable-next-line
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(serverIP);
    alert("¡IP copiada al portapapeles!");
  };

  return (
    <section
      id="inicio"
      className="relative h-[100vh] w-[100%] flex items-center justify-center text-center text-foreground overflow-hidden"
    >
      {/* Fondo animado */}
      <div className="absolute inset-0 z-0 bg-[url('/bg-animado.gif')] bg-cover bg-center opacity-20" />

      {/* Contenido */}
      <div className="relative z-10 max-w-3xl px-6">
        <h1 className="text-5xl md:text-6xl font-minecraft text-primary mb-6">
          🧱 Minecraft ETB Server
        </h1>
        <p className="text-lg md:text-xl mb-4">
          Explora, construye y conquista con tus amigos!
        </p>

        {/* Estado del servidor */}
        <div
          className={`inline-block px-4 py-2 rounded text-sm font-bold ${
            serverOnline
              ? "bg-green-600/80 text-white"
              : "bg-red-600/80 text-white"
          }`}
        >
          {serverOnline ? "🟢 Servidor en línea" : "🔴 Servidor fuera de línea"}
        </div>

                  {/* 🔥 Contador grande */}
        <div className="text-3xl md:text-5xl font-bold text-primary mb-6">
          {timeLeft}
        </div>

        {/* IP + copiar */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <code className="bg-background/60 border border-tertiary px-3 py-1 rounded text-sm font-mono">
            {serverIP}
          </code>
          <button
            onClick={copyToClipboard}
            className="text-xs px-3 py-1 rounded bg-primary text-black hover:bg-cyan-300 transition-colors"
          >
            Copiar IP
          </button>
        </div>
      </div>
    </section>
  );
};