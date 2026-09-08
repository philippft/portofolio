"use client";

import { useEffect, useRef } from "react";

export function AmbientGlowOrbs() {
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);
  const orb3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const xOffset = (clientX / window.innerWidth - 0.5) * 35;
      const yOffset = (clientY / window.innerHeight - 0.5) * 35;

      if (orb1Ref.current) {
        orb1Ref.current.style.transform = `translate(${xOffset * 0.7}px, ${yOffset * 0.7}px)`;
      }
      if (orb2Ref.current) {
        orb2Ref.current.style.transform = `translate(${-xOffset * 1.0}px, ${-yOffset * 1.0}px)`;
      }
      if (orb3Ref.current) {
        orb3Ref.current.style.transform = `translate(${xOffset * 0.4}px, ${yOffset * 0.4}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <div
        ref={orb1Ref}
        className="ambient-glow w-[600px] h-[600px] -top-32 -left-32 bg-[#F37338]/[0.05] dark:bg-[#F37338]/[0.06] animate-pulse pointer-events-none"
        style={{ transform: "translate(0px, 0px)" }}
      />
      <div
        ref={orb2Ref}
        className="ambient-glow w-[700px] h-[700px] top-[40vh] -right-48 bg-[#E5D7C7]/[0.2] dark:bg-[#F37338]/[0.035] pointer-events-none"
        style={{ transform: "translate(0px, 0px)" }}
      />
      <div
        ref={orb3Ref}
        className="ambient-glow w-[550px] h-[550px] bottom-10 left-1/4 bg-[#D97706]/[0.04] dark:bg-[#D97706]/[0.035] pointer-events-none"
        style={{ transform: "translate(0px, 0px)" }}
      />
    </>
  );
}
