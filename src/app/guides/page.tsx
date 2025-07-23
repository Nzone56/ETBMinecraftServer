"use client"
import { useItemSelector } from "@/hooks/useItemSelector";
import { Guide } from "@/interfaces";
import { allGuides } from "./data";

export default function Guides() {
    const {
      currentIndex,
      setCurrentIndex,
      prevItem,
      animatingOut,
      showNew
    } = useItemSelector<Guide>({ itemsArray: allGuides, duration: 0 });
  
    return (
      <section className="min-h-screen animate-fade-in max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center text-primary mb-8">Guías de METBS6</h2>
  
        {/* Emoji selector */}
        <div className="flex justify-center gap-3 overflow-x-auto p-2 mb-8">
          {allGuides.map((guide, idx) => (
            <div
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`flex items-center align-items-center cursor-pointer  px-3 py-2 rounded-xl border ${currentIndex === idx ? "bg-primary text-background" : "bg-secondary text-primary"}`}
            >
              <span className="text-3xl">{guide.emoji}</span>
           
            </div>
          ))}
        </div>
  
        {/* Carousel content */}
        <div className="flex items-center justify-center gap-4">
       
  
          <div className="w-full max-w-4xl">
            {animatingOut && prevItem && <div className="animate-fade-out">{prevItem.content}</div>}
            {showNew && prevItem && <div className="animate-fade-in">{prevItem.content}</div>}
          </div>
  
         
        </div>
      </section>
    );
  };
