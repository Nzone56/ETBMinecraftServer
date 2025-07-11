"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

export const Banner = () => {
  const serverOnline = false;
  const serverIP = "mc.etb.gg";
  const launchDate = new Date("2025-07-25T19:00:00");

  const [timeLeft, setTimeLeft] = useState("--d --h --m --s");

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

      setTimeLeft(`${days}d ${hours.toString().padStart(2, "0")}h ${minutes.toString().padStart(2, "0")}m ${seconds.toString().padStart(2, "0")}s`);
    }, 1000);

    return () => clearInterval(interval);
    //eslint-disable-next-line
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(serverIP);
    alert("¡IP copiada al portapapeles!");
  };

  return (
    <section id="status" className="relative h-[100vh] w-[100%] flex items-center justify-center text-center text-foreground overflow-hidden">
      {/* Background video */}
      <video className="absolute top-0 left-0 w-full h-full object-cover" src={"/videos/background.mp4"} autoPlay muted loop playsInline />

      {/* Opacity layer */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6 ">
        <p className="absolute flex flex-col right-0 rotate-45 animate-bump">
          PROMOCIONADO POR:
          <strong> NICO NICO NII</strong>
        </p>
        <h1 className="text-5xl md:text-6xl font-minecraft text-primary mb-6">Minecraft ETB Server 4</h1>
        <p className="text-lg md:text-xl mb-4">Tiempo de Espera:</p>

        {/* Counter */}
        <div className="text-3xl md:text-5xl font-bold text-primary mb-6">{timeLeft}</div>

        {/* Status */}
        <div className={`inline-block px-4 py-2 mb-4 rounded text-sm font-bold ${serverOnline ? "bg-green-600/80 text-white" : "bg-red-600/80 text-white"}`}>
          {serverOnline ? "🟢 Servidor en línea" : "🔴 Servidor fuera de línea"}
        </div>

        {/* IP */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <code className="flex items-center gap-2 bg-background/60 border border-tertiary pl-3 rounded text-sm font-mono">
            {serverIP} <Image src="/icons/copy.svg" className="bg-black py-1 cursor-pointer" alt="Logo" width={20} height={20} onClick={copyToClipboard} />
          </code>
        </div>
      </div>
    </section>
  );
};
