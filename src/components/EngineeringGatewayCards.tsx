"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface GatewayCard {
  id: string;
  title: string;
  description: string;
  tags: string[];
  schematic: "ai" | "backend" | "frontend";
  href: string;
}

const gatewayCards: GatewayCard[] = [
  {
    id: "ai",
    title: "AI & Data Engineering",
    description: "Predictive modeling & robust data pipelines.",
    tags: ["Text Classification", "Sound Classification", "Predictive Analysis"],
    schematic: "ai",
    href: "/toolkit",
  },
  {
    id: "backend",
    title: "Back-End Architecture",
    description: "Scalable server-side logic & secure databases.",
    tags: ["RESTful APIs", "Database Design", "System Authentication"],
    schematic: "backend",
    href: "/toolkit",
  },
  {
    id: "frontend",
    title: "Front-End Interfaces",
    description: "Responsive, intuitive, and data-driven experiences.",
    tags: ["Responsive UI", "State Management", "Interactive Design"],
    schematic: "frontend",
    href: "/toolkit",
  },
];

// Compact schematic visual per card
function CardSchematic({ type }: { type: GatewayCard["schematic"] }) {
  if (type === "ai") {
    return (
      <svg
        className="w-full h-full text-signal-orange opacity-80"
        fill="none"
        viewBox="0 0 160 56"
        aria-hidden="true"
      >
        <path
          d="M0 36 C 28 10, 50 50, 80 26 C 110 6, 132 44, 160 20"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="2"
        />
        <path
          d="M0 44 C 36 56, 70 14, 100 40 C 128 58, 140 20, 160 36"
          stroke="#A8A29E"
          strokeDasharray="3 3"
          strokeWidth="1"
        />
        <circle cx="80" cy="26" fill="#F37338" r="3.5" />
        <circle cx="130" cy="44" fill="#F5F5F4" r="2.5" opacity="0.6" />
      </svg>
    );
  }
  if (type === "backend") {
    return (
      <div className="flex items-center gap-2 justify-center w-full h-full">
        <div className="px-2 py-1 rounded-md bg-white/10 border border-white/15 text-white font-mono text-[9px]">
          REST API
        </div>
        <div className="w-4 h-[1px] bg-signal-orange" />
        <div className="px-2 py-1 rounded-md bg-signal-orange/20 border border-signal-orange text-signal-orange font-mono text-[9px]">
          GATEWAY
        </div>
        <div className="w-4 h-[1px] bg-signal-orange" />
        <div className="px-2 py-1 rounded-md bg-white/10 border border-white/15 text-white font-mono text-[9px]">
          DB ORM
        </div>
      </div>
    );
  }
  // frontend
  return (
    <div className="grid grid-cols-3 gap-1.5 w-full max-w-[140px] mx-auto h-full items-center">
      <div className="h-8 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center text-signal-orange font-mono text-[8px]">
        REACT
      </div>
      <div className="h-8 rounded-lg bg-white/10 border border-signal-orange/40 flex items-center justify-center text-white font-mono text-[8px]">
        TWC
      </div>
      <div className="h-8 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center text-signal-orange font-mono text-[8px]">
        UI
      </div>
    </div>
  );
}

export function EngineeringGatewayCards() {
  return (
    /* Mobile-only: shown below md, hidden on desktop (desktop uses the marquee) */
    <div className="md:hidden w-full">
      {/* Section label */}
      <div className="flex items-center gap-2 mb-4">
        <span className="w-2 h-2 rounded-full bg-signal-orange" />
        <span className="font-mono text-[10px] uppercase tracking-widest text-primary dark:text-stone-300 font-semibold">
          • ENGINEERING DISCIPLINE // TOOLKIT
        </span>
      </div>

      {/* Swipeable horizontal scroll carousel */}
      <div
        className="flex gap-3.5 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth hide-scrollbar"
        role="list"
        aria-label="Engineering Foundations — swipeable cards"
      >
        {gatewayCards.map((card) => (
          <Link
            key={card.id}
            href={card.href}
            role="listitem"
            aria-label={`${card.title} — View details`}
            className="gateway-card group shrink-0 snap-start w-[220px] xs:w-[240px] bg-surface/90 dark:bg-stone-900/70 rounded-card border border-outline-variant/60 dark:border-stone-800/90 flex flex-col overflow-hidden shadow-[0px_12px_28px_rgba(0,0,0,0.05)] dark:shadow-[0px_12px_28px_rgba(0,0,0,0.3)] focus:outline-none focus-visible:ring-2 focus-visible:ring-signal-orange"
          >
            {/* Mini schematic preview */}
            <div className="w-full h-[68px] bg-[#141413] dark:bg-[#110F0E] relative overflow-hidden flex items-center justify-center px-3 border-b border-outline-variant/20 dark:border-stone-800/60">
              <div className="absolute inset-0 bg-gradient-to-br from-signal-orange/10 via-transparent to-black/60 pointer-events-none" />
              <div className="relative z-10 w-full h-full flex items-center">
                <CardSchematic type={card.schematic} />
              </div>
            </div>

            {/* Card body */}
            <div className="flex flex-col flex-1 px-4 pt-3 pb-3.5 gap-2.5">
              {/* Title */}
              <h3 className="font-serif text-[17px] text-primary dark:text-stone-100 font-semibold tracking-tight leading-snug">
                {card.title}
              </h3>

              {/* Description */}
              <p className="font-sans text-[12.5px] text-on-surface-variant dark:text-stone-400 leading-relaxed font-[450] flex-1">
                {card.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {card.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-full bg-surface-container dark:bg-stone-800/70 text-primary dark:text-stone-300 font-mono text-[10px] border border-outline-variant/30 dark:border-stone-700/40"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Clickability cue */}
              <div className="flex items-center justify-end gap-1 pt-1 border-t border-outline-variant/30 dark:border-stone-800/60">
                <span className="font-mono text-[10px] text-on-surface-variant dark:text-stone-500 group-hover:text-signal-orange transition-colors duration-200">
                  View Details
                </span>
                <ArrowRight className="w-3 h-3 text-on-surface-variant dark:text-stone-500 group-hover:text-signal-orange group-hover:translate-x-0.5 transition-all duration-200" />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Scroll hint dots */}
      <div className="flex justify-center gap-1.5 mt-1" aria-hidden="true">
        {gatewayCards.map((card) => (
          <span
            key={card.id}
            className="w-1.5 h-1.5 rounded-full bg-outline-variant dark:bg-stone-700 first:bg-signal-orange first:dark:bg-signal-orange"
          />
        ))}
      </div>
    </div>
  );
}
