"use client"
import React from "react";
import { newsData } from "./data";
import { useItemSelector } from "@/hooks/useItemSelector";
import { NewsEntry } from "@/interfaces";

export default function News() {
  const { currentIndex, handleNext, handlePrevious, prevItem, animatingOut, showNew } = useItemSelector<NewsEntry>({ itemsArray: newsData, duration: 300 });

  return (
    <section className="animate-fade-in max-w-4xl mx-auto p-6 min-h-screen">
      <h2 className="text-3xl font-bold mb-8 text-center text-primary">📰 Minecraft Features desde 1.20 hasta 1.21.8</h2>
      {/* Index */}
      <p className="text-center text-sm mt-4 text-muted-foreground">
        {currentIndex + 1} / {newsData.length}
      </p>

       {/* Buttons */}
       <div className="flex justify-center gap-6 my-6">
        <button onClick={handlePrevious} className="cursor-pointer bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/80 transition">
          ← Anterior
        </button>
        <button onClick={handleNext} className="cursor-pointer bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/80 transition">
          Siguiente →
        </button>
      </div>


      <div className="relative overflow-hidden">
        <div className={`transition-opacity duration-300 ${animatingOut ? "opacity-0" : "opacity-100"}`}>
          {showNew && prevItem && (
            <div className="bg-secondary rounded-2xl shadow-lg p-5">
              <h3 className="text-xl font-bold text-primary mb-2">{prevItem.version}</h3>

              {prevItem.video && (
                <div className="mb-4 aspect-video">
                  <iframe
                    className="rounded-xl w-full h-full"
                    src={prevItem.video}
                    title="YouTube video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}

              <div className="space-y-3">
                {prevItem.features.map((section, i) => (
                  <div key={i}>
                    <h4 className="font-semibold text-primary">{section.title}</h4>
                    <ul className="list-disc list-inside text-sm text-foreground">
                      {section.items.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
