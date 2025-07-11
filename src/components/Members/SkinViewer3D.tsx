"use client";

import { useEffect, useRef } from "react";
import { SkinViewer, WalkingAnimation } from "skinview3d";

type Props = {
  username: string;
};

export const SkinViewer3D = ({ username }: Props) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const viewerRef = useRef<SkinViewer | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    const viewer = new SkinViewer({
      width: 300,
      height: 300,
      skin: `https://mc-heads.net/skin/${username}`,
    });

    container.appendChild(viewer.canvas);

    viewer.animation = new WalkingAnimation();
    viewer.controls.enableZoom = false;

    viewerRef.current = viewer;

    return () => {
      viewerRef.current?.dispose();
      viewerRef.current = null;
      container.innerHTML = ""; 
    };
  }, [username]);

  return <div ref={containerRef} className="rounded overflow-hidden" />;
};
